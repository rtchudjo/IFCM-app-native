import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextBase,ScrollView, SafeAreaView } from 'react-native';
import Swiper from 'react-native-swiper';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { stylesG } from './WelcomeStyle';
import { useSelector } from 'react-redux';

import { useTranslation, Trans } from "react-i18next";
import * as Localization from 'expo-localization';
import { i18next } from '../i18n'
import { translations } from '../assets/locales/fr-en/translation';
import { useDispatch } from 'react-redux';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { getAuth } from 'firebase/auth';
import { firebaseApp } from './firebase/firebaseConfig';

const Welcome = () => {
  const navigation = useNavigation();

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [currentIndex, setCurrentIndex] = useState(0);

  const auth = getAuth(firebaseApp);
  
  const user = useSelector((state) => state.auth); 

  console.log(user,"user Welcome page")


  return (
    <SafeAreaView style={styles.container}>
    <View style={[stylesG.conteneur]}>
      
      <Swiper   loop={false}  style={styles.wrapper}
      dot={
        <View
          style={{  
            width: 13,
            height: 13,
            borderRadius: 7,
            marginLeft: 7,
            marginRight: 7
          }}
        />
      }
      activeDot={
        <View
          style={{
            width: 13,
            height: 13,
            borderRadius: 7,
            marginLeft: 7,
            marginRight: 7,
          }}

        />
      }
    >
        <View>
        <Image style={[stylesG.ifcmLogo]}  source={require('../assets/img/ifcm_logo.png')}         />
        <Text style={stylesG.titleOrange}> 
         {t('welcomepage.slide1title')}
        </Text>
        <Text style={[stylesG.textGrey,stylesG.marginleftright]}> 
         {t('welcomepage.slide1text')}
        </Text>
        <Text style={stylesG.textBlack}> 
         {t('welcomepage.slide1text2')}
        </Text>
        </View>

        <ScrollView>
        <View style={[styles.containerMog]}>
        <Image style={[styles.mog]}  source={require('../assets/img/mog.jpeg')}         />
        <Text style={[stylesG.titleOrange,stylesG.top]}>  {t('welcomepage.slide2title')}</Text>
      <View style={[stylesG.marginleftright]}>
        <ScrollView  style={[stylesG.conteneur2]}>
        <Text style={[ stylesG.textBlack2]}>  {t('welcomepage.slide2textbold')}</Text>
        <Text style={[ stylesG.textGrey2]}>  {t('welcomepage.slide2text2')}</Text>
        <Text style={[stylesG.textGrey2 ]}>  {t('welcomepage.slide2text3')}</Text>
        <Text style={[stylesG.textBlack2 ]}>  {t('welcomepage.slide2text4bold')}</Text>
        <Text style={[stylesG.textGrey2 ]}>  {t('welcomepage.slide2text5')}</Text>
        <Text style={[ stylesG.textGrey2]}>  {t('welcomepage.slide2text6')}</Text>
        <Text style={[stylesG.textBlack2 ]}>  {t('welcomepage.slide2text7bold')}</Text>
        <Text style={[ stylesG.textGrey2,stylesG.marginBottom]}>  {t('welcomepage.slide2text8')}</Text>
        </ScrollView>
       
        

        </View>
        
        </View>
        </ScrollView>
       
          <ScrollView>
          <View style={[stylesG.center,stylesG.container3]}>
          <Image style={[styles.ifcmLogo2]}  source={require('../assets/img/holyland.png')}         />
          <View>
          <Text style={[stylesG.titleOrange,stylesG.top]}>  {t('welcomepage.slide3title')}</Text>
          <Text style={[ stylesG.textBlack2 ]}>  {t('welcomepage.slide3textbold')}</Text>
          <Text style={[ stylesG.textGrey3 ]}>  {t('welcomepage.slide3text')}</Text>
          <Text style={[  stylesG.textAdress ]}>  {t('welcomepage.slide3taddress')}</Text>


          
       <View>
       <TouchableOpacity onPress={() => {
                    navigation.reset({
                      index: 0,
                      routes: [{ name: 'Login' }],
                    });
                  }} style={styles.flexContainer}>
        <Text style={[stylesG.ifcmOrange, stylesG.btn, styles.flexcontain]}>
        {t('welcomepage.continuebtn')}

                            </Text>
                            <FontAwesomeIcon icon={faArrowRight} style={[styles.iconsarrow]} />
     </TouchableOpacity>
       </View>
        </View>
        </View>
          </ScrollView>
          
       
       
      </Swiper>
    </View>
   
    </SafeAreaView>


  );
};

const styles = StyleSheet.create({
  wrapper: {},
  container: {
    flex: 1,
    backgroundColor:'white'
  },

  icons:{
    flex: 1,
    display:'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign:'center',
    marginLeft:50
  },
  flexContainer: {

    display:'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign:'center',
    justifyContent:"center"
     // Pour centrer verticalement
  },
  iconsarrow:{
    color: '#FE7D4E',
  },
  flexcontain:{
    marginRight:15
  },
  containerMog:{
padding:5
  },
  mog:{
    width:"100%",
    resizeMode:"cover",
    height:500
    },
  ifcmLogo:{
    width:"100%",
    resizeMode:"contain"
  },
  ifcmLogo2:{
    width:"100%",
    resizeMode:"contain"
  }

});

export default Welcome;

