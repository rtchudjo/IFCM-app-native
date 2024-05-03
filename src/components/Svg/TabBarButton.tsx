import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Dimensions} from 'react-native';
import {curveBasis, line} from 'd3-shape';
import Svg, {Path} from 'react-native-svg';
const TAB_HEIGHT = 60; // This fixed height can be as you wish.

const { width } = Dimensions.get('window');

const lineGenerator = line();

const rect = lineGenerator([
  [0, 0],
  [width / 2, 0],
  [width, 0],
  [width, TAB_HEIGHT],
  [0, TAB_HEIGHT],
  [0, 0],
]);

const center = lineGenerator.curve(curveBasis)([
  [(width / 5) * 2, 0],
  [(width / 5) * 2 + 20, TAB_HEIGHT * 0.5],
  [(width / 5) * 3 - 20, TAB_HEIGHT * 0.5],
  [(width / 5) * 3, 0],
]);

const d = `${center} ${rect}`;
function TabShape() {
  return (
    <Svg width={width} height={TAB_HEIGHT} style={[styles.myTabBarContainer]}>
      <Path fill="white" {...{d}} />
    </Svg>
  );
}

export default function TabBarButton() {
  return (
    <View style={styles.container}>
    <Feather name="book-open" color="white" size={30} style={styles.icons}/>
    </View>
  );
}

const styles = StyleSheet.create({
  myTabBarContainer: {
    position: 'absolute',
    height: TAB_HEIGHT,
    width,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5, // Opacité de l'ombre (0 à 1)
    shadowRadius: 5, // Rayon de l'ombre
    elevation: 5,
    transform: [{ rotate: '45deg' }],
    
  
  },
  container: {
    position: 'absolute',
    width: 55,
    height: 55,
    borderRadius: 16, // full radius
    transform: [{ rotate: '-45deg' }], // Rotation de 60 degrés

    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FE7D4E',
    borderBottomWidth:1,
    borderBottomColor:"#9e9b9b70",
    borderLeftWidth:1,
    borderLeftColor:"#9e9b9b70",
    
  },
  text: {
    fontSize: 40,
    color: 'white',
  },
  icons:{
    transform: [{ rotate: '45deg' }], // Rotation de 60 degrés
    top:3,
    right:3
  }
});