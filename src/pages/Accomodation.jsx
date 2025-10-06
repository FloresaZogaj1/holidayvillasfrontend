// src/pages/Accomodation.jsx
import { Coffee, Headphones, Home, Flame, Trees, Car } from "lucide-react";

import bgBreakfast from "../assets/2_9.jpg";
import bgSupport   from "../assets/7.jpg";
import bgRooms     from "../assets/7.jpg";
// Zëvendësojmë plazhin & palestrën:
import bgWellness  from "../assets/6.jpg";
import bgGarden    from "../assets/3.jpg";
import bgParking   from "../assets/7.jpg";

export default function Accomodation() {
  const items = [
    {
      t: "Mëngjes i Shëndetshëm",
      d: "Filloni ditën me përzgjedhje të freskëta dhe të shijshme – i përfshirë në çmim.",
      icon: Coffee,
      bg: bgBreakfast,
    },
    {
      t: "Mbështetje 24/7",
      d: "Recepsioni ynë është në dispozicion për çdo kërkesë, në çdo kohë.",
      icon: Headphones,
      bg: bgSupport,
    },
    {
      t: "Dhoma të Bollshme & Komode",
      d: "Hapësira moderne me dritë natyrale dhe rehati për një qëndrim të paharrueshëm.",
      icon: Home,
      bg: bgRooms,
    },
    {
      t: "Saunë & Wellness",
      d: "Relaksohuni me saunë dhe ambiente wellness për rikuperim të plotë.",
      icon: Flame,
      bg: bgWellness,
    },
    {
      t: "Kopsht & Tarracë",
      d: "Hapësira të jashtme për pushim, mëngjese në diell dhe mbrëmje nën yje.",
      icon: Trees,
      bg: bgGarden,
    },
    {
      t: "Parkim Privat",
      d: "Siguri dhe lehtësi me parkim të dedikuar në vend, pa pagesë.",
      icon: Car,
      bg: bgParking,
    },
  ];

  return (
    <section className="py-16 bg-bg">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-display mb-4">Qëndrimi në Holiday Villas</h1>
        <p className="text-ink/70 max-w-2xl mx-auto mb-10 text-sm sm:text-base">
          Pushime të qeta në zemër të natyrës, pranë liqenit të Batllavës — luks, rehati dhe mikpritje e ngrohtë.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => {
            const Icon = i.icon;
            return (
              <article
                key={i.t}
                className="relative rounded-2xl overflow-hidden card lux-border hover-glow h-64 flex items-center justify-center"
                style={{
                  backgroundImage: `url(${i.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="relative z-10 text-center text-white px-5">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-accent/90 text-[#0D0F0E] mx-auto mb-4 shadow-card">
                    <Icon size={26} />
                  </div>
                  <h3 className="font-semibold text-lg">{i.t}</h3>
                  <p className="text-sm mt-2 leading-relaxed">{i.d}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
