import Card from './Teachings/TeachingCard';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions, FlatList, Platform,  StyleSheet, Text, View } from 'react-native';
import CardTeaching from './Teachings/TeachingCard';
import { ScrollView } from 'react-native-virtualized-view'



function Teachings() {

  const { t } = useTranslation();
  const [numColumns, setNumColumns] = useState(2);

  const data = [
    { id: '1', text: 'Card 1',text2:"3 lessons",src:"https://ifcmapp.s3.eu-west-3.amazonaws.com/assets/img/teaching/Love.jpg" },
    { id: '2', text: 'Card 2',text2:"3 lessons",src:"https://ifcmapp.s3.eu-west-3.amazonaws.com/assets/img/teaching/Love.jpg" },
    { id: '3', text: 'Card 3',text2:"3 lessons",src:"https://ifcmapp.s3.eu-west-3.amazonaws.com/assets/img/teaching/Love.jpg" },
    { id: '4', text: 'Card 4',text2:"3 lessons",src:"https://ifcmapp.s3.eu-west-3.amazonaws.com/assets/img/teaching/Love.jpg" },
    { id: '5', text: 'Card 5',text2:"3 lessons",src:"https://ifcmapp.s3.eu-west-3.amazonaws.com/assets/img/teaching/Love.jpg" },
    { id: '6', text: 'Card 6',text2:"3 lessons",src:"https://ifcmapp.s3.eu-west-3.amazonaws.com/assets/img/teaching/Love.jpg" },
  ];
  useEffect(() => {
    const { width } = Dimensions.get('window');
    const isTablet = width >= 600;
    setNumColumns(isTablet ? 3 : 2);
  }, []); 
  return (
    <ScrollView>
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
       

      


        
      <View style={[styles.containeurTextHaut]}>
     
        <Text style={[styles.orange, styles.textHaut1]}>
        {t('teaching.title')}
        </Text>
        <Text style={[styles.noire, styles.textHaut2]}>
        {t('teaching.topic')}
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
        <View style={[styles.catContainer]}>
          <Text style={[styles.textCat]}>
          {t('teaching.categories')}
          </Text>
     <View style={[styles.containerCard]}>
     <FlatList
      data={data}
      numColumns={numColumns} 
      renderItem={({ item }) => <CardTeaching id={item.id} text={item.text} text2={item.text2} srcImg={item.src} />}
      keyExtractor={(item) => item.id}
     
    />
     </View>
        </View>
        

     
        </View>
 
        </View>
        </ScrollView>
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
  textCat:{
    fontSize:24,
    lineHeight:20,
    fontWeight:"600",
    color:"#8687a8",
    padding:5,
    
  },
  containerCard:{
    

  }
});
export default Teachings;
