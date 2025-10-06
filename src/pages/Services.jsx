// src/pages/Services.jsx
import {
  Heart,
  Users,
  UtensilsCrossed,
  BedDouble,
  Plane,
  Headset,
  Wifi,
  Leaf,
} from "lucide-react";

// import fotot për sfond (ndrysho me imazhet e tua)
import spaBg from "../assets/6.jpg";
import eventsBg from "../assets/3.jpg";
import restoBg from "../assets/3.jpg";
import roomBg from "../assets/3.jpg";
import transportBg from "../assets/3.jpg";
import conciergeBg from "../assets/3.jpg";

export default function Services() {
  const services = [
    {
      title: "Spa & Wellness",
      desc: "Rifreskoni shqisat me sauna, relaks dhe kujdes premium të trupit.",
      icon: Heart,
      bg: spaBg,
    },
    {
      title: "Evente & Mbledhje",
      desc: "Ambient elegant për evente private, ditëlindje dhe takime biznesi.",
      icon: Users,
      bg: eventsBg,
    },
    {
      title: "Restorant & Bar",
      desc: "Kuzhinë e rafinuar dhe kokteje artizanale me pamje mahnitëse.",
      icon: UtensilsCrossed,
      bg: restoBg,
    },
    {
      title: "Shërbim në Dhoma",
      desc: "Komoditet maksimal me shërbim të shpejtë dhe diskret 24/7.",
      icon: BedDouble,
      bg: roomBg,
    },
    {
      title: "Transport nga Aeroporti",
      desc: "Transfere të sigurta, të rehatshme dhe në kohë drejt vilave.",
      icon: Plane,
      bg: transportBg,
    },
    {
      title: "Shërbim Kujdestari",
      desc: "Rezervime, rekomandime, ture — gjithçka që ju nevojitet.",
      icon: Headset,
      bg: conciergeBg,
    },
  ];

  const benefits = [
    { text: "Asistencë 24/7 për mysafirët", icon: Headset },
    { text: "Suita familjare të disponueshme", icon: BedDouble },
    { text: "Wi-Fi me shpejtësi të lartë", icon: Wifi },
    { text: "Praktika miqësore me mjedisin", icon: Leaf },
  ];

  return (
    <>
      {/* HERO MINI */}
      <section className="bg-bg">
        <div className="max-w-7xl mx-auto px-4 pt-12 text-center">
          <h1 className="font-display text-3xl md:text-4xl mb-3 gradient-text">
            Shërbimet tona
          </h1>
          <p className="text-ink/70 max-w-3xl mx-auto mb-8">
            Mikpritje premium, detaje të menduara dhe përkujdesje që e kthen
            çdo qëndrim në përvojë të paharrueshme.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="pb-8 bg-bg text-ink">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <article
                  key={i}
                  className="group relative overflow-hidden rounded-xl2 card lux-border hover-glow"
                >
                  {/* Background image */}
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${s.bg})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    aria-hidden="true"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/70 group-hover:via-black/40" />
                  {/* Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col justify-end min-h-[18rem]">
                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-accent/90 text-[#0D0F0E] shadow-md mb-4">
                      <Icon size={26} />
                    </div>
                    <h3 className="text-white text-xl font-semibold tracking-tight">
                      {s.title}
                    </h3>
                    <p className="text-white/90 text-sm mt-1">
                      {s.desc}
                    </p>
                    {/* subtle lift on hover */}
                    <div className="mt-4 translate-y-0 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 bg-paper">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-display text-ink mb-6">
            Pse të zgjidhni <span className="gradient-text">Holiday Villas</span>?
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={i}
                  className="rounded-xl2 border border-line bg-card p-6 shadow-card hover-glow transition"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/15 text-accent mb-3">
                    <Icon size={22} />
                  </div>
                  <p className="text-ink font-semibold">{b.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
