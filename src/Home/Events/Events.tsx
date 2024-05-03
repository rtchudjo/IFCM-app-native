import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import  Feather  from 'react-native-vector-icons/Feather';

const EventComponent = ({ title, subtitle, text, imageUrl,id }) => {
    const navigation = useNavigation();
   

    const handlePress = () => {
        // Rediriger vers l'écran de détails avec l'ID de l'événement
        navigation.navigate('EventDetails', { 
          eventId: id,
          titleId:title,
          subtitleId:subtitle,
          textId:text,
          imageUrlId:imageUrl
        
        });
      };
  return (
  

<View style={styles.containerEvents}>
<TouchableOpacity onPress={handlePress} style={styles.containerEvents}>
  
      <View style={styles.imageContainer}>
        <Image style={styles.image}  source={{ uri: imageUrl }} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleEvents} numberOfLines={1}>{title}</Text>
        <Text style={styles.subtitleEvents}numberOfLines={1}>{subtitle}</Text>
        <Text style={styles.textEvents}numberOfLines={1}>{text}</Text>
      </View>

  </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
  containerEvents: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom:5
  },
  imageContainer: {
    marginRight: 20,
  },
  image: {
    width: 91,
    height: 108,
    borderRadius: 8.5,
  },
  textContainer: {
    flex: 1,
    marginLeft: 5,
    justifyContent: 'center',
    flexWrap: 'nowrap', 
  },
  titleEvents: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color:"#FE7D4E"
  },
  subtitleEvents: {
    fontSize: 15,
    color: 'black',
    marginBottom: 5,
  },
  textEvents: {
    fontSize: 14,
    color: 'grey',
    marginBottom: 5,
  },
  arrowContainer: {
    marginLeft: 'auto',
  },
});

export default EventComponent;
