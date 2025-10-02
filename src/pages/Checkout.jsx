import { useState } from "react";

export default function Checkout() {
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(10);
  const [bookingId, setBookingId] = useState("BK-12345");

  async function startPayment() {
    setLoading(true);
    try {
      const r = await fetch("http://localhost:5000/api/pay/init", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, description: "Villa booking", bookingId }),
      });
      const { postUrl, fields, error } = await r.json();
      if (error) throw new Error(error);

      // Krijo dhe dërgo formën
      const form = document.createElement("form");
      form.method = "POST";
      form.action = postUrl;

      Object.entries(fields).forEach(([k, v]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = k;
        input.value = String(v);
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit(); // redirects to bank 3D page

    } catch (e) {
      alert("Nuk u inicua pagesa: " + e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Test Payment (BKT Stage)</h1>
      <label className="block mb-2">Shuma (€)</label>
      <input
        type="number"
        className="border rounded px-3 py-2 w-full mb-4"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <label className="block mb-2">Booking ID</label>
      <input
        className="border rounded px-3 py-2 w-full mb-4"
        value={bookingId}
        onChange={(e) => setBookingId(e.target.value)}
      />

      <button
        onClick={startPayment}
        disabled={loading}
        className="px-4 py-3 rounded bg-black text-white"
      >
        {loading ? "Duke inicuar..." : "Paguaj"}
      </button>

      <div className="mt-6 text-sm">
        Për test: <b>4090700100360047</b>, skadenca <b>12/30</b>, CVV <b>000</b>.
      </div>
    </div>
  );
}
