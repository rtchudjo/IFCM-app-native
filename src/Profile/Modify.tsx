import React, { useEffect, useRef, useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import  FontAwesome  from 'react-native-vector-icons/FontAwesome';
import countriesWithFlags from '../Utils/countriesWithFlagsEn';

import { getLocales, getCalendars } from 'expo-localization';
import genderFR from '../Utils/formDataFr';
import genderEN from '../Utils/formDataEn';
import { User } from 'firebase/auth';
import FilialeEn from '../Utils/filialeen';
import flags from '../Utils/flag';


function Modify() {
  const { t } = useTranslation();

  const [photo, setPhoto] = useState<any>(null); // État pour stocker la photo capturée
  const cameraRef = useRef<Camera | null>(null);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean>(false);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState<boolean>(false);
  const [genderuser, setGenderuser] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState<number>();
  const [email, setEmail] = useState('');

  const [country, setCountry] = useState('');
  const [filiale, setFiliale] = useState('');
  const [lang, setLang] = useState('');

  const [codeLangue, setCodeLangue] = useState<string>('');


  const citiesDropdownRef = useRef();
  const handleIconPressCam = async () => {
    if (cameraRef.current) {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
      
      console.log(cameraPermission);
      console.log(mediaLibraryPermission);

      if (hasCameraPermission === undefined) {
        return <Text>Requesting permissions...</Text>
      } else if (!hasCameraPermission) {
        return <Text>Permission for camera not granted. Please change this in settings.</Text>
      }
      let options = {
        quality: 1,
        base64: true,
        exif: false
      };
  
      let newPhoto = await cameraRef.current.takePictureAsync(options);
      
      setPhoto(newPhoto);
      if (photo) {
        MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
          setPhoto(null);
        });
      }
    }
  };

  useEffect(() => {
    // Récupérez le code de langue actuel à l'aide de getLocales()
    async function fetchLanguageCode() {
      const locales = await getLocales();
      if (locales.length > 0) {
        setCodeLangue(locales[0].languageCode);
        console.log(locales[0].languageCode, 'Code de langue utilisateur');
      }
    }
    console.log(codeLangue)
    fetchLanguageCode();
  }, []);

  const onchangeName = (text:string) => {
    
    setName(text)
  };

  const onchangeAge = (text:number) => {
    
    setAge(text)
  };
  const onchangeCountry = (text:string) => {
    
    setCountry(text)
  };
  const onchangeFiliale = (text:string) => {
    
    setFiliale(text)
  };
  const onchangeLang = (text:string) => {
    
    setLang(text)
  };
  const handleSend = () => {
    if(genderuser && name && age && country && filiale && lang)
    {
      const titleCountry = country.title
      let titleLang;
      if(lang === "English"){
        titleLang = "en"
      }
      else{
        titleLang = "fr"
      }
      console.log(genderuser,name,age,titleCountry,titleLang,lang,photo);

    }
  }
  return (
    <View style={{ backgroundColor: 'white', flex: 1, }}>
      <ScrollView>

      <View style={styles.containText}>
        <Text style={styles.TextGen}>{t('edit.modifyuser')}</Text>
      </View>

      <View style={styles.containImg}>
        <View>
          {photo ? (
            <Image source={{ uri: photo.uri }} style={styles.personImg} />
          ) : (
            <Image
              source={require('../../assets/img/1200px-Unknown_person.jpeg')}
              style={styles.personImg}
            />
          )}
        </View>

        <View style={styles.camIcon}>
          <TouchableOpacity onPress={handleIconPressCam}>
            <IonIcon name="camera" size={32} color="#808080" />
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={[styles.containUserInfo]}>
      {codeLangue === 'en' ? (
        <View>

<View style={[styles.genderUserContainer]}>
          <Text style={[styles.textUser]}>
           {t('edit.gender')} :
          </Text>
          <SelectDropdown
            data={genderEN}
            defaultValueByIndex={1} 
            // defaultValueByIndex={1} // use default value by index or default value
            // defaultValue={'Canada'} // use default value by index or default value
            onSelect={(selectedItem, index) => {
              
              setGenderuser(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}

            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
          />
        </View>

        <View style={[styles.genderUserContainer,styles.inputText]}>
          <Text style={[styles.textUser]}>
           {t('edit.name')} :
          </Text>
          <TextInput
          style={[styles.inputName]}
          placeholder={t('edit.name')}
          value={name}
          // Gérez la valeur de l'entrée email ici
          onChangeText={onchangeName}
          
        />
        </View>

        <View style={[styles.genderUserContainer,styles.inputText]}>
          <Text style={[styles.textUser,styles.Gris]}>
           {t('edit.email')} :
          </Text>
          <TextInput
          style={[styles.inputName,styles.inputEmail]}
          placeholder={t('edit.email')}
          value={email}
          editable={false}
          // Gérez la valeur de l'entrée email ici
        
          
        />
        </View>
          
        <View style={[styles.genderUserContainer,styles.inputText]}>
          <Text style={[styles.textUser]}>
           {t('edit.age')} :
          </Text>
          <TextInput
          style={[styles.inputName,styles.inputAge]}
          placeholder={t('edit.age')}
          value={age}
          keyboardType="numeric"
          onChangeText={onchangeAge}
          // Gérez la valeur de l'entrée email ici
        
          
        />
        </View>

        <View style={[styles.genderUserContainer,styles.inputText]}>
          <Text style={[styles.textUser]}>
           {t('edit.country')} :
          </Text>
          <SelectDropdown
            data={countriesWithFlags}
            // defaultValueByIndex={1}
            // defaultValue={{
            //   title: 'England',
            //   image: require('./Images/England.jpg'),
            // }}
            buttonTextStyle={{
              display:'flex',
              
            }}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              onchangeCountry(selectedItem);
            }}
            buttonStyle={styles.dropdown3BtnStyle}
            
            renderCustomizedButtonChild={(selectedItem, index) => {
              return (
                <View style={styles.dropdown3BtnChildStyle}>
                  {selectedItem ? (
                    <Image source={selectedItem.image} style={styles.dropdown3BtnImage} />
                  ) : (
                    <IonIcon name="md-earth-sharp" color={'#444'} size={32} />
                  )}
                  <Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem.title : t('edit.selectcountry')  }</Text>
                  
                </View>
              );
            }}
            renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
            }}
            dropdownStyle={styles.dropdown3DropdownStyle}
            
            rowStyle={styles.dropdown3RowStyle}
            selectedRowStyle={styles.dropdown1SelectedRowStyle}
            renderCustomizedRowChild={(item, index) => {
              return (
                <View style={styles.dropdown3RowChildStyle}>
                  <Image source={item.image} style={styles.dropdownRowImage} />
                  <Text style={styles.dropdown3RowTxt}>{item.title}</Text>
                </View>
              );
            }}
            search
            searchInputStyle={styles.dropdown3searchInputStyleStyle}
            searchPlaceHolder={'Search here'}
            searchPlaceHolderColor={'#020202'}
            renderSearchInputLeftIcon={() => {
              return <FontAwesome name={'search'} color={'#000000'} size={18} />;
            }}
          />
        </View>
        
        <View style={[styles.genderUserContainer,styles.inputText]}>
          <Text style={[styles.textUser]}>
           {t('edit.filiale')} :
          </Text>

         
          <SelectDropdown
            data={FilialeEn}
            // defaultValueByIndex={1}
            // defaultValue={'Egypt'}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
              onchangeFiliale(selectedItem);
            }}
            defaultButtonText={'Select your branchs'}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
            selectedRowStyle={styles.dropdown1SelectedRowStyle}
            search
            searchInputStyle={styles.dropdown1searchInputStyleStyle}
            searchPlaceHolder={t('edit.selectbranc')}
            searchPlaceHolderColor={'darkgrey'}
           
          />



          </View>

             
        <View style={[styles.genderUserContainer,styles.inputText]}>
          <Text style={[styles.textUser]}>
           {t('edit.lang')} :
          </Text>

         
          <SelectDropdown
              data={flags}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                onchangeLang(selectedItem.title);
              }}
              defaultButtonText= {t('edit.selectlang')} 
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem.title;
              }}
              rowTextForSelection={(item, index) => {
                return item.title;
              }}
              buttonStyle={styles.dropdown2BtnStyle}
              buttonTextStyle={styles.dropdown2BtnTxtStyle}
              renderDropdownIcon={isOpened => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
              }}
              dropdownIconPosition={'right'}
              dropdownStyle={styles.dropdown2DropdownStyle}
              rowStyle={styles.dropdown2RowStyle}
              rowTextStyle={styles.dropdown2RowTxtStyle}
            />



          </View>

          
          </View>

       

        

      ) : (
      <View>
       

        </View>

      )}

 <View style={styles.containerHh}>
 <TouchableHighlight onPress={handleSend} style={styles.buttonContainer1}>
          <View style={[styles.containertextBtn,]}>
          <Text style={[styles.textBtn,]}>{t('help.send')}</Text>
          </View>
         </TouchableHighlight>
 </View>

       
      </View>
      </ScrollView>

    </View>
  );
}

export default Modify;

const styles = StyleSheet.create({
  TextGen: {
    padding: 16,
    marginTop: 25,
    color: '#fe7d4e',
    fontSize: 20,
    fontWeight: 'bold',
  },
  containText: {
    paddingBottom: 15,
  },
  containUserInfo:{
    padding:20,
  },
  personImg: {
    width: 86,
    height: 86,
    borderRadius: 50,
  },
  containImg: {
    padding: 10,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  camIcon: {
    padding: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fe7d4e',
    borderRadius: 5,
  },
  textUser:{
    fontSize:16,
    fontWeight:"400",
    paddingLeft:5
  },
  dropdown3BtnStyle: {
    width: '100%',
    height: 70,
    backgroundColor: '#FFF',
    paddingHorizontal: 0,
    fontSize:10
  },
  dropdown3BtnChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  dropdown3BtnImage: {width: "20%", height: 45, resizeMode: 'cover'},
  dropdown3BtnTxt: {
    color: '#444',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 20,
    marginHorizontal: 12,
  },
  dropdown3DropdownStyle: {backgroundColor: 'white',

  borderBottomLeftRadius: 12,
  borderBottomRightRadius: 12,
  borderWidth:1,
  borderColor: '#ffffff74',

},
  dropdown3RowStyle: {
    backgroundColor: 'white',
    fontSize:15,
    height: 50,
   
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  dropdownRowImage: {width: 65, height: 55},
  dropdown3RowTxt: {
    color: '#030303',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
    marginHorizontal: 12,
  },
  dropdown3searchInputStyleStyle: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
  },
  dropdown1BtnStyle: {
    width: '50%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    display:"flex",
    marginRight:20
  },
  dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown1DropdownStyle: {
  backgroundColor: '#fbfbfb',
  borderBottomLeftRadius: 12,
  borderBottomRightRadius: 12,
  borderWidth:1,
  borderColor: '#ffffff74',

},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown1SelectedRowStyle: {backgroundColor: 'rgba(0,0,0,0.1)'},
  dropdown1searchInputStyleStyle: {
    backgroundColor: '#EFEFEF',
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
  },
  dropdown2BtnStyle: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
 
  },
  dropdown2BtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown2DropdownStyle: {backgroundColor: '#EFEFEF',


  borderBottomLeftRadius: 12,
  borderBottomRightRadius: 12,
  borderWidth:1,
  borderColor: '#ffffff74',
},
  dropdown2RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown2RowTxtStyle: {color: '#444', textAlign: 'left'},
  genderUserContainer:{
    display:"flex",
    flexDirection:"row",
  alignItems:"center",
  padding:5
  },
  inputName:{
    padding:15,
    marginLeft:33,
    
    color:"black"
  },
  inputText:{
    width:"80%",
    color:"black"
  },
  Gris:{
    color:"#9f9f9f"
  },
  inputAge:{
    marginLeft:45
  },
  inputEmail:{
    marginLeft:35
  },
  containertextBtn:{
    backgroundColor: '#FE7D4E',
    padding:20,
    borderRadius:18,
    width:300,
   marginTop:15,
  
    
  },
  textBtn:{
    fontSize:20,
    fontWeight:"500",
    textAlign:"center",
    color:"white",


  },
  buttonContainer1: {
    justifyContent: 'center', // Centre verticalement les éléments enfants
    alignItems: 'center', // Centre horizontalement les éléments enfants
    
  },
  cointainNone:{
    margin:50
  },
 
});
