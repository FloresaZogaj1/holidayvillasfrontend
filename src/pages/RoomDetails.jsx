// src/pages/RoomDetails.jsx
import { useParams, Link } from "react-router-dom";
import { VILLAS, VILLAS_BY_SLUG } from "../data/villas";

export default function RoomDetails() {
  const { slug } = useParams();
  const villa = VILLAS_BY_SLUG[slug];

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

  const gallery = villa.gallery?.length ? villa.gallery : [villa.cover];

  return (
    <>
      {/* HERO */}
      <section className="relative bg-bg">
        <div className="shine-wrap">
          <img src={gallery[0]} alt={villa.name} className="w-full h-[45vh] object-cover" />
        </div>
        <div className="absolute inset-0 lux-soft" />
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-glass border border-line ${
                villa.category === "VIP" ? "bg-accent text-[#0D0F0E]" : "bg-[#0D0F0E]/70 text-ink/95"
              }`}
            >
              {villa.category}
            </span>
            <h1 className="font-display text-3xl md:text-5xl gradient-text drop-shadow">{villa.name}</h1>
            <span className="ml-auto px-3 py-1 rounded-full text-sm font-semibold bg-card/80 border border-line backdrop-glass">
              <span className="gradient-text">{villa.price}€</span>
              <span className="text-ink/70"> / nata</span>
            </span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 bg-bg text-ink">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
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

            <p className="text-ink/80 leading-relaxed mb-4">{villa.description}</p>
            <p className="text-ink/70 text-sm mb-6">{villa.location}</p>

            <h3 className="font-display text-2xl mb-3">Pajisje & Shërbime</h3>
            <ul className="grid sm:grid-cols-2 gap-2 mb-8">
              {villa.amenities?.map((a, i) => (
                <li key={i} className="px-4 py-3 rounded-xl2 border border-line bg-card/80 lux-soft">
                  {a}
                </li>
              ))}
            </ul>

            <h3 className="font-display text-2xl mb-3">Rregullat e Shtëpisë</h3>
            <div className="card p-5">
              <ul className="list-disc ml-5 text-ink/80 space-y-1">
                <li>Ndalohet duhani, festat dhe eventet.</li>
                <li>Check-in nga ora 14:00, check-out deri në 10:00.</li>
              </ul>
            </div>
          </div>

          <aside className="card p-6 h-fit self-start lux-border hover-glow">
            <div className="text-3xl font-semibold">
              <span className="gradient-text">{villa.price}€</span>
              <span className="text-sm text-ink/70"> / nata</span>
            </div>
            <p className="text-sm text-ink/70 mb-4">
              Kapaciteti: deri në {villa.capacity} mysafirë
            </p>

            <a href="#book" className="w-full inline-flex justify-center btn-primary mb-6">Rezervo</a>

            <div className="rule mb-4" />
            <h4 className="font-semibold mb-3">Vila të tjera</h4>
            <div className="grid gap-3">
              {VILLAS.filter((r) => r.slug !== slug).slice(0, 2).map((r) => (
                <Link key={r.slug} to={`/rooms/${r.slug}`} className="flex items-center gap-3 group" aria-label={`Shiko ${r.name}`}>
                  <div className="rounded-lg overflow-hidden shine-wrap border border-line bg-card">
                    <img
                      src={r.cover}
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

      {/* BOOK SECTION */}
      <section id="book" className="py-12 bg-bg text-ink">
        <div className="max-w-3xl mx-auto px-4 card p-6">
          <h2 className="font-display text-2xl mb-2">Rezervo {villa.name}</h2>
          <p className="text-ink/70 mb-6">Plotëso të dhënat më poshtë dhe përfundo pagesën e sigurt.</p>
          <a href="/rooms" className="btn-ghost inline-flex">Kthehu te Vilat</a>
        </div>
      </section>
    </>
  );
}
