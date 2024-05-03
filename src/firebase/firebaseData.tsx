import { getFirestore, collection, getDocs, DocumentData } from 'firebase/firestore';

// Fonction pour récupérer les données de la catégorie "branches"
export const getBranchesData = async () => {
  try {
    const db = getFirestore();
    const branchesCollection = collection(db, 'branches');
    const querySnapshot = await getDocs(branchesCollection);
    const branchesData: DocumentData[] = [];

    querySnapshot.forEach((doc) => {
      if (doc.exists()) {
        branchesData.push(doc.data());
      }
    });

    return branchesData;
  } catch (error) {
    console.error('Erreur lors de la récupération des données de branches :', error);
    return [];
  }
};

// Fonction pour récupérer les données de la catégorie "donation"

export const getDonationData = async () => {
  try {
    const db = getFirestore();
    const donationCollection = collection(db, 'donation');
    const querySnapshot = await getDocs(donationCollection);
    const donationData: { [x: string]: any; }[] = [];

    querySnapshot.forEach((doc) => {
      if (doc.exists()) {
        // Obtenez les données de base
        const donation = doc.data();
        console.log(donation,"don")
        // Obtenez le tableau "causes" à partir des données (s'il n'est pas défini, utilisez un tableau vide par défaut)
        const causes = donation.causes;
              
      }
    });
    console.log(donationData,"donData")
    return donationData;
   
  } catch (error) {
    console.error('Erreur lors de la récupération des données de donation :', error);
    return [];
  }
};

export const getEventsData = async () => {
  try {
    const db = getFirestore();
    const eventsCollection = collection(db, 'events');
    const querySnapshot = await getDocs(eventsCollection);
    const eventsData: DocumentData[] = [];

    querySnapshot.forEach((doc) => {
      if (doc.exists()) {
        eventsData.push(doc.data());
      }
    });

    return eventsData;
  } catch (error) {
    console.error('Erreur lors de la récupération des données de events :', error);
    return [];
  }
};

export const getPropheticData = async () => {
  try {
    const db = getFirestore();
    const propheticCollection = collection(db, 'propheticmessage');
    const querySnapshot = await getDocs(propheticCollection);
    const propheticData: DocumentData[] = [];

    querySnapshot.forEach((doc) => {
      if (doc.exists()) {
        propheticData.push(doc.data());
      }
    });

    return propheticData;
  } catch (error) {
    console.error('Erreur lors de la récupération des données de propheticmessage :', error);
    return [];
  }
};


export const getRatesData = async () => {
  try {
    const db = getFirestore();
    const ratesCollection = collection(db, 'rates');
    const querySnapshot = await getDocs(ratesCollection);
    const ratesData: DocumentData[] = [];

    querySnapshot.forEach((doc) => {
      if (doc.exists()) {
        ratesData.push(doc.data());
      }
    });

    return ratesData;
  } catch (error) {
    console.error('Erreur lors de la récupération des données de rates :', error);
    return [];
  }
};

export const getShoppingData = async () => {
  try {
    const db = getFirestore();
    const shoppingCollection = collection(db, 'shopping');
    const querySnapshot = await getDocs(shoppingCollection);
    const shoppingData: DocumentData[] = [];

    querySnapshot.forEach((doc) => {
      if (doc.exists()) {
        shoppingData.push(doc.data());
      }
    });

    return shoppingData;
  } catch (error) {
    console.error('Erreur lors de la récupération des données de shopping :', error);
    return [];
  }
};

export const getTeachingData = async () => {
  try {
    const db = getFirestore();
    const teachingCollection = collection(db, 'teachings');
    const querySnapshot = await getDocs(teachingCollection);
    const teachingData: DocumentData[] = [];

    querySnapshot.forEach((doc) => {
      if (doc.exists()) {
        teachingData.push(doc.data());
      }
    });

    return teachingData;
  } catch (error) {
    console.error('Erreur lors de la récupération des données de teachings :', error);
    return [];
  }
};

export const getVerseData = async () => {
  try {
    const db = getFirestore();
    const verseCollection = collection(db, 'verseoftoday');
    const querySnapshot = await getDocs(verseCollection);
    const verseData: DocumentData[] = [];

    querySnapshot.forEach((doc) => {
      if (doc.exists()) {
        verseData.push(doc.data());
      }
    });

    return verseData;
  } catch (error) {
    console.error('Erreur lors de la récupération des données de verseoftoday :', error);
    return [];
  }
};

     
