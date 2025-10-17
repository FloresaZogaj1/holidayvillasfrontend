import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { VILLAS, VILLAS_BY_SLUG } from "../data/villas";
import BookingModal from "../components/BookingModal.jsx";

export default function RoomDetails() {
  const { slug } = useParams();
  const villa = VILLAS_BY_SLUG[slug];
  const [show, setShow] = useState(false);

  if (!villa) {
    return (
      <section className="py-14 sm:py-16 bg-bg text-ink">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="font-display text-2xl sm:text-3xl mb-2 sm:mb-3">Vila nuk u gjet</h1>
          <p className="text-ink/70 mb-4">URL nuk përputhet me asnjë nga vilat ekzistuese.</p>
          <Link className="btn-ghost" to="/rooms">Kthehu te Vilat</Link>
        </div>
      </section>
    );
  }

  const gallery = villa.gallery?.length ? villa.gallery : [villa.cover];

  const summary = useMemo(() => {
    const parts = [];
    parts.push(`${villa.category} • deri në ${villa.capacity} mysafirë`);
    if (villa.size) parts.push(`${villa.size} m²`);
    if (villa.location) parts.push(villa.location);

    const hasBreakfast = villa.booking?.breakfast?.available;
    const hasParking = villa.booking?.parking?.free;
    const hasWifi = villa.booking?.internet?.wifi;

    const line2 = [hasBreakfast && "mëngjes", hasParking && "parkim falas", hasWifi && "Wi-Fi falas"]
      .filter(Boolean)
      .join(" • ");

    return `${parts.join(" • ")}. ${villa.description || ""}${line2 ? " " + line2 + "." : ""}`;
  }, [villa]);

  const chips = useMemo(() => (villa.badges || []).slice(0, 4), [villa]);

  const essentials = useMemo(() => {
    const b = villa.booking;
    return [
      b?.internet?.wifi ? "Wi-Fi falas" : null,
      b?.parking?.free ? (b?.parking?.private ? "Parkim privat falas" : "Parkim falas") : null,
      b?.breakfast?.available ? "Mëngjes në dispozicion" : null,
    ].filter(Boolean);
  }, [villa]);

  const amenities = (villa.amenities || []).slice(0, 8);

  return (
    <>
      {/* HERO */}
      <section className="relative bg-bg">
        <div className="shine-wrap">
          <img
            src={gallery[0]}
            alt={villa.name}
            className="w-full h-56 sm:h-72 md:h-[45vh] object-cover"
          />
        </div>
        <div className="absolute inset-0 lux-soft" />
        <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 w-full max-w-7xl px-3 sm:px-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span
              className={`px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold backdrop-glass border border-line ${
                villa.category === "VIP" ? "bg-accent text-[#0D0F0E]" : "bg-[#0D0F0E]/70 text-ink/95"
              }`}
            >
              {villa.category}
            </span>
            <h1 className="font-display text-2xl sm:text-3xl md:text-5xl gradient-text drop-shadow">
              {villa.name}
            </h1>
            <span className="ml-auto px-2.5 py-1 rounded-full text-xs sm:text-sm font-semibold bg-card/80 border border-line backdrop-glass">
              <span className="gradient-text">{villa.price}€</span>
              <span className="text-ink/70"> / nata</span>
            </span>
          </div>

          {chips.length ? (
            <div className="mt-2 sm:mt-3 -mx-3 sm:mx-0 px-3 sm:px-0 overflow-x-auto no-scrollbar">
              <div className="flex flex-nowrap sm:flex-wrap gap-2">
                {chips.map((c, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-[11px] sm:text-xs rounded-full bg-card/80 border border-line backdrop-glass whitespace-nowrap"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-10 sm:py-12 bg-bg text-ink">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 grid lg:grid-cols-3 gap-6 sm:gap-10">
          {/* Kolona kryesore */}
          <div className="lg:col-span-2">
            {/* Galeria */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {gallery.slice(0, 4).map((src, i) => (
                <div key={i} className="shine-wrap rounded-xl2 overflow-hidden">
                  <img
                    src={src}
                    alt={`${villa.name} — foto ${i + 1}`}
                    className="w-full aspect-[16/10] sm:aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Përmbledhje */}
            <div className="card p-4 sm:p-5 mb-6">
              <h3 className="font-display text-xl sm:text-2xl mb-2">Përmbledhje</h3>
              <p className="text-ink/80 leading-relaxed text-sm sm:text-base">{summary}</p>
            </div>

            {/* Thelbësore */}
            {essentials.length ? (
              <div className="card p-4 sm:p-5 mb-6">
                <h3 className="font-display text-xl sm:text-2xl mb-3">Thelbësore</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {essentials.map((e, i) => (
                    <li key={i} className="px-4 py-3 rounded-xl2 border border-line bg-card/80 text-sm">
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {/* Pajisje */}
            {amenities.length ? (
              <>
                <h3 className="font-display text-xl sm:text-2xl mb-3">Pajisje</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                  {amenities.map((a, i) => (
                    <li key={i} className="px-4 py-3 rounded-xl2 border border-line bg-card/80 text-sm">
                      {a}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>

          {/* Sidebar */}
          <aside className="card p-4 sm:p-6 h-fit self-start lux-border">
            <div className="text-2xl sm:text-3xl font-semibold">
              <span className="gradient-text">{villa.price}€</span>
              <span className="text-xs sm:text-sm text-ink/70"> / nata</span>
            </div>
            <p className="text-xs sm:text-sm text-ink/70 mb-4">
              Kapaciteti: deri në {villa.capacity} mysafirë
            </p>

            <a id="book" className="sr-only" aria-hidden="true" />
            <button onClick={() => setShow(true)} className="w-full btn-primary mb-6">
              Rezervo / Paguaj
            </button>

            <div className="rule mb-4" />
            <h4 className="font-semibold mb-3">Vila të tjera</h4>
            <div className="grid gap-3">
              {VILLAS.filter((r) => r.slug !== slug).slice(0, 2).map((r) => (
                <Link
                  key={r.slug}
                  to={`/rooms/${r.slug}`}
                  className="flex items-center gap-3 group"
                  aria-label={`Shiko ${r.name}`}
                >
                  <div className="rounded-lg overflow-hidden shine-wrap border border-line bg-card">
                    <img
                      src={r.cover}
                      alt={r.name}
                      className="w-16 h-12 object-cover group-hover:scale-[1.03] transition-transform"
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

      {/* Modal */}
      {show && <BookingModal villa={villa} onClose={() => setShow(false)} />}
    </>
  );
}
