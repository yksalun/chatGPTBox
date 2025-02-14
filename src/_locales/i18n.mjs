import i18n from 'i18next'
import { resources } from './resources'

i18n.init({
  resources,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
})
