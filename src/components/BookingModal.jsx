import React, { useState } from "react";
import http from "../requests";

export default function BookingModal({ villa, onClose }) {
  const [email, setEmail] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [guests, setGuests] = useState(1);

  const pricePerNight = villa?.price ?? villa?.price_per_night ?? 0;
  const nights =
    from && to ? Math.max(1, Math.ceil((new Date(to) - new Date(from)) / 86400000)) : 1;
  const totalPrice = nights * Number(pricePerNight || 0);

  async function handlePay(e) {
    e.preventDefault();
    try {
      const meta = {
        villa: villa?.slug,
        from,
        to,
        nights,
        guests,
        name: (email || "").split("@")[0] || "Guest",
      };

      // POST → backend
      const { data } = await http.post("/api/payments/init", {
        amount: totalPrice,
        email,
        meta,
      }); // { gate, fields, oid }

      if (!data?.gate || !data?.fields) {
        throw new Error("Përgjigje e pavlefshme nga serveri i pagesës.");
      }

      // Auto-POST te banka
      const form = document.createElement("form");
      form.method = "POST";
      form.action = data.gate;
      Object.entries(data.fields).forEach(([k, v]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = k;
        input.value = String(v ?? "");
        form.appendChild(input);
      });
      document.body.appendChild(form);
      form.submit();
    } catch (err) {
      console.error("Payment init error:", err);
      alert("Nuk u inicua pagesa. Kontrollo lidhjen ose CORS (detajet në Console).");
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 grid place-items-center z-[9999]">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 text-gray-900 shadow-xl">
        <h3 className="text-2xl font-semibold mb-4">Rezervo: {villa?.name}</h3>
        <form onSubmit={handlePay} className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <input type="date" value={from} onChange={e => setFrom(e.target.value)} className="border rounded-lg px-3 py-2" required />
            <input type="date" value={to}   onChange={e => setTo(e.target.value)}   className="border rounded-lg px-3 py-2" required />
          </div>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="border rounded-lg px-3 py-2 w-full" placeholder="Email" required />
          <select value={guests} onChange={e => setGuests(+e.target.value)} className="border rounded-lg px-3 py-2 w-full">
            {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} mysafirë</option>)}
          </select>
          <div className="flex items-center justify-between border-t pt-3 mt-3">
            <div>
              <div className="text-sm text-gray-600">{nights} net x {pricePerNight}€</div>
              <div className="text-lg font-semibold">Totali: {totalPrice}€</div>
            </div>
            <div className="flex gap-2">
              <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg border">Mbyll</button>
              <button type="submit" className="px-4 py-2 rounded-lg bg-black text-white">Vazhdo te Pagesa</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
