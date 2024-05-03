import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View,SafeAreaView, Image } from 'react-native';

import { authUser, firebaseApp } from '../firebase/firebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions/authActions'; // Importez l'action de déconnexion depuis authActions.js
import { useTranslation } from 'react-i18next';
import { Link } from '@react-navigation/native';

function Politics() {
 
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

        <View style={styles.containNormal}>
          <Text style={styles.textNormal}>
          {t('legal.date')} 
          </Text>
        </View>
        <View style={styles.containNormal}>
          <Text style={styles.textNormal}>
          {t('legal.ifcm1')} 
          </Text>
        </View>
        <View style={styles.containNormal}>
          <Text style={styles.textNormal}>
          {t('legal.ifcm2')} 
          </Text>
        </View>
        <View style={styles.containNormal}>
          <Text style={styles.textNormal}>
          {t('legal.ifcm3')} 
          </Text>
        </View>

        <View style={styles.containtexTHaut}>
    <Text style={styles.textHAut}>
      {t('legal.info')} 
    </Text>
    </View>

    <View style={styles.containNormal}>
          <Text style={styles.textNormal}>
          {t('legal.infotext')} 
          </Text>
        </View>

        <View style={[styles.containBold,styles.pad5,styles.center]}>
          <Text style={styles.textBold}>
          {t('legal.typedata')} 
          </Text>
        </View>
        <View style={[styles.containBold,styles.pad5]}>
          <Text style={styles.textBold}>
          {t('legal.personaldata')} 
          </Text>
        </View>

        <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.textdata')} 
    </Text>
    </View>

    <View style={styles.containertextMilieu}>
    <Text style={styles.textMilieu}>
      {t('legal.email')} 
    </Text>
    </View>
    <View style={styles.containertextMilieu}>
    <Text style={styles.textMilieu}>
      {t('legal.first')} 
    </Text>
    </View>
    <View style={styles.containertextMilieu}>
    <Text style={styles.textMilieu}>
      {t('legal.phone')} 
    </Text>
    </View>
    <View style={styles.containertextMilieu}>
    <Text style={styles.textMilieu}>
      {t('legal.adress')} 
    </Text>
    </View>
    <View style={styles.containertextMilieu}>
    <Text style={styles.textMilieu}>
      {t('legal.cookie')} 
    </Text>
    </View>
    <View style={[styles.containBold,styles.pad5]}>
          <Text style={styles.textBold}>
          {t('legal.usagedata')} 
          </Text>
        </View>
        <View style={styles.containertextMilieu}>
    <Text style={styles.textMilieu}>
      {t('legal.usagedatatext')} 
    </Text>
    </View>
    <View style={[styles.containBold,styles.pad5]}>
          <Text style={styles.textBold}>
          {t('legal.tacking')} 
          </Text>
        </View>
        <View style={[styles.containertextMilieu,styles.pad5]}>
              <Text style={styles.textMilieu}>
      {t('legal.trackingtext')} 
    </Text>
    </View>
    <View style={[styles.containertextMilieu,styles.pad5]}>
          <Text style={styles.textMilieu}>
      {t('legal.cookiestext')} 
    </Text>
    </View>
    <View style={[styles.containertextMilieu,styles.pad5]}>
          <Text style={styles.textMilieu}>
      {t('legal.cookiestext1')} 
    </Text>
    </View>
    <View style={[styles.containertextMilieu,styles.pad5]}>
          <Text style={styles.textMilieu}>
      {t('legal.exemplecookie')} 
    </Text>
    </View>

    <View style={styles.containBold}>
          <Text style={styles.textBold}>
          {t('legal.session')} 
          </Text>
          <Text style={styles.textMilieu}>
      {t('legal.session1')} 
    </Text>
        </View>

        <View style={styles.containBold}>
          <Text style={styles.textBold}>
          {t('legal.preference')} 
          </Text>
          <Text style={styles.textMilieu}>
      {t('legal.preference1')} 
    </Text>
        </View>
        <View style={styles.containBold}>
          <Text style={styles.textBold}>
          {t('legal.security')} 
          </Text>
          <Text style={styles.textMilieu}>
      {t('legal.security1')} 
    </Text>
        </View>

        <View style={styles.containtexTHaut}>
    <Text style={styles.textHAut}>
      {t('legal.usedata')} 
    </Text>
    </View>

    <View style={styles.containertextMilieu}>
    <Text style={styles.textMilieu}>
      {t('legal.usedatasub')} 
    </Text>
    </View>


    <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.usedatatext1')} 
    </Text>
    </View>

    <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.usedatatext2')} 
    </Text>
    </View>
    <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.usedatatext3')} 
    </Text>
    </View>
    <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.usedatatext4')} 
    </Text>
    </View>
    <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.usedatatext5')} 
    </Text>
    </View>
    <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.usedatatext6')} 
    </Text>
    </View>
    <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.usedatatext7')} 
    </Text>
    </View>

    <View style={styles.containtexTHaut}>
    <Text style={styles.textHAut}>
      {t('legal.transferdata')} 
    </Text>
    </View>

    <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.transferdatatext')} 
    </Text>
    </View>
    <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.transferdatatext1')} 
    </Text>
    </View>
    <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.transferdatatext2')} 
    </Text>
    </View>
    <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.transferdatatext3')} 
    </Text>
    </View>
    
    <View style={styles.containtexTHaut}>
    <Text style={styles.textHAut}>
      {t('legal.disclosure')} 
    </Text>
    </View>

    <View style={[styles.containBold]}>
          <Text style={styles.textBold}>
          {t('legal.legalrequir')} 
          </Text>
        </View>

        <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.ifcmlist')} 
    </Text>
    </View>

    <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.ifcmlist1')} 
    </Text>
    </View>
    <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.ifcmlist2')} 
    </Text>
    </View>
    <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.ifcmlist3')} 
    </Text>
    </View>
    <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.ifcmlist4')} 
    </Text>
    </View>
    <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.ifcmlist5')} 
    </Text>
    </View>

    <View style={styles.containtexTHaut}>
    <Text style={styles.textHAut}>
      {t('legal.securitydata')} 
    </Text>
    </View>

    <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.securitydatatext')} 
    </Text>
    </View>

    <View style={styles.containtexTHaut}>
    <Text style={styles.textHAut}>
      {t('legal.serviceprovider')} 
    </Text>
    </View>

    <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.serviceprovidertext')} 
    </Text>
    </View>

    <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.serviceprovidertext2')} 
    </Text>
    </View>

    <View style={[styles.containBold,styles.center]}>
          <Text style={styles.textBold}>
          {t('legal.analytics')} 
          </Text>
        </View>

        <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.analyticstext')} 
    </Text>
    </View>

    <View style={[styles.containBold,styles.pad5]}>
          <Text style={styles.textBold}>
          {t('legal.google')} 
          </Text>
        </View>

        <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.googletext1')} 
    </Text>
    </View>

    <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.googletext2')} 
    </Text>
    </View>

    <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.googletext3')} 
    </Text>
    </View>

    <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.googletext4')} 
    </Text>
    </View>

    <View style={styles.containtexTHaut}>
    <Text style={styles.textHAut}>
      {t('legal.othersite')} 
    </Text>
    </View>

    <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.othersitetext1')} 
    </Text>
    </View>
    <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.othersitetext2')} 
    </Text>
    </View>

    <View style={styles.containtexTHaut}>
    <Text style={styles.textHAut}>
      {t('legal.childrenprivacy')} 
    </Text>
    </View>

    <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.childrenprivacytext1')} 
    </Text>
    </View>
    <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.childrenprivacytext2')} 
    </Text>
    </View>

    <View style={styles.containtexTHaut}>
    <Text style={styles.textHAut}>
      {t('legal.privacypolicy')} 
    </Text>
    </View>

    <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.privacypolicytext1')} 
    </Text>
    </View>
    <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.privacypolicytext2')} 
    </Text>
    </View>
    <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.privacypolicytext3')} 
    </Text>
    </View>

    <View style={styles.containtexTHaut}>
    <Text style={styles.textHAut}>
      {t('legal.contact')} 
    </Text>
    </View>

    <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.contactext')} 
    </Text>
    </View>
    <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={[styles.textMilieu,styles.orange]}>
    support@impactforchristsa.com 
       </Text>
    </View>

    <View style={styles.containtexTHaut}>
    <Text style={styles.textHAut}>
      {t('legal.copyright')} 
    </Text>
    </View>
    <View style={[styles.containertextMilieu,styles.pad5]}>
    <Text style={styles.textMilieu}>
      {t('legal.copyrightext')} 
    </Text>
    </View>

    <View style={[styles.containImg,styles.pad5]}>
    <Image style={[styles.img]}  source={require('../../assets/img/logo_elyotech_120x120.png')}         />

    </View>

    <View style={styles.containertextMilieu}>
    <Text style={styles.textMilieu}>
      {t('legal.emailtext')} 
    </Text>
    <Text style={[styles.textMilieu,styles.orange]}>
    contact@elyotech.fr
       </Text>
    </View>
   

    <View style={styles.containEnd}>
    <Text style={styles.textGrey}>
    Copyright © 2023 ElyoTech
    </Text>
    
    </View>

    </ScrollView>
   </SafeAreaView>
  );
}

export default Politics;
const styles = StyleSheet.create({
  textHAut: {
    textAlign:"center",
    padding: 16,
    marginTop:25,
    color: "#fe7d4e",
    fontSize:26,
    fontWeight:"500"
  },
  containtexTHaut:{
    paddingBottom:5
  },
  orange:{
    color: "#fe7d4e",
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
    letterSpacing:0.5
  },
  paddBot:{
    paddingBottom:25
  },
  containNormal:{

    paddingTop:20,
    paddingLeft:20,
    paddingRight:20
  },
  textNormal:{
    fontWeight:"400",
    fontSize:16,
    letterSpacing:0.2
  },
  containBold:{
    padding:5
  },
  textBold:{
    fontWeight:"500",
    fontSize:24,
    lineHeight:29
  },
  textBold2:{
    fontWeight:"700",
    fontSize:16,
  
  },
  pad5:{
    paddingBottom:10
  },
  center:{
    textAlign:"center",
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    paddingLeft:"25%"
  },
  containImg:{
    display:"flex",
    textAlign:"center",
    alignItems:"center"
  },
  containEnd:{
    padding:10,
    paddingBottom:15,
    marginBottom:45
  },
  textGrey:{
color:'#6e6e6e85',
  }
});