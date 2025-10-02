import { Coffee, Headphones, Home, Umbrella, Dumbbell, Car } from "lucide-react";
import bgBreakfast from "../assets/2_9.jpg";
import bgSupport from "../assets/7.jpg";
import bgRooms from "../assets/7.jpg";
import bgBeach from "../assets/7.jpg";
import bgGym from "../assets/7.jpg";
import bgParking from "../assets/7.jpg";

export default function Accomodation() {
  const items = [
    { t: "Mëngjes i Shëndetshëm", d: "Filloni ditën tuaj me përzgjedhje ushqimesh të freskëta, të shëndetshme dhe të shijshme çdo mëngjes.", icon: Coffee, bg: bgBreakfast },
    { t: "Mbështetje 24/7", d: "Recepsioni ynë është në dispozicionin tuaj në çdo kohë për çdo kërkesë.", icon: Headphones, bg: bgSupport },
    { t: "Dhoma të Bollshme & Komode", d: "Hapësira moderne, dritë natyrale dhe rehati për një qëndrim të paharrueshëm.", icon: Home, bg: bgRooms },
    { t: "Qasje në Plazhe", d: "Shijoni qasje të shpejtë në plazhet përreth dhe aktivitete pranë ujit.", icon: Umbrella, bg: bgBeach },
    { t: "Sallë Sportesh", d: "Qëndroni aktiv me sallën tonë moderne sportive dhe pajisje të kompletuara.", icon: Dumbbell, bg: bgGym },
    { t: "Parkim Privat", d: "Siguri dhe lehtësi me parkim të dedikuar për mysafirët tanë.", icon: Car, bg: bgParking },
  ];

  return (
    <section className="py-16 bg-ink/[0.04]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-display mb-4">Qëndrimi në Holiday Villas</h1>
        <p className="text-ink/70 max-w-2xl mx-auto mb-10 text-sm sm:text-base">
          Pushime të qeta siç e meritoni — në zemër të natyrës, pranë liqenit të Batllavës. 
          Shijoni luksin, rehatinë dhe mikpritjen tonë.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => {
            const Icon = i.icon;
            return (
              <div
                key={i.t}
                className="relative rounded-2xl overflow-hidden shadow-lux border border-line group h-64 flex items-center justify-center"
                style={{ backgroundImage: `url(${i.bg})`, backgroundSize: "cover", backgroundPosition: "center" }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="relative z-10 text-center text-white px-4">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-accent/90 text-[#0D0F0E] mx-auto mb-4">
                    <Icon size={26} />
                  </div>
                  <h3 className="font-semibold text-lg">{i.t}</h3>
                  <p className="text-sm mt-2">{i.d}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
