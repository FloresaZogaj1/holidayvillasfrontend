import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function PayButton({ amount, email, meta }) {
  const { t } = useTranslation();
  const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:4000";
  const [loading, setLoading] = useState(false);

  const start = async () => {
    try {
      setLoading(true);
      const r = await fetch(`${API_BASE}/api/payments/init`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, email, meta }),
      });

      const data = await r.json();
      if (!data?.gate || !data?.fields) throw new Error("Invalid init response");

      // Krijo dhe dërgo formën POST te banka
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
      alert(t("pay.error"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={start} disabled={loading} className="btn btn-primary">
      {loading ? t("pay.initializing") : t("pay.button")}
    </button>
  );
}
