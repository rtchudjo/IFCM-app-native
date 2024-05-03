import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './src/Welcome';
import LoginPage from './src/Login';
import { Button, TouchableOpacity, Text, View, StyleSheet, Animated } from 'react-native';
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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { CurvedBottomBarExpo } from 'react-native-curved-bottom-bar';
import { Platform } from 'react-native';
import Help from './src/Profile/Help';
import { User } from 'firebase/auth'; 
import Orders from './src/Profile/Orders';
import Branchs from './src/Profile/Branchs';
import Aboutus from './src/Profile/Aboutus';
import Politics from './src/Profile/Politics';
import Edit from './src/Profile/Edit';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();




function AppNavigator() {
  // const user = useSelector((state) => state.auth);
  const { t } = useTranslation();
  const auth = getAuth(firebaseApp);
  console.log(auth,"auth firebase");
  const [userAuth, setuserAuth] = useState(null);
  const [user, setUser] = useState<User | null>(null);
  
useEffect(() => {
  // Vérifiez si l'utilisateur est déjà connecté au démarrage de l'application
  const unsubscribe = onAuthStateChanged(auth, (authUser) => {
    if (authUser) {
      setUser(authUser);
      console.log(user,"userAuthNAv");
      console.log(auth,"authNAv");
    } else {
      setUser(null);
    }
  });

  // Assurez-vous de vous désabonner lorsque le composant est démonté
  return unsubscribe;
}, []);

  return (
    <SafeAreaProvider>

      <NavigationContainer>
        {user ? (
          <Tab.Navigator initialRouteName="HomeTabs">
            
          </Tab.Navigator>

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

                    <Text style={[styleNav.ifcmOrange, styleNav.skipBtn]}>
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
                title: t('login.title'),
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
                title: t('signup.title'),
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
                title: t('forgotten.title'),
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
    shadowColor: '#6e6e6e85',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
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
    marginTop: 12,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    transform: [{ rotate: '45deg' }], // Rotation de 60 degrés
    shadowColor: '#6e6e6e85',

  },
  bookBtn: {
    transform: [{ rotate: '-45deg' }], // Rotation de 60 degrés
    paddingTop: 5,
    paddingLeft: 2
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
