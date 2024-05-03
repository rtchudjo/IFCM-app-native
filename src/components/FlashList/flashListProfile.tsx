
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet,Platform,Image, Switch, TouchableOpacity } from 'react-native';

import { authUser, firebaseApp } from '../../firebase/firebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions'; // Importez l'action de déconnexion depuis authActions.js
import IonIcon from 'react-native-vector-icons/Ionicons';


function Home() {
 
  const auth = getAuth(firebaseApp);
  
  const user = useSelector((state) => state.auth); // Accédez à l'état de l'utilisateur depuis le store

console.log(user,"redux user");



  return (
    <View style={[styles.containerItem,]}>
      
     
    <View style={[styles.tabbarItem,]}>
    <TouchableOpacity onPress={() => navigation.navigate("")}
    >
                <IonIcon name="ios-home-outline" size={24} />
                <Text> Commandes </Text>
                <IonIcon name="arrow-forward" size={24} />
    </TouchableOpacity>
    </View>

    <View style={[styles.tabbarItem]}>
    <TouchableOpacity onPress={() => navigation.navigate("")}
    >
                <IonIcon name="ios-home-outline" size={24} />
                <Text> Commandes </Text>
                <IonIcon name="arrow-forward" size={24} />
    </TouchableOpacity>
    </View>

    <View style={[styles.tabbarItem]}>
    <TouchableOpacity onPress={() => navigation.navigate("")}
    >
                <IonIcon name="ios-home-outline" size={24} />
                <Text> Commandes </Text>
                <IonIcon name="arrow-forward" size={24} />
    </TouchableOpacity>
    </View>

    <View style={[styles.tabbarItem]}>
    <TouchableOpacity onPress={() => navigation.navigate("")}
    >
                <IonIcon name="ios-home-outline" size={24} />
                <Text> Commandes </Text>
                <IonIcon name="arrow-forward" size={24} />
    </TouchableOpacity>
    </View>

    <View style={[styles.tabbarItem]}>
    <TouchableOpacity onPress={() => navigation.navigate("")}
    >
                <IonIcon name="ios-home-outline" size={24} />
                <Text> Commandes </Text>
                <IonIcon name="arrow-forward" size={24} />
    </TouchableOpacity>
    

</View>
     </View>
  );
}

export default Home;


const styles = StyleSheet.create({
    tabbarItem:{
        display:"flex",
        flexDirection:"row",
        alignItems: "center",
        alignContent:"center",
        width:"90%",
        paddingBottom:20,
        borderColor:"red",
        borderWidth:1
      },
      containerItem:{
        flex: 1,
        width:"100%",
        display:"flex",
        flexDirection:"column",
        alignItems: "center",
        alignContent:"center"
      }
});