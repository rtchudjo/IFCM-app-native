import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import AppNavigator from './Navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 
import './i18n';
import { useTranslation } from 'react-i18next';
import store from './src/redux/store'; 
import { StyleSheet } from 'react-native';
import { RootSiblingParent } from 'react-native-root-siblings';






export default function App() {
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    
  }, []);
  return (
    <Provider store={store}>
        <GestureHandlerRootView style={styles.container}>
        <RootSiblingParent> 
               <AppNavigator/>
               </RootSiblingParent>

        </GestureHandlerRootView>
          
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Fond blanc
  },
});