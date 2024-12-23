/** LIBRARIES */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

/** TRANSLATIONS */
import deTranslation from "@src/assets/locales/de.json";
import enTranslation from "@src/assets/locales/en.json";
import skTranslation from "@src/assets/locales/sk.json";

const resources = {
  de: {
    translation: deTranslation,
  },
  en: {
    translation: enTranslation,
  },
  sk: {
    translation: skTranslation,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
