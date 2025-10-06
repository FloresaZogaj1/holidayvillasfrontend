// src/components/BookingBar.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function BookingBar() {
  const { t } = useTranslation();
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate(`/rooms?adults=${adults}&children=${children}&rooms=${rooms}`);
      }}
      className="w-full max-w-5xl mx-auto rounded-2xl border border-line/60 bg-card/60 backdrop-glass shadow-lux p-2"
    >
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
        {/* Dates (placeholder — lidhe me datepickerin kur të kesh kohë) */}
        <div className="col-span-2 flex items-center gap-3 rounded-xl bg-[#0f1412]/60 px-4 py-3 border border-line/60">
          <svg className="w-5 h-5 text-accent-2" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7 2v2h10V2h2v2h3v18H2V4h3V2zM4 6v14h16V6z"/>
          </svg>
          <input
            type="text"
            placeholder={t("dateRangePlaceholder")}
            className="w-full bg-transparent placeholder:text-ink/55 text-ink focus:outline-none"
            readOnly
          />
        </div>

        {/* Adults */}
        <select
          value={adults}
          onChange={(e) => setAdults(+e.target.value)}
          className="px-4 py-3 rounded-xl bg-[#0f1412]/60 border border-line/60 text-ink/90"
        >
          {[1, 2, 3, 4].map((n) => (
            <option key={n} value={n}>
              {n} {t("adults", { count: n })}
            </option>
          ))}
        </select>

        {/* Children */}
        <select
          value={children}
          onChange={(e) => setChildren(+e.target.value)}
          className="px-4 py-3 rounded-xl bg-[#0f1412]/60 border border-line/60 text-ink/90"
        >
          {[0, 1, 2, 3, 4].map((n) => (
            <option key={n} value={n}>
              {n === 0 ? t("children_zero") : `${n} ${t("children", { count: n })}`}
            </option>
          ))}
        </select>

        {/* Rooms */}
        <select
          value={rooms}
          onChange={(e) => setRooms(+e.target.value)}
          className="px-4 py-3 rounded-xl bg-[#0f1412]/60 border border-line/60 text-ink/90"
        >
          {[1, 2, 3, 4].map((n) => (
            <option key={n} value={n}>
              {n} {t("rooms", { count: n })}
            </option>
          ))}
        </select>

        {/* Search */}
        <button className="btn-primary w-full">{t("search")}</button>
      </div>
    </form>
  );
}
