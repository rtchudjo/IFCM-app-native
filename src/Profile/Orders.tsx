import React, { useEffect, useState } from 'react';


import { authUser, firebaseApp } from '../firebase/firebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions/authActions'; // Importez l'action de déconnexion depuis authActions.js
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
function Orders() {
 
  const auth = getAuth(firebaseApp);
  
  const user = useSelector((state) => state.auth); // Accédez à l'état de l'utilisateur depuis le store
  const navigation = useNavigation();

console.log(user,"redux user");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
    textAlign: 'center',
  },
  arrow: {
    fontSize: 18,
  },
});

const DATA = [
  { key: 'Devin',id:"01" },
  { key: 'Dan' ,id:"02" },
  { key: 'Dominic' ,id:"03" },
  { key: 'Jackson' ,id:"04" },
  { key: 'James' ,id:"05" },
  { key: 'Joel' ,id:"06" },
  { key: 'John' ,id:"07" },
  { key: 'Jillian' ,id:"08" },
  { key: 'Jimmy' ,id:"09" },
  { key: 'Julie' ,id:"10" },
];

const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.itemContainer}>
    <Text style={styles.itemText}>{item.key}</Text>
    <Text style={styles.arrow}>➡️</Text>
  </TouchableOpacity>
);
const renderItem = ({ item }) => (
  <Item
    item={item}
    onPress={() => {
      // Ajoutez ici la logique pour naviguer vers la page suivante
      console.log('Naviguer vers la page suivante pour :', item.key);
      console.log('Naviguer vers la page suivante pour :', item.id);
      navigation.push("OrdersId",item.id)
    }}
  />
);
  return (
    <View style={styles.container}>
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.key}
    />
  </View>
  );
}

export default Orders;
