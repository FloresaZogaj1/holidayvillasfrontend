import { useLocation, Link } from "react-router-dom";

const MSG_MAP = {
  "wrong security code": "Kodi i sigurisë i kartës është i pasaktë.",
  "do not honour": "Banka e refuzoi transaksionin. Kontakto bankën.",
  "not sufficient funds": "Fonde të pamjaftueshme në kartë.",
  "invalid transaction": "Transaksion i pavlefshëm. Provo sërish.",
  "3d authentication failed": "Verifikimi 3D Secure dështoi.",
  "transaction not permitted to cardholder": "Transaksioni nuk lejohet për këtë kartë.",
  "timeout": "Koha skadoi gjatë verifikimit. Provo sërish.",
};

function translateMsg(raw) {
  if (!raw) return null;
  const key = raw.toLowerCase().trim();
  if (MSG_MAP[key]) return MSG_MAP[key];

  if (key.includes("security code") || key.includes("cvv") || key.includes("cvc"))
    return MSG_MAP["wrong security code"];
  if (key.includes("not sufficient funds") || key.includes("insufficient"))
    return MSG_MAP["not sufficient funds"];
  if (key.includes("do not honour") || key.includes("do not honor"))
    return MSG_MAP["do not honour"];
  if (key.includes("3d"))
    return MSG_MAP["3d authentication failed"];

  return "Pagesa u refuzua nga banka. Kontrollo të dhënat dhe provo sërish.";
}

export default function PaymentResult() {
  const { pathname, search } = useLocation();
  const ok = pathname.includes("/success");
  const params = new URLSearchParams(search);
  const oid = params.get("oid");
  const msg = params.get("msg");
  const friendly = translateMsg(msg);

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
            <p className="text-gray-600">{friendly}</p>
          </>
        )}

        {oid && (
          <p className="mt-3 text-sm text-gray-500">
            ID e porosisë: <span className="font-mono">{oid}</span>
          </p>
        )}

        <div className="mt-6">
          <Link
            to="/"
            className="inline-block rounded-lg border border-line/60 bg-card px-4 py-2 text-sm hover:bg-card/80"
          >
            Kthehu në faqen kryesore
          </Link>
        </div>
      </div>
    </section>
  );
}
