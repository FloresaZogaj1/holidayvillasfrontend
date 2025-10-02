// src/pages/Services.jsx
import { Heart, Users, UtensilsCrossed, BedDouble, Plane, Headset } from "lucide-react";

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
      desc: "Rifreskoni shqisat tuaja me spa dhe wellness-in tonë modern.",
      icon: Heart,
      bg: spaBg
    },
    {
      title: "Evente & Mbledhje",
      desc: "Organizoni evente të paharrueshme dhe mbledhje profesionale në ambientet tona elegante.",
      icon: Users,
      bg: eventsBg
    },
    {
      title: "Restorant & Bar",
      desc: "Shijoni kuzhinë të rafinuar dhe kokteje të përgatitura me kujdes me pamje mahnitëse.",
      icon: UtensilsCrossed,
      bg: restoBg
    },
    {
      title: "Shërbim në Dhoma",
      desc: "Përjetoni rehati me shërbimin tonë 24/7 në dhomë dhe kujdesin personalizuar.",
      icon: BedDouble,
      bg: roomBg
    },
    {
      title: "Transport nga Aeroporti",
      desc: "Relaksohuni ndërsa ne kujdesemi për transferet tuaja nga dhe në aeroport.",
      icon: Plane,
      bg: transportBg
    },
    {
      title: "Shërbim Kujdestari",
      desc: "Stafi ynë i përkushtuar ju ndihmon me rezervime, ture dhe çdo kërkesë tjetër.",
      icon: Headset,
      bg: conciergeBg
    }
  ];

  const benefits = [
    { text: "Asistencë 24/7 për mysafirët", icon: Headset },
    { text: "Suita familjare të disponueshme", icon: BedDouble },
    { text: "Wi-Fi me shpejtësi të lartë", icon: UtensilsCrossed },
    { text: "Praktika miqësore me mjedisin", icon: Heart },
  ];

  return (
    <>
      {/* SERVICES LIST */}
      <section className="py-16 bg-paper">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-display mb-6">Shërbimet tona</h1>
          <p className="text-muted max-w-3xl mx-auto mb-10">
            Misioni ynë është të ofrojmë mikpritje të pakrahasueshme përmes një
            game shërbimesh premium të krijuara për ta bërë qëndrimin tuaj sa më
            të rehatshëm dhe të paharrueshëm.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="relative rounded-xl2 overflow-hidden shadow-card group h-64 flex items-center justify-center"
                  style={{
                    backgroundImage: `url(${s.bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                  <div className="relative z-10 text-center text-white px-4">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-accent/90 text-primary mx-auto mb-3">
                      <Icon size={26} />
                    </div>
                    <h3 className="font-semibold text-lg">{s.title}</h3>
                    <p className="text-sm mt-2">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-16 bg-paper">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-display text-accent mb-6">
            Pse të zgjidhni Holiday Villas?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-xl2 p-6 shadow-card hover:shadow-lg transition flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 text-accent mb-3">
                    <Icon size={22} />
                  </div>
                  <p className="text-base font-semibold text-ink">{b.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
