// src/components/BookingModal.jsx
import { useState } from "react";

export default function BookingModal({ villa, onClose }) {
  const [email, setEmail] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [guests, setGuests] = useState(2);
  const [submitting, setSubmitting] = useState(false);

  const pay = async () => {
    if (!from || !to) return alert("Zgjidh datat.");
    if (!email) return alert("Shkruaj email-in.");

    const start = new Date(from);
    const end = new Date(to);
    const nights = Math.max(1, Math.ceil((end - start) / (1000 * 60 * 60 * 24)));

    const pricePerNight = Number(villa?.price_per_night || villa?.price || 0);
    if (!pricePerNight) return alert("Çmimi i villës mungon.");

    const amount = (nights * pricePerNight).toFixed(2);
    setSubmitting(true);

    // DEV: hardcode backend URL
const apiBase = "https://holidayvillasks.com"; 

    const res = await fetch(`${apiBase}/api/payments/init`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, email, meta: { villa: villa?.slug, from, to, nights, guests } }),
    });

    const html = await res.text();
    const win = window.open("", "_self");
    win.document.open();
    win.document.write(html);
    win.document.close();
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4 bg-black/60">
      <div className="relative w-full max-w-lg rounded-2xl border border-line bg-card text-ink shadow-lux p-6">
        <button onClick={onClose} className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-lg ring-1 ring-line/70">✕</button>

        <h3 className="font-display text-2xl mb-4">Paguaj për — {villa?.name}</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input type="email" placeholder="Email" className="rounded-xl border border-line/60 bg-[#0f1412]/60 px-3 py-2"
                 value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="date" className="rounded-xl border border-line/60 bg-[#0f1412]/60 px-3 py-2"
                 value={from} onChange={(e) => setFrom(e.target.value)} />
          <input type="date" className="rounded-xl border border-line/60 bg-[#0f1412]/60 px-3 py-2"
                 value={to} onChange={(e) => setTo(e.target.value)} />
          <input type="number" min={1} className="rounded-xl border border-line/60 bg-[#0f1412]/60 px-3 py-2"
                 value={guests} onChange={(e) => setGuests(+e.target.value)} />
        </div>

        <button onClick={pay} disabled={submitting} className="btn-primary w-full mt-4">
          {submitting ? "Duke u lidhur me bankën…" : "Paguaj Tani"}
        </button>
      </div>
    </div>
  );
}
