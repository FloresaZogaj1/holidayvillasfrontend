

// src/pages/Experiences.jsx
import React from "react";

const items = [
  { title: "Private Chef",   desc: "Seasonal menus designed around you.",       img: "/images/exp-chef.jpg" },
  { title: "Yacht Charter",  desc: "Discover hidden coves and islands.",        img: "/images/exp-yacht.jpg" },
  { title: "Wellness & Spa", desc: "In-villa treatments and sunrise yoga.",     img: "/images/exp-spa.jpg"  },
];

export default function Experiences() {
  return (
    <section className="py-12 sm:py-14 md:py-16 bg-bg text-ink">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="font-display text-3xl md:text-4xl tracking-tight">
            <span className="gradient-text">Experiences</span>
          </h1>
          <p className="text-ink/70 mt-2 text-sm sm:text-base max-w-3xl">
            Përjetoni shërbime ekskluzive brenda dhe rreth Holiday Villas — nga kuzhina private,
            te lundrime intime dhe wellness i personalizuar.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {items.map((x, i) => (
            <article
              key={i}
              className="group card lux-border overflow-hidden shine-wrap hover-glow flex flex-col"
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={x.img}
                  alt={x.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {/* overlay i lehtë në hover */}
                <div className="absolute inset-0 lux-soft opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-5">
                <h2 className="font-display text-lg sm:text-xl">{x.title}</h2>
                <p className="text-ink/70 mt-1 text-sm sm:text-base">{x.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-3">
          <a href="/contact" className="btn-primary">Na kontakto</a>
          <a href="/rooms" className="btn-ghost">Shiko vilat</a>
        </div>
      </div>
    </section>
  );
}
