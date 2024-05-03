import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './src/Welcome'; 
import LoginPage from './src/Login'; 
import { Button, TouchableOpacity, Text, View, StyleSheet,Animated,Image } from 'react-native';
import { styleNav } from './globalStyleNav';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Signup from './src/Signup';
import Forgot from './src/Forgot';
import MyTabs from './BottomNavigation';
import { authUser, firebaseApp } from './src/firebase/firebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import MainStack from './mainNav';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Donation from './src/Donation';
import Home from './src/Home';
import Profile from './src/Profile';
import Shopping from './src/Shopping';
import Teachings from './src/Teachings';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';
import { Dimensions, Platform } from 'react-native';
import bagIcons from './src/Utils/bagIcons';
import Svg, { Path, Defs, LinearGradient, Stop, G } from 'react-native-svg';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const HomeTabs = () => (
  <Tab.Navigator initialRouteName="Home" 
  screenOptions={{
    tabBarActiveTintColor: '#FE7D4E', // Couleur de l'onglet actif
    tabBarInactiveTintColor: '#000000ab', // Couleur de l'onglet inactif
    
    headerShown:false,
    tabBarShowLabel:false,
    tabBarStyle: {
      backgroundColor: 'white', // Couleur de fond de la barre de tabulation
      borderTopWidth: 1, // Épaisseur de la bordure supérieure
      borderColor: '#E8E8E8', // Couleur de la bordure supérieure
      height: Platform.OS === 'ios' ?   70 : 70 , // Hauteur de la barre de tabulation
      position:'absolute',
      bottom: Platform.OS === 'ios' ?   0 : 0 , // Ajustez le padding du bas pour iOS
      ...styles.shawdow2,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      
      elevation: 2,
 
    },
    tabBarLabelStyle: {
      
    },
    tabBarIconStyle: {
      
    },
  }}
  
  >
    <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
              <View>
                <Image source={require("./assets/icons/homeOutline.png")} style={
                  {
                    width:25,
                    height:25,
                    tintColor:focused ? '#FE7D4E' : '#000000ab',
                  }
                }/>
                  
              </View>
          ),
        }}
      />
      <Tab.Screen
        name="Shopping"
        component={Shopping}
        options={{
         
          tabBarIcon: ({focused }) => (
            <View>
            <Image source={require("./assets/icons/bagOutline.png")} style={
              {
                width:25,
                height:25,
                tintColor:focused ? '#FE7D4E' : '#000000ab',
              }
            }/>
              
          </View>
          ),
            
        }}
      />
      <Tab.Screen
        name="Teachings"
        component={Teachings}
        options={{
       
          tabBarIcon: ({ focused }) => (
            
            <View style={{
              width: 50, // Largeur du fond carré
              height: 50, // Hauteur du fond carré
              backgroundColor: '#FE7D4E', // Couleur du fond carré
              borderRadius: 13, // Rayon de la bordure pour créer un carré arrondi plus grand
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute', // Utilisez "absolute" pour positionner le fond carré par rapport à la vue parente
              transform: [{ rotate: '45deg' }],
              bottom: Platform.OS === 'ios' ?   -5 : 10 , // Ajustez le padding du bas pour iOS
              
           }}>
                <Image source={require("./assets/icons/bookOutline.png")} style={
                  {
                    width:25,
                    height:25,
                    tintColor:focused ? 'white' : 'white',
                   
                    transform: [{ rotate: '-45deg' }],


                    backgroundColor: '#FE7D4E',
                    
                  
                    padding: 0,
                  }
                }/>
                  
              </View>
          ),
        }}
      />
      <Tab.Screen
        name="Donation"
        component={Donation}
        options={{
          
          tabBarIcon: ({focused }) => (
<View>
                <Image source={require("./assets/icons/heartOutline.png")} style={
                  {
                    width:25,
                    height:25,
                    tintColor:focused ? '#FE7D4E' : '#000000ab',
                  }
                }/>
                  
              </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
        
          tabBarIcon: ({ focused }) => (
            <View >
                <Image source={require("./assets/icons/personOutline.png")} style={
                  {
                    width:25,
                    height:25,
                    tintColor:focused ? '#FE7D4E' : '#000000ab',
                  }
                }/>
                  
              </View>
          ),
        }}
      />
  </Tab.Navigator>
);

function AppNavigator() {
  const user = useSelector((state) => state.auth);
  const { t } = useTranslation();

  return (
    <SafeAreaProvider>
<NavigationContainer>

{user.uid ? (

      <Stack.Navigator initialRouteName="HomeTabs">
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        </Stack.Navigator>

        ) : (
          <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
name="Welcome"
component={WelcomePage}
options={({ navigation }) => ({
  title: ' ',
  headerStyle: {
    backgroundColor: 'white',
    elevation: 50, 
    shadowColor: 'rgba(0, 0, 0, 0.2)', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.5, 
    shadowRadius: 4, 
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerRight: () => (
    <TouchableOpacity
      style={{ marginRight: 10 }}
      onPress={() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      }}
    >
  
      <Text style={[styleNav.ifcmOrange,styleNav.skipBtn]}>
        SKIP
      </Text>
    </TouchableOpacity>
  )
  
  ,
  headerLeft: () => null,   
})}

/>

<Stack.Screen
name="Login"
component={LoginPage}

options={{
header: undefined,
title:t('login.title'),
headerTintColor: '#FE7D4E',
headerTitleStyle: { color: 'black' },
headerTitleAlign: 'center',
headerBackTitle: ' ',
headerStyle: {
backgroundColor: 'white',
elevation: 50,
shadowColor: 'rgba(0, 0, 0, 0.2)',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.5,
shadowRadius: 4,
},
}}
/>
<Stack.Screen
name="Signup"
component={Signup}

options={{
header: undefined,
title:t('signup.title'),
headerTintColor: '#FE7D4E',
headerTitleStyle: { color: 'black' },
headerTitleAlign: 'center',
headerBackTitle: ' ',
headerStyle: {
backgroundColor: 'white',
elevation: 50,
shadowColor: 'rgba(0, 0, 0, 0.2)',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.5,
shadowRadius: 4,
},
}}
/>

<Stack.Screen
name="Forgot"
component={Forgot}

options={{
header: undefined,
title:t('forgotten.title'),
headerTintColor: '#FE7D4E',
headerTitleStyle: { color: 'black' },
headerTitleAlign: 'center',
headerBackTitle: ' ',
headerStyle: {
backgroundColor: 'white',
elevation: 50,
shadowColor: 'rgba(0, 0, 0, 0.2)',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.5,
shadowRadius: 4,
},
}}

/>
      </Stack.Navigator>
)}
</NavigationContainer>
    </SafeAreaProvider>
   
  );
}
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: '#919191',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  shawdow2: {
    shadowColor: '#adadad',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation:5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: 50,
  height: 50,
  borderRadius: 14, 
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#FE7D4E',
  bottom: 30,
  shadowColor: '#000',
  marginTop:12,
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 1.41,
  elevation: 1,
  transform: [{ rotate: '45deg' }], // Rotation de 60 degrés
},
bookBtn:{
  transform: [{ rotate: '-45deg' }], // Rotation de 60 degrés
  paddingTop:5,
  paddingLeft:2
},
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },

});

export default AppNavigator;
