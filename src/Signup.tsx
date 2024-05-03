import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Exemple avec FontAwesome
import { useTranslation } from "react-i18next";
import Toast from 'react-native-root-toast';
import { signup } from './firebase/firebaseLogin';
import { setUser } from './redux/actions/authActions';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView } from 'react-native';
import { createUser } from './prisma/userSignup';



function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordconfirm, setpasswordConfirm] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true); 
  const [identityPassword, setIdentityPassword] = useState(false);
  const [isSame, setisSame] = useState(false);
  const navigation = useNavigation();

  const [isFocusedEmail, setIsFocusedEmail] = useState(false); 
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [progress, setProgress] = useState('0%');
  const [message, setMessage] = useState('None');
  const [message2, setMessage2] = useState('None');
  const MAX_LEN = 15,
  MIN_LEN = 6,
  PASS_LABELS = ["Too Short", "Weak", "Normal", "Strong", "Secure"];
 
const  checkPasswordIsSame = (passwordValue: string) => {
 
    setpasswordConfirm(passwordValue)
   
    if(passwordValue !== password){
      console.log('nomatch')
      setMessage2("Weak");
      setisSame(false)
    }
     if(passwordValue === password){
      console.log('match')
      setMessage2("Ok");
      setisSame(true)
    }
     if(!passwordValue){
      setMessage2("None");
        console.log('clean')
        
      
    }
}


  const checkPasswordStrength = (passwordValue: string) => {
    const strengthChecks = {
      length: false,
      hasUpperCase: false,
      hasLowerCase: false,
      hasDigit: false,
      hasSpecialChar: false,
    };

    strengthChecks.length = passwordValue.length >= 8;
    strengthChecks.hasUpperCase = /[A-Z]+/.test(passwordValue);
    strengthChecks.hasLowerCase = /[a-z]+/.test(passwordValue);
    strengthChecks.hasDigit = /[0-9]+/.test(passwordValue);
    strengthChecks.hasSpecialChar = /[^A-Za-z0-9]+/.test(passwordValue);

    const verifiedList = Object.values(strengthChecks).filter((value) => value);

    const strength = (() => {
      if (verifiedList.length >= 4) {
        setIdentityPassword(true)
        return 'Strong';
      } else if (verifiedList.length >= 2) {
        setIdentityPassword(true)
        return 'Medium';
      } else if (verifiedList.length >= 1) {
        setIdentityPassword(false)
        return 'Weak';
      } else {
        setIdentityPassword(false)
        return 'None';
      }
    })();
     
    
    setPassword(passwordValue);
    console.log(passwordconfirm,'word')
    console.log(passwordValue,'password')
    setProgress(`${(verifiedList.length / 5) * 100}%`);
    setMessage(strength);

    console.log('verifiedList: ', `${(verifiedList.length / 5) * 100}%`);
  };

  const getActiveColor = (type: string) => {
    if (type === 'Strong') return '#8BC926';
    if (type === 'Medium') return '#FEBD01';
    if (type === 'Weak') return '#FF0054';
    if (type === 'None') return '#ffffff';
    return '#ffffff';
  };
  const getActiveColor2 = (type: string) => {
    if (type === 'Ok') return '#8BC926';
    if (type === 'Weak') return '#FF0054';
    if (type === 'None') return '#ffffff';
    return '#ffffff';
  };
 
    


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
    backgroundColor: "#2bff00",
    opacity: 0.75,
    shadowColor: "grey",
    textColor: "white",
    delay: 150,
    keyboardAvoiding:true,
  }

  const handleCreate = async (email:string,password:string,prenom:string,nom:string,passwordconfirm:string) => {
    if(!isValidEmail){
      {console.log(isValidEmail,"toast msg")}
      return (
      <View style={styles.ToastUpFail}>
        {Toast.show(t('signup.format'),optionsFail)}
      </View>
      );
    }
     if((!email) || (!password) || (!prenom) || (!nom) || (!passwordconfirm)){
      console.log(email,password,prenom,nom,passwordconfirm)
      return (
      <View style={styles.ToastUpFail}>
        {Toast.show(t('signup.champs'),optionsFail)}
      </View>
      );
    }
     if(!identityPassword){
      return (
      <View style={styles.ToastUpFail}>
      {Toast.show(t('signup.week'),optionsFail)}
     </View>
      );
    }
     if (password !== passwordconfirm) {
      return (
      <View style={styles.ToastUpFail}>
      {Toast.show(t('signup.same'),optionsFail)}
     </View>
      );
    }
    if(isValidEmail && password && prenom && nom && passwordconfirm && email &&identityPassword){
      console.log(isValidEmail,password,prenom,nom,passwordconfirm,email)
      setLoading(true);
      try{
      const user = await signup(email,password,nom,prenom);
       //   const user = await createUser(email,nom,prenom)
        console.log("user front",user)
        if (user){
          console.log("user",user);

          const userForDispatch = {
            uid:user.uid,
            email:user.email,
            displayName:prenom + " " + nom,
            lastName:nom,
            name:prenom,
            age: null,
            branch:  null,
            country:  null,
            gender: null,
            photoURL: null,
          }

          dispatch(setUser(userForDispatch));
          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          });
            setTimeout(() => {
            
            }, 15000); 
        }
      }
      catch(error){
        setLoading(false);
        console.log(error.code)

        if(error.code === "auth/email-already-in-use"){
          return(
            <View style={styles.ToastUpFail}>
          {Toast.show(t('signup.alredy'),optionsFail)}
          </View>
          )
        }
        if(error.code === "auth/weak-password"){
          return(
            <View style={styles.ToastUpFail}>
                 {Toast.show(t('signup.week'),optionsFail)}
            </View>
          )
        }
        if(error.code === "auth/too-many-requests"){
          return(
            <View style={styles.ToastUpFail}>
            {Toast.show(t('signup.toomany'),optionsFail)}
          </View>
          )
      }
      
    }


  }
  }
  return (
 <SafeAreaView style={{    
  flex:1,
  backgroundColor:"white"
}}>
<View style={styles.container}>
  <View style={styles.containerLogo}>
    <Image
          source={require('../assets/img/ifcm_logo.png')} // Remplacez par le chemin de votre image de logo
          style={styles.logo}
        />
  </View>
  
  <View style={[styles.containerInputUser,styles.containerInputUserText]}>
        <Icon name="user" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder={t('signup.firstname')}
          onChangeText={(text) => setPrenom(text)}
          />
      </View>
      <View style={[styles.containerInputUser,styles.containerInputUserText]}>
        <Icon name="user" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder={t('signup.lastname')}
          onChangeText={(text) => setNom(text)}
          />
    </View>
  <View style={[styles.containerInput2,styles.containerInputUserText]}>
        <Icon name="user" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder={t('signup.email')}
          onChangeText={validateEmail}
          onFocus={() => setIsFocusedEmail(true)}
          onBlur={() => setIsFocusedEmail(false)}
        />
      </View>
      <View style={[styles.containerInput2]}>
       
       <TextInput   style={[styles.input,styles.inputPass]}
         placeholder={t('signup.password')}
         secureTextEntry={!showPassword}
         onChangeText={(text) => checkPasswordStrength(text)}
         value={password}
         
         >
       </TextInput>
      
       <View
          style={{
            borderWidth:1,
            borderColor:getActiveColor(message),
           width:5,
           height: 50,

            backgroundColor: getActiveColor(message),
          }}
        >
       

        </View>
       <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
         <Icon
           name={showPassword ? "eye" : "eye-slash"}
           size={20}
           color="gray"
           style={styles.icon}
         />
       </TouchableOpacity>
       
     </View>
    
     <View style={styles.containerInput2}>
       
       <TextInput   style={[styles.input,styles.inputPass2]}
         placeholder={t('signup.confirmpassword')}
         secureTextEntry={!showPassword}
         onChangeText={(text) => checkPasswordIsSame(text)}
        value={passwordconfirm}
         >
           
        
       </TextInput>
       <View
          style={{
            
           width:5,
           height: 50,
            right:7,
          backgroundColor: getActiveColor2(message2),
          }}
        >
       

        </View>

         <Icon
           name={"lock"}
           size={20}
           color="gray"
           style={styles.icon}
         />
      
       
     </View>

     <View style={styles.containerBtn}>
     <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          // Logique de connexion ici
          // Par exemple, vérification des données et redirection
          handleCreate(email,password,prenom,nom,passwordconfirm)  
        
        }}
      >
        <Text style={styles.buttonText}>{t('signup.create')}</Text>
      </TouchableOpacity>
     </View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.textnormal}>{t('signup.account')} <Text  style={styles.orangetext}>{t('signup.login')} </Text></Text>
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
  ToastUpFail:{
    width:350,

  },
  containerInputUser:{
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d1d0d0',

    borderRadius: 5,
  
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
  containerInputUserText:{
    marginTop:15,
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
    width:"68%"
  },
  inputPass2:{
    width:"70%"
  },
});


export default Signup;
