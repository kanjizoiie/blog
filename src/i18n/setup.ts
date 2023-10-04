import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './resources/en.json';
import sv from './resources/sv.json';

i18next
  .use(LanguageDetector)
  .init({
    debug: true,
    resources: {
      en,
      sv,
    },
  });

export default i18next;
