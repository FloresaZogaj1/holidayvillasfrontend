// src/pages/Testimonials.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Testimonials() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    checkIn: "",
    checkOut: "",
    adults: 2,
    children: 0,
    rooms: 1,
    notes: "",
  });

  const testimonials = [
    {
      name: "Albert Krasniqi",
      text:
        "Qëndrimi ynë në Holiday Villas ishte thjesht i mrekullueshëm. Stafi ishte shumë i kujdesshëm dhe pamjet ishin mahnitëse!",
    },
    {
      name: "Blerta Gashi",
      text:
        "Përvoja më e mirë e pushimeve që kemi pasur ndonjëherë. Çdo gjë ishte mbi pritjet tona — e rekomandojmë fuqishëm!",
    },
    {
      name: "Miftar Kryeziu",
      text:
        "Dhoma fantastike, ushqim i shijshëm dhe spa ishte një parajsë. Nuk mund të presim të kthehemi sërish!",
    },
  ];

  // Lock scroll kur modali hapet + ESC për mbyllje
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev || "";

    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev || "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function onSubmit(e) {
    e.preventDefault();
    const params = new URLSearchParams({
      checkIn: form.checkIn || "",
      checkOut: form.checkOut || "",
      adults: String(form.adults || 1),
      children: String(form.children || 0),
      rooms: String(form.rooms || 1),
      notes: form.notes || "",
    });
    setOpen(false);
    navigate(`/rooms?${params.toString()}`);
  }

  return (
    <>
      {/* TESTIMONIALS */}
      <section className="py-16 bg-bg text-ink">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-display text-3xl md:text-5xl gradient-text mb-3">
            Çfarë thonë mysafirët tanë
          </h1>
          <p className="text-ink/70 max-w-3xl mx-auto mb-10">
            Vlerësime të sinqerta nga vizitorët që kanë përjetuar qetësinë, luksin
            dhe mikpritjen në Holiday Villas.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <article
                key={i}
                className="card p-6 lux-border hover-glow text-left"
              >
                <p className="text-ink/85 mb-4 leading-relaxed">“{t.text}”</p>
                <div className="font-semibold gradient-text">{t.name}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 bg-bg text-ink">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-4xl mb-3">
            Gati të rezervoni pushimet e ëndrrave?
          </h2>
          <p className="text-ink/70 mb-6">
            Rezervoni qëndrimin tuaj në Holiday Villas sot dhe përjetoni luks,
            rehati dhe relaks si kurrë më parë.
          </p>
          <button onClick={() => setOpen(true)} className="btn-primary">
            Rezervo Tani
          </button>
        </div>
      </section>

      {/* BOOKING MODAL */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          aria-labelledby="booking-title"
          role="dialog"
          aria-modal="true"
        >
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />

          {/* Card */}
          <div className="relative z-10 w-full max-w-xl card p-6 lux-border">
            <div className="flex items-center justify-between mb-4">
              <h3 id="booking-title" className="text-xl font-display">
                Rezervo qëndrimin
              </h3>
              <button
                onClick={() => setOpen(false)}
                className="btn-ghost"
                aria-label="Mbyll"
                type="button"
              >
                ✕
              </button>
            </div>

            <form
              onSubmit={onSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="flex flex-col">
                <label className="text-sm text-ink/70 mb-1">Check-in</label>
                <input
                  type="date"
                  value={form.checkIn}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, checkIn: e.target.value }))
                  }
                  className="px-4 py-3 rounded-xl2 border border-line bg-card text-ink outline-none focus:ring-2 focus:ring-accent/40"
                  required
                  autoFocus
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-ink/70 mb-1">Check-out</label>
                <input
                  type="date"
                  value={form.checkOut}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, checkOut: e.target.value }))
                  }
                  className="px-4 py-3 rounded-xl2 border border-line bg-card text-ink outline-none focus:ring-2 focus:ring-accent/40"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-ink/70 mb-1">Të rritur</label>
                <select
                  value={form.adults}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, adults: Number(e.target.value) }))
                  }
                  className="px-4 py-3 rounded-xl2 border border-line bg-card text-ink outline-none focus:ring-2 focus:ring-accent/40"
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-ink/70 mb-1">Fëmijë</label>
                <select
                  value={form.children}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, children: Number(e.target.value) }))
                  }
                  className="px-4 py-3 rounded-xl2 border border-line bg-card text-ink outline-none focus:ring-2 focus:ring-accent/40"
                >
                  {[0, 1, 2, 3, 4].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-ink/70 mb-1">Dhoma</label>
                <select
                  value={form.rooms}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, rooms: Number(e.target.value) }))
                  }
                  className="px-4 py-3 rounded-xl2 border border-line bg-card text-ink outline-none focus:ring-2 focus:ring-accent/40"
                >
                  {[1, 2, 3, 4].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2 flex flex-col">
                <label className="text-sm text-ink/70 mb-1">
                  Kërkesa të veçanta (opsionale)
                </label>
                <textarea
                  rows={3}
                  value={form.notes}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, notes: e.target.value }))
                  }
                  className="px-4 py-3 rounded-xl2 border border-line bg-card text-ink outline-none focus:ring-2 focus:ring-accent/40"
                  placeholder="p.sh. orë check-in, krevate shtesë, etj."
                />
              </div>

              <div className="md:col-span-2 flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="btn-ghost"
                >
                  Anulo
                </button>
                <button type="submit" className="btn-primary">
                  Kërko Disponueshmëri
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
