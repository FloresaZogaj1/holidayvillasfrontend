// src/pages/About.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import OptimizedImage from "../components/OptimizedImage";
import fotoo3 from "../assets/hero3.webp";
import fotoo4 from "../assets/aa.png";
import gallery1 from "../assets/3_6.jpg";
import gallery2 from "../assets/3_7.jpg";
import gallery3 from "../assets/3_8.jpg";
import gallery4 from "../assets/_P4A0282.jpg";
import gallery5 from "../assets/_P4A0283.jpg";
import gallery6 from "../assets/_P4A9602.JPG";
import gallery7 from "../assets/_P4A0280.jpg";

const GALLERY_IMAGES = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7];

export default function About() {
  const { t } = useTranslation();

  // Lightbox state
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const openModal = (src, index) => {
    setSelectedImage(src);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % GALLERY_IMAGES.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(GALLERY_IMAGES[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(GALLERY_IMAGES[prevIndex]);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    }
    if (isRightSwipe) {
      prevImage();
    }
  };

  // Mobile gallery touch handlers (for horizontal scroll)
  const handleGalleryTouchStart = (e) => {
    // Allow natural horizontal scrolling
  };

  const handleGalleryTouchMove = (e) => {
    // Allow natural horizontal scrolling
  };

  const handleGalleryTouchEnd = () => {
    // Natural scroll behavior
  };

  const features = [
    { title: t("about.features.privacy.title"), desc: t("about.features.privacy.desc"), icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true"><path fill="currentColor" d="M12 2a7 7 0 0 0-7 7v3H4a2 2 0 0 0-2 2v6h20v-6a2 2 0 0 0-2-2h-1V9a7 7 0 0 0-7-7Zm0 2a5 5 0 0 1 5 5v3H7V9a5 5 0 0 1 5-5Z"/></svg>
    )},
    { title: t("about.features.spa.title"), desc: t("about.features.spa.desc"), icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true"><path fill="currentColor" d="M12 3C9 7 5 9 5 13a7 7 0 0 0 14 0c0-4-4-6-7-10z"/></svg>
    )},
    { title: t("about.features.service.title"), desc: t("about.features.service.desc"), icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true"><path fill="currentColor" d="M12 1a11 11 0 1 0 11 11A11.012 11.012 0 0 0 12 1Zm1 11h5v2h-7V6h2Z"/></svg>
    )},
    { title: t("about.features.food.title"), desc: t("about.features.food.desc"), icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true"><path fill="currentColor" d="M7 2v20h2V2Zm8 0v9h-2V2Zm0 11h-2v9h2Z"/></svg>
    )},
    { title: t("about.features.outdoor.title"), desc: t("about.features.outdoor.desc"), icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true"><path fill="currentColor" d="M12 2 1 21h22L12 2Zm0 5 7.53 13H4.47L12 7Z"/></svg>
    )},
    { title: t("about.features.wifi.title"), desc: t("about.features.wifi.desc"), icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true"><path fill="currentColor" d="M12 18a2 2 0 1 0 2 2a2 2 0 0 0-2-2Zm8-6.34L18.59 9A10 10 0 0 0 5.41 9L4 11.66A12 12 0 0 1 20 11.66ZM12 12a6 6 0 0 0-4.24 1.76L6.34 15.2A8 8 0 0 1 17.66 15.2L16.24 13.76A6 6 0 0 0 12 12Z"/></svg>
    )},
  ];

  const stats = [
    { k: "97%", v: t("about.stats.satisfaction") },
    { k: "4.9/5", v: t("about.stats.rating") },
    { k: "2023", v: t("about.stats.founded") },
    { k: "24/7", v: t("about.stats.support") },
  ];

  const timeline = [
    { year: "2023", text: t("about.timeline.2023") },
    { year: "2024", text: t("about.timeline.2024") },
    { year: "2025", text: t("about.timeline.2025") },
  ];

  return (
    <>
      {/* HERO */}
      <section 
        className="relative min-h-[56vh] grid place-items-center overflow-hidden bg-bg text-ink"
        style={{
          backgroundImage: `url(${fotoo3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="relative z-10 text-center px-4">
          <p className="text-white/90 tracking-wide text-shadow">{t("about.hero.kicker")}</p>
          <h1 className="text-4xl md:text-6xl font-display text-white font-semibold text-shadow">
            Holiday Villas
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-white/95 text-shadow-sm">
            {t("about.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* KUSH JEMI */}
      <section className="py-16 bg-ink/[0.04]">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display gradient-text mb-4">
              {t("about.who.title")}
            </h2>
            <p className="text-ink/70">{t("about.who.text")}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/rooms" className="btn-primary">{t("about.who.ctaRooms")}</Link>
              <Link to="/contact" className="btn-ghost">{t("about.who.ctaContact")}</Link>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lux border border-line shine-wrap">
            <OptimizedImage
              src={fotoo4}
              alt={t("about.who.alt")}
              className="w-full h-[260px] sm:h-[320px] md:h-[360px] object-cover"
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

      {/* GALERIA */}
      <section className="py-12 bg-bg text-ink">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-2xl sm:text-3xl mb-4 gradient-text">
            {t("about.gallery.title")}
          </h2>
          <p className="text-ink/70 text-sm sm:text-base mb-6">
            {t("about.gallery.subtitle")}
          </p>

          {/* Desktop Gallery - Masonry Grid */}
          <div className="hidden sm:block">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
              {GALLERY_IMAGES.map((src, i) => (
                <div
                  key={i}
                  className="mb-4 rounded-xl2 overflow-hidden shadow-card cursor-pointer group break-inside-avoid"
                  onClick={() => openModal(src, i)}
                >
                  <div className="relative">
                    <OptimizedImage 
                      src={src} 
                      alt={t(`about.gallery.alt${i + 1}`)} 
                      priority={i < 2} 
                      className="w-full h-auto object-cover transition-all duration-500 group-hover:scale-[1.03] group-hover:brightness-110" 
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <svg 
                        className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Gallery - Horizontal Slider */}
          <div className="sm:hidden">
            <div className="relative">
              {/* Swipe instruction */}
              <div className="text-center mb-4 text-ink/60 text-sm">
                ← Swipe për të parë më shumë →
              </div>
              
              <div 
                className="overflow-x-auto scrollbar-hide"
                onTouchStart={handleGalleryTouchStart}
                onTouchMove={handleGalleryTouchMove}
                onTouchEnd={handleGalleryTouchEnd}
              >
                <div className="flex gap-4 pb-4" style={{ width: `${GALLERY_IMAGES.length * 280}px` }}>
                  {GALLERY_IMAGES.map((src, i) => (
                    <div
                      key={i}
                      className="flex-shrink-0 w-64 rounded-xl2 overflow-hidden shadow-card cursor-pointer group"
                      onClick={() => openModal(src, i)}
                    >
                      <div className="relative">
                        <OptimizedImage
                          src={src}
                          alt={t(`about.gallery.alt${i + 1}`)}
                          priority={i < 4} // Preload first 4 images for mobile
                          className="w-full h-80 object-cover transition-all duration-300 group-active:scale-95"
                        />
                        {/* Mobile tap indicator */}
                        <div className="absolute inset-0 bg-black/0 group-active:bg-black/10 transition-all duration-150 flex items-center justify-center">
                          <svg 
                            className="w-8 h-8 text-white opacity-0 group-active:opacity-100 transition-all duration-150" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation dots for mobile */}
              <div className="flex justify-center mt-4 gap-2">
                {Array.from({ length: Math.ceil(GALLERY_IMAGES.length / 3) }).map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-accent/30"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Lightbox Modal */}
          {selectedImage && (
            <div 
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-2 sm:p-4"
              onClick={closeModal}
            >
              <div 
                className="relative w-full h-full max-w-7xl flex items-center justify-center"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 p-3 sm:p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors touch-manipulation"
                >
                  <svg className="w-6 h-6 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Previous button - Desktop */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="hidden sm:flex absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors items-center justify-center"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Next button - Desktop */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="hidden sm:flex absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors items-center justify-center"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Image */}
                <img
                  src={selectedImage}
                  alt={t(`about.gallery.alt${currentIndex + 1}`)}
                  className="max-w-full max-h-full object-contain rounded-lg touch-manipulation"
                  onClick={(e) => e.stopPropagation()}
                />

                {/* Mobile Navigation Buttons - Bottom */}
                <div className="sm:hidden absolute bottom-16 left-0 right-0 flex justify-center gap-4 z-10">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="p-4 rounded-full bg-white/20 text-white active:bg-white/40 transition-colors touch-manipulation"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="p-4 rounded-full bg-white/20 text-white active:bg-white/40 transition-colors touch-manipulation"
                  >
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {/* Image counter */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/50 text-white rounded-full text-sm">
                  {currentIndex + 1} / {GALLERY_IMAGES.length}
                </div>

                {/* Swipe indicator for mobile */}
                <div className="sm:hidden absolute top-4 left-1/2 transform -translate-x-1/2 text-white/70 text-xs">
                  Swipe për të lëvizur
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 bg-ink/[0.04]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display mb-8 gradient-text text-center">
            {t("about.timeline.title")}
          </h2>
          <ol className="relative border-s border-line">
            {timeline.map((tli, i) => (
              <li key={i} className="mb-8 ms-6">
                <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-accent ring-2 ring-card shadow-lux">
                  {tli.year.slice(-2)}
                </span>
                <h3 className="font-semibold text-ink">{tli.year}</h3>
                <p className="text-ink/70">{tli.text}</p>
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
              {t("about.cta.title")}
            </h3>
            <p className="text-ink/70 mt-2">
              {t("about.cta.subtitle")}
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/rooms" className="btn-primary">{t("about.cta.book")}</Link>
              <Link to="/contact" className="btn-ghost">{t("about.cta.availability")}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
