// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BookingBar from "../components/BookingBar";
import PhotoSlider from "../components/PhotoSlider";

// Images
import foto1 from "../assets/DJI_20241121102449_0318_8==D.png";
import gallery2 from "../assets/515550823.jpg";
import gallery3 from "../assets/5.jpg";
import gallery4 from "../assets/4.jpg";
import gallery5 from "../assets/6.jpg";
import gallery6 from "../assets/7.jpg";
import gallery7 from "../assets/2_7.jpg";
import gallery8 from "../assets/2_8.jpg";
import gallery9 from "../assets/2_9.jpg";
import gallery10 from "../assets/2_10.jpg";

import siteMapFull from "../assets/Artboard 11 (1).png"; 

export default function Home() {
  const { t } = useTranslation();

  // All villa hotspot circles removed as requested
  const hotspots = [];

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[65vh] sm:min-h-[68vh] md:min-h-[82vh] grid place-items-end overflow-hidden bg-bg text-ink">
        <img
          src={foto1}
          alt="Holiday Villas — Hero"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

        <div className="relative z-[1] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 md:pb-12">
          <p className="uppercase tracking-[0.18em] text-xs sm:text-sm text-white/90 text-shadow-sm">
            {t("home.hero.welcome")}
          </p>
          <h1 className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight text-white text-shadow">
            {t("home.hero.title")}
          </h1>
          <p className="mt-2 sm:mt-3 max-w-2xl text-white/95 text-xs sm:text-sm md:text-base text-shadow-sm">
            {t("home.hero.subtitle")}
          </p>

          <div className="mt-4 sm:mt-5 md:mt-6">
            <BookingBar />
          </div>

          <div className="mt-3 sm:mt-4">
            <Link 
              to="/rooms" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/95 text-accent font-semibold border-2 border-white/20 shadow-lg backdrop-blur-sm hover:bg-white hover:scale-105 hover:shadow-xl transition-all duration-300 group text-sm sm:text-base"
            >
              {t("home.hero.ctaRooms")}
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-10 sm:py-14 md:py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-5 text-accent">
            {t("home.services.heading")}
          </h2>
          <p className="text-ink-secondary text-sm sm:text-base max-w-3xl">
            {t("home.services.subheading")}
          </p>

          <div className="mt-7 sm:mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
  {[
    "spa_wellness",
    "events_meetings",
    "restaurant_bar",
    "room_service",
    "airport_transfer",
    "concierge",
  ].map((key) => (
    <article key={key} className="card p-5 sm:p-6 shine-wrap h-full">
      <h3 className="font-semibold text-base sm:text-lg text-accent mb-1">
        {t(`home.services.items.${key}`)}
      </h3>
      <p className="text-ink-secondary text-xs sm:text-sm">
        {t(`home.services.descriptions.${key}`)}
      </p>
    </article>
  ))}
</div>
        </div>
      </section>

<section className="relative mx-[calc(50%-50vw)] w-screen bg-bg">
  <div className="relative w-screen aspect-[21/9] sm:aspect-[20/9] md:aspect-[18/9] lg:aspect-[16/9]">
    <img
      src={siteMapFull}
      alt="Planimetria e villave"
      className="
        absolute inset-0 h-full w-full object-cover
        object-[60%_38%]
        sm:object-[60%_36%]
        md:object-[58%_40%]
        lg:object-[56%_45%]
      "
      loading="lazy"
    />

    {/* Hotspot circles removed */}

    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-accent/55 via-accent/10 to-transparent" />
  </div>
</section>

      {/* GALLERY */}
      <section className="py-10 sm:py-14 md:py-16 bg-bg text-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-display text-lg sm:text-2xl mb-3 sm:mb-4 text-accent">
            {t("home.gallery.heading")}
          </h3>
          <p className="text-ink-secondary text-sm sm:text-base mb-5 sm:mb-6">
            {t("home.gallery.subheading")}
          </p>
          <PhotoSlider
            images={[
              gallery2,
              gallery3,
              gallery4,
              gallery5,
              gallery6,
              gallery7,
              gallery8,
              gallery9,
              gallery10,
            ]}
            height="h-[34vh] sm:h-[48vh] md:h-[55vh]"
            fade={false}
          />
        </div>
      </section>

      {/* BLOG */}
      <section className="py-10 sm:py-14 md:py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4 text-accent">
            {t("home.blog.heading")}
          </h2>
          <p className="text-ink-secondary text-sm sm:text-base max-w-2xl mx-auto mb-5 sm:mb-6">
            {t("home.blog.subheading")}
          </p>
          <Link to="/blog" className="btn-primary">
            {t("home.blog.cta")}
          </Link>
        </div>
      </section>
    </>
  );
}
