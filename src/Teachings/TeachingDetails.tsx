import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions, Image, Platform, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';

const TeachingsDetails = () => {
  const { t } = useTranslation();
  const [isLocked, setIsLocked] = useState(true);
  const [displayText, setDisplayText] = useState('sdfsdfsd sdfsdfsd sdfsdfsd sdfsdfsd sdfsdfsd sdfsdfsd sdfsdfsd sdfsdfsd sdfsdfsd sdfsdfsd');

  const { width, height } = Dimensions.get('window');
  const isAndroid = Platform.OS === 'android';
  const isTablet = width >= 600 && height >= 600;
  const imageWidth = isTablet ? '100%' : '100%';
  const imageHeight = isTablet ? 550 : 350;

  const marginTopValue = isTablet ? 0 : -35;
  const paddingTopValue = isAndroid ? 35 : 0;
  useEffect(() => {
    if (isLocked) {
      const originalText = "L'amour n'est pas tel qu'il est dépeint dans les romans d'amour. L'amour n'est pas tel qu'il est dépeint dans les romans d'amour.L'amour n'est pas tel qu'il est dépeint dans les romans d'amour.";
      const truncatedText = originalText.substring(0, originalText.length * 0.5); // Afficher seulement 10% du texte
      setDisplayText(truncatedText);
    }
  }, [isLocked]);
  const handlePay = async () => {
    console.log("Send")


  }

  return (
    <ScrollView style={[styles.containerEvents, { paddingTop: paddingTopValue }]}>
      <View style={[styles.imageContainer, { marginTop: marginTopValue }]}>
        <Image
          source={{
            uri: "https://ifcmapp.s3.eu-west-3.amazonaws.com/assets/img/teaching/Love/defining-love.png"
          }}
          style={{ width: imageWidth, height: imageHeight, borderRadius: 15 }}
        />
        <View style={styles.containTitle}>
          <Text style={styles.title}>
            MOn titre
          </Text>
        </View>
        {isLocked ? (
          <View>
            <View style={styles.containerText}>
              <Image
                source={require('../../assets/icons/lock.png')}
                style={styles.lockIcon}
              />
              <Text style={styles.textlock}>
                {displayText}
              </Text>
            </View>
            <View style={styles.containShop}>
              <Text style={styles.textShop}>
                {t('teachingorder.shop')}</Text>
              <View style={styles.back}>
                <Text style={styles.textPrice}>
                  120 ZAR</Text>
              </View>

            </View>
            <View>
              <TouchableOpacity onPress={handlePay} style={[styles.contain,]}>
                <View style={[styles.containertextBtn,]}>
                  <Text style={[styles.textBtn]}>{t('teachingorder.purchase')}</Text>
                </View>
              </TouchableOpacity>
            </View>


          </View>

        ) : (
          <View style={styles.containerText}>
            <Text style={styles.unlock}>
              sdfsdfsd
              sdfsdfsd
              sdfsdfsd
              sdfsdfsd
              sdfsdfsd
              sdfsdfsd
              sdfsdfsd
              sdfsdfsd
              sdfsdfsd
              sdfsdfsd
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerEvents: {
    padding: 10,
    flex: 1,
  },
  lockIcon: {
    width: 25,
    height: 25,
    left: "90%",
    top: "-40%"
  },
  containShop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    padding: 15
  },
  textPrice: {
    color: "#fe7d4e",
    fontSize: 14,
    fontWeight: "300",
    lineHeight: 20,
    padding: 5

  },
  back: {
    backgroundColor: "#fe7d4e4f",
    borderRadius: 5,
    left: 10
  },
  textShop: {
    fontSize: 16,
    color: "black"
  },
  textlock: {
    display: "flex",

    overflow: "hidden",

    color: "#737373"
  },
  containerText: {
    padding: 20
  },
  unlock: {

  },
  containTitle: {
    padding: 15,
    bottom: -15
  },
  title: {
    color: "#0f152f",
    fontSize: 26,
    fontWeight: "600",

  },
  imageContainer: {
    padding: 15,
    borderRadius: 15
  },
  containertextBtn:{
    backgroundColor: '#FE7D4E',
    textAlign:"center",
    padding:15,
    borderRadius:18,
    width:250,
    display:"flex",
    flexDirection:"row",
    alignContent:"center",
    alignItems:"center",
   justifyContent:"center"
  },
  textBtn:{
    fontSize:20,
    fontWeight:"500",
    textAlign:"center",
    color:"white",
  },
  contain:{
    display:"flex",
    flexDirection:"row",
    alignContent:"center",
    alignItems:"center",
   justifyContent:"center"
  },
});

export default TeachingsDetails;
