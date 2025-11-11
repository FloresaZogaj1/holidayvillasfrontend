// src/pages/Accomodation.jsx
import { Coffee, Headphones, Home, Flame, Trees, Car } from "lucide-react";
import { useTranslation } from "react-i18next";

import bgBreakfast from "../assets/2_9.jpg";
import bgSupport   from "../assets/7.jpg";
import bgRooms     from "../assets/7.jpg";
import bgWellness  from "../assets/6.jpg";
import bgGarden    from "../assets/3.jpg";
import bgParking   from "../assets/7.jpg";

export default function Accomodation() {
  const { t } = useTranslation();

  const items = [
    { key: "breakfast", icon: Coffee,  bg: bgBreakfast },
    { key: "support",   icon: Headphones, bg: bgSupport },
    { key: "rooms",     icon: Home,    bg: bgRooms },
    { key: "wellness",  icon: Flame,   bg: bgWellness },
    { key: "garden",    icon: Trees,   bg: bgGarden },
    { key: "parking",   icon: Car,     bg: bgParking }
  ];

  return (
    <section className="py-16 bg-bg">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-display mb-4">
          {t("accommodation.title")}
        </h1>
        <p className="text-ink/70 max-w-2xl mx-auto mb-10 text-sm sm:text-base">
          {t("accommodation.subtitle")}
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ key, icon: Icon }) => (
            <article
              key={key}
              className="card lux-border hover-glow h-64 flex flex-col justify-center items-center text-center bg-gradient-to-br from-accent/5 to-accent/10 group"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-accent text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon size={28} />
              </div>
              <h3 className="font-semibold text-lg text-ink mb-3">
                {t(`accommodation.items.${key}.title`)}
              </h3>
              <p className="text-sm text-ink/70 leading-relaxed px-4">
                {t(`accommodation.items.${key}.desc`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
