import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Platform, Image, Switch, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import { getAuth, signOut } from 'firebase/auth'; // Assurez-vous d'importer Firebase correctement
import { authUser, firebaseApp } from './firebase/firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from './redux/actions/authActions';

import { Dimensions } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

function Profile({  }) {
  const dispatch = useDispatch();
  const auth = getAuth(firebaseApp);
  const [switchValue, setSwitchValue] = useState(false);
  const { t } = useTranslation();
  const navigation = useNavigation();

  const user = useSelector((state) => state.auth);
  console.log(user,"Profile")
  const handleLogout = async () => {
    try {
      await signOut(authUser); // Déconnexion de l'utilisateur

      dispatch(logoutUser());
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      })
      console.log(authUser.currentUser)
    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error);
    }
  };

  const handleSwitchChange = (value: boolean) => {
    setSwitchValue(value);
    // Votre logique de gestion du changement de l'interrupteur ici
  };


  function Item(item: any) {

    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 16,
          width: Dimensions.get("screen").width
        }}
      >
        <IonIcon name="ios-home-outline" size={24} style={{ marginRight: 16 }} />
        <Text style={{ flex: 1 }}>{item.title}</Text>
        {item.title === 'Item 4' ? (
          <Switch
            value={switchValue}
            onValueChange={handleSwitchChange}
            style={{ alignSelf: 'center' }}
          />
        ) : (
          <IonIcon name="ios-home-outline" size={24} />
        )}
      </View>
    );
  }

  return (
    
    <View style={[styles.flex, Platform.select({
      ios: {
        shadowColor: 'rgba(70, 53, 53, 0.361)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 7,
        backgroundColor: "white"

      },
      android: {
        elevation: 7,
      },
    })]}>
        

        <ScrollView>

        
      <View style={[styles.containeurTextHaut]}>
     
        <Text style={[styles.orange, styles.textHaut1]}>
        {t('profile.title')}
        </Text>
        <Text style={[styles.noire, styles.textHaut2]}>
        {t('profile.subtitle')}
        </Text>
      </View>
      <View style={[styles.container, Platform.select({
        ios: {
          shadowColor: 'rgba(70, 53, 53, 0.361)',
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.7,
          shadowRadius: 7,
          backgroundColor: "white"

        },
        android: {

        },
      })]}>


        <View style={styles.containerImg}>

          <View>
            <Image source={require('../assets/img/1200px-Unknown_person.jpeg')} style={[styles.persomImg]} />
          </View>

          <View style={[styles.displayFlex]}>
            <Text style={[styles.nameText,]}>
              {user.displayName}
            </Text>
            <Text style={[styles.displayFlex, styles.emailProfile]}>
              {user.email}
            </Text>
            <TouchableOpacity onPress={() => navigation.push("Edit")}>
            <Text style={[styles.displayFlex, styles.editProfile]}>
            {t('profile.edit')}
            </Text>
            </TouchableOpacity>
            
          </View>
        </View>

        <View style={[styles.containerItem,]}>


          <View style={[styles.tabbarItem,]}>
           
            <TouchableOpacity onPress={() => navigation.push('Orders')}
            style={[styles.listItems]}>
              <SimpleLineIcons name="handbag" size={25}   style={[styles.Items]}/>
              <Text  style={[styles.TextItems]}> {t('profile.order')} </Text>
              <SimpleLineIcons name="arrow-right" size={24}   style={[styles.Items]}/>
            </TouchableOpacity>
            </View>
           
          

          <View style={[styles.tabbarItem]}>
            <TouchableOpacity onPress={() => navigation.push("Help")}
           style={[styles.listItems]}>
              <IonIcon name="help-circle-outline" size={26}   style={[styles.Items]}/>
              <Text  style={[styles.TextItems]}> {t('profile.help')} </Text>
              <SimpleLineIcons name="arrow-right" size={24}   style={[styles.Items]}/>        
                  </TouchableOpacity>
          </View>

          <View style={[styles.tabbarItem]}>
            <TouchableOpacity onPress={() => navigation.push("Branch")}
            style={[styles.listItems]}>
              <IonIcon name="location-outline"size={26}   style={[styles.Items]}/>
              <Text  style={[styles.TextItems]}> {t('profile.branch')} </Text>          
              
                  <SimpleLineIcons name="arrow-right" size={24}   style={[styles.Items]}/>
            </TouchableOpacity>
          </View>

          <View style={[styles.tabbarItem]}>
            <TouchableOpacity onPress={() => handleSwitchChange}
           style={[styles.listItems]}>
             {switchValue ? (
                     <IonIcon name="notifications-outline" size={26}   style={[styles.Items]}/>
      ) : (
        <IonIcon name="notifications-off-outline" size={26}   style={[styles.Items]}/>
      )}
              <Text  style={[styles.TextItems,
              Platform.select({
                ios: {
                  marginLeft: 25
                },
                android: {
                  marginLeft: 25
                },
              })
        
              ]}> {t('profile.notification')} </Text>
              <Switch
            value={switchValue}
            onValueChange={handleSwitchChange}
            style={{ alignSelf: 'center', }}
            thumbColor={switchValue ? "#FE7D4E" : "#7B7B7B"} // Couleur du bouton du Switch
        trackColor={{ false: "#7B7B7B", true: "#FE7D4E" }} // Couleur de la piste du Switch
          />
                       </TouchableOpacity>
          </View>

          <View style={[styles.tabbarItem,]}>
            <TouchableOpacity onPress={() => navigation.push("Aboutus")}
           style={[styles.listItems,]}>
              <IonIcon name="information-circle-outline" size={26}   style={[styles.Items]}/>
              <Text  style={[styles.TextItems,]}> {t('profile.aboutus')} </Text>
              <SimpleLineIcons name="arrow-right" size={24}   style={[styles.Items]}/>      
                    </TouchableOpacity>

          </View>
          <View style={Platform.select({
              ios: {
               
      
              },
              android: {
      
              },
            })
          }>

          </View>
          <View style={[styles.tabbarItem,styles.finItems,]}>
            <TouchableOpacity onPress={() => navigation.push("Politics")}
           style={[styles.listItems,]}>
              <IonIcon name="shield-checkmark-outline" size={26}   style={[styles.Items]}/>
              <Text  style={[styles.TextItems,]}> {t('profile.privacy')} </Text>
              <SimpleLineIcons name="arrow-right" size={24}   style={[styles.Items]}/>      
                    </TouchableOpacity>

          </View>
        </View>



        <View style={[styles.containerBtn,Platform.select({
      ios: {
        marginBottom: 150

      },
      android: {
        
      },
    })]}>
        <TouchableHighlight onPress={handleLogout}>
        <View style={[styles.containertextBtn,]}>
          <Text style={[styles.textBtn]}>{t('profile.logout')}</Text>
        </View>
         </TouchableHighlight>
        </View>



        

      </View>
      </ScrollView>
    </View>


  );
}




const styles = StyleSheet.create({
  container: {

    alignItems: 'center',
    padding: 16,
    shadowColor: 'rgb(90, 88, 88)',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#8e8e8e57",
    height: "100%",

    marginTop: 50
  },
  container2: {
    flex: 1,

  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  textHaut1: {
    fontSize: 35
  },
  containeurTextHaut: {
    marginTop: 50,
    paddingLeft: 35,
    backgroundColor: "withe"
  },
  noire: {
    color: "black"
  },
  containeurProfile: {
    marginTop: 40,

  },
  textHaut2: {
    fontSize: 16,
    color: '#0c112c',
    fontWeight: "500"
  },
  flex: {
    flex: 1,

  },
  orange: {
    color: "#FE7D4E",
  },
  persomImg: {
    width: 86,
    height: 86,
    borderRadius: 50,
  },
  containerImg: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%"
  },
  displayFlex: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  nameText: {
    color: "#2c406e",
    fontSize: 24,
    fontWeight: "600",
    marginLeft: 12
  },
  emailProfile: {
    color: "#8687a8",
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 12
  },
  editProfile: {
    color: "#fe7d4e",
    fontSize: 16,
    fontWeight: "400",
    marginLeft: 12
  },
  containerList: {
    height: 50
  },
  containerListItem: {
   

  

    borderColor: "black",
    borderWidth: 1,
   
  },
  tabbarItem: {
    borderColor: '#e0dddd85',
    margin:5,
    padding:20,
    borderTopWidth:1,
    borderRadius:10,
    marginBottom:-5
  
  },
  containerItem: {
    flex: 1,
    width:"100%",

    marginTop:"5%",
  },
  listItems:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"

  },
  Items:{
    color:"#7B7B7B"
  },
  TextItems:{
    textAlign:'center',
    fontSize:16,
    color:"black",
    fontWeight:"400"
  },
  finItems:{
    borderColor: '#e0dddd85',
    borderBottomWidth:1,
    borderRadius:10,
    
  },
  containerBtn:{
    flex: 5 ,

  height:100
  },
  textBtn:{
    fontSize:20,
    fontWeight:"500",
    textAlign:"center",
  },
  containertextBtn:{
    backgroundColor: '#e0dddd85',
    textAlign:"center",
    padding:20,
    borderRadius:18,
    width:300
  },
  TextitemsSwitch:{
    textAlign:'center',
    marginLeft:26
    
  },
});


export default Profile;
