import { useState } from "react";

export default function PayButton({ amount = "1.00" }) {
  const [loading, setLoading] = useState(false);

  const startPayment = async (e) => {
    if (e && typeof e.preventDefault === "function") e.preventDefault();
    setLoading(true);
    try {
      const r = await fetch(`${import.meta.env.VITE_API_BASE ?? "https://holidayvillasbackend.onrender.com"}/api/payments/init`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });
      const data = await r.json();
      console.log(data);
      if (!r.ok) throw new Error(data.error || "init failed");

      const { gate, fields } = data;

      const form = document.createElement("form");
      form.method = "POST";
      form.action = gate;
      form.target = "_self";
      form.acceptCharset = "UTF-8";
      form.style.display = "none";

      Object.entries(fields).forEach(([k, v]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = k;
        input.value = v == null ? "" : String(v);
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
      {loading ? "Duke inicializuar…" : `Vazhdo te pagesa (€${amount})`}
    </button>
  );
}
