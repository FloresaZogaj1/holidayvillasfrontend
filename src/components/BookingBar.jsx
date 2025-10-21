// src/components/BookingBar.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function BookingBar() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // state
  const [persons, setPersons] = useState(2);           // 1–6
  const [villaType, setVillaType] = useState("villa"); // villa | vip | premium

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // dergo vetëm ato që kërkohen
        navigate(`/rooms?persons=${persons}&type=${villaType}`);
      }}
      className="w-full max-w-5xl mx-auto rounded-2xl border border-white/20 bg-white/95 backdrop-blur-md shadow-2xl p-3 sm:p-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
        {/* Check-in / Check-out (placeholder) */}
        <div className="sm:col-span-2 lg:col-span-2 flex items-center gap-3 rounded-xl bg-white/90 px-3 sm:px-4 py-3 border border-accent/20 shadow-sm">
          <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7 2v2h10V2h2v2h3v18H2V4h3V2zM4 6v14h16V6z"/>
          </svg>
          <input
            type="text"
            placeholder={t("dateRangePlaceholder")}
            className="w-full bg-transparent placeholder:text-ink/60 text-ink focus:outline-none text-sm sm:text-base"
            readOnly
          />
        </div>

        {/* Persona (max 6) */}
        <label className="sr-only" htmlFor="persons">{t("persons_label", "Persona (max 6)")}</label>
        <select
          id="persons"
          value={persons}
          onChange={(e) => setPersons(+e.target.value)}
          className="px-3 sm:px-4 py-3 rounded-xl bg-white/90 border border-accent/20 text-ink text-sm sm:text-base shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        >
          {[1,2,3,4,5,6].map((n) => (
            <option key={n} value={n}>
              {t("persons_option", { defaultValue: `${n} persona`, count: n, n })}
            </option>
          ))}
        </select>

        {/* Lloj vile */}
        <label className="sr-only" htmlFor="villaType">{t("villa_type", "Lloj vile")}</label>
        <select
          id="villaType"
          value={villaType}
          onChange={(e) => setVillaType(e.target.value)}
          className="px-3 sm:px-4 py-3 rounded-xl bg-white/90 border border-accent/20 text-ink text-sm sm:text-base shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        >
          <option value="villa">{t("villa", "Villa")}</option>
          <option value="vip">{t("villa_vip", "Villa VIP")}</option>
          <option value="premium">{t("villa_premium", "Villa Premium")}</option>
        </select>

        {/* Kërko */}
        <button className="btn-primary w-full py-3 text-sm sm:text-base font-semibold">{t("search")}</button>
      </div>
    </form>
  );
}
