import React, { useEffect, useRef, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import  FontAwesome  from 'react-native-vector-icons/FontAwesome';
import countriesWithFlags from '../Utils/countriesWithFlagsEn';

function Modify() {
  const { t } = useTranslation();

  const [photo, setPhoto] = useState<any>(null); // État pour stocker la photo capturée
  const cameraRef = useRef<Camera | null>(null);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean>(false);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState<boolean>(false);
  
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
 

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
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

        <View>
          
          <Text style={[styles.textUser]}>
           {t('edit.gender')} :
          </Text>

          <SelectDropdown
            data={countriesWithFlags}
            // defaultValueByIndex={1}
            // defaultValue={{
            //   title: 'England',
            //   image: require('./Images/England.jpg'),
            // }}
            buttonTextStyle={{
              display:'flex'
            }}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
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
                  <Text style={styles.dropdown3BtnTxt}>{selectedItem ? selectedItem.title : 'Select country'}</Text>
                  <FontAwesome name="chevron-down" color={'#444'} size={18} />
                </View>
              );
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
            searchPlaceHolderColor={'#F8F8F8'}
            renderSearchInputLeftIcon={() => {
              return <FontAwesome name={'search'} color={'#FFF'} size={18} />;
            }}
          />

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
    fontWeight:"400"
  },
  dropdown3BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFF',
    paddingHorizontal: 0,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#444',
  },
  dropdown3BtnChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  dropdown3BtnImage: {width: 45, height: 45, resizeMode: 'cover'},
  dropdown3BtnTxt: {
    color: '#444',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginHorizontal: 12,
  },
  dropdown3DropdownStyle: {backgroundColor: 'slategray'},
  dropdown3RowStyle: {
    backgroundColor: 'slategray',
    borderBottomColor: '#444',
    height: 50,
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  dropdownRowImage: {width: 45, height: 45, resizeMode: 'cover'},
  dropdown3RowTxt: {
    color: '#F1F1F1',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    marginHorizontal: 12,
  },
  dropdown3searchInputStyleStyle: {
    backgroundColor: 'slategray',
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
  },
  dropdown1SelectedRowStyle: {
    backgroundColor: 'rgba(0,0,0,0.1)'
  },

});
