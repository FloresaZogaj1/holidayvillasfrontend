// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BookingBar from "../components/BookingBar";
import PhotoSlider from "../components/PhotoSlider";

// Images
import foto1 from "../assets/3_7.jpg";
import gallery2 from "../assets/515550823.jpg";
import gallery3 from "../assets/5.jpg";
import gallery4 from "../assets/4.jpg";
import gallery5 from "../assets/6.jpg";
import gallery6 from "../assets/7.jpg";
import gallery7 from "../assets/2_7.jpg";
import gallery8 from "../assets/2_8.jpg";
import gallery9 from "../assets/2_9.jpg";
import gallery10 from "../assets/2_10.jpg";

// Harta ajrore (vendose skedarin në src/assets/)
import siteMap from "../assets/aa.png";

export default function Home() {
  const { t } = useTranslation();

  // Hotspots sipas hartës
  const hotspots = [
    { id: 1, top: "74%", left: "63%", to: "/rooms/premium-1" },
    { id: 2, top: "56%", left: "60%", to: "/rooms/premium-2" },
    { id: 3, top: "32%", left: "64%", to: "/rooms/premium-3" },
    { id: 4, top: "72%", left: "82%", to: "/rooms/vip-1" },
    { id: 5, top: "50%", left: "84%", to: "/rooms/vip-2" },
    { id: 6, top: "21%", left: "86%", to: "/rooms/vip-3" },
  ];

  return (
    <>
      {/* ============= HERO ============= */}
      <section className="relative min-h:[68vh] md:min-h-[82vh] grid place-items-end overflow-hidden bg-bg text-ink">
        <img
          src={foto1}
          alt="Holiday Villas — Hero"
          className="absolute inset-0 h-full w-full object-cover"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f0e]/75 via-[#0b0f0e]/35 to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pb-8 md:pb-12">
          <p className="uppercase tracking-[0.18em] text-xs sm:text-sm text-ink/70 text-shadow-sm">
            {t("home.hero.welcome")}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight text-ink text-shadow">
            {t("home.hero.title")}
          </h1>
          <p className="mt-3 max-w-2xl text-ink/85 text-sm sm:text-base text-shadow-sm">
            {t("home.hero.subtitle")}
          </p>
          <div className="mt-5 sm:mt-6">
            <BookingBar />
          </div>
          <div className="mt-4">
            <Link to="/rooms" className="btn-ghost">
              {t("home.hero.ctaRooms")}
            </Link>
          </div>
        </div>
      </section>

      {/* ============= SERVICES PREVIEW ============= */}
      <section className="py-10 sm:py-14 md:py-16 bg-ink/5">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-5">
            {t("home.services.heading")}
          </h2>
        <p className="text-ink/70 text-sm sm:text-base max-w-3xl">
            {t("home.services.subheading")}
          </p>
          <div className="mt-7 sm:mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              t("home.services.items.spa_wellness"),
              t("home.services.items.events_meetings"),
              t("home.services.items.restaurant_bar"),
              t("home.services.items.room_service"),
              t("home.services.items.airport_transfer"),
              t("home.services.items.concierge"),
            ].map((s, i) => (
              <article key={i} className="card p-5 shine-wrap h-full">
                <h3 className="font-semibold text-base sm:text-lg text-accent mb-1">{s}</h3>
                <p className="text-xs sm:text-sm text-ink/70">{t("home.services.cardBody")}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============= HARTA INTERAKTIVE E VILLAVE ============= */}
      <section className="relative bg-bg text-ink">
        <div className="relative max-w-7xl mx-auto px-4 pt-4 pb-10">
          <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
            <img src={siteMap} alt="Planimetria e villave" className="w-full h-auto object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0f0e]/45 via-transparent to-transparent" />

            {/* Teksti majtas si në vizual */}
            <div className="absolute left-6 sm:left-10 top-8 sm:top-12 max-w-[36rem]">
              <h2 className="font-display leading-tight text-3xl sm:text-5xl md:text-6xl text-[#F6D176] drop-shadow">
                Përjeto qetësinë që<br />mungon në qytet!
              </h2>
              <p className="mt-4 text-white/90 text-sm sm:text-base max-w-[28rem]">
                Villa ekskluzive me pamje mahnitëse<br />dhe rehati të përsosur
              </p>

              <Link to="/rooms" className="inline-block mt-6 text-[#F6D176] text-lg font-semibold relative">
                Eksploro Villat
                <svg className="absolute left-0 -bottom-2 w-[150px] h-[10px]" viewBox="0 0 150 10" fill="none" aria-hidden="true">
                  <path d="M2 7 C35 2, 115 2, 148 7" stroke="#F6D176" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </Link>
            </div>

            {/* Rezervo Tani poshtë majtas */}
            <Link
              to="/rooms"
              className="absolute left-6 sm:left-10 bottom-6 text-white/95 text-2xl sm:text-3xl italic"
              aria-label="Rezervo Tani"
            >
              Rezervo Tani!
            </Link>

            {/* Badge VIP */}
            <div className="absolute left-[48%] top-[13%]">
              <span className="rounded-full bg-white/95 px-4 py-2 text-[#2d6b2f] font-extrabold tracking-wide shadow">VIP</span>
            </div>
            {/* Badge PREMIUM */}
            <div className="absolute right-[6%] bottom-[10%]">
              <span className="rounded-full bg-white/95 px-4 py-2 text-[#2d6b2f] font-extrabold tracking-wide shadow">PREMIUM</span>
            </div>

            {/* Hotspots 1–6 */}
            {hotspots.map((h) => (
              <Link
                key={h.id}
                to={h.to}
                aria-label={`Vila ${h.id}`}
                className="group absolute -translate-x-1/2 -translate-y-1/2"
                style={{ top: h.top, left: h.left }}
              >
                <div className="grid place-items-center w-11 h-11 rounded-full bg-white shadow-lg border border-black/10">
                  <span className="text-base font-bold text-[#2d6b2f]">{h.id}</span>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-1 text-center">
                  <span className="inline-block text-[11px] px-2 py-0.5 rounded bg-black/60 text-white">{`Vila ${h.id}`}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============= GALLERY SLIDER ============= */}
      <section className="py-10 sm:py-14 md:py-16 bg-bg text-ink">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="font-display text-xl sm:text-2xl mb-3 sm:mb-4">
            {t("home.gallery.heading")}
          </h3>
          <p className="text-ink/70 text-sm sm:text-base mb-5 sm:mb-6">
            {t("home.gallery.subheading")}
          </p>
          <PhotoSlider
            images={[gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10]}
            height="h-[36vh] sm:h-[48vh] md:h-[55vh]"
            fade={false}
          />
        </div>
      </section>

      {/* ============= BLOG PREVIEW ============= */}
      <section className="py-10 sm:py-14 md:py-16 bg-ink/[0.04]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
            {t("home.blog.heading")}
          </h2>
          <p className="text-ink/70 text-sm sm:text-base max-w-2xl mx-auto mb-5 sm:mb-6">
            {t("home.blog.subheading")}
          </p>
          <Link to="/blog" className="btn-primary" aria-label={t("home.blog.cta_aria")}>
            {t("home.blog.cta")}
          </Link>
        </div>
      </section>
    </>
  );
}
