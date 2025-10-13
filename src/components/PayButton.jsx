// components/PayButton.jsx
import { useState } from "react";

export default function PayButton({ amount = 120 }) {
  const [loading, setLoading] = useState(false);

  const startPayment = async () => {
    setLoading(true);
    try {
      const r = await fetch("https://<backend-domain>/api/payments/init", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data.error || "init failed");

      const { gate, fields } = data;

      // Krijo formën dhe auto-posto
      const form = document.createElement("form");
      form.method = "POST";
      form.action = gate;

      Object.entries(fields).forEach(([k, v]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = k;
        input.value = String(v);
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    } catch (e) {
      alert(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={startPayment} disabled={loading} className="btn btn-primary">
      {loading ? "Duke inicializuar…" : `Paguaj €${amount}`}
    </button>
  );
}
