import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard, A11y, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

/**
 * images: mund të jetë
 *  - array string-ësh: ["url1","url2",...]
 *  - ose objekte: [{ src, altKey?, captionKey? }]
 *     ku altKey/captionKey janë çelësa të i18n (p.sh. "gallery.villa1.alt")
 */
export default function PhotoSlider({
  images = [],
  height = "h-[55vh]",
  rounded = "rounded-2xl",
  fade = false,
  autoplayDelay = 3000,
  showCaptions = false
}) {
  const { t } = useTranslation();

  const slides = useMemo(() => {
    if (!images?.length) {
      return [
        { src: "https://picsum.photos/seed/gal1/1200/800" },
        { src: "https://picsum.photos/seed/gal2/1200/800" },
        { src: "https://picsum.photos/seed/gal3/1200/800" }
      ];
    }
    // normalizo ne objekte
    return images.map((it) => (typeof it === "string" ? { src: it } : it));
  }, [images]);

  return (
    <div
      className={`relative ${height} overflow-hidden ${rounded} shadow-card border border-line bg-card`}
      aria-label={t("slider.ariaCarousel")}
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation, Keyboard, A11y, EffectFade]}
        className="w-full h-full"
        loop
        autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation
        keyboard={{ enabled: true }}
        effect={fade ? "fade" : "slide"}
        speed={650}
        slidesPerView={1}
        a11y={{
          enabled: true,
          prevSlideMessage: t("slider.prev"),
          nextSlideMessage: t("slider.next"),
          firstSlideMessage: t("slider.first"),
          lastSlideMessage: t("slider.last"),
          slideLabelMessage: t("slider.slideLabel") // p.sh. "Slide {{index}} of {{slidesLength}}"
        }}
        breakpoints={
          fade
            ? undefined
            : {
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2, spaceBetween: 16 },
                1024: { slidesPerView: 3, spaceBetween: 20 }
              }
        }
      >
        {slides.map((item, i) => {
          const alt =
            item.altKey
              ? t(item.altKey)
              : t("slider.altFallback", { index: i + 1 });

        return (
          <SwiperSlide key={i} className="select-none relative">
            <img
              src={item.src}
              alt={alt}
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            {showCaptions && (item.captionKey || item.altKey) && (
              <figcaption className="absolute bottom-2 left-2 right-2 text-xs sm:text-sm px-3 py-2 rounded-lg bg-black/45 text-white backdrop-blur">
                {t(item.captionKey || item.altKey)}
              </figcaption>
            )}
          </SwiperSlide>
        );
        })}
      </Swiper>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
}
