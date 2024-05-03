import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Dimensions, Image, Platform, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';
import { styleNav } from '../../globalStyleNav';
import { useNavigation } from '@react-navigation/native';



const TeachingList = ({route}) => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  
  const { width, height } = Dimensions.get('window');
  const isAndroid = Platform.OS === 'android';
  const isTablet = width >= 600 && height >= 600;
  const imageWidth = isTablet ? '100%' : '100%'; // Pourcentage de la largeur de l'écran
  const imageHeight = isTablet ? 550: 350; // Taille fixe pour les mobiles

  const marginTopValue = isTablet ? 0 : -35;
  const paddingTopValue = isAndroid ? 35 : 0; 
const { idShop,titleShop,priceShop,srcShop,typeShop,textShop } = route.params;
const isUnlocked = false; // Remplacez ceci par votre logique de vérification de déblocage

console.log( "TeachingsDetails")

const handlePressTeach = () => {
  // Rediriger vers l'écran de détails avec l'ID de l'événement
  navigation.navigate('TeachingsDetails');
};
  return (
    <ScrollView style={[styles.containerEvents, { paddingTop: paddingTopValue }]}>
         <View style={[
        styles.imageContainer,
        { marginTop: marginTopValue },
        
      ]}>
        <Image style={[styles.image, { width: imageWidth, height: imageHeight }]} source={{ uri: srcShop }} />
      <View style={styles.lessonContainer}>
      <Text style={styles.lessonText}>
      {t('teachinglist.lessons')}
      </Text>
     
      </View>
      <View style={styles.categorieContainer}>
      <Text style={styles.lessonsCat}>
       Categories
      </Text>
      <Text style={styles.countCat}>
       3 {t('teachinglist.subtitle')}
      </Text>
      </View>
      
      </View>

      <View style={styles.TextContainer}>
        <Text style={styles.textTitle}>
        {t('teachinglist.text')}
        </Text>
     <TouchableOpacity style={styles.containerLesson}  onPress={() => handlePressTeach()}>
     
     <Image src={"https://ifcmapp.s3.eu-west-3.amazonaws.com/assets/img/teaching/Love/defining-love.png"} style={styles.img}  />
      <Text style={styles.textContain}>
        Definiting Love
      </Text>
{isUnlocked ? (
        <Image
          source={require('../../assets/icons/unlock.png')}
          style={styles.unlockedIcon}
        />
      ) : (
        <Image source={require('../../assets/icons/lock.png')} style={styles.lockIcon} />
      )}
     </TouchableOpacity>

        </View>

    </ScrollView>
  );
};


const styles = StyleSheet.create({
  TextContainer:{
    padding:20,
    margin:0,
    bottom:110,

  },
  textContain:{
    color:"#0c112c",
    lineHeight:19,
    fontSize:14
  },
  img:{
    width:50,
    height:50,
    borderRadius:10
  },
  unlockedIcon:{
    width:25,
    height:25
  },
  lockIcon:{
    width:25,
    height:25
  },
  containerLesson:{
    display:"flex",
    flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
backgroundColor:"#bdbdbd1a",
padding:10,
borderRadius:15
  },
  textTitle:{
    fontSize:24,
    color:"#8687a8",
    lineHeight:20,
    fontWeight:"600",
    padding:15
  },
  containerEvents:{
    padding:10,
    flex:1,
    
  },
  lessonContainer:{
    bottom:"35%",
    color:"black",
    left:"10%",
    
    backgroundColor: '#FE7D4E',
    
    width:Platform.OS === 'android' ? 80 : 80,
    height:Platform.OS === 'android' ? 30 : 30,
    borderRadius:8,
  },
  lessonText:{
    color:"white",
    fontSize:14,
    left:Platform.OS === 'android' ? "15%" : "20%",
    top:Platform.OS === 'android' ? "15%" : "20%",
    display:"flex",
    alignContent:"center",
    alignItems:"center"
  },
  categorieContainer:{
    left:"10%",
    top:"-35%",
    width:"50%"
  },
  countCat:{
    color:"white",
    fontSize:18,
    fontWeight:"600",
    left:"0%",
    bottom:"-85%",
  },
  lessonsCat:{
    color:"white",
    fontSize:25,
    fontWeight:"600",
    left:"0%",
    bottom:"-75%",
  },
  imageContainer:{
    padding:10,
   
  },
  containerPrice:{
    display:"flex",
    flexDirection:"row",
    alignContent:"flex-end",
    alignItems:"flex-end",
    justifyContent:"flex-end"
  },
  image:{
    resizeMode:"cover",
    borderRadius:15
  },
  title:{
    fontSize:20,
    fontStyle:"normal",
    fontWeight:"600",
    lineHeight:30,
    color:"black"
  },
  containerTxt:{
    padding:25
  },
  PriceText:{
    color:"#fe7d4e",
    fontSize:21,
    fontWeight:"600",
  },
  containerPayd:{
    display:"flex",
    flexDirection:"row",
    alignContent:"center",
    alignItems:"center",
    justifyContent:"space-around",
    padding:10
  },
  containerText:{
    padding:20
  },
  text:{
    fontSize:16,lineHeight:30,
    fontWeight:"400"
  },
  containerButton:{
    backgroundColor: '#FE7D4E',
    textAlign:"center",
    padding:20,
    borderRadius:18,
    width:200
  },
  iconsBasket:{
    width:50,
    height:50
  },
  buttonText:{
    fontSize:20,
    fontWeight:"500",
    textAlign:"center",
    color:"white",
  },

});

export default TeachingList;
