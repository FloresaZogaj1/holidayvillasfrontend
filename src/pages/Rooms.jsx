// src/pages/Rooms.jsx
import { Link } from "react-router-dom";
import { VILLAS } from "../data/villas";

export default function Rooms() {
  return (
    <section className="py-16 bg-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl tracking-tight">
            <span className="gradient-text">Vilat</span>
          </h1>
          <p className="text-ink/70 mt-2">
            Zgjidh nga linja <span className="font-semibold text-ink">Premium</span> ose{" "}
            <span className="font-semibold text-ink">VIP</span>.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VILLAS.map((v) => (
            <article key={v.slug} className="group card shine-wrap hover-glow lux-border overflow-hidden">
              <div className="relative">
                <img
                  src={v.cover}
                  alt={v.name}
                  loading="lazy"
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 lux-soft opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span
                  className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${
                    v.category === "VIP"
                      ? "bg-accent text-[#0D0F0E]"
                      : "bg-[#0D0F0E]/70 text-ink/95 border border-line"
                  } backdrop-glass`}
                >
                  {v.category}
                </span>
                <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full text-sm font-semibold bg-card/80 border border-line backdrop-glass">
                  <span className="gradient-text">{v.price}€</span>{" "}
                  <span className="text-ink/70">/ nata</span>
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-ink mb-1">{v.name}</h3>
                <p className="text-sm text-ink/70 mb-1">{v.location}</p>
                <p className="text-sm text-ink/70 mb-3">deri në {v.capacity} mysafirë</p>

                <div className="rule my-4" />
                <div className="flex items-center gap-3">
                  <Link to={`/rooms/${v.slug}`} className="btn-ghost hover-glow" aria-label={`Shiko detajet për ${v.name}`}>
                    Shiko Detajet
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </Link>
                  <Link to={`/rooms/${v.slug}#book`} className="ml-auto btn-primary" aria-label={`Rezervo ${v.name}`}>
                    Rezervo
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
