// src/pages/Villa.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import BookingModal from "../components/BookingModal";
import { VILLAS } from "../data/villas";

export default function Villa() {
  const { slug } = useParams();
  const villa = VILLAS?.find((v) => v.slug === slug);
  const [show, setShow] = useState(false);

  // Shko në krye kur ndryshon vila
  useEffect(() => {
    try { window.scrollTo({ top: 0, behavior: "smooth" }); } catch {}
  }, [slug]);

  if (!villa) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="font-display text-3xl mb-2">Vila nuk u gjet</h1>
        <p className="text-black/70 mb-4">
          Sigurohu që po viziton një URL me slug të vlefshëm (p.sh. duke klikuar një kartë vile nga lista).
        </p>
        <Link to="/rooms" className="underline text-accent">Kthehu te Vilat</Link>
      </div>
    );
  }

  // Fallback-e për emrat e fushave (mbulo rastet nga Rooms.jsx & data/villas)
  const cover =
    villa.cover_url ??
    villa.cover ??
    "https://picsum.photos/seed/villa-cover/1200/700";

  const pricePerNight =
    villa.price_per_night ??
    villa.price ??
    0;

  const amenities = Array.isArray(villa.amenities) ? villa.amenities : [];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Cover */}
      <div className="aspect-[16/7] rounded-3xl overflow-hidden shadow-soft border border-line/60 bg-card">
        <img src={cover} alt={villa.name} className="w-full h-full object-cover" />
      </div>

      {/* Body */}
      <div className="mt-6 grid md:grid-cols-3 gap-8">
        {/* Info */}
        <div className="md:col-span-2">
          <h1 className="font-display text-4xl mb-1">{villa.name}</h1>
          {villa.location && (
            <p className="text-black/70 font-body">{villa.location}</p>
          )}
          {villa.description && (
            <p className="mt-4 leading-7 font-body">{villa.description}</p>
          )}

          {amenities.length > 0 && (
            <>
              <h3 className="font-semibold mt-6 mb-2">Pajisje & Shërbime</h3>
              <ul className="grid grid-cols-2 gap-2 text-sm">
                {amenities.map((a, i) => (
                  <li key={`${a}-${i}`}>• {a}</li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Sidebar / Booking */}
        <aside className="p-5 rounded-2xl bg-white shadow-soft h-fit border border-line/60">
          <div className="text-2xl font-display">
            €{pricePerNight}
            <span className="text-sm text-black/60"> / natë</span>
          </div>

          <button
            onClick={() => setShow(true)}
            className="mt-3 w-full py-3 rounded-xl bg-brand-deep text-white hover:opacity-90"
          >
            Rezervo / Paguaj
          </button>

          <div className="text-xs text-black/60 mt-3">
            S’ka tarifë të menjëhershme — konfirmimi vjen pas përfundimit të pagesës.
          </div>

          <div className="mt-4">
            <Link to="/rooms" className="text-primary underline underline-offset-4">
              ← Kthehu te lista e vilave
            </Link>
          </div>
        </aside>
      </div>

      {/* Modal i pagesës */}
      {show && <BookingModal villa={villa} onClose={() => setShow(false)} />}
    </div>
  );
}
