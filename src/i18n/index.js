import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "../locales/en/translation.json";
import sq from "../locales/sq/translation.json";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: en },
      sq: { translation: sq },
    },
    lng: localStorage.getItem("i18nextLng") || "en",
    fallbackLng: "en",

    // ⬇️ këto dy janë kyçe që 'en-US' dhe 'sq-AL' të bien te 'en' / 'sq'
    load: "languageOnly",
    nonExplicitSupportedLngs: true,
    supportedLngs: ["en", "sq"],

    detection: {
      order: ["localStorage", "querystring", "cookie", "navigator"],
      caches: ["localStorage"],
      lookupQuerystring: "lang",
    },
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    // debug: true, // (opsionale) të shohësh në console çfarë ngarkohet
  });

export default i18n;
