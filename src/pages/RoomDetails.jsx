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
  if (!villa) return (
    <div className="p-10">
      Villa nuk u gjet. <Link className="underline" to="/rooms">Kthehu te Vilat</Link>
    </div>
  );

  return (
    <>
      {/* HERO */}
      <section className="relative">
        <img src={villa.gallery[0]} alt={villa.name} className="w-full h-[45vh] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 flex items-center gap-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            villa.category === "VIP" ? "bg-accent text-primary" : "bg-black/70 text-white"
          }`}>{villa.category}</span>
          <h1 className="text-paper font-display text-3xl md:text-5xl">{villa.name}</h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-3 mb-6">
              {villa.gallery.map((src, i) => (
                <img key={i} src={src} alt={villa.name} className="w-full aspect-[4/3] object-cover rounded-xl2" loading="lazy" />
              ))}
            </div>

            <p className="text-muted mb-6">{villa.description}</p>

            <h3 className="font-display text-2xl mb-3">Pajisje & Shërbime</h3>
            <ul className="grid sm:grid-cols-2 gap-2 mb-6">
              {villa.amenities.map((a, i) => (
                <li key={i} className="px-4 py-3 bg-paper rounded-xl2">{a}</li>
              ))}
            </ul>

            <h3 className="font-display text-2xl mb-3">Rregullat e Shtëpisë</h3>
            <ul className="list-disc ml-5 text-muted">
              <li>Ndalohet duhani, festat dhe eventet.</li>
              <li>Check-in nga ora 14:00, check-out deri në 10:00.</li>
            </ul>
          </div>

          <aside className="bg-white rounded-xl2 shadow-card p-6 h-fit">
            <div className="text-3xl font-semibold text-accent">
              {villa.price}€ <span className="text-sm text-muted">/ nata</span>
            </div>
            <p className="text-sm text-muted mb-4">
              Madhësia: {villa.size}m² · Kapaciteti: {villa.capacity} mysafirë
            </p>
            <a href="#book" className="w-full inline-block text-center bg-accent text-primary py-3 rounded-xl2 font-semibold mb-6">
              Rezervo
            </a>

            <h4 className="font-semibold mb-2">Vila të tjera</h4>
            <div className="grid gap-2">
              {Object.entries(VILLAS).filter(([key]) => key !== slug).slice(0, 2).map(([key, r]) => (
                <Link key={key} to={`/rooms/${key}`} className="flex items-center gap-3">
                  <img src={r.gallery[0]} alt={r.name} className="w-16 h-12 object-cover rounded-md" loading="lazy" />
                  <div>
                    <div className="text-sm">{r.name}</div>
                    <div className="text-xs text-muted">{r.price}€ / nata</div>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
