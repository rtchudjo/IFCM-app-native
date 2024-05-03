import React, { useEffect, useState } from 'react';

import { Dimensions, Image, Platform, StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons/FontAwesome';
import { SimpleLineIcons } from 'react-native-vector-icons/SimpleLineIcons';
import { IonIcon } from 'react-native-vector-icons/Ionicons';


const EventDetailScreen = ({ route }) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [text, setText] = useState('');
  const [imgSrc, setImgSrc] = useState();

  const { eventId,titleId,subtitleId,textId,imageUrlId } = route.params;
  console.log(eventId,titleId,subtitleId,textId,imageUrlId,"EventID")
  
  const { width, height } = Dimensions.get('window');
  const isAndroid = Platform.OS === 'android';

  const isTablet = width >= 600 && height >= 600;
  const imageWidth = isTablet ? '100%' : '100%'; // Pourcentage de la largeur de l'écran
  const imageHeight = isTablet ? 450: 280; // Taille fixe pour les mobiles

  const marginTopValue = isTablet ? 0 : -35;
  const paddingTopValue = isAndroid ? 35 : 0; 


  return (
    <View style={[styles.containerEvents, { paddingTop: paddingTopValue }]}>
    <View style={[
        styles.imageContainer,
        { marginTop: marginTopValue },
  
      ]}>
        <Image style={[styles.image, { width: imageWidth, height: imageHeight }]} source={{ uri: imageUrlId }} />
      </View>
      <View style={[styles.containerTextEvent, ]}>
        <Text style={[styles.subtitle,]}>
          {subtitleId}
        </Text>
        <Text style={[styles.title, ]}>
          {subtitleId}
        </Text>
        <Text style={[styles.subtitle2, ]}>
          {subtitleId}
        </Text>
        <Text style={[styles.text, ]}>
          {subtitleId}
        </Text>
        <View style={styles.iconContainers}>
        
       <View style={styles.iconContainer}>
         <Image source={require('../../../assets/icons/location.png')} style={[styles.icons]} />
        <Text style={styles.text2}>Locati</Text>
       </View>
       <View style={styles.iconContainer}>
         <Image source={require('../../../assets/icons/label.png')} style={[styles.icons]} />
        <Text style={styles.text2}>Locati</Text>
       </View>
      </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  containerEvents: {
    flex:1
  },
  imageContainer: {
  padding:15
  },
  image: {
    resizeMode:"contain",
    borderRadius:15
  },
  containerTextEvent:{
    paddingRight:25,
    paddingLeft:25,
    display:"flex"
  },
  subtitle:{
    fontSize:20,
    lineHeight:24,
    fontWeight:"500",
    color:"black",
    paddingBottom:15
  },
  title:{
    fontSize:14,
    fontWeight:"500",
    color: "#fe7d4e",
    paddingBottom:5

  },
  subtitle2:{
    fontSize:14,
    fontWeight:"500",
    color:"#818181",
    paddingBottom:15
  },
  text:{
    fontSize:14,
    fontWeight:"400",
    lineHeight:24,
    color:"#bbbbbb"
  },
  text2:{
    fontSize:16,
    fontWeight:"400",
    color:"black",
    left:15
  },
  iconContainer:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    alignContent:"center",
    padding:5
  },
  iconContainers:{
    paddingTop:30
  },
  icons:{
    width:35,
    height:35,
  }
});

export default EventDetailScreen;
