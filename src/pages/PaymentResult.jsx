import { useLocation } from "react-router-dom";

export default function PaymentResult() {
  const { pathname, search } = useLocation();
  const ok = pathname.includes("/success");
  const params = new URLSearchParams(search);
  const oid = params.get("oid");
  const msg = params.get("msg");

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4 text-center">
        {ok ? (
          <>
            <h1 className="text-3xl font-bold mb-2">✅ Pagesa u krye me sukses</h1>
            <p className="text-gray-600">Faleminderit! Rezervimi juaj është konfirmuar.</p>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-2">❌ Pagesa u refuzua</h1>
            <p className="text-gray-600">Ju lutem provoni përsëri ose përdorni një kartë tjetër.</p>
          </>
        )}
        {oid && <p className="mt-3 text-gray-500">Referenca: <b>{oid}</b></p>}
        {msg && <p className="mt-1 text-gray-500">Detaj: {msg}</p>}
      </div>
    </section>
  );
}
