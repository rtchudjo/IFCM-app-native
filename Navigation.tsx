import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './src/Welcome';
import LoginPage from './src/Login';
import { Button, TouchableOpacity, Text, View, StyleSheet, Animated, Dimensions } from 'react-native';
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
import OrdersId from './src/Profile/OrdersId';
import Branchs from './src/Profile/Branchs';
import Aboutus from './src/Profile/Aboutus';
import Politics from './src/Profile/Politics';

import Edit from './src/Profile/Edit';
import SvgComponent from './src/components/Svg/SvgComponent';
import TabBarButton from './src/components/Svg/TabBarButton';
import TabShape from './src/components/Svg/TabShape';
import Modify from './src/Profile/Modify';
import EventComponent from './src/Home/Events/Events';
import EventDetailScreen from './src/Home/Events/EventDetails';
import ShoppingDetails from './src/Shopping/ShoppingDetails';
import TeachingList from './src/Teachings/TeachingList';
import TeachingsDetails from './src/Teachings/TeachingDetails';
const TAB_HEIGHT = 80;

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



const SettingsStack = createStackNavigator();
const HomeStack = createStackNavigator();
const TeachingsStack = createStackNavigator();
const ShoppingStack = createStackNavigator();
const DonationsStack = createStackNavigator();
const { width } = Dimensions.get('window')



function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomePage" component={Home} options={{
        title:" ",
        headerShown:false
    }}/>
   <HomeStack.Screen name="EventDetails" component={EventDetailScreen} options={{
        headerShown:true,
        title: t('eventdetails.title'),
        headerTintColor: '#FE7D4E',
        headerTitleStyle: { color: 'black' },
        headerTitleAlign: 'center',
        headerBackTitle: ' ',
        headerStyle: {
          backgroundColor: 'white',
          elevation: 50,
          shadowColor: 'rgba(78, 78, 78, 0.693)',
          shadowOffset: { width: 1, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 4,
        },
    }}/>
    </HomeStack.Navigator>
  );
}
function ShoppingStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="ShoppingPage" component={Shopping} options={{
        title:" ",
        headerShown:false
    }}/>
     <HomeStack.Screen name="ShoppingsDetails" component={ShoppingDetails} options={{
        headerShown:true,
        title: t('shoppingdetails.title'),
        headerTintColor: '#FE7D4E',
        headerTitleStyle: { color: 'black' },
        headerTitleAlign: 'center',
        headerBackTitle: ' ',
        headerStyle: {
          backgroundColor: 'white',
          elevation: 50,
          shadowColor: 'rgba(78, 78, 78, 0.693)',
          shadowOffset: { width: 1, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 4,
        },
    }}/>
    </HomeStack.Navigator>
  );
}

function TeachingsStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="TeachingsPage" component={Teachings} options={{
        title:" ",
        headerShown:false
    }}/>
   <HomeStack.Screen name="TeachingsList" component={TeachingList} options={{
        headerShown:true,
        title: t('teachinglist.title'),
        headerTintColor: '#FE7D4E',
        headerTitleStyle: { color: 'black' },
        headerTitleAlign: 'center',
        headerBackTitle: ' ',
        headerStyle: {
          backgroundColor: 'white',
          elevation: 50,
          shadowColor: 'rgba(78, 78, 78, 0.693)',
          shadowOffset: { width: 1, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 4,
        },
    }}/>
    <HomeStack.Screen name="TeachingsDetails" component={TeachingsDetails} options={{
        headerShown:true,
        title: t('teachinglist.title'),
        headerTintColor: '#FE7D4E',
        headerTitleStyle: { color: 'black' },
        headerTitleAlign: 'center',
        headerBackTitle: ' ',
        headerStyle: {
          backgroundColor: 'white',
          elevation: 50,
          shadowColor: 'rgba(78, 78, 78, 0.693)',
          shadowOffset: { width: 1, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 4,
        },
    }}/>
    </HomeStack.Navigator>
  );
}


function DonationsStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="DonationPage" component={Donation} options={{
        title:" ",
        headerShown:false
    }}/>
  
    </HomeStack.Navigator>
  );
}

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="ProfilePage" component={Profile} options={{
        title:" ",
        headerShown:false
        
    }}
      />
      <SettingsStack.Screen name="Orders" component={Orders} options={{
        headerShown:true,
        title: t('orderlist.title'),
        headerTintColor: '#FE7D4E',
        headerTitleStyle: { color: 'black' },
        headerTitleAlign: 'center',
        headerBackTitle: ' ',
        headerStyle: {
          backgroundColor: 'white',
          elevation: 50,
          shadowColor: 'rgba(78, 78, 78, 0.693)',
          shadowOffset: { width: 1, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 4,
        },
    }}/>
    <SettingsStack.Screen name="OrdersId" component={OrdersId} options={{
        headerShown:true,
        title: t('orderdetail.title'),
        headerTintColor: '#FE7D4E',
        headerTitleStyle: { color: 'black' },
        headerTitleAlign: 'center',
        headerBackTitle: ' ',
        
        headerStyle: {
          backgroundColor: 'white',
          elevation: 50,
          shadowColor: 'rgba(78, 78, 78, 0.693)',
          shadowOffset: { width: 1, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 4,
        },
    }}/>
      <SettingsStack.Screen name="Help" component={Help} options={{
         headerShown:true,
         title: t('help.title'),
         headerTintColor: '#FE7D4E',
         headerTitleStyle: { color: 'black' },
         headerTitleAlign: 'center',
         headerBackTitle: ' ',
         headerStyle: {
           backgroundColor: 'white',
           elevation: 50,
           shadowColor: 'rgba(78, 78, 78, 0.693)',
           shadowOffset: { width: 1, height: 2 },
           shadowOpacity: 0.5,
           shadowRadius: 4,
         },
     }}/>
      <SettingsStack.Screen name="Branch" component={Branchs} options={({ navigation }) => ({
          headerShown: false,
          title: " ",
          headerTintColor: '#FE7D4E',
          headerTitleStyle: { color: 'black' },
          headerTitleAlign: 'center',
          headerBackTitle: ' ',
          headerTransparent: true,
          headerStyle: {
            backgroundColor: 'white',
            elevation: 50,
            shadowColor: 'rgba(78, 78, 78, 0.693)',
            shadowOffset: { width: 1, height: 2 },
            shadowOpacity: 0.5,
            shadowRadius: 4,
          },
          
        })}
      />
      <SettingsStack.Screen name="Aboutus" component={Aboutus} options={{
         headerShown:true,
         title: t('aboutus.title'),
         headerTintColor: '#FE7D4E',
         headerTitleStyle: { color: 'black' },
         headerTitleAlign: 'center',
         headerBackTitle: ' ',
         headerStyle: {
          backgroundColor: 'white',
          elevation: 50,
          shadowColor: 'rgba(78, 78, 78, 0.693)',
          shadowOffset: { width: 1, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 4,
        },
     }}/>
      <SettingsStack.Screen name="Politics" component={Politics} options={{
         headerShown:true,
         title: t('legal.title'),
         headerTintColor: '#FE7D4E',
         headerTitleStyle: { color: 'black' },
         headerTitleAlign: 'center',
         headerBackTitle: ' ',
         headerStyle: {
          backgroundColor: 'white',
          elevation: 50,
          shadowColor: 'rgba(78, 78, 78, 0.693)',
          shadowOffset: { width: 1, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 4,
        },
     }}/>
      <SettingsStack.Screen name="Edit" component={Edit} options={{
        headerShown:true,
        title: t('edit.title'),
        headerTintColor: '#FE7D4E',
        headerTitleStyle: { color: 'black' },
        headerTitleAlign: 'center',
        headerBackTitle: ' ',
        headerStyle: {
          backgroundColor: 'white',
          elevation: 50,
          shadowColor: 'rgba(78, 78, 78, 0.693)',
          shadowOffset: { width: 1, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 4,
        },
    }}/>
    <SettingsStack.Screen name="Modify" component={Modify} options={{
        headerShown:true,
        title: t('edit.modifytitle'),
        headerTintColor: '#FE7D4E',
        headerTitleStyle: { color: 'black' },
        headerTitleAlign: 'center',
        headerBackTitle: ' ',
        headerStyle: {
          backgroundColor: 'white',
          elevation: 50,
          shadowColor: 'rgba(78, 78, 78, 0.693)',
          shadowOffset: { width: 1, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 4,
        },
    }}/>
    
    </SettingsStack.Navigator>
  );
  }

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
          <Tab.Navigator
          initialRouteName="Home"
          
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color,  }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list' : 'ios-list-outline';
              }
  
              // You can return any component that you like here!
              return <IonIcon name={iconName} size={26} color={color} />
            },
            tabBarActiveTintColor: '#FE7D4E',
            tabBarInactiveTintColor: 'gray',
            headerShown:false,
            tabBarHideOnKeyboard:true,
            unmountOnBlur:true,
            tabBarStyle: {
              position: 'absolute',
              backgroundColor: '#ffffffe9', // Couleur d'arrière-plan semi-transparente
              elevation: 5, // Pour l'ombre sur Android
              shadowColor: 'black', // Couleur de l'ombre sur Android
              shadowOpacity: 0.2, // Opacité de l'ombre sur Android
              shadowOffset: {
                width: 0,
                height: 2,
              },
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeStackScreen} options={{
          tabBarLabel: ' ',
          tabBarIcon: ({ color, size }) => (
            <IonIcon name="home-outline" color={color} size={26} style={styles.iconsNav}/>
          ),
        }}
      />
          <Tab.Screen name="Shopping" component={ShoppingStackScreen} options={{
          tabBarLabel: ' ',
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="handbag" color={color} size={26}style={styles.iconsNav}/>
          ),
            
        }}
      />
          <Tab.Screen name="Teachings" component={TeachingsStackScreen}  options={{
          tabBarLabel: ' ',
          
          tabBarIcon: ({ color, size }) => (
           
            
            <TabBarButton/>
          
          ),
          
        }}
      />
          <Tab.Screen name="Donation" component={DonationsStackScreen} options={{
          tabBarLabel: ' ',
          tabBarIcon: ({ color, size }) => (
            <Feather name="heart" color={color} size={26} style={styles.iconsNav}/>
          ),
        }}
      />
          <Tab.Screen name="Profile" component={SettingsStackScreen} options={{
          tabBarLabel: ' ',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-o" color={color} size={26} style={styles.iconsNav}/>
          ),
        }}
      />
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
  iconsNav:{
    marginTop:8
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
  myTabBarContainer: {
    position: 'absolute',
    height: TAB_HEIGHT,
    width,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    elevation: 5,
  }

});

export default AppNavigator;
