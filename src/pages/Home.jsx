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

import siteMapFull from "../assets/Artboard 11 (1).png"; 

export default function Home() {
  const { t } = useTranslation();

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
      {/* HERO */}
      <section className="relative min-h-[68vh] md:min-h-[82vh] grid place-items-end overflow-hidden bg-bg text-ink">
        <img
          src={foto1}
          alt="Holiday Villas — Hero"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f0e]/75 via-[#0b0f0e]/35 to-transparent" />

        <div className="relative z-[1] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-12">
          <p className="uppercase tracking-[0.18em] text-xs sm:text-sm text-ink/70 text-shadow-sm">
            {t("home.hero.welcome")}
          </p>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl leading-tight text-ink text-shadow">
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

      {/* SERVICES */}
      <section className="py-10 sm:py-14 md:py-16 bg-ink/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <article key={i} className="card p-5 sm:p-6 shine-wrap h-full">
                <h3 className="font-semibold text-base sm:text-lg text-accent mb-1">
                  {s}
                </h3>
                <p className="text-xs sm:text-sm text-ink/70">
                  {t("home.services.cardBody")}
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

    {/* Hotspot-et klikues me efekt hover */}
    {hotspots.map((h) => (
      <Link
        key={h.id}
        to={h.to}
        aria-label={`Vila ${h.id}`}
        style={{
          position: "absolute",
          top: h.top,
          left: h.left,
          transform: "translate(-50%, -50%)",
        }}
        className="
          group block w-[3vw] min-w-[30px] aspect-square rounded-full
          cursor-pointer transition-all duration-300 z-[2]
        "
      >
        <span
          className="
            absolute inset-0 rounded-full border-2 border-white/70 opacity-0
            group-hover:opacity-100 group-hover:scale-125
            transition-all duration-300
          "
        />
        <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10" />
      </Link>
    ))}

    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0f0e]/55 via-[#0b0f0e]/10 to-transparent" />
  </div>
</section>

      {/* GALLERY */}
      <section className="py-10 sm:py-14 md:py-16 bg-bg text-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-display text-lg sm:text-2xl mb-3 sm:mb-4">
            {t("home.gallery.heading")}
          </h3>
          <p className="text-ink/70 text-sm sm:text-base mb-5 sm:mb-6">
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
      <section className="py-10 sm:py-14 md:py-16 bg-ink/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
            {t("home.blog.heading")}
          </h2>
          <p className="text-ink/70 text-sm sm:text-base max-w-2xl mx-auto mb-5 sm:mb-6">
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
