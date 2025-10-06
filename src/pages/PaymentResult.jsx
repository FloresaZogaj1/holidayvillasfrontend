import { useEffect, useState } from "react";

export default function PaymentResult() {
  const [params, setParams] = useState({});
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const o = {}; p.forEach((v,k)=>o[k]=v); setParams(o);
  }, []);
  const ok = (params.Response || '').toLowerCase() === 'approved' || params.mdStatus === '1';
  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-2xl font-semibold">
        {ok ? "✅ Pagesa u krye me sukses" : "❌ Pagesa u refuzua"}
    </h1>
      <a className="underline mt-6 inline-block" href="/rooms">Kthehu te Vilat</a>
    </div>
  );
}
