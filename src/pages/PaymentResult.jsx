// src/pages/PaymentResult.jsx
import { useEffect, useState } from "react";

export default function PaymentResult() {
  const [data, setData] = useState({});

  useEffect(() => {
    // BKT shpesh kthen si query ose POST -> në SPA zakonisht i kap si query
    const params = new URLSearchParams(window.location.search);
    const obj = {};
    params.forEach((v,k) => obj[k]=v);
    setData(obj);
  }, []);

  const success = (data["Response"] || "").toLowerCase() === "approved" || data["mdStatus"] === "1";

  return (
    <div className="max-w-xl mx-auto py-12">
      <h1 className="text-2xl font-bold">
        {success ? "✅ Pagesa u krye me sukses" : "❌ Pagesa u refuzua"}
      </h1>
      <pre className="text-xs bg-black/5 p-3 mt-4 rounded">{JSON.stringify(data, null, 2)}</pre>
      <a className="underline mt-6 inline-block" href="/rooms">Kthehu te Vilat</a>
    </div>
  );
}
