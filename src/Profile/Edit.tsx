import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { authUser, firebaseApp } from '../firebase/firebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions/authActions'; // Importez l'action de déconnexion depuis authActions.js
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

function Edit() {
 
  const auth = getAuth(firebaseApp);
  
  const user = useSelector((state) => state.auth); // Accédez à l'état de l'utilisateur depuis le store
  const { t } = useTranslation();
  const navigation = useNavigation();

console.log(user,"redux user");



  return (
   <View
   style={{
    backgroundColor:"white", flex:1,
    
   }}
   >
    <View style={styles.containText}>
    <Text style={styles.TextGen}>
    {t('edit.subtitle')} 
      </Text>
    </View>

    <View style={styles.containerImg}>

          <View>
            <Image source={require('../../assets/img/1200px-Unknown_person.jpeg')} style={[styles.persomImg]} />
          </View>

          <View style={[styles.displayFlex]}>
            <Text style={[styles.nameText,]}>
              {user.displayName}
            </Text>
            <Text style={[styles.displayFlex, styles.emailProfile]}>
              {user.email}
            </Text>
            <TouchableOpacity onPress={() => navigation.push("Modify")}>
            <Text style={[styles.displayFlex, styles.editProfile]}>
            {t('profile.edit')}
            </Text>
            </TouchableOpacity>
            
          </View>
        </View>
        <View style={styles.containText2}>
    <Text style={styles.TextGen}>
      {t('edit.text')} 
      </Text>
        </View>

      <View style={[styles.containDetails]}>

       <View style={[styles.detailsLign]}>
        <Image source={require('../../assets/icons/worldwide.png')} style={[styles.icons]} />
        <Text style={[styles.textDetails]}>
          {t('edit.country')} :
        </Text>
        <Text style={[styles.userDetails]}>
          {user.country}
        </Text>
       </View>

       <View style={[styles.detailsLign]}>
        <Image source={require('../../assets/icons/office.png')} style={[styles.icons]} />
        <Text style={[styles.textDetails]}>
          {t('edit.branch')} :
        </Text>
        <Text style={[styles.userDetails]}>
          {user.branch}
        </Text>
       </View>

       <View style={[styles.detailsLign]}>
        <Image source={require('../../assets/icons/gender.png')} style={[styles.icons]} />
        <Text style={[styles.textDetails]}>
          {t('edit.gender')} :
        </Text>
        <Text style={[styles.userDetails]}>
          {user.country}
        </Text>
       </View>

       <View style={[styles.detailsLign]}>
        <Image source={require('../../assets/icons/age-range.png')} style={[styles.icons]} />
        <Text style={[styles.textDetails]}>
          {t('edit.age')} :
        </Text>
        <Text style={[styles.userDetails]}>
          {user.country}
        </Text>
       </View>




      </View>

   </View>
  );
}

export default Edit;
const styles = StyleSheet.create({
  TextGen: {
    padding: 16,
    marginTop:25,
    color: "#8687A8",
    fontSize:20,
    fontWeight:"bold"
  },
  containText:{
    paddingBottom:15
  },
  containText2:{

  },
  containerImg: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%"
  },
  displayFlex: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  nameText: {
    color: "#2c406e",
    fontSize: 24,
    fontWeight: "600",
    marginLeft: 12
  },
  emailProfile: {
    color: "#8687a8",
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 12
  },
  editProfile: {
    color: "#fe7d4e",
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 12
  },
  persomImg: {
    width: 86,
    height: 86,
    borderRadius: 50,
  },
  icons:{
    width: 35,
    height: 35,
  },
  containDetails:{
    padding:20
  },
  detailsLign:{
    display:"flex",
    flexDirection:"row",
    alignContent:"center",
    alignItems:"center",
    padding:8,
    marginBottom:10,
   
  },
  textDetails:{
    fontSize:16,
    fontWeight:"400",
    color:"#8687a8",
    paddingLeft:25,
  },
  userDetails:{
    fontSize:16,
    fontWeight:"400",
    color:"#8687a8",
    paddingLeft:5

  }
});