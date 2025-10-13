// components/PayButton.jsx
import { useState } from "react";

export default function PayButton({ amount = "1.00" }) {
  const [loading, setLoading] = useState(false);

  const startPayment = async () => {
    setLoading(true);
    try {
      const r = await fetch("https://holidayvillasbackend.onrender.com/api/payments/init", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data.error || "init failed");

      const { gate, fields } = data;

      // MUST: POST form te BKT për të hapur faqen e kartës (CVV)
      const form = document.createElement("form");
      form.method = "POST";
      form.action = gate;                 // https://pgw.bkt-ks.com/fim/est3Dgate
      form.target = "_self";              // hap në të njëjtën faqe

      Object.entries(fields).forEach(([k, v]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = k;
        input.value = String(v);
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();                      // kjo e hap faqen e bankës ku shkruhet CVV
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
