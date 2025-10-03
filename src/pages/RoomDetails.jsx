// src/pages/RoomDetails.jsx
import { useParams, Link } from "react-router-dom";

const VILLAS = {
  "premium-lake-view": {
    name: "Premium Lake View",
    price: 180, size: 60, capacity: 4, category: "Premium",
    gallery: ["https://picsum.photos/seed/plv1/1200/800","https://picsum.photos/seed/plv2/1200/800"],
    amenities: ["Pamje liqeni", "Tarracë private", "Kondicioner", "Wi-Fi"],
    description: "Vilë premium me pamje nga Liqeni i Batllavës dhe ambiente moderne për një qëndrim relaksues.",
  },
  "premium-garden-suite": {
    name: "Premium Garden Suite",
    price: 200, size: 70, capacity: 4, category: "Premium",
    gallery: ["https://picsum.photos/seed/pgs1/1200/800","https://picsum.photos/seed/pgs2/1200/800"],
    amenities: ["Kopsht privat", "Shtrat king-size", "Mëngjes i përfshirë", "Wi-Fi"],
    description: "Suitë e bollshme me dalje në kopsht — perfekte për familje ose çifte.",
  },
  "premium-terrace": {
    name: "Premium Terrace",
    price: 220, size: 75, capacity: 5, category: "Premium",
    gallery: ["https://picsum.photos/seed/pt1/1200/800","https://picsum.photos/seed/pt2/1200/800"],
    amenities: ["Tarracë e madhe", "Kuzhinë e vogël", "Kondicioner", "Wi-Fi"],
    description: "Hapësirë moderne me tarracë panoramike — e shkëlqyer për darka nën qiell të hapur.",
  },
  "vip-panorama": {
    name: "VIP Panorama",
    price: 320, size: 90, capacity: 6, category: "VIP",
    gallery: ["https://picsum.photos/seed/vpp1/1200/800","https://picsum.photos/seed/vpp2/1200/800"],
    amenities: ["Pamje 180°", "Sallon i gjerë", "Sistem audio", "Wi-Fi"],
    description: "Vilë VIP me pamje panoramike dhe interior luksoz për përvoja memorabile.",
  },
  "vip-private-spa": {
    name: "VIP Private Spa",
    price: 360, size: 100, capacity: 6, category: "VIP",
    gallery: ["https://picsum.photos/seed/vps1/1200/800","https://picsum.photos/seed/vps2/1200/800"],
    amenities: ["Saunë private", "Jacuzzi", "Tarracë", "Wi-Fi"],
    description: "Oaz relaksi me spa private — zgjedhja perfekte për luks dhe privatësi.",
  },
  "vip-infinity": {
    name: "VIP Infinity",
    price: 420, size: 120, capacity: 8, category: "VIP",
    gallery: ["https://picsum.photos/seed/vpi1/1200/800","https://picsum.photos/seed/vpi2/1200/800"],
    amenities: ["Infinity pool", "Garazh privat", "Kuzhinë e plotë", "Wi-Fi"],
    description: "Vilë ikonike me pishinë infinity dhe hapësira të mëdha — standard i ri i luksit.",
  },
};

export default function RoomDetails() {
  const { slug } = useParams();
  const villa = VILLAS[slug];

  if (!villa) {
    return (
      <section className="py-16 bg-bg text-ink">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="font-display text-3xl mb-3">Vila nuk u gjet</h1>
          <p className="text-ink/70 mb-4">URL nuk përputhet me asnjë nga vilat ekzistuese.</p>
          <Link className="btn-ghost" to="/rooms">Kthehu te Vilat</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative bg-bg">
        <div className="shine-wrap">
          <img
            src={villa.gallery[0]}
            alt={villa.name}
            className="w-full h-[45vh] object-cover"
          />
        </div>

        {/* Overlay premium me lux-soft */}
        <div className="absolute inset-0 lux-soft" />

        {/* Header-info në fund të fotos */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-glass border border-line
                ${villa.category === "VIP"
                  ? "bg-accent text-[#0D0F0E]"
                  : "bg-[#0D0F0E]/70 text-ink/95"
                }`}
            >
              {villa.category}
            </span>

            <h1 className="font-display text-3xl md:text-5xl gradient-text drop-shadow">
              {villa.name}
            </h1>

            <span className="ml-auto px-3 py-1 rounded-full text-sm font-semibold bg-card/80 border border-line backdrop-glass">
              <span className="gradient-text">{villa.price}€</span>
              <span className="text-ink/70"> / nata</span>
            </span>
          </div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="py-12 bg-bg text-ink">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-10">
          {/* Kolona majtas */}
          <div className="lg:col-span-2">
            {/* Galeria */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {villa.gallery.map((src, i) => (
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

            {/* Përshkrimi */}
            <p className="text-ink/80 leading-relaxed mb-6">{villa.description}</p>

            {/* Amenities */}
            <h3 className="font-display text-2xl mb-3">Pajisje & Shërbime</h3>
            <ul className="grid sm:grid-cols-2 gap-2 mb-8">
              {villa.amenities.map((a, i) => (
                <li
                  key={i}
                  className="px-4 py-3 rounded-xl2 border border-line bg-card/80 lux-soft"
                >
                  {a}
                </li>
              ))}
            </ul>

            {/* Rregullat */}
            <h3 className="font-display text-2xl mb-3">Rregullat e Shtëpisë</h3>
            <div className="card p-5">
              <ul className="list-disc ml-5 text-ink/80 space-y-1">
                <li>Ndalohet duhani, festat dhe eventet.</li>
                <li>Check-in nga ora 14:00, check-out deri në 10:00.</li>
              </ul>
            </div>
          </div>

          {/* Aside (rezervimi + sugjerime) */}
          <aside className="card p-6 h-fit self-start lux-border hover-glow">
            <div className="text-3xl font-semibold">
              <span className="gradient-text">{villa.price}€</span>
              <span className="text-sm text-ink/70"> / nata</span>
            </div>
            <p className="text-sm text-ink/70 mb-4">
              Madhësia: {villa.size}m² · Kapaciteti: {villa.capacity} mysafirë
            </p>

            <a
              href="#book"
              className="w-full inline-flex justify-center btn-primary mb-6"
            >
              Rezervo
            </a>

            <div className="rule mb-4" />

            <h4 className="font-semibold mb-3">Vila të tjera</h4>
            <div className="grid gap-3">
              {Object.entries(VILLAS)
                .filter(([key]) => key !== slug)
                .slice(0, 2)
                .map(([key, r]) => (
                  <Link
                    key={key}
                    to={`/rooms/${key}`}
                    className="flex items-center gap-3 group"
                    aria-label={`Shiko ${r.name}`}
                  >
                    <div className="rounded-lg overflow-hidden shine-wrap border border-line bg-card">
                      <img
                        src={r.gallery[0]}
                        alt={r.name}
                        className="w-16 h-12 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <div className="text-sm">{r.name}</div>
                      <div className="text-xs text-ink/70">{r.price}€ / nata</div>
                    </div>
                  </Link>
                ))}
            </div>
          </aside>
        </div>
      </section>

      {/* ===== BOOK SECTION (anchor) ===== */}
      <section id="book" className="py-12 bg-bg text-ink">
        <div className="max-w-3xl mx-auto px-4 card p-6">
          <h2 className="font-display text-2xl mb-2">Rezervo {villa.name}</h2>
          <p className="text-ink/70 mb-6">
            Plotëso të dhënat më poshtë dhe përfundo pagesën e sigurt.
          </p>
          {/* Vendos komponentin tënd të rezervimit këtu (BookingModal / BookingForm) */}
          <a href="/rooms" className="btn-ghost inline-flex">Kthehu te Vilat</a>
        </div>
      </section>
    </>
  );
}
