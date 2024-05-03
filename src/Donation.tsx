import { getBranchesData, getDonationData } from './firebase/firebaseData';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown';
import  FontAwesome  from 'react-native-vector-icons/FontAwesome';

import { useDispatch, useSelector } from 'react-redux';
import { setBranchesData } from './redux/reducers/branchesSlice';
import { setDonationData } from './redux/reducers/donationSlice';


function Donation() {
  const { t } = useTranslation();

  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [amount, setAmount] = useState();
  const [offer, setOffer] = useState('');
  const [localisation, setLocalisation] = useState('');
  const dispatch = useDispatch();
  const donations = useSelector((state) => state.donations);
  const [branches, setBranches] = useState<any[]>([]);
  const [donation, setDonation] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);
  
  const currencyImages = {
    USD: require('../assets/img/dollar.png'),
    ZAR: require('../assets/img/south.png'),
    EUR: require('../assets/img/euro.png'),
  };

  const handleCurrencyChange = (value:any) => {
    setSelectedCurrency(value);
    console.log(value)
  };
  const onchangOffer = (text:string) => {
    
    setOffer(text)
  };
  const onchangeLocalisation = (text:string) => {
    
    setLocalisation(text)
  };
  const currencyOptions = ['EUR', 'USD', 'ZAR'];
  const currencyLabels = {
    EUR: 'Euro',
    USD: 'US Dollar',
    ZAR: 'South African Rand',
  };

  const countries = [
    'Egypt',
    'Canada',
    'Australia',
    'Ireland',
    'Brazil',
    'England',
    'Dubai',
    'France',
    'Germany',
    'Saudi Arabia',
    'Argentina',
    'India',
  ];



  const handleSend = async () => {
    console.log("Send")
    getDonationData()

  }
  
 

 
  const don = useSelector((state) => state.donation.donationData);
  console.log(don,"don")
  return (
    <View style={[styles.flex, Platform.select({
      ios: {
        shadowColor: 'rgba(70, 53, 53, 0.361)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 7,
        backgroundColor: "white",
        
      },
      android: {
        elevation: 7,
      },
    })]}>
        

        <ScrollView>

        
      <View style={[styles.containeurTextHaut]}>
     
        <Text style={[styles.orange, styles.textHaut1]}>
        {t('donation.title')}
        </Text>
        <Text style={[styles.noire, styles.textHaut2]}>
        {t('donation.support')}
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


      <View style={[styles.containImg]}>

       <Image source={require('../assets/img/charities1.jpeg')} style={[styles.persomImg]} />
       <Image source={require('../assets/img/charities2.jpeg')} style={[styles.persomImg]} />
       <Image source={require('../assets/img/charities3.jpeg')} style={[styles.persomImg]} />

      </View>


      <View style={styles.containertext}>
        <Text style={styles.text}>
        {t('donation.howmuch')}
        </Text>
      </View>

      <View style={styles.containCurrendy}>
        
      <Image source={currencyImages[selectedCurrency]} style={styles.currencyImage} />
      <View style={styles.containerSelect}>
      <SelectDropdown
          data={currencyOptions}
          defaultButtonText={currencyLabels[selectedCurrency]}
          onSelect={(value) => handleCurrencyChange(value)}
          buttonTextStyle={styles.navigationText}
          buttonStyle={styles.navigationButton}
          dropdownStyle={styles.navigationDropdown}
          renderDropdownIcon={isOpened => {
            return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
          }}
        />
      </View>
    

        <View style={styles.amountContainer}>
        <TextInput
          placeholder="0"
          keyboardType="numeric"
          style={styles.amountInput}
          value={amount}
          onChangeText={(text) => setAmount(text)}
        />


      </View>

      </View>
      <View style={styles.containerInput}>

      <SelectDropdown
            data={countries}
            // defaultValueByIndex={1}
            // defaultValue={'England'}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              onchangOffer(selectedItem);
            }}
            defaultButtonText={'Select country'}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown2BtnStyle}
            buttonTextStyle={styles.dropdown2BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#000000'} size={18} />;
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown2DropdownStyle}
            rowStyle={styles.dropdown2RowStyle}
            rowTextStyle={styles.dropdown2RowTxtStyle}
          />

      </View>
      <View style={styles.containerInput2}>

      <SelectDropdown
            data={countries}
            // defaultValueByIndex={1}
            // defaultValue={'England'}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              onchangeLocalisation(selectedItem);
            }}
            defaultButtonText={'Select country'}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown2BtnStyle}
            buttonTextStyle={styles.dropdown2BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#000000'} size={18} />;
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown2DropdownStyle}
            rowStyle={styles.dropdown2RowStyle}
            rowTextStyle={styles.dropdown2RowTxtStyle}
          />

      </View>
          

      <View style={[styles.containerBtn,Platform.select({
      ios: {
        marginBottom: 150

      },
      android: {
        
      },
    })]}>
        <TouchableHighlight onPress={handleSend}>
        <View style={[styles.containertextBtn,]}>
          <Text style={[styles.textBtn]}>{t('donation.don')}</Text>
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
    height: "200%",

    marginTop: 50
  },
  containeurTextHaut: {
    marginTop: 50,
    paddingLeft: 35,
    backgroundColor: "withe"
  },
  noire: {
    color: "black"
  },
  orange: {
    color: "#FE7D4E",
  },
  textHaut1: {
    fontSize: 35
  },
  textHaut2: {
    fontSize: 16,
    color: '#0c112c',
    fontWeight: "500"
  },
  flex: {
    flex: 1,
  },
  persomImg: {
    width: "30%",
    height: 125,
    borderRadius: 20,
  },
  containImg:{
    display:'flex',
    flexDirection:'row',
  justifyContent: 'space-around', // Espace égal entre les icônes
  width: '100%',
  top:15
  },
  containertext:{
    top:25,
    padding:25
  },
  text:{
    fontSize:16,
    fontWeight:"400"
  },
  currencyImage:{
    width: 50,
    height: 50,
    borderRadius: 20,
  },
  navigationButton: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    width:100,

  },
  containCurrendy:{
    display:"flex",
    flexDirection:"row",
    paddingTop:25,
    margin:5,
    alignContent:"space-around",
    alignItems:"center",
    right:5
  },
  amountInput:{
    fontSize:45,
    color:"black",
  
    left:10
  },
  amountContainer:{
    
  },
  navigationDropdown:{
    
    backgroundColor: '#fbfbfb',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderWidth:1,
    borderColor: '#ffffff74',
  },
  containerSelect:{
    
  },

  dropdown2BtnStyle: {
    width: '60%',
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth:1,
    borderColor: '#5d5d5d74',
  },
  dropdown2BtnTxtStyle: {
    color: '#444',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  dropdown2DropdownStyle: {
    backgroundColor: '#444',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderWidth:1,
    borderColor: '#5d5d5d74',
  },
  dropdown2RowStyle: {backgroundColor: '#ffffff', borderBottomColor: '#5d5d5d74',},
  dropdown2RowTxtStyle: {
    color: '#5d5d5d',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  containerInput:{
    padding:5,
    marginTop:25 
  },
  containerInput2:{
    padding:5,
    marginTop:15
  },
  containerBtn:{
    flex: 5 ,
    marginTop:45,
  height:100
  },
  containertextBtn:{
    backgroundColor: '#FE7D4E',
    textAlign:"center",
    padding:20,
    borderRadius:18,
    width:350
  },
  textBtn:{
    fontSize:20,
    fontWeight:"500",
    textAlign:"center",
    color:"white",
  },
});

export default Donation;
