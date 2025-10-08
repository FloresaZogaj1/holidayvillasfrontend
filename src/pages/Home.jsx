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

import prem from "../assets/3_2.jpg";
import preme from "../assets/3_7.jpg";
import vipe from "../assets/Artboard 1 copy 3.png";

export default function Home() {
  const { t } = useTranslation();

  const premiumImages = [prem, preme, gallery3];
  const vipImages = [vipe, gallery9, gallery10];

  return (
    <>
      {/* ============= HERO ============= */}
      <section className="relative min-h-[68vh] md:min-h-[82vh] grid place-items-end overflow-hidden bg-bg text-ink">
        {/* Background image */}
        <img
          src={foto1}
          alt="Holiday Villas — Hero"
          className="absolute inset-0 h-full w-full object-cover"
          fetchpriority="high"
        />

        {/* Overlay për kontrast teksti */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f0e]/75 via-[#0b0f0e]/35 to-transparent" />

        {/* Content */}
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

      {/* ============= PREMIUM VILLAS ============= */}
      <section className="py-10 sm:py-14 md:py-16 bg-bg text-ink">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-5 md:mb-7">
            {t("home.premium.heading")}
          </h2>
          <p className="text-ink/70 text-sm sm:text-base max-w-3xl mb-5 sm:mb-6">
            {t("home.premium.subheading")}
          </p>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {premiumImages.map((src, i) => (
              <article key={i} className="card overflow-hidden shine-wrap flex flex-col">
                <img
                  src={src}
                  alt={t("home.premium.card.title", { index: i + 1 })}
                  className="w-full object-cover aspect-[4/3] md:aspect-[16/10]"
                  loading="lazy"
                />
                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-semibold mb-1">
                    {t("home.premium.card.title", { index: i + 1 })}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink/70 mb-2">
                    {t("home.premium.card.meta", { size: "70m²", guests: 5 })}
                  </p>
                  <span className="text-accent font-bold text-sm sm:text-base">
                    {t("home.premium.card.price", { price: 180 })}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============= VIP VILLAS ============= */}
      <section className="py-10 sm:py-14 md:py-16 bg-ink/[0.04]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-5 md:mb-7">
            {t("home.vip.heading")}
          </h2>
          <p className="text-ink/70 text-sm sm:text-base max-w-3xl mb-5 sm:mb-6">
            {t("home.vip.subheading")}
          </p>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {vipImages.map((src, i) => (
              <article key={i} className="card overflow-hidden shine-wrap flex flex-col">
                <img
                  src={src}
                  alt={t("home.vip.card.title", { index: i + 1 })}
                  className="w-full object-cover aspect-[4/3] md:aspect-[16/10]"
                  loading="lazy"
                />
                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-semibold mb-1">
                    {t("home.vip.card.title", { index: i + 1 })}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink/70 mb-2">
                    {t("home.vip.card.meta", { size: "100m²", guests: 8 })}
                  </p>
                  <span className="text-accent font-bold text-sm sm:text-base">
                    {t("home.vip.card.price", { price: 350 })}
                  </span>
                </div>
              </article>
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
          <Link
            to="/blog"
            className="btn-primary"
            aria-label={t("home.blog.cta_aria")}
          >
            {t("home.blog.cta")}
          </Link>
        </div>
      </section>
    </>
  );
}
