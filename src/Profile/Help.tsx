import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

import { authUser, firebaseApp } from '../firebase/firebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions/authActions'; // Importez l'action de déconnexion depuis authActions.js
import { useTranslation } from 'react-i18next';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import  SimpleLineIcons  from 'react-native-vector-icons/SimpleLineIcons';
import * as MailComposer from 'expo-mail-composer';
import Toast from 'react-native-root-toast';

function Help() {
 
  const auth = getAuth(firebaseApp);
  const { t } = useTranslation();

  const user = useSelector((state) => state.auth); // Accédez à l'état de l'utilisateur depuis le store
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

console.log(user,"redux user");

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
const handleSend = async () => {
  console.log("emil")
  console.log(name,email,subject,message)
  console.log(email)
  const isAvailable = await MailComposer.isAvailableAsync();
  if (name && email && subject && message){
    if (isAvailable) {
      let email = "contact@elyotech.fr";
      const postEmail = {
        subject: name + subject,
        body: message,
        recipients: [email],
      };
  
   await MailComposer.composeAsync(postEmail);
      Toast.show(t('help.success'),optionsSuccess)
  }
  else{
    console.log("erreur")
    Toast.show(t('help.error'),optionsFail)
  }
 
  } 
}
const onchangeName = (text:string) => {
    
  setName(text)
};
const onchangeEmail = (text:string) => {
    
  setEmail(text)
};

const onchangeSubject = (text:string) => {
    
  setSubject(text)
};

const onchangeMessage = (text:string) => {
    
  setMessage(text)
};

  return (
   <View
   style={{
    backgroundColor:"white", flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    alignContent:"center",
   }}
   >
    <View style={styles.containtexTHaut}>
    <Text style={styles.textHAut}>
    {t('help.subtitle')} 
    </Text>

    </View>
    

    <View
      style={[
        styles.containerInput,
       
      ]}
    >
              <Icon name="user" size={20} color="gray" style={styles.icon} />
        <TextInput
         style={[
          styles.input,
        ]}
          placeholder={t('help.name')}
          onChangeText={onchangeName}
          />
      </View>

    <View
      style={[
        styles.containerInput,
       
      ]}
    >
              <Icon name="user" size={20} color="gray" style={styles.icon} />
        <TextInput
         style={[
          styles.input,
        ]}
          placeholder={t('help.email')}
          onChangeText={onchangeEmail}
          />
      </View>

      <View
      style={[
        styles.containerInput,
       
      ]}
    >
              <Icon name="pencil" size={20} color="gray" style={styles.icon} />
              <TextInput
        editable
        multiline={true}
        numberOfLines={4}
        maxLength={40}
        style={Platform.select({
          ios: {
           width:"80%",
           paddingTop: 0
  
          },
          android: {
            width:"80%",

          },
        })
        }
        placeholder={t('help.subject')}
        onChangeText={onchangeSubject}

      />
          
        
          
      </View>
      <View
      style={[
        styles.containerInput,
       
      ]}
    >
              <Icon name="envelope-open" size={20} color="gray" style={styles.icon} />
              <TextInput
        editable
        multiline={true}
        numberOfLines={40}
        maxLength={400}
        style={Platform.select({
          ios: {
           width:"80%",
           height: 120,
      alignItems: 'center',
      alignContent:"center",
      paddingTop: 50
  
          },
          android: {
            width:"80%",
            height: 120,
            alignItems: 'center',
            alignContent:"center",
          },
        })
        }
        placeholder={t('help.message')}
        onChangeText={onchangeMessage}

      />
      </View>

      <View style={[styles.containerBtn,Platform.select({
      ios: {
        marginBottom: 150

      },
      android: {
        
      },
    })]}>
        <TouchableHighlight onPress={handleSend}>
        <View style={[styles.containertextBtn,]}>
          <Text style={[styles.textBtn]}>{t('help.send')}</Text>
        </View>
         </TouchableHighlight>
        </View>

   </View>
  );
}

export default Help;
const styles = StyleSheet.create({
  textHAut: {
    textAlign:"center",
    padding: 16,
    marginTop:25,
    color: "#fe7d4e",
    fontSize:20,
    fontWeight:"bold"
  },
  containerInput:{
    flexDirection: 'row',
    alignItems: 'center',
    alignContent:"center",
    borderWidth: 1,
    borderColor: '#d1d0d0',
    borderRadius: 5,
    marginBottom: 20,
   
  },
  input:{
    height: 40,
    
 
    width:"80%"
    },
    icon:{
      padding:10,
      margin:10,
      marginTop:4,
      paddingTop:12,
      color: '#FE7D4E',
    
    },
    inputArea:{
      height: 120,
      alignItems: 'center',
      alignContent:"center",
      
 
    width:"80%"
    },
    containtexTHaut:{
      paddingBottom:25
    },
    containerBtn:{
      flex: 5 ,
  
    height:100
    },
    containertextBtn:{
      backgroundColor: '#FE7D4E',
      textAlign:"center",
      padding:20,
      borderRadius:18,
      width:300
    },
    textBtn:{
      fontSize:20,
      fontWeight:"500",
      textAlign:"center",
      color:"white",
    },

});