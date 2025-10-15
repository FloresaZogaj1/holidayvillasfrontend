// src/pages/Checkout.jsx
import { useState } from "react";
import { postToGate } from "../utils/payment";

export default function Checkout() {
  console.log("Checkout component mounted");
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(1.0);
  const [email, setEmail] = useState("test@demo.com");

  async function startPayment() {
    console.log("startPayment called");
    setLoading(true);
    try {
      console.log("fetching...");
      const r = await fetch("https://holidayvillasbackend.onrender.com/api/payments/init", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, email }),
      });
      console.log("Response:", r);
      const data = await r.json();
      console.log("Data:", data);
      if (data.error) throw new Error(data.error);

      // Backend kthen { gate, fields, oid }
      postToGate(data.gate, data.fields);
    } catch (e) {
      alert("Nuk u inicua pagesa: " + e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Test Payment (BKT)</h1>

      <label className="block mb-2">Shuma (€)</label>
      <input
        type="number"
        step="0.01"
        min="0.50"
        className="border rounded px-3 py-2 w-full mb-4"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <label className="block mb-2">Email</label>
      <input
        type="email"
        className="border rounded px-3 py-2 w-full mb-4"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={() => { console.log("Button clicked"); startPayment(); }}
        disabled={loading}
        className="px-4 py-3 rounded bg-black text-white w-full"
      >
        {loading ? "Duke inicuar…" : "Paguaj"}
      </button>

      <p className="mt-6 text-sm text-gray-600">
        Pas pagesës do të ridërgoheni te <code>/#/payment/success</code> ose{" "}
        <code>/#/payment/fail</code>.
      </p>
    </div>
  );
}
