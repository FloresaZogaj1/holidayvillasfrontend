import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Importo JSON-t statikë (më e thjeshta për Vite)
import en from "../locales/en/translation.json";
import sq from "../locales/sq/translation.json";

/**
 * Rregullat tona:
 * - English është gjithmonë default në vizitën e parë (lng: 'en', fallbackLng: 'en')
 * - Nëse user zgjedh gjuhë, ruhet në localStorage dhe respektohet në vizitat pasuese
 * - S’bëjmë auto-detect të gjuhës së browser-it në vizitën e parë (ruajmë 'en')
 */

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: en },
    //  Mund ta ngarkosh edhe “on-demand”; këtu po e fusim direkt:
      sq: { translation: sq }
    },
    // EN si primary gjithmonë:
    lng: localStorage.getItem("i18nextLng") || "en",
    fallbackLng: "en",

    // LanguageDetector settings:
    detection: {
      // Lexo nga localStorage nëse ka zgjedhje të ruajtur
      order: ["localStorage", "querystring", "cookie", "navigator"],
      caches: ["localStorage"],
      lookupQuerystring: "lang"
    },

    interpolation: { escapeValue: false },
    // shmang flicker gjatë ngarkimit:
    react: { useSuspense: false }
  });

export default i18n;
