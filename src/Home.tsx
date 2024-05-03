import React, { useEffect, useState } from 'react';
import { Image, Platform, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, SafeAreaView } from 'react-native';

import { authUser, firebaseApp } from './firebase/firebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from './redux/actions/authActions'; // Importez l'action de déconnexion depuis authActions.js
import { ScrollView } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importez les icônes de FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight,faCirclePlus } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import Feather from 'react-native-vector-icons/Feather';
import { IonIcon } from 'react-native-vector-icons/Ionicons';
import * as Clipboard from 'expo-clipboard';
import Toast from 'react-native-root-toast';
import { StatusBar } from 'react-native';
import  Ionicons from '@expo/vector-icons/Ionicons';
import EventComponent from './Home/Events/Events';


function Home({ navigation }) {
 
  const auth = getAuth(firebaseApp);
  const { t } = useTranslation();

  const user = useSelector((state) => state.auth); // Accédez à l'état de l'utilisateur depuis le store
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCopyButtonVisible, setCopyButtonVisible] = useState(false);

console.log(user,"redux user");
const getCurrentTime = () => {
  const currentTime = new Date().getHours();
  let greeting = '';

  if (currentTime >= 5 && currentTime < 12) {
    greeting = t('home.morning');
  } else if (currentTime >= 12 && currentTime < 18) {
    greeting =  t('home.afternoon');
  } else {
    greeting = t('home.evening');
  }

  return greeting;
};

const greeting = getCurrentTime();
const optionsSuccess = {
  duration:1500,
  position: 200,
  animation:true,
  shadow: true,
  backgroundColor: "#2bff00",
  opacity: 0.75,
  shadowColor: "grey",
  textColor: "black",
  delay: 150,
  keyboardAvoiding:true,
}

const copyToClipboard = async () => {
  await Clipboard.setStringAsync('hello world');
  Toast.show(t('home.copied'),optionsSuccess)
};

  return (
<ScrollView>
    <View style={[styles.flex, Platform.select({
      ios: {
        shadowColor: 'rgba(70, 53, 53, 0.361)',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.7,
        shadowRadius: 7,
     
        
      },
      android: {
        elevation: 7,
       
      },
    })]}>
      <View style={[styles.imgLogo]}>
       <Image style={[styles.ifcmLogo]}  source={require('../assets/img/ifcm_logo.png')}         />

      </View>
   

      <View style={[styles.containerTextHaut]}>
        <Text  style={[styles.textHautNoir]}>
        {greeting},{" " + user.displayName}
        </Text>
      </View>

      <TouchableOpacity style={styles.iconContainer}>
       <Image style={[styles.quotesImg]}  source={require('../assets/img/quotes.png')}         />
      </TouchableOpacity>
      <View style={[styles.containerprophetic,]}>
      
      <SafeAreaView style={styles.containerScroll}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}
      style={styles.scrollView
      
      }>
        <View style={styles.containerProphetic}>
          <Text style={[styles.titlteprophetic]}>
        {t('home.prophetic')}
        </Text>
        <Text style={[styles.subtitleprophetic]}>
        L'HUMILITÉ, BRISER L'ORGUEIL ET L'ARROGANCE
        </Text>
        <Text style={styles.scrollableText}>
          
                  Pour que la paix règne, la gloire de Dieu doit être diffusée dans le monde entier. La façon d'influencer les gens pour qu'ils se rapprochent de Dieu est la bonté et l'amour de la Bible. L'étude de la Bible apporte des bénédictions à l'âme de ses enfants. La vraie compréhension de la Bible ne vient que par l'humilité, il faut donc se vider de tout orgueil. Il y a trois (3) domaines dans lesquels les gens sont particulièrement enclins à l'orgueil ;        L'intelligence, le pouvoir et la richesse. Grâce à la compréhension de la Bible que l'on acquiert en cultivant l'humilité, on est capable d'influencer les autres à se repentir et à se rapprocher de Dieu. La repentance peut être un processus très douloureux, car les péchés d'une personne font que son âme est revêtue de "vêtements sales" - Zacharie 3:4 - et ceux-ci doivent être enlevés. Néanmoins, il n'y a rien qui rehausse autant la gloire de Dieu que lorsque ceux qui étaient très éloignés de Lui se repentent et se rapprochent de Lui. La paix ne peut entrer dans le monde que par la prière. La prière parfaite dépend de la crainte de Dieu. C'est par la crainte de Dieu que nous sommes capables de vaincre nos passions corporelles et d'atteindre ainsi la paix intérieure. Ce n'est qu'avec la paix et l'harmonie intérieures que l'on peut offrir une prière parfaite. La prière est comme une offrande sacrificielle, qui doit être sans défaut. Nous devrions prier pour tout ce dont nous avons besoin dans la vie. Plutôt que de consacrer tous nos efforts à ce moyen mondain d'essayer d'obtenir ce dont nous avons besoin, nous devrions avoir la foi que " Dieu est bon pour tous " (Psaume 145:9). Dieu a le pouvoir de nous fournir tout ce dont nous avons besoin avec un minimum d'effort de notre part. Les mots sacrés des prières ont le pouvoir de surmonter les conflits et donc d'apporter la paix . 🙏🧎😇❤️🇮🇱😁♥️
                Author
        </Text>
       
        </View>
      </ScrollView>
      </SafeAreaView>
      

      {isCopyButtonVisible && (
        <TouchableOpacity style={styles.copyButton} onPress={copyToClipboard}>
          <Feather name="edit" color="white" size={25} style={styles.ele}/>
        </TouchableOpacity>
      )}


      <TouchableOpacity
        style={[styles.toggleButton,styles.orangeIcon]}
        onPress={() => setCopyButtonVisible(!isCopyButtonVisible)}>
        {isCopyButtonVisible ? 
            <Feather name="x-circle" color="white" size={25}  style={styles.ele}/>
            : 
        <Feather name="plus-circle" color="white" size={25} style={styles.ele}/>
       }
      </TouchableOpacity>
      </View>

      <View style={[styles.containerVerset,]}>
       <Text style={[styles.titleVerset,]}>
       {t('home.verse')}
       </Text>
      <View  style={[styles.verset,]}>
      <Ionicons name="bookmark" color="#4C8DFF" size={18} style={styles.ele}/>

      <Text style={[styles.versetText,]}>
        JEAN 14:12
       </Text>
      </View>
       <Text style={[styles.textVerset,]}>
       «En vérité, en vérité, je vous le dis, celui qui croit en moi fera aussi les œuvres que je fais, et il en fera de plus grandes, parce que je m’en vais au Père ;»
       </Text>
      </View>

       <View style={[styles.containerEventsTitle,]}>
        <Text style={[styles.titleEvents]}>
        {t('home.events')}
        </Text>
       <View style={[styles.containerEvents,]}>


       <EventComponent 
        title="Fri May 26 2023 - Sun May 28 2023"
        subtitle="2023 RÉVEIL AU BURUNDI | AVEC LE PROPHÈTE PHILIP BANDA"
        text="2023 RÉVEIL AU BURUNDI  AVEC LE PROPHÈTE PHILIP BANDA"
        imageUrl="https://ifcmapp.s3.eu-west-3.amazonaws.com/assets/img/event/burun.png"
        id="1"
        />
          <EventComponent 
        title="Fri May 26 2023 - Sun May 28 2023"
        subtitle="2023 RÉVEIL AU BURUNDI | AVEC LE PROPHÈTE PHILIP BANDA"
        text="2023 RÉVEIL AU BURUNDI  AVEC LE PROPHÈTE PHILIP BANDA"
        imageUrl="https://ifcmapp.s3.eu-west-3.amazonaws.com/assets/img/event/burun.png"
        id="2"
       />
          <EventComponent 
         title="Fri May 26 2023 - Sun May 28 2023"
         subtitle="2023 RÉVEIL AU BURUNDI | AVEC LE PROPHÈTE PHILIP BANDA"
         text="2023 RÉVEIL AU BURUNDI  AVEC LE PROPHÈTE PHILIP BANDA"
         imageUrl="https://ifcmapp.s3.eu-west-3.amazonaws.com/assets/img/event/burun.png"
        id="3"
       />
          <EventComponent 
        title="Fri May 26 2023 - Sun May 28 2023"
        subtitle="2023 RÉVEIL AU BURUNDI | AVEC LE PROPHÈTE PHILIP BANDA"
        text="2023 RÉVEIL AU BURUNDI  AVEC LE PROPHÈTE PHILIP BANDA"
        imageUrl="https://ifcmapp.s3.eu-west-3.amazonaws.com/assets/img/event/burun.png"
        id="4"
        />
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
  ifcmLogo:{
    width:250,
    height:100,
 
    paddingBottom:15,
    top:25,
    left:15
  },
  imgLogo:{
    marginBottom:50
  },
  containerTextHaut:{
    display:"flex",
    flexDirection:"row",
    padding:5,
    left:20
  },
  textHautNoir:{
    color:"black",
    fontSize:22,
    fontWeight:"600",
    lineHeight:38
  },
  containerprophetic:{
    backgroundColor:'#FE7D4E',
    padding:10,
    margin:15,
    borderRadius:14,
    boxShadow: 25,
    overflow:"hidden",
   
    zIndex:1
  },
  titlteprophetic:{
    color:"white",
    fontSize:20,
    lineHeight:24,
    fontWeight:"500"
  },
 scrollView: {
    height: 200, // Taille fixe du conteneur scrollable
    minHeight: 280, maxHeight: 260,
    marginHorizontal: 20,
  },
  copyButton: {
    position: 'absolute',
    bottom:60,
    right: 10,
    padding: 10,
    borderRadius: 5,
  },
  toggleButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    padding: 10,
    borderRadius: 5,
  },
  iconContainer: {
    position: 'absolute',
    top: 200,
    left: 30,
    zIndex:2
  },
  quotesImg:{
   
  },
  ele:{
    elevation: 5, // Ajoutez ici l'élévation (ombre) que vous souhaitez

  },
  subtitleprophetic:{
fontSize:14,
lineHeight:17,
fontWeight:"700",
color:"white",
paddingTop:5
  },
  containerScroll:{
   
    paddingTop: StatusBar.currentHeight,
  },
  scrollableText: {
    fontSize:12,
    lineHeight:17,
    fontWeight:"400",
    color:"white",
    paddingTop:5,
    paddingBottom:30,
    marginBottom:50,
    display:"flex",
    flexDirection:"row",
    justifyContent: "center",
    textAlign:"justify"
  },
 
  orangeIcon: {
    backgroundColor: '#FE7D4E',
    borderRadius: 50, // Pour créer un cercle, assurez-vous que le rayon de la bordure est la moitié de la largeur/hauteur
    padding: 5, // Ajustez l'espace intérieur du cercle selon vos besoins
    zIndex: 10,
    elevation: 5, 
  },
  containerVerset:{
    padding:20,
   
  },
  titleVerset:{
    color: '#8687a8',
    fontSize:21,
    fontWeight:"600",
    paddingBottom:15
  },
  textVerset:{
 color:"rgba(83, 83, 105, 0.697)",
 fontSize:14,
 marginTop:15,

  },
  verset:{
  backgroundColor:'#a5a4c0',
    width:125,
    height:25,
  borderRadius:5,
  left:5,
  display:"flex",
  flexDirection:"row",
  alignContent:"center",
  alignItems:"center",
  justifyContent:"space-evenly"

  },
  versetText:{
    color:"white",
    fontSize:12,
    fontWeight:"600",
    lineHeight:30,
    bottom:2
  },
  containerEvents:{
    flexDirection: 'column', // Pour aligner les éléments horizontalement
  alignItems: 'center', // Pour aligner les éléments verticalement
  padding: 20,
  },
  containerEventsTitle:{

  padding: 20,
  },
  titleEvents:{
    color: '#8687a8',
    fontSize:21,
    fontWeight:"600",
    paddingBottom:15
  },
});
export default Home;
