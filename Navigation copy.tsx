import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './src/Welcome'; 
import LoginPage from './src/Login'; 
import { Button, TouchableOpacity, Text } from 'react-native';
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
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => (
  <Tab.Navigator initialRouteName="Home" 
  screenOptions={{
    tabBarActiveTintColor: '#FE7D4E',
  }}>
    <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <IonIcon name="home-outline" color={color} size={size}/>
          ),
        }}
      />
      <Tab.Screen
        name="Shopping"
        component={Shopping}
        options={{
          tabBarLabel: 'Shopping',
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="handbag" color={color} size={size}/>
          ),
            
        }}
      />
      <Tab.Screen
        name="Teachings"
        component={Teachings}
        options={{
          tabBarLabel: 'Teachings',
          tabBarIcon: ({ color, size }) => (
            <Feather name="book-open" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Donation"
        component={Donation}
        options={{
          tabBarLabel: 'Donation',
          tabBarIcon: ({ color, size }) => (
            <Feather name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-o" color={color} size={size} />
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

export default AppNavigator;
