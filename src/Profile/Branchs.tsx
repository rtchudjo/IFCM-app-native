import React, { useEffect, useState } from 'react';
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { authUser, firebaseApp } from '../firebase/firebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions/authActions'; // Importez l'action de déconnexion depuis authActions.js
import { useNavigation } from '@react-navigation/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import SelectDropdown from 'react-native-select-dropdown';
import FilialeEn from '../Utils/filialeen';
import  FontAwesome  from 'react-native-vector-icons/FontAwesome';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/FontAwesome';

function Branchs() {
 
  const auth = getAuth(firebaseApp);
  
  const user = useSelector((state) => state.auth); // Accédez à l'état de l'utilisateur depuis le store
  const [selectedValue, setSelectedValue] = useState('option1');

console.log(user,"redux user");
const navigation = useNavigation();
const [countries, setCountries] = useState([]);
const [cities, setCities] = useState([]);
const { t } = useTranslation();

// Fonction pour gérer le retour en arrière
const handleGoBack = () => {
  navigation.goBack();
};

const options = [
  {
    title: 'Option 1',
    image: require('../../assets/img/bujumbura.jpg'),
    adress:"",
    contact:"",
    // Ajoutez d'autres données au besoin
  },
  {
    title: 'Option 2',
    image: require('../../assets/img/lusaka.jpg'),
    adress:"",
    contact:"",
  },
  {
    title: 'Option 3',
    image: require('../../assets/img/lusaka.jpg'),
    adress:"",
    contact:"",
  },
]

const [selectedOption, setSelectedOption] = useState(options[0]);
const openFacebook = () => {
  Linking.openURL('https://www.facebook.com/VotrePageFacebook');
};

const openTwitter = () => {
  Linking.openURL('https://twitter.com/VotreCompteTwitter');
};

const openInstagram = () => {
  Linking.openURL('https://www.instagram.com/VotreCompteInstagram');
};

const openYouTube = () => {
  Linking.openURL('https://www.youtube.com/VotreChaineYouTube');
};
  return (
   <View
   style={{
   
   }}
   >
    <Image style={[styles.imgBack]}  source={selectedOption?.image}   resizeMode="cover"      />
    <TouchableOpacity onPress={handleGoBack} style={{ position: 'absolute', top: 50, left: 10 }}>
        <IonIcon name="ios-arrow-back" size={24} color="#FE7D4E" />
    </TouchableOpacity>
    <Text style={{ position: 'absolute', top: 50, left:"45%", fontSize:18,fontWeight:"400",lineHeight:30}}>
      {selectedOption.title}
    </Text>

   <View style={[styles.container]}>

   <Text style={[styles.title]}>
   {t('edit.ifcmdetqil')}
    </Text>

   </View>

   <View style={[styles.container]}>
    
   <View style={[styles.Input]}>
    <Text style={styles.loca}>
    {t('edit.loca')}
    </Text>
    <SelectDropdown
            data={options}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              setCities([]);
              setSelectedOption(selectedItem);
            }}
              defaultButtonText={'Bujumbra'}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem.title;
              }}
              rowTextForSelection={(item, index) => {
                return item.title;
              }}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            />
   </View>

    <View style={styles.containerText}>
      <Text style={styles.titleText}>
      {t('edit.adress')}  :
      </Text>
      <Text style={[styles.titleText,styles.padd5]}>
      {t('edit.contact')}  
      </Text>
    </View>

    <View style={styles.containerMedia}>
      <View>
      <Text style={styles.mediatitle}>
      {t('edit.media')}  
      </Text>
      </View>

      <View  style={styles.containerIcon}>
      <View style={[styles.containerIcons]}>
      <TouchableOpacity onPress={openFacebook} style={[styles.Icons]}>
        <Icon name="facebook" size={35} color="#3b5998" style={{ marginHorizontal: 10 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={openInstagram}style={[styles.Icons]}>
        <Icon name="instagram" size={35} color="#c32aa3" style={{ marginHorizontal: 10 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={openTwitter}style={[styles.Icons]}>
        <Icon name="twitter" size={35} color="#1da1f2" style={{ marginHorizontal: 10 }} />
      </TouchableOpacity>
     
      <TouchableOpacity onPress={openYouTube}style={[styles.Icons]}>
        <Icon name="youtube" size={35} color="#ff0000" style={{ marginHorizontal: 10 }} />
      </TouchableOpacity>
    </View>
      </View>
     
    </View>
   </View>
   </View>
  );
}

export default Branchs;
export const styles = StyleSheet.create({
  imgBack: {
   height:"55%"
  },
 container: {
  
  padding: 20,
  shadowColor: 'rgb(0, 0, 0)',
  borderRadius: 50,
  overflow: 'hidden', // Cela masquera la partie supérieure arrondie
  

},
content: {
  backgroundColor: 'rgba(255, 255, 255, 0.7)', // Couleur de fond transparente
  padding: 16,
  borderRadius: 50,
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 100, // Placez le contenu au-dessus de l'image
},
Input:{
  display:"flex",
  flexDirection:"row",

},
loca:{
  fontSize:16,
  fontWeight:"400"
},
title:{
  fontSize:22,
  lineHeight:26,
  fontWeight:"500"
},
dropdown1BtnStyle:{
  height:25,
  bottom:1
},
containerText:{
  marginTop:20
},
titleText:{
  fontSize:16,
  fontWeight:"400"
},
padd5:{
  marginTop:20
},
mediatitle:{
  fontSize:22,
  lineHeight:26,
  fontWeight:"500"
},
containerMedia:{
  paddingTop:45,
  
},
containerIcon:{
  padding:5,

    justifyContent: 'center', // Alignez les icônes verticalement au centre
    alignItems: 'center',

},
containerIcons:{

  
  flexDirection: 'row',
  justifyContent: 'space-around', // Espace égal entre les icônes
  width: '100%', 
  bottom:-10,
},
Icons:{
 textAlign:"center",
 
},
dropdown1DropdownStyle:{
  backgroundColor: 'white',

  borderBottomLeftRadius: 12,
  borderBottomRightRadius: 12,
  borderWidth:1,
  borderColor: '#ffffff74',

}
});