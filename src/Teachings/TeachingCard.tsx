import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';



export default function Card({id,text,text2,srcImg}) {
  const navigation = useNavigation();

  const handlePressTeach = () => {
    // Rediriger vers l'écran de détails avec l'ID de l'événement
    navigation.navigate('TeachingsList', { 
      idShop: id,
      textCat:text,
      textNumber:text2,
      srcShop:srcImg,
    
    });
  };
  return (
    <View style={styles.container}>
<TouchableOpacity  style={styles.container} onPress={() => handlePressTeach()}>

      <View style={styles.contain}>
      <Image 
        style={styles.card_image}
        src={srcImg}
    />
    <View style={styles.text_container}>
      <Text style={styles.card_titlenoire}>{text}</Text>
      <Text style={styles.card_titleorange}>{text2}</Text>
   </View>
      </View>
      </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    display:"flex",
    flexDirection:"row",
    alignContent:"center",
    alignItems:"center",
  },
  contain:{
    padding:15
  },
  card_image: {
    width: 150,
    height: 225,
    borderRadius : 10
  },
  text_container:{
    position: "absolute",
    width: 250,
    height: 50,
      bottom:15,
    padding: 5,
    left:15,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderBottomLeftRadius : 10,
    borderBottomRightRadius: 10
  },
  card_titlenoire: {
     color: "#0f152f",
     fontSize:21,
     fontWeight:"400",
     lineHeight:20
  },
  card_titleorange:{
    color: "#fe7d4e",
    fontSize:16,
    fontWeight:"400",
    lineHeight:30,
    left:3
    
  }
});
