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
          {items.map(({ key, icon: Icon, bg }) => (
            <article
              key={key}
              className="relative rounded-2xl overflow-hidden card lux-border hover-glow h-64 flex items-center justify-center"
              style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
              <div className="relative z-10 text-center text-white px-5">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-accent/90 text-[#0D0F0E] mx-auto mb-4 shadow-card">
                  <Icon size={26} />
                </div>
                <h3 className="font-semibold text-lg">
                  {t(`accommodation.items.${key}.title`)}
                </h3>
                <p className="text-sm mt-2 leading-relaxed">
                  {t(`accommodation.items.${key}.desc`)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
