// src/pages/Gallery.jsx
import g1 from "../assets/_P4A0270.jpg";
import g2 from "../assets/_P4A0269.jpg";
import g3 from "../assets/_P4A0273.jpg";
import g4 from "../assets/3_3.jpg";
import g5 from "../assets/_P4A0283.jpg";
import g6 from "../assets/3_7.jpg";
import g7 from "../assets/1_11.jpg";
import g8 from "../assets/1_7.jpg";
import g9 from "../assets/3_5.jpg";
import g10 from "../assets/3.jpg";
import g11 from "../assets/3_6.jpg";

import gallery2 from "../assets/515550823.jpg";
import gallery3 from "../assets/5.jpg";
import gallery4 from "../assets/4.jpg";
import gallery5 from "../assets/6.jpg";
import gallery6 from "../assets/7.jpg";
import gallery7 from "../assets/2_7.jpg";
import gallery8 from "../assets/2_8.jpg";
import gallery9 from "../assets/2_9.jpg";
import gallery10 from "../assets/2_10.jpg";

const IMAGES = [
  g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11,
  gallery2, gallery3, gallery4, gallery5, gallery6,
  gallery7, gallery8, gallery9, gallery10
];

export default function Gallery() {
  return (
    <section className="py-16 bg-bg text-ink">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="font-display text-3xl md:text-5xl gradient-text mb-3">
            Galeria
          </h1>
          <p className="text-ink/70 max-w-2xl mx-auto">
            Shfleto disa nga momentet më të bukura dhe hapësirat e vilave tona —
            çdo foto tregon luksin dhe qetësinë që të pret.
          </p>
        </div>

        {/* Gallery grid masonry style */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {IMAGES.map((src, i) => (
            <div
              key={i}
              className="mb-4 rounded-xl2 overflow-hidden shine-wrap hover-glow block break-inside-avoid"
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
