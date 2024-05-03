import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';



export default function ShoppingCard({id,title,price,srcImg,type,text}) {
  const navigation = useNavigation();

  const handlePressBook = () => {
    // Rediriger vers l'écran de détails avec l'ID de l'événement
    navigation.navigate('ShoppingsDetails', { 
      idShop: id,
      titleShop:title,
      textShop:text,
      priceShop:price,
      srcShop:srcImg,
      typeShop:type
    
    });
  };
  console.log(
    id,title,price,srcImg,type
  )
  return (
    <View style={styles.container}>
<TouchableOpacity  style={styles.containerEvents} onPress={() => handlePressBook()}>
        <View style={styles.contain}>
      <Image 
        style={styles.card_image}
        src={srcImg}
    />
      </View>
      <View style={styles.text_container}>
      <Text style={styles.card_titlenoire}>{title}</Text>
      <Text style={styles.card_titleorange}>{price} ZAR</Text>
   </View>
</TouchableOpacity>
      
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",

    width: 150,
 
    marginRight:5,
    marginLeft:5
   
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
    display:"flex",
    flexDirection:"column",
    width: 150,
    height: 50,
      bottom:15,
    padding: 5,
  justifyContent:"center",
  textAlign:"center",
  margin:0,
    
    backgroundColor: "rgba(255, 255, 255, 0)",
    borderBottomLeftRadius : 10,
    borderBottomRightRadius: 10
  },
  card_titlenoire: {
     color: "grey",
     fontSize:12,
     fontWeight:"400",
     lineHeight:20,
     width:"100%",
     left:15,
     display:"flex",
     flexDirection:"row",
     justifyContent:"center",
     alignContent:"center",
     alignItems:"center"
  },
  card_titleorange:{
    color: "#fe7d4e",
    fontSize:14,
    fontWeight:"300",
    
    width:"50%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center",
    left: "75%",
    borderRadius:20,
    textAlign:"center"
  }
});
