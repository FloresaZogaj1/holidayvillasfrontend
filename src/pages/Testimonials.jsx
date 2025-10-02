// src/pages/Testimonials.jsx
import { useState } from "react";
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
      name: "Blerta Gashi ",
      text:
        "Përvoja më e mirë e pushimeve që kemi pasur ndonjëherë. Çdo gjë ishte mbi pritjet tona — e rekomandojmë fuqishëm!",
    },
    {
      name: "Miftar Kryeziu ",
      text:
        "Dhoma fantastike, ushqim i shijshëm dhe spa ishte një parajsë. Nuk mund të presim të kthehemi sërish!",
    },
  ];

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
      <section className="py-16 bg-paper">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-display mb-8">Çfarë thonë mysafirët tanë</h1>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl2 p-6 shadow-card text-left">
                <p className="text-muted mb-4">“{t.text}”</p>
                <div className="font-semibold text-accent">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display mb-4">
            Gati të rezervoni pushimet e ëndrrave?
          </h2>
          <p className="text-muted mb-6">
            Rezervoni qëndrimin tuaj në Holiday Villas sot dhe përjetoni luks,
            rehati dhe relaks si kurrë më parë.
          </p>
          <button
            onClick={() => setOpen(true)}
            className="px-6 py-3 bg-accent text-primary rounded-xl2 font-semibold hover:bg-accent-600"
          >
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
          <div className="relative z-10 w-full max-w-xl bg-white rounded-xl2 shadow-card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 id="booking-title" className="text-xl font-display">
                Rezervo qëndrimin
              </h3>
              <button
                onClick={() => setOpen(false)}
                className="px-3 py-1 rounded-lg text-primary/70 hover:bg-neutral-100"
                aria-label="Mbyll"
              >
                ✕
              </button>
            </div>

            <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm text-muted mb-1">Check-in</label>
                <input
                  type="date"
                  value={form.checkIn}
                  onChange={(e) => setForm((f) => ({ ...f, checkIn: e.target.value }))}
                  className="px-4 py-3 rounded-xl2 border"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-muted mb-1">Check-out</label>
                <input
                  type="date"
                  value={form.checkOut}
                  onChange={(e) => setForm((f) => ({ ...f, checkOut: e.target.value }))}
                  className="px-4 py-3 rounded-xl2 border"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-muted mb-1">Të rritur</label>
                <select
                  value={form.adults}
                  onChange={(e) => setForm((f) => ({ ...f, adults: Number(e.target.value) }))}
                  className="px-4 py-3 rounded-xl2 border"
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-muted mb-1">Fëmijë</label>
                <select
                  value={form.children}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, children: Number(e.target.value) }))
                  }
                  className="px-4 py-3 rounded-xl2 border"
                >
                  {[0, 1, 2, 3, 4].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-sm text-muted mb-1">Dhoma</label>
                <select
                  value={form.rooms}
                  onChange={(e) => setForm((f) => ({ ...f, rooms: Number(e.target.value) }))}
                  className="px-4 py-3 rounded-xl2 border"
                >
                  {[1, 2, 3, 4].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2 flex flex-col">
                <label className="text-sm text-muted mb-1">Kërkesa të veçanta (opsionale)</label>
                <textarea
                  rows={3}
                  value={form.notes}
                  onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
                  className="px-4 py-3 rounded-xl2 border"
                  placeholder="p.sh. orë check-in, krevate shtesë, etj."
                />
              </div>

              <div className="md:col-span-2 flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-5 py-3 rounded-xl2 border hover:bg-neutral-50"
                >
                  Anulo
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-accent text-primary rounded-xl2 font-semibold hover:bg-accent-600"
                >
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
