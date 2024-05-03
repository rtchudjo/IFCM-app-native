import { useNavigation } from '@react-navigation/native';
import ShoppingCard from './Shopping/ShoppingCards';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions, FlatList, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IonIcon } from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { ScrollView } from 'react-native-virtualized-view'



function Shopping() {

  const { t } = useTranslation();
  const categories = [t('shopping.livre'), t('shopping.media'), t('shopping.accessoire')]
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [numColumns, setNumColumns] = useState(2);

  const count = 15;
  const { width } = Dimensions.get('window');
  const isMobile = width <= 767;
  const navigation = useNavigation();

  const dataBook = [
    { id: '1', title: 'OUVERTURE DESPRIT',price:"15",src:"https://ifcmapp.s3.eu-west-3.amazonaws.com/assets/img/shopping/books/eyeOpener.jpg",type:"book",text:"Et ne vous conformez pas à ce monde, mais soyez transformés par le renouvellement de votre esprit, afin que vous puissiez discerner quelle est la volonté de Dieu, ce qui est bon, agréable et parfait." },
    { id: '2', title: 'Card 2',price:"25",src:"https://ifcmapp.s3.eu-west-3.amazonaws.com/assets/img/teaching/Love.jpg",type:"book",text:"Et ne vous conformez pas à ce monde, mais soyez transformés par le renouvellement de votre esprit, afin que vous puissiez discerner quelle est la volonté de Dieu, ce qui est bon, agréable et parfait." },
    { id: '3', title: 'Card 3',price:"35",src:"https://ifcmapp.s3.eu-west-3.amazonaws.com/assets/img/teaching/Love.jpg",type:"book",text:"Et ne vous conformez pas à ce monde, mais soyez transformés par le renouvellement de votre esprit, afin que vous puissiez discerner quelle est la volonté de Dieu, ce qui est bon, agréable et parfait." },
    { id: '4', title: 'Card 4',price:"3",src:"https://ifcmapp.s3.eu-west-3.amazonaws.com/assets/img/teaching/Love.jpg",type:"book",text:"Et ne vous conformez pas à ce monde, mais soyez transformés par le renouvellement de votre esprit, afin que vous puissiez discerner quelle est la volonté de Dieu, ce qui est bon, agréable et parfait." },
    { id: '5', title: 'Card 3',price:"35",src:"https://ifcmapp.s3.eu-west-3.amazonaws.com/assets/img/teaching/Love.jpg",type:"book",text:"Et ne vous conformez pas à ce monde, mais soyez transformés par le renouvellement de votre esprit, afin que vous puissiez discerner quelle est la volonté de Dieu, ce qui est bon, agréable et parfait." },
    { id: '6', title: 'Card 4',price:"3",src:"https://ifcmapp.s3.eu-west-3.amazonaws.com/assets/img/teaching/Love.jpg",type:"book",text:"Et ne vous conformez pas à ce monde, mais soyez transformés par le renouvellement de votre esprit, afin que vous puissiez discerner quelle est la volonté de Dieu, ce qui est bon, agréable et parfait." },

  ];
  const dataMedia = [
    { id: '1', title: 'OUVERTURE DESPRIT',price:"15",src:"https://ifcmapp.s3.eu-west-3.amazonaws.com/assets/img/shopping/books/eyeOpener.jpg",type:"media",text:"Et ne vous conformez pas à ce monde, mais soyez transformés par le renouvellement de votre esprit, afin que vous puissiez discerner quelle est la volonté de Dieu, ce qui est bon, agréable et parfait." },
    { id: '2', title: 'Card 2',price:"25",src:"https://ifcmapp.s3.eu-west-3.amazonaws.com/assets/img/teaching/Love.jpg",type:"media",text:"Et ne vous conformez pas à ce monde, mais soyez transformés par le renouvellement de votre esprit, afin que vous puissiez discerner quelle est la volonté de Dieu, ce qui est bon, agréable et parfait." },
    { id: '3', title: 'Card 3',price:"35",src:"https://ifcmapp.s3.eu-west-3.amazonaws.com/assets/img/teaching/Love.jpg",type:"media",text:"Et ne vous conformez pas à ce monde, mais soyez transformés par le renouvellement de votre esprit, afin que vous puissiez discerner quelle est la volonté de Dieu, ce qui est bon, agréable et parfait." },
    { id: '4', title: 'Card 4',price:"3",src:"https://ifcmapp.s3.eu-west-3.amazonaws.com/assets/img/teaching/Love.jpg",type:"media",text:"Et ne vous conformez pas à ce monde, mais soyez transformés par le renouvellement de votre esprit, afin que vous puissiez discerner quelle est la volonté de Dieu, ce qui est bon, agréable et parfait."},
    { id: '5', title: 'Card 3',price:"35",src:"https://ifcmapp.s3.eu-west-3.amazonaws.com/assets/img/teaching/Love.jpg",type:"media",text:"Et ne vous conformez pas à ce monde, mais soyez transformés par le renouvellement de votre esprit, afin que vous puissiez discerner quelle est la volonté de Dieu, ce qui est bon, agréable et parfait." },
    { id: '6', title: 'Card 4',price:"3",src:"https://ifcmapp.s3.eu-west-3.amazonaws.com/assets/img/teaching/Love.jpg",type:"media",text:"Et ne vous conformez pas à ce monde, mais soyez transformés par le renouvellement de votre esprit, afin que vous puissiez discerner quelle est la volonté de Dieu, ce qui est bon, agréable et parfait." },

  ];
  const dataAccessory = [
    { id: '1', title: 'OUVERTURE DESPRIT',price:"15",src:"https://ifcmapp.s3.eu-west-3.amazonaws.com/assets/img/shopping/books/eyeOpener.jpg",type:"accessoire",text:"Et ne vous conformez pas à ce monde, mais soyez transformés par le renouvellement de votre esprit, afin que vous puissiez discerner quelle est la volonté de Dieu, ce qui est bon, agréable et parfait." },
    { id: '2', title: 'Card 2',price:"25",src:"https://ifcmapp.s3.eu-west-3.amazonaws.com/assets/img/teaching/Love.jpg",type:"accessoire",text:"Et ne vous conformez pas à ce monde, mais soyez transformés par le renouvellement de votre esprit, afin que vous puissiez discerner quelle est la volonté de Dieu, ce qui est bon, agréable et parfait."  },
    { id: '3', title: 'Card 3',price:"35",src:"https://ifcmapp.s3.eu-west-3.amazonaws.com/assets/img/teaching/Love.jpg",type:"accessoire",text:"Et ne vous conformez pas à ce monde, mais soyez transformés par le renouvellement de votre esprit, afin que vous puissiez discerner quelle est la volonté de Dieu, ce qui est bon, agréable et parfait."  },
    { id: '4', title: 'Card 4',price:"3",src:"https://ifcmapp.s3.eu-west-3.amazonaws.com/assets/img/teaching/Love.jpg",type:"accessoire",text:"Et ne vous conformez pas à ce monde, mais soyez transformés par le renouvellement de votre esprit, afin que vous puissiez discerner quelle est la volonté de Dieu, ce qui est bon, agréable et parfait."  },
    { id: '5', title: 'Card 3',price:"35",src:"https://ifcmapp.s3.eu-west-3.amazonaws.com/assets/img/teaching/Love.jpg",type:"accessoire",text:"Et ne vous conformez pas à ce monde, mais soyez transformés par le renouvellement de votre esprit, afin que vous puissiez discerner quelle est la volonté de Dieu, ce qui est bon, agréable et parfait."  },
    { id: '6', title: 'Card 4',price:"3",src:"https://ifcmapp.s3.eu-west-3.amazonaws.com/assets/img/teaching/Love.jpg",type:"accessoire",text:"Et ne vous conformez pas à ce monde, mais soyez transformés par le renouvellement de votre esprit, afin que vous puissiez discerner quelle est la volonté de Dieu, ce qui est bon, agréable et parfait."  },

  ];
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    // Ajoutez ici la logique pour changer d'élément en fonction de la catégorie sélectionnée
  };

  useEffect(() => {
    const { width } = Dimensions.get('window');
    const isTablet = width >= 600;
    setNumColumns(isTablet ? 3 : 2);
  }, []); 


  const getContentBasedOnCategory = () => {
    // Ajoutez ici la logique pour renvoyer le contenu en fonction de la catégorie active
    // Par exemple, retournez un composant ou un texte différent en fonction de la catégorie
    if (activeCategory === t('shopping.livre')) {

      return <View>
        <View style={styles.containText}>
          <Text style={styles.textCate}> {t('shopping.all')} {t('shopping.livre')}</Text>
        </View>
      
        <View style={[styles.containerCard]}>
        <FlatList
      data={dataBook}
      numColumns={numColumns} 
      renderItem={({ item }) => <ShoppingCard id={item.id} title={item.title} price={item.price} srcImg={item.src} text={item.text} type="book"/>}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  
     </View>
        
      </View>

    } else if (activeCategory === t('shopping.media')) {

      return <View>
        <View style={styles.containText}>
          <Text  style={styles.textCate}>  {t('shopping.all')} {t('shopping.media')}</Text>
        </View>
        <View style={[styles.containerCard]}>
     <FlatList
      data={dataMedia}
      numColumns={numColumns} 
      renderItem={({ item }) => <ShoppingCard id={item.id}  title={item.title} price={item.price} srcImg={item.src} text={item.text} type="media" />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingBottom: 20,}}

    />
     </View>
      </View>

    } else if (activeCategory === t('shopping.accessoire')) {

      return <View style={{ flex: 1 }}>

        <View style={styles.containText}>
          <Text  style={styles.textCate}>  {t('shopping.all')} {t('shopping.accessoire')} </Text>
        </View>
        <View style={[styles.containerCard]}>
     <FlatList
      data={dataAccessory}
      numColumns={numColumns} 
      renderItem={({ item }) =>
      
   <ShoppingCard  id={item.id}   title={item.title}  price={item.price} srcImg={item.src} text={item.text} type="accessoire" />

    }
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingBottom: 20 }}

    />
     </View>
        
        
      </View>
    }
    return null;
  };

  return (
    <ScrollView style={[styles.flex, Platform.select({
      ios: {
        shadowColor: 'rgba(70, 53, 53, 0.361)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 7,
        backgroundColor: "white",
        paddingBottom: 20,
      },
      android: {
        elevation: 7,
        paddingBottom: 15,
        marginBottom: 25
      },
    })]}>

      <View style={[styles.containeurTextHaut, { flexDirection: 'row', alignItems: 'center' }]}>
        <Text style={[styles.orange, styles.textHaut1]}>
          {t('shopping.title')}
        </Text>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', right: 25 }}>
          <SimpleLineIcons name="handbag" color="grey" size={32} style={styles.icon} />
          {count > 0 && (
            <View style={styles.iconBadgeContainer}>
              <Text style={styles.iconBadgeText}>{count}</Text>
            </View>
          )}
        </View>
      </View>

      <View style={styles.containerBtn}>
        <View style={styles.buttonsContainer}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.button,
                category === activeCategory ? styles.activeButton : styles.iconNone,
              ]}
              onPress={() => handleCategoryClick(category)}
            >
              <Text style={[
                styles.buttonText,
                category === activeCategory ? styles.buttonTextactive : styles.buttonTextnone,
              ]}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.containerShop}>
          {getContentBasedOnCategory()}
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
  containerShop: {
    alignItems: 'center',
    padding: 16,
    shadowColor: 'rgb(90, 88, 88)',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#8e8e8e57",
    height: "200%",
  },
  containeurTextHaut: {
    marginTop: 50,
    paddingLeft: 35,
    backgroundColor: "withe",
    display: "flex",
    flexDirection: "row",


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
  textCat: {
    fontSize: 24,
    lineHeight: 20,
    fontWeight: "600",
    color: "#8687a8",
    padding: 5,

  },
  iconBadgeContainer: {
    backgroundColor: "#FE7D4E",// Couleur de fond du badge
    borderRadius: 10, // Coins arrondis du badge
    padding: 5, // Espace intérieur du badge
    position: 'absolute', // Position absolue pour se superposer à l'icône
    right: -10, // Décaler le badge vers la droite par rapport à l'icône
    top: -5, // Décaler le badge vers le haut par rapport à l'icône
  },
  iconBadgeText: {
    color: 'white', // Couleur du texte du badge
    fontSize: 12, // Taille de la police du texte du badge
    fontWeight: 'bold', // Gras pour mettre en évidence le texte du badge
  },
  icon: {
    display: "flex",
    flexDirection: "row",
    alignContent: "space-between"
  },
  containerBtn: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    width: "100%"
  },
  buttonsContainer: {
    flexDirection: 'row',
    display: "flex",
    justifyContent: "space-evenly",
    padding: 5,
    marginBottom: 20,
    marginTop: 20,
  },
  button: {
    padding: 10,
    marginHorizontal: 10,

    borderRadius: 5,
    backgroundColor: "#ffebe4", // Couleur de fond pour le bouton actif
    width: "25%",
    height:40
  },
  activeButton: {
    backgroundColor: "#FE7D4E", // Couleur de fond pour le bouton actif
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: "center"
  },
  iconNone: {

  },
  buttonTextactive: {
    color: "white",
  },
  buttonTextnone: {
    color: "#FE7D4E",
  },
  textCate: {
    color: "#8687a8",
    fontWeight: "600",
    lineHeight: 20,
    fontSize: 21,
    textAlign:"center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  containText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    textAlign:"right",

    marginTop:15
  },
  containerCard:{
    flex:1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
export default Shopping;
