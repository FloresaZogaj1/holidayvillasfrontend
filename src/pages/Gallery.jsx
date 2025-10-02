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
import foto1 from "../assets/3_7.jpg";
import gallery2 from "../assets/515550823.jpg";
import gallery3 from "../assets/5.jpg";
import gallery4 from "../assets/4.jpg";
import gallery5 from "../assets/6.jpg";
import gallery6 from "../assets/7.jpg";
import gallery7 from "../assets/2_7.jpg";
import gallery8 from "../assets/2_8.jpg"
import gallery9 from "../assets/2_9.jpg"
import gallery10 from "../assets/2_10.jpg"

const IMAGES = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11,gallery10, gallery2, gallery3,gallery4,gallery5,gallery6,gallery7,gallery8,gallery9];

export default function Gallery() {
  return (
    <section className="py-16 bg-paper">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-display mb-8">Gallery</h1>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {IMAGES.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Gallery ${i + 1}`}
              className="mb-4 w-full rounded-xl2 shadow-card object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
