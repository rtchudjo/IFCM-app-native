import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Exemple avec FontAwesome
import { useTranslation } from "react-i18next";
import Toast from 'react-native-root-toast';
import { reset } from './firebase/firebaseLogin';



function Forgot({navigation}) {
  const { t } = useTranslation();
  const [isValidEmail, setIsValidEmail] = useState(true); 
  const [isFocusedEmail, setIsFocusedEmail] = useState(false); 
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

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
  
  const validateEmail = (text:string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(text);
    setIsValidEmail(isValid);
    setEmail(text);
    console.log(isValid,"valid",text,"pass")

  };
  const handleReset = async (email:string) => {
    if(isValidEmail){
        setLoading(true);
        try{  
          const resetEmail = await reset(email);
          return (
            <View style={styles.ToastUpFail}>
            {Toast.show(t('forgotten.look'),optionsSuccess)}
           </View>
            );
         
        }
        catch(error){

        
          if(error.code === "auth/missing-email"){
            return(
              <View style={styles.ToastUpFail}>
            </View>
            )
          }
          if(error.code === "auth/invalid-email"){
            return(
              <View style={styles.ToastUpFail}>
            {Toast.show(t('forgotten.invalid'),optionsFail)}
            </View>
            )

          }
          if(error.code === "auth/user-not-found"){
            return(
              <View style={styles.ToastUpFail}>
            {Toast.show(t('forgotten.unk'),optionsFail)}
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
  <View style={[styles.containerInput2,styles.containerInput]}>
        <Icon name="user" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder={t('forgotten.email')}
          // Gérez la valeur de l'entrée email ici
          onChangeText={validateEmail}
          onFocus={() => setIsFocusedEmail(true)}
          onBlur={() => setIsFocusedEmail(false)}
        />
      </View>
    
     <View style={styles.containerBtn}>
     <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          // Logique de connexion ici
          // Par exemple, vérification des données et redirection
          handleReset(email)
        }}
      >
        <Text style={styles.buttonText}> {t('forgotten.reset')}</Text>
      </TouchableOpacity>
     </View>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.textnormal}>{t('forgotten.noaccount')}<Text  style={styles.orangetext}>{t('forgotten.signup')} </Text></Text>
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
    width:"60%"

  },
  icon:{
    padding:10,
    margin:10,
    marginTop:4,
    paddingTop:12,
    color: '#FE7D4E',

  },
});


export default Forgot;
