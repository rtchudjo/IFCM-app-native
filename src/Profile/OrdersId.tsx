import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View,SafeAreaView, Image } from 'react-native';

import { authUser, firebaseApp } from '../firebase/firebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions/authActions'; // Importez l'action de déconnexion depuis authActions.js
import { useTranslation } from 'react-i18next';
import { Link } from '@react-navigation/native';

function OrdersId() {
 
  const auth = getAuth(firebaseApp);
  
  const user = useSelector((state) => state.auth); // Accédez à l'état de l'utilisateur depuis le store
  const { t } = useTranslation();

console.log(user,"redux user");



  return (
    <SafeAreaView
    style={{
     backgroundColor:"white", flex:1,
     flexDirection: 'column',
     alignItems: 'center',
     alignContent:"center",
    }}
    >
      <ScrollView>

        

    </ScrollView>
   </SafeAreaView>
  );
}

export default OrdersId;
const styles = StyleSheet.create({
  
});