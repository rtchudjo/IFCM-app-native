import { signInWithEmailAndPassword,sendPasswordResetEmail,createUserWithEmailAndPassword, onAuthStateChanged, getAuth, fetchSignInMethodsForEmail } from "firebase/auth"
import { authUser, db, firebaseApp } from "./firebaseConfig"
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { useDispatch } from "react-redux";
import { setUser } from "../redux/actions/authActions";
import AsyncStorage from '@react-native-async-storage/async-storage';



export const login = async (email:string, password:string) =>{
  
    try{
        const userCredential = await signInWithEmailAndPassword(authUser,email,password);
        const user = userCredential.user
        console.log("user login:", user)

        const userRef = doc(db, 'users', user.uid);
        try {
          const userDoc = await getDoc(userRef);
      
          if (userDoc.exists()) {
            // The user document exists; you can access the data here
            const userData = userDoc.data();
            console.log('User Data:', userData);
            return userData;
          } else {
            console.log('User document not found.');
            return null; // Handle the case where the user document does not exist
          }
        } catch (error) {
          console.error('Error getting user document:', error);
          throw error;
        }
        
    }
    catch(error){
        console.log(error.message);
        throw error; 
    }
    
}

export const reset = async (email:string) =>{
    try{
        const userReset = await sendPasswordResetEmail(authUser,email)
        
        console.log("user reset:", userReset)
        return ;
    }
    catch(error){
        console.log(error.message);
        throw error; 
    }
    
}

export const signup = async (email: string, password: string, nom: string,prenom:string) => {
    try {
      // Créez l'utilisateur avec Firebase Authentication
      const signInMethods = await fetchSignInMethodsForEmail(authUser, email);
      const userSignUp = await createUserWithEmailAndPassword(authUser, email, password);
      
      // Stockez des données supplémentaires dans Firestore (par exemple, nom, âge, etc.)

      if(signInMethods.length === 0){

        if (userSignUp.user) {
          const { uid } = userSignUp.user;
         // await addDoc(userDocRef, { uid, });
         console.log("user back uid",uid)
         console.log("user back",email,password,nom,prenom)
         try{
              const userData = {
              uid:uid,
              age: "",
              branch: "",
              country: "",
              displayName: prenom + " " + nom,
              gender: "",
              firstname: prenom,
              lastname: nom,
              photoURL: "",
              email:email,
              };
  
          const userDocRef = doc(db, 'users', uid); // Créez une référence de document personnalisée avec l'UID de l'utilisateur
          const res = await setDoc(userDocRef, userData); 
          
  
            console.log("Document written with ID: ", userDocRef.id);
            console.log("Inscription réussie !",userDocRef);
            console.log("user data in firestore réussie !",userData);
  
            return userSignUp.user;
      }
       catch (error) {
        console.log(error.message);
        throw error;
       }
     // Vous pouvez retourner l'utilisateur enregistré si nécessaire
      }
    }
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }

 
