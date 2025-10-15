// src/pages/Checkout.jsx

import { useState } from "react";

export default function Checkout() {
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(1.00);
  const [email, setEmail] = useState("");

  async function startPayment() {
    setLoading(true);
    try {
      const r = await fetch("https://holidayvillasbackend.onrender.com/api/payments/init", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, email }),
      });
      const data = await r.json();
      if (!r.ok || data.error) throw new Error(data.error || "init_failed");

      // Create and submit form to BKT gateway
      const form = document.createElement("form");
      form.method = "POST";
      form.action = data.gate;
      form.target = "_self";
      form.acceptCharset = "UTF-8";
      form.style.display = "none";
      Object.entries(data.fields).forEach(([k, v]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = k;
        input.value = v == null ? "" : String(v);
        form.appendChild(input);
      });
      document.body.appendChild(form);
      form.submit();
    } catch (e) {
      alert("Nuk u inicua pagesa: " + e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">BKT Payment</h1>
      <label className="block mb-2">Amount (€)</label>
      <input
        type="number"
        step="0.01"
        min="0.50"
        className="border rounded px-3 py-2 w-full mb-4"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <label className="block mb-2">Email</label>
      <input
        type="email"
        className="border rounded px-3 py-2 w-full mb-4"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button
        onClick={startPayment}
        disabled={loading}
        className="px-4 py-3 rounded bg-black text-white w-full"
      >
        {loading ? "Processing…" : "Pay"}
      </button>
      <p className="mt-6 text-sm text-gray-600">
        After payment you will be redirected to <code>/#/payment/success</code> or <code>/#/payment/fail</code>.
      </p>
    </div>
  );
}
