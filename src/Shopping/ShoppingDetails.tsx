import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Dimensions, Image, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome } from 'react-native-vector-icons/FontAwesome';



const ShoppingDetails = ({route}) => {
  const { t } = useTranslation();

  
  const { width, height } = Dimensions.get('window');
  const isAndroid = Platform.OS === 'android';
  const isTablet = width >= 600 && height >= 600;
  const imageWidth = isTablet ? '100%' : '100%'; // Pourcentage de la largeur de l'écran
  const imageHeight = isTablet ? 550: 350; // Taille fixe pour les mobiles

  const marginTopValue = isTablet ? 0 : -35;
  const paddingTopValue = isAndroid ? 35 : 0; 
const { idShop,titleShop,priceShop,srcShop,typeShop,textShop } = route.params;

console.log(idShop,titleShop,priceShop,srcShop,typeShop,textShop ,"ShopDetail")

const onAddToCartPress = () => {
  
};

const onPayNowPress = () => {
  
};
  return (
    <ScrollView style={[styles.containerEvents, { paddingTop: paddingTopValue }]}>
         <View style={[
        styles.imageContainer,
        { marginTop: marginTopValue },
        
      ]}>
        <Image style={[styles.image, { width: imageWidth, height: imageHeight }]} source={{ uri: srcShop }} />
      </View>
      <View style={[styles.containerTxt]}>
        <Text style={[styles.title]}>
          {titleShop}
        </Text>
      </View>
      <View style={styles.containerPrice}>

    <Text style={styles.PriceText}>
      {priceShop} ZAR
      </Text>
   
      </View>

      <View style={styles.containerPayd}>
      <TouchableOpacity onPress={onAddToCartPress}>
      <Image source={require("../../assets/icons/addtobasket.png")} style={styles.iconsBasket}/>

      </TouchableOpacity>

      <TouchableOpacity  onPress={onPayNowPress}>
        <View style={styles.containerButton}>
        <Text style={styles.buttonText}> {t('shoppingdetails.buy')}</Text>

        </View>
      </TouchableOpacity>
    </View>

    <View style={styles.containerText}>
      <Text  style={styles.text}>
      {textShop}
      </Text>
    </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  containerEvents:{
    padding:10,
    flex:1,
    
  },
  imageContainer:{
    padding:15,

  },
  containerPrice:{
    display:"flex",
    flexDirection:"row",
    alignContent:"flex-end",
    alignItems:"flex-end",
    justifyContent:"flex-end"
  },
  image:{
    resizeMode:"contain",

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
  }
});

export default ShoppingDetails;
