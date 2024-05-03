
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';

import en from './assets/locales/en/translation.json';
import fr from './assets/locales/fr/translation.json';




const languages = {
  en: { translation : en},
  fr: { translation : fr},
}


// Fonction pour changer la langue


i18next
  .use(RNLanguageDetector)

  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    lng:'en',
    fallbackLng: 'en',
  

 
    resources: languages,
    detection: {
      order: ['react-native', 'navigator'],
    },

  });
  console.log(RNLanguageDetector, "detecteur")
export default i18next;