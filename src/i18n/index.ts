import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import langES from './lang/es.json';
import langEN from './lang/en.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      es: { translation: langES },
      en: { translation: langEN },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
