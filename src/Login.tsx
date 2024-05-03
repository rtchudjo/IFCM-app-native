import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';
import Toast from 'react-native-root-toast';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { login } from './firebase/firebaseLogin';
import { setUser } from './redux/actions/authActions';
import {  getBranchesData, getDonationData } from './firebase/firebaseData';
import { setBranchesData } from './redux/reducers/branchesSlice';
import { setDonationData } from './redux/reducers/donationSlice';

function Login({navigation}) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true); 
  const [isFocusedEmail, setIsFocusedEmail] = useState(false); 
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const validateEmail = (text:string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(text);
    setIsValidEmail(isValid);
    setEmail(text);
    console.log(isValid,"valid",text,"pass")

  };

  const optionsFail = {
    duration:1500,
    position: 200,
    animation:true,
    shadow: true,
    backgroundColor: "#ff0000",
    opacity: 0.75,
    shadowColor: "grey",
    textColor: "white",
    delay: 150,
    keyboardAvoiding:true,
  }
  const optionsSuccess = {
    duration:1500,
    position: 200,
    animation:true,
    shadow: true,
    backgroundColor: "#26ff00",
        opacity: 0.75,
    shadowColor: "grey",
    textColor: "white",
    delay: 150,
    keyboardAvoiding:true,
  }

   const handleLogin = async (email:string, password:string) => {

    if(!email || !password){
      return(
        <View style={styles.ToastUpFail}>
        {Toast.show(t('login.needs'),optionsFail)}
      </View>
      )
    
    // You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
   
    }
    if(!isValidEmail){
      return(
        <View style={styles.ToastUpFail}>
        {Toast.show(t('login.format'),optionsFail)}
      </View>
      )
    }
    if (isValidEmail && email && password) 
    { 
      console.log('ok')
      console.log(email,"email",password,"passzord")
      setLoading(true);
        try{  
          const user = await login(email,password);
          
          if (user){
            console.log("user",user);
            
            const userForDispatch = {
              uid:user.uid,
              email:user.email,
              displayName:user.displayName,
              lastName:user.lastname,
              name:user.firstname,
              age: user.age,
              branch:  user.branch,
              country:  user.country,
              gender: user.gender,
              photoURL: user.photoURL,

            }  
            dispatch(setUser(userForDispatch));
            const branches = await getBranchesData();
            const donation = await getDonationData();
            dispatch(setBranchesData(branches));
            dispatch(setDonationData(donation));
            console.log(donation ,"don")
            setTimeout(() => {
             navigation.navigate('Home');
            }, 15000);
          }
        }
        catch(error){
          setLoading(false);
            if(error.code === "auth/user-not-found" || 
            error.code === "auth/wrong-password"
            ){
              return(
                <View style={styles.ToastUpFail}>
                {Toast.show(t('login.wrong'),optionsFail)}
              </View>
              )
            }
            else if(error.code === "auth/too-many-requests"){
              return(
                <View style={styles.ToastUpFail}>
                {Toast.show(t('login.toomany'),optionsFail)}
              </View>
              )
            }
            else if( error.code === "auth/invalid-email"){
              return(
                <View style={styles.ToastUpFail}>
                {Toast.show(t('login.invalid'),optionsFail)}
              </View>
              )
            }
            else {
              return(
                <View style={styles.ToastUpFail}>
                {Toast.show(t('login.others') + error.message,optionsFail)}
              </View>
              )
            }
          console.log("error:",error)
        }
        finally{
          setLoading(false);
        
      }
    }
    
   
   
  
    // Ici, vous pouvez ajouter la logique d'authentification avec Firebase ou toute autre méthode que vous utilisez.
    // Par exemple, vous pouvez appeler une fonction de connexion Firebase ici.
  
    // Si l'authentification réussit, vous pouvez rediriger l'utilisateur vers la page appropriée.
  }
  
  return (
 <SafeAreaView style={{    
  flex:1,
  backgroundColor:"white"
}}>
<View style={styles.container}>
  <View style={styles.containerLogo}>
    <Image
          source={require('../assets/img/ifcm_logo.png')} 
          style={styles.logo}
        />
  </View>
    
  

      <View
      style={[
        styles.containerInput2,styles.containerInput,
       
      ]}
    >
        <Icon name="user" size={20} color="gray" style={styles.icon} />
        <TextInput
         style={[
          styles.input,
        ]}
          placeholder={t('login.email')}
          onChangeText={validateEmail}
          onFocus={() => setIsFocusedEmail(true)}
          onBlur={() => setIsFocusedEmail(false)}
          />
      </View>
      <View style={[styles.containerInput2,
     
    
      ]}>
       
        <TextInput   style={[styles.input,styles.inputPass]}
          placeholder={t('login.password')}
          secureTextEntry={!showPassword}
          onChangeText={(text) => setPassword(text)}
          onFocus={() => setIsFocusedPassword(true)}
          onBlur={() => setIsFocusedPassword(false)}
          >
                  

         
        </TextInput>
        
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icon
            name={showPassword ? "eye" : "eye-slash"}
            size={20}
            color="gray"
            style={styles.icon}
          />
        </TouchableOpacity>
        
      </View>

    
     <View style={styles.containerBtn}>
     <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          handleLogin(email, password)
        }}
      >
        <Text style={styles.buttonText}>{t('login.login')}</Text>
      </TouchableOpacity>
     </View>
      <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
        <Text style={styles.orangetext}>{t('login.forgot')}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.textnormal}>{t('login.noaccount')} <Text  style={styles.orangetext}>{t('login.signup')} </Text></Text>
      </TouchableOpacity>
    </View>
 </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  headerText:{
  },
  ToastUpFail:{
    width:350,

  },
  containerInput2:{
   
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#d1d0d0',
      borderRadius: 5,
      marginBottom: 15,
     
    
  },
  textnormal:{
    fontSize:16,
    fontWeight:'400',
  },
  logo: {
    width: 304, 
    height: 100, 
    marginBottom: 16,
    marginTop:30
  },
  input: {
    height: 40,
   
    marginBottom:12  ,
    paddingTop:12,
    paddingHorizontal: 10,
    width:"70%"
  },
  orangetext: {
    color: '#FE7D4E',
    fontSize:16,
    fontWeight:'400',
    marginTop: 8,
    marginBottom:20,
  },
  containerLogo:{

  },
  containerInput:{
    marginTop:35,

  },
  input1:{
    marginBottom:20,

  },
  input2:{
    marginBottom:35,

  },
  textInput:{
    marginTop:25,
    marginRight:"35%",
  },
  loginButton: {
    backgroundColor:'#FE7D4E', 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    borderRadius: 5, 
  
  },
  buttonText: {
    color: 'white', 
    fontSize: 18, 
    fontWeight: 'bold', 
    textAlign: 'center', 
  },
  containerBtn:{
    marginBottom:20,
    marginTop:10,
    width:"50%"
  },
  icon:{
    padding:10,
    margin:10,
    marginTop:4,
    paddingTop:12,
    color: '#FE7D4E',
  
  },
  inputPass:{
    width:"69%"
  },
  inputInvalid: {
  
    borderColor: 'red',
  },
  inputValid: {
  
    borderColor: 'green',
  },
});

export default Login;
