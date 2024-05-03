
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Forgot from './src/Forgot';
import Signup from './src/Signup';
import WelcomePage from './src/Welcome';
import LoginPage from './src/Login';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import { styleNav } from './globalStyleNav';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
// Créez un Stack Navigator
const Stack = createStackNavigator();

function MainStack() {
    const { t } = useTranslation();

  return (
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
  );
}

export default MainStack;






