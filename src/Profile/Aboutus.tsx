import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View,SafeAreaView } from 'react-native';

import { authUser, firebaseApp } from '../firebase/firebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions/authActions'; // Importez l'action de déconnexion depuis authActions.js
import { useTranslation } from 'react-i18next';

function Aboutus() {
 
  const auth = getAuth(firebaseApp);
  
  const user = useSelector((state) => state.auth); // Accédez à l'état de l'utilisateur depuis le store
  const { t } = useTranslation();

console.log(user,"redux user");



  return (
    <SafeAreaView
    style={{
     backgroundColor:"white", flex:1,
     flexDirection: 'column',
     alignItems: 'center',
     alignContent:"center",
    }}
    >
      <ScrollView>
     <View style={styles.containtexTHaut}>
    <Text style={styles.textHAut}>
      {t('aboutus.who')} 
    </Text>
    </View>

    <View style={styles.containertextMilieu}>
    <Text style={styles.textMilieu}>
      {t('aboutus.whotext')} 
    </Text>
    </View>
   
    
    <View style={styles.containtexTHaut}>
    <Text style={styles.textHAut}>
      {t('aboutus.vision')} 
    </Text>
    </View>

    <View style={styles.containertextMilieu}>
    <Text style={styles.textMilieu}>
      {t('aboutus.visiontext')} 
    </Text>
    </View>

    <View style={styles.containtexTHaut}>
    <Text style={styles.textHAut}>
      {t('aboutus.mission')} 
    </Text>
    </View>

    <View style={styles.containertextMilieu}>
    <Text style={styles.textMilieu}>
      {t('aboutus.missiontext')} 
    </Text>
    </View>

    <View style={styles.containtexTHaut}>
    <Text style={styles.textHAut}>
      {t('aboutus.stand')} 
    </Text>
    </View>

    <View style={styles.containertextMilieu}>
    <Text style={styles.textMilieu}>
      {t('aboutus.stand1')} 
    </Text>
    <Text style={styles.textMilieu}>
      {t('aboutus.stand2')} 
    </Text>
    <Text style={styles.textMilieu}>
      {t('aboutus.stand3')} 
    </Text>
    <Text style={styles.textMilieu}>
      {t('aboutus.stand4')} 
    </Text>
    <Text style={styles.textMilieu}>
      {t('aboutus.stand5')} 
    </Text>
    <Text style={styles.textMilieu}>
      {t('aboutus.stand6')} 
    </Text>
    <Text style={styles.textMilieu}>
      {t('aboutus.stand7')} 
    </Text>
    <Text style={styles.textMilieu}>
      {t('aboutus.stand8')} 
    </Text>
    <Text style={[styles.textMilieu,styles.paddBot]}>
      {t('aboutus.stand9')} 
    </Text>
    </View>
    </ScrollView>
   </SafeAreaView>
  );
}

export default Aboutus;
const styles = StyleSheet.create({
  textHAut: {
    textAlign:"center",
    padding: 16,
    marginTop:25,
    color: "#fe7d4e",
    fontSize:20,
    fontWeight:"bold"
  },
  containtexTHaut:{
    paddingBottom:5
  },
  containerBtn:{
    flex: 5 ,

  height:100
  },
  containertextMilieu:{
    textAlign:"center",
    paddingLeft: 40,
    paddingRight: 40,
  },
  textMilieu:{
    textAlign:"center",
    fontSize:16,
    fontWeight:"400",
    letterSpacing:1
  },
  paddBot:{
    paddingBottom:25
  },
});