// src/pages/Villa.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import BookingModal from "../components/BookingModal";
import { VILLAS } from "../data/villas";

export default function Villa() {
  const { slug } = useParams();
  const villa = VILLAS?.find((v) => v.slug === slug);
  const [show, setShow] = useState(false);

  // Shko lart kur ndryshon vila
  useEffect(() => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {}
  }, [slug]);

  if (!villa) {
    return (
      <section className="py-16 bg-bg text-ink">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="font-display text-3xl mb-2">Vila nuk u gjet</h1>
          <p className="text-ink/70 mb-4">
            Sigurohu që po viziton një URL me slug të vlefshëm (p.sh. duke
            klikuar një kartë vile nga lista).
          </p>
          <Link to="/rooms" className="btn-ghost">Kthehu te Vilat</Link>
        </div>
      </section>
    );
  }

  // Fallback-e për fusha
  const cover = villa.cover ?? villa.cover_url ?? "https://picsum.photos/seed/villa-cover/1200/700";
  const pricePerNight = villa.price ?? villa.price_per_night ?? 0;
  const capacity = villa.capacity ?? villa.max_guests ?? undefined;
  const gallery = Array.isArray(villa.gallery) && villa.gallery.length ? villa.gallery : [cover];
  const amenities = Array.isArray(villa.amenities) ? villa.amenities : [];

  return (
    <>
      {/* HERO */}
      <section className="relative bg-bg text-ink">
        <div className="shine-wrap">
          <img src={cover} alt={villa.name} className="w-full h-[45vh] md:h-[54vh] object-cover" />
        </div>
        <div className="absolute inset-0 lux-soft" />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4">
          <div className="flex flex-wrap items-center gap-3">
            {villa.category && (
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-glass border border-line ${
                  villa.category === "VIP" ? "bg-accent text-[#0D0F0E]" : "bg-[#0D0F0E]/70 text-ink/95"
                }`}
              >
                {villa.category}
              </span>
            )}
            <h1 className="font-display text-3xl md:text-5xl gradient-text drop-shadow">
              {villa.name}
            </h1>
            <span className="ml-auto px-3 py-1 rounded-full text-sm font-semibold bg-card/80 border border-line backdrop-glass">
              <span className="gradient-text">{pricePerNight}€</span>
              <span className="text-ink/70"> / nata</span>
            </span>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="py-12 bg-bg text-ink">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-10">
          {/* Info & Gallery */}
          <div className="lg:col-span-2">
            {/* Mini-gallery */}
            {gallery.length > 1 && (
              <div className="grid grid-cols-2 gap-3 mb-6">
                {gallery.slice(0, 6).map((src, i) => (
                  <div key={i} className="shine-wrap hover-glow rounded-xl2 overflow-hidden">
                    <img
                      src={src}
                      alt={`${villa.name} — foto ${i + 1}`}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-500 hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Tekstet */}
            {villa.location && (
              <p className="text-ink/70 text-sm mb-2">{villa.location}</p>
            )}
            {capacity && (
              <p className="text-ink/70 text-sm mb-2">Kapaciteti: deri në {capacity} mysafirë</p>
            )}
            {villa.description && (
              <p className="text-ink/80 leading-relaxed mb-6">{villa.description}</p>
            )}

            {/* Amenities */}
            {amenities.length > 0 && (
              <>
                <h3 className="font-display text-2xl mb-3">Pajisje & Shërbime</h3>
                <ul className="grid sm:grid-cols-2 gap-2 mb-8">
                  {amenities.map((a, i) => (
                    <li
                      key={`${a}-${i}`}
                      className="px-4 py-3 rounded-xl2 border border-line bg-card/80 lux-soft"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* Rregullat */}
            <h3 className="font-display text-2xl mb-3">Rregullat e Shtëpisë</h3>
            <div className="card p-5">
              <ul className="list-disc ml-5 text-ink/80 space-y-1">
                <li>Ndalohet duhani, festat dhe eventet.</li>
                <li>Check-in nga ora 14:00, check-out deri në 10:00.</li>
              </ul>
            </div>
          </div>

          {/* Sidebar / Booking */}
          <aside className="card p-6 h-fit self-start lux-border hover-glow">
            <div className="text-3xl font-semibold">
              <span className="gradient-text">{pricePerNight}€</span>
              <span className="text-sm text-ink/70"> / nata</span>
            </div>
            {capacity && (
              <p className="text-sm text-ink/70 mt-1">deri në {capacity} mysafirë</p>
            )}

            <button onClick={() => setShow(true)} className="btn-primary w-full mt-4">
              Rezervo / Paguaj
            </button>

            <p className="text-xs text-ink/70 mt-3">
              S’ka tarifë të menjëhershme — konfirmimi vjen pas përfundimit të pagesës.
            </p>

            <div className="rule my-4" />
            <Link to="/rooms" className="btn-ghost inline-flex">
              ← Kthehu te Vilat
            </Link>
          </aside>
        </div>
      </section>

      {/* BOOKING MODAL */}
      {show && <BookingModal villa={villa} onClose={() => setShow(false)} />}
    </>
  );
}
