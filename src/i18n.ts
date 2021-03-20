import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation_en from './assets/locales/translation_en.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translation_en
      }
    },
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  })