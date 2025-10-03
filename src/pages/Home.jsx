// src/pages/Home.jsx
import { Link } from "react-router-dom";
import BookingBar from "../components/BookingBar";
import PhotoSlider from "../components/PhotoSlider";

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
import vipe from "../assets/Artboard 1 copy 3.png"

export default function Home() {
  // ====== Foto të dedikuara për secilën kartë ======
  const premiumImages = [prem, preme, gallery3];
  const vipImages = [vipe, gallery9, gallery10];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] md:min-h-[82vh] grid place-items-end overflow-hidden">
        {/* Background image */}
        <img
          src={foto1}
          alt="Holiday Villas"
          className="absolute inset-0 h-full w-full object-cover"
          fetchpriority="high"
        />
        {/* Gradient overlay për kontrast teksti */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f0e]/75 via-[#0b0f0e]/35 to-transparent" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pb-8 md:pb-12">
          <p className="uppercase tracking-[0.18em] text-sm text-ink/70 text-shadow-sm">
            Mirësevini
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight text-ink text-shadow">
            Holiday Villas
          </h1>
          <p className="mt-3 max-w-2xl text-ink/85 text-shadow-sm">
            Pushime luksoze dhe rehati të përjetshme në zemër të natyrës. Zgjidhni
            vilën tuaj të preferuar dhe shijoni çdo moment.
          </p>

          <div className="mt-6">
            <BookingBar />
          </div>

          <div className="mt-4">
            <Link to="/rooms" className="btn-ghost">
              Shiko Villat
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-12 sm:py-14 md:py-16 bg-ink/5">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display mb-4 sm:mb-6">
            Çfarë ofrojmë
          </h2>
          <p className="text-ink/70 text-sm sm:text-base max-w-3xl">
            Shërbime ekskluzive për një përvojë pushimi të plotë dhe pa stres:
            relaks, gastronomi cilësore, evente të personalizuara dhe asistencë 24/7.
          </p>

          <div className="mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Spa & Wellness",
              "Evente & Mbledhje",
              "Restorant & Bar",
              "Shërbim në dhomë",
              "Transport nga aeroporti",
              "Kujdestar 24/7",
            ].map((s, i) => (
              <article key={i} className="card p-5 shine-wrap">
                <h3 className="font-semibold text-base sm:text-lg text-accent mb-1">
                  {s}
                </h3>
                <p className="text-xs sm:text-sm text-ink/70">
                  Staf me përvojë, standard i lartë shërbimi dhe vëmendje ndaj
                  detajeve për komoditetin tuaj.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM VILLAS */}
      <section className="py-12 sm:py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display mb-4 sm:mb-6 md:mb-8">
            Vilat Premium
          </h2>
          <p className="text-ink/70 text-sm sm:text-base max-w-3xl mb-6">
            Vila moderne me hapësirë, dritë natyrale dhe privatësi — perfekte
            për çifte, familje ose grupe miqsh.
          </p>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {premiumImages.map((src, i) => (
              <article key={i} className="card overflow-hidden shine-wrap flex flex-col">
                <img
                  src={src}
                  alt={`Villë Premium ${i + 1}`}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                  loading="lazy"
                />
                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-semibold mb-1">
                    Villë Premium {i + 1}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink/70 mb-2">
                    70m² · deri në 5 mysafirë
                  </p>
                  <span className="text-accent font-bold text-sm sm:text-base">
                    180€ / nata
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VIP VILLAS */}
      <section className="py-12 sm:py-14 md:py-16 bg-ink/[0.04]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display mb-4 sm:mb-6 md:mb-8">
            Vilat VIP
          </h2>
        <p className="text-ink/70 text-sm sm:text-base max-w-3xl mb-6">
            Ekskluzive, luksoze dhe me shërbime të personalizuara — për një
            përvojë unike dhe memorabile.
          </p>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {vipImages.map((src, i) => (
              <article key={i} className="card overflow-hidden shine-wrap flex flex-col">
                <img
                  src={src}
                  alt={`Villë VIP ${i + 1}`}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover"
                  loading="lazy"
                />
                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-semibold mb-1">
                    Villë VIP {i + 1}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink/70 mb-2">
                    100m² · deri në 8 mysafirë
                  </p>
                  <span className="text-accent font-bold text-sm sm:text-base">
                    350€ / nata
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SLIDER */}
      <section className="py-12 sm:py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-xl sm:text-2xl font-display mb-3 sm:mb-4">
            Galeria
          </h3>
          <p className="text-ink/70 text-sm sm:text-base mb-6">
            Pamje nga vilat tona, pishinat, natyra dhe ambientet e brendshme.
          </p>

          <PhotoSlider
            images={[gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10]}
            height="h-[55vh]"
            fade={false}
          />
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-12 sm:py-14 md:py-16 bg-ink/[0.04]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display mb-4">
            Të rejat e fundit
          </h2>
          <p className="text-ink/70 text-sm sm:text-base max-w-2xl mx-auto mb-6">
            Këshilla udhëtimi, përvoja lokale dhe njoftime nga ekipi ynë – që të
            planifikoni pushimet në mënyrën më të mirë.
          </p>
          <Link
            to="/blog"
            className="btn-primary"
            aria-label="Vizitoni blogun e Holiday Villas"
          >
            Vizitoni blogun
          </Link>
        </div>
      </section>
    </>
  );
}
