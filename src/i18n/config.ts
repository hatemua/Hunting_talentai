import i18n              from 'i18next'
import { initReactI18next } from 'react-i18next'

import enCommon from '@/dictionaries/en/common.json'
import frCommon from '@/dictionaries/fr/common.json'
import enHome   from '@/features/home/dictionaries/en.json'
import frHome   from '@/features/home/dictionaries/fr.json'

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: { ...enCommon, ...enHome } },
        fr: { translation: { ...frCommon, ...frHome } },
      },
      lng:           'en',
      fallbackLng:   'en',
      supportedLngs: ['en', 'fr'],
      interpolation: { escapeValue: false },
    })
}

export default i18n
