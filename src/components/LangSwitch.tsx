import { useTranslation } from "react-i18next";

export default function LangSwitch() {
  const { i18n } = useTranslation();

  const setLang = (lng: "en" | "sq") => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
    // Opsionale: për SEO / <html lang="">
    document.documentElement.lang = lng;
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1 rounded ${i18n.language === "en" ? "bg-black text-white" : "border"}`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("sq")}
        className={`px-3 py-1 rounded ${i18n.language === "sq" ? "bg-black text-white" : "border"}`}
      >
        SQ
      </button>
    </div>
  );
}
