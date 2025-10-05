// src/pages/About.jsx
import { Link } from "react-router-dom";
import fotoo3 from "../assets/3_3.jpg";
import fotoo4 from "../assets/515550894.jpg";

export default function About() {
  const features = [
    {
      title: "Privatësi & Qetësi",
      desc: "Vila të izoluara me kopshte private dhe pamje relaksuese.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7v3H4a2 2 0 0 0-2 2v6h20v-6a2 2 0 0 0-2-2h-1V9a7 7 0 0 0-7-7Zm0 2a5 5 0 0 1 5 5v3H7V9a5 5 0 0 1 5-5Z"/>
        </svg>
      ),
    },
    {
      title: "Spa & Wellness",
      desc: "Sauna, jacuzzi dhe trajtime relaksuese sipas kërkesës.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M12 3C9 7 5 9 5 13a7 7 0 0 0 14 0c0-4-4-6-7-10z"/>
        </svg>
      ),
    },
    {
      title: "Shërbim 24/7",
      desc: "Asistencë e dedikuar për çdo nevojë gjatë qëndrimit tuaj.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M12 1a11 11 0 1 0 11 11A11.012 11.012 0 0 0 12 1Zm1 11h5v2h-7V6h2Z"/>
        </svg>
      ),
    },
    {
      title: "Gastronomi Lokale",
      desc: "Mëngjes artizanal dhe menytë sezonale me produkte vendore.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M7 2v20h2V2Zm8 0v9h-2V2Zm0 11h-2v9h2Z"/>
        </svg>
      ),
    },
    {
      title: "Aktivitete në Natyrë",
      desc: "Hiking, biçikleta, ture fotografike dhe piknik në livadhe.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M12 2 1 21h22L12 2Zm0 5 7.53 13H4.47L12 7Z"/>
        </svg>
      ),
    },
    {
      title: "Wi-Fi i Shpejtë",
      desc: "Internet i qëndrueshëm për punë dhe argëtim.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true" focusable="false">
          <path fill="currentColor" d="M12 18a2 2 0 1 0 2 2a2 2 0 0 0-2-2Zm8-6.34L18.59 9A10 10 0 0 0 5.41 9L4 11.66A12 12 0 0 1 20 11.66ZM12 12a6 6 0 0 0-4.24 1.76L6.34 15.2A8 8 0 0 1 17.66 15.2L16.24 13.76A6 6 0 0 0 12 12Z"/>
        </svg>
      ),
    },
  ];

  const stats = [
    { k: "97%", v: "Kënaqësi mysafirësh" },
    { k: "4.9/5", v: "Vlerësime mesatare" },
    { k: "2023", v: "Viti i themelimit" },
    { k: "24/7", v: "Asistencë" },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1501117716987-c8e2a9ce8c14?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1498496294664-3c9a86a6402b?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  ];

  const timeline = [
    { year: "2023", text: "U hap vila e parë me konceptin ‘retreat në natyrë’." },
    { year: "2024", text: "Shtuam spa & wellness dhe paketa kulinare sezonale." },
    { year: "2025", text: "Galeria e aktiviteteve outdoor dhe evente private." },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[56vh] grid place-items-center overflow-hidden bg-bg text-ink">
        <img
          src={fotoo3}
          alt="Holiday Villas - pamje panoramike"
          className="absolute inset-0 w-full h-full object-cover"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f0e]/75 via-[#0b0f0e]/35 to-transparent" />
        <div className="relative z-10 text-center px-4">
          <p className="text-ink/80 tracking-wide">Rreth Nesh</p>
          <h1 className="text-4xl md:text-6xl font-display text-ink font-semibold">
            Holiday Villas
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-ink/90">
            Qetësi, privatësi dhe luks — në zemër të natyrës.
          </p>
        </div>
      </section>

      {/* KUSH JEMI */}
      <section className="py-16 bg-ink/[0.04]">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display gradient-text mb-4">Kush jemi</h2>
            <p className="text-ink/70">
              Holiday Villas lindi për t’u ofruar mysafirëve një përvojë mikpritjeje të
              ngrohtë dhe elegante, të lidhur me natyrën. Çdo vilë është menduar në detaj:
              interior i pastër, ndriçim natyral, oborre private dhe komoditete moderne.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/rooms" className="btn-primary">Shiko vilat</Link>
              <Link to="/contact" className="btn-ghost">Na kontakto</Link>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lux border border-line shine-wrap">
            <img
              src={fotoo4}
              alt="Ambient i brendshëm i vilës"
              className="w-full h-[260px] sm:h-[320px] md:h-[360px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* AVANTAZHE */}
      <section className="py-12 bg-bg text-ink">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <article key={i} className="card p-6 lux-border hover-glow h-full">
              <div className="text-accent" aria-hidden="true">{f.icon}</div>
              <h3 className="mt-3 font-semibold text-ink">{f.title}</h3>
              <p className="text-ink/70 mt-1">{f.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="py-10 bg-ink/[0.04]">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i} className="card p-6 lux-border">
              <div className="text-2xl md:text-3xl font-display gradient-text">{s.k}</div>
              <div className="text-ink/70 text-xs sm:text-sm mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* GALERIA (shpejt) */}
      <section className="py-12 bg-bg text-ink">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-2xl sm:text-3xl mb-4 gradient-text">Galeria</h2>
          <p className="text-ink/70 text-sm sm:text-base mb-6">
            Pamje të shpejta nga ambientet tona — brenda dhe jashtë.
          </p>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {gallery.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Galeria — foto ${i + 1}`}
                className="mb-4 w-full rounded-xl2 shadow-card object-cover"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 bg-ink/[0.04]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display mb-8 gradient-text text-center">Historia jonë</h2>
          <ol className="relative border-s border-line">
            {timeline.map((t, i) => (
              <li key={i} className="mb-8 ms-6">
                <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-accent ring-2 ring-card shadow-lux">
                  {t.year.slice(-2)}
                </span>
                <h3 className="font-semibold text-ink">{t.year}</h3>
                <p className="text-ink/70">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bg text-ink">
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-2xl lux-soft p-8 text-center border border-line">
            <h3 className="text-2xl md:text-3xl font-display text-ink">
              Gati për pushimin tuaj të radhës?
            </h3>
            <p className="text-ink/70 mt-2">
              Zgjidhni vilën perfekte dhe na lejoni të kujdesemi për detajet.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/rooms" className="btn-primary">Rezervo një vilë</Link>
              <Link to="/contact" className="btn-ghost">Pyet për disponueshmëri</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
