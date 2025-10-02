import { Link } from "react-router-dom";

// Ndrysho me fotot e tua reale
import v1 from "../assets/5.jpg";
import v2 from "../assets/2_8.jpg";
import v3 from "../assets/2.jpg";
import v4 from "../assets/4.jpg";
const v5 = "https://picsum.photos/seed/villa5/1000/700";
const v6 = "https://picsum.photos/seed/villa6/1000/700";

const VILLAS = [
  // PREMIUM
  { slug: "premium-lake-view",    name: "Premium Lake View",    category: "Premium", price: 180, size: 60,  capacity: 4, cover: v1 },
  { slug: "premium-garden-suite", name: "Premium Garden Suite", category: "Premium", price: 200, size: 70,  capacity: 4, cover: v2 },
  { slug: "premium-terrace",      name: "Premium Terrace",      category: "Premium", price: 220, size: 75,  capacity: 5, cover: v3 },
  // VIP
  { slug: "vip-panorama",         name: "VIP Panorama",         category: "VIP",     price: 320, size: 90,  capacity: 6, cover: v4 },
  { slug: "vip-private-spa",      name: "VIP Private Spa",      category: "VIP",     price: 360, size: 100, capacity: 6, cover: v5 },
  { slug: "vip-infinity",         name: "VIP Infinity",         category: "VIP",     price: 420, size: 120, capacity: 8, cover: v6 },
];

export default function Rooms() {
  return (
    <section className="py-16 bg-paper">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-display mb-2">Vilat</h1>
        <p className="text-muted mb-8">
          Zgjidh nga linja <span className="font-semibold">Premium</span> ose <span className="font-semibold">VIP</span>.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VILLAS.map((v) => (
            <div key={v.slug} className="bg-white rounded-xl2 overflow-hidden shadow-card">
              <div className="relative">
                <img src={v.cover} alt={v.name} className="w-full h-56 object-cover" loading="lazy" />
                <span
                  className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${
                    v.category === "VIP" ? "bg-accent text-primary" : "bg-black/70 text-white"
                  }`}
                >
                  {v.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold mb-1">{v.name}</h3>
                <p className="text-sm text-muted mb-2">
                  {v.size}m² · deri në {v.capacity} mysafirë
                </p>
                <span className="text-accent font-bold">{v.price}€ / nata</span>

                <div className="mt-3 flex items-center gap-3">
                  <Link
                    to={`/rooms/${v.slug}`}
                    className="text-primary hover:text-accent underline underline-offset-4"
                  >
                    Shiko Detajet
                  </Link>

                  <Link
                    to={`/rooms/${v.slug}#book`}
                    className="ml-auto px-3 py-2 rounded-lg border hover:bg-neutral-50"
                  >
                    Rezervo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
