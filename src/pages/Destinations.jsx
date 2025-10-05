// src/pages/Destinations.jsx
import React, { useMemo, useState } from "react";
import { VILLAS } from "../data/villas";
import VillaCard from "../components/VillaCard";

export default function Destinations() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("Të gjitha");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(VILLAS.map((v) => v.category))).filter(Boolean);
    return ["Të gjitha", ...cats];
  }, []);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return VILLAS.filter((v) => {
      const matchCat = cat === "Të gjitha" ? true : v.category === cat;
      const hay = `${v.name ?? ""} ${v.location ?? ""} ${v.description ?? ""}`.toLowerCase();
      const matchQ = q ? hay.includes(q) : true;
      return matchCat && matchQ;
    });
  }, [cat, query]);

  return (
    <section className="py-16 bg-bg text-ink">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h1 className="font-display text-3xl md:text-4xl tracking-tight">
            <span className="gradient-text">Destinacionet tona</span>
          </h1>
          <p className="text-ink/70 mt-2 max-w-2xl">
            Zbuloni vilat tona të kuruara me kujdes përreth Liqenit të Batllavës dhe rajoneve tjera të bukura.
            Çdo vilë ofron privatësi, arkitekturë moderne dhe përvoja të personalizuara për pushime të paharrueshme.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-6">
          {/* Kategori */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const active = c === cat;
              return (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={[
                    "btn-ghost px-3 py-2 text-sm",
                    active ? "ring-1 ring-accent/40 text-ink bg-white/5" : "text-ink/85",
                  ].join(" ")}
                  aria-pressed={active}
                >
                  {c}
                </button>
              );
            })}
          </div>

          {/* Kërkim */}
          <div className="w-full sm:w-72">
            <label htmlFor="search" className="sr-only">
              Kërko vila
            </label>
            <input
              id="search"
              type="text"
              placeholder="Kërko sipas emrit ose lokacionit…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl2 border border-line bg-card text-ink placeholder:text-ink/50 focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
          </div>
        </div>

        {/* Result count */}
        <div className="text-ink/60 text-sm mb-4">
          {list.length} rezultat{list.length === 1 ? "" : "e"}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((v) => (
            <VillaCard key={v.id ?? v.slug} villa={v} />
          ))}
        </div>

        {/* Empty state */}
        {list.length === 0 && (
          <div className="mt-10 card p-6 text-center lux-border">
            <p className="text-ink/80">S’u gjet asnjë vilë që përputhet me kriteret tuaja.</p>
            <div className="mt-4 flex gap-2 justify-center">
              <button onClick={() => setQuery("")} className="btn-ghost">
                Pastro kërkimin
              </button>
              <button onClick={() => setCat("Të gjitha")} className="btn-primary">
                Shfaq të gjitha
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
