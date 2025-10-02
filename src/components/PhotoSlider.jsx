import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard, A11y, EffectFade } from "swiper/modules";

// CSS të nevojshme për modulat që po përdor
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function PhotoSlider({
  images = [],
  height = "h-[55vh]",
  rounded = "rounded-2xl",
  fade = false,
  autoplayDelay = 3000,
}) {
  const slides = useMemo(
    () =>
      images?.length
        ? images
        : [
            "https://picsum.photos/seed/gal1/1200/800",
            "https://picsum.photos/seed/gal2/1200/800",
            "https://picsum.photos/seed/gal3/1200/800",
          ],
    [images]
  );

  return (
    <div className={`relative ${height} overflow-hidden ${rounded} shadow-card border border-line bg-card`}>
      <Swiper
        modules={[Autoplay, Pagination, Navigation, Keyboard, A11y, EffectFade]}
        className="w-full h-full"
        loop
        autoplay={{ delay: autoplayDelay, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        keyboard={{ enabled: true }}
        effect={fade ? "fade" : "slide"}
        speed={650}
        slidesPerView={1}
        breakpoints={
          fade
            ? undefined
            : {
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2, spaceBetween: 16 },
                1024: { slidesPerView: 3, spaceBetween: 20 },
              }
        }
      >
        {slides.map((src, i) => (
          <SwiperSlide key={i} className="select-none">
            <img src={src} alt={`Slide ${i + 1}`} className="w-full h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );
}
