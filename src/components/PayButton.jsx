import { useState } from "react";

export default function PayButton({ amount, email, meta }) {
  const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";
  const [loading, setLoading] = useState(false);

  const start = async () => {
    try {
      setLoading(true);
      const r = await fetch(`${API_BASE}/api/payments/init`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, email, meta })
      });
      const data = await r.json();
      if (!data?.gate || !data?.fields) throw new Error('Invalid init response');

      // Krijo dhe dërgo formën
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = data.gate;
      Object.entries(data.fields).forEach(([k,v]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = k;
        input.value = String(v);
        form.appendChild(input);
      });
      document.body.appendChild(form);
      form.submit();
    } catch (e) {
      alert('Nuk u inicializua pagesa. Kontrollo backend/ENV.');
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={start} disabled={loading} className="btn btn-primary">
      {loading ? "Duke inicializu..." : "Paguaj"}
    </button>
  );
}
