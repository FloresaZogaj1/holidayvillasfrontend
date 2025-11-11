import { useLocation, Link } from "react-router-dom";

const MSG_MAP = {
  "wrong security code": "Kodi i sigurisë i kartës është i pasaktë. Kontrollo CVV/CVC në pjesën e pasme të kartës.",
  "do not honour": "Banka ka refuzuar transaksionin. Kontakto bankën për më shumë informata.",
  "not sufficient funds": "Fonde të pamjaftueshme në kartë. Kontrollo bilancin.",
  "invalid transaction": "Transaksion i pavlefshëm. Kontrollo të dhënat e kartës dhe provo sërish.",
  "3d authentication failed": "Verifikimi 3D Secure dështoi. Kontrollo kartën ose provo një tjetër.",
  "transaction not permitted to cardholder": "Karta nuk lejon këtë lloj transaksioni. Kontakto bankën.",
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

  return "Pagesa u refuzua nga banka. Kontrollo të dhënat dhe provo sërish. Nëse problemi vazhdon, kontakto mbështetjen.";
}

export default function PaymentResult() {
  const { pathname, search } = useLocation();
  const ok = pathname.includes("/payment/success");
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
            {msg && (
              <p className="text-xs text-gray-400 mt-2">
                <b>Arsyeja teknike:</b> <span className="font-mono">{msg}</span>
              </p>
            )}
            <ul className="mt-4 text-left text-sm text-gray-500 mx-auto max-w-md list-disc list-inside">
              <li>Kontrollo që informacioni i kartës të jetë i saktë (numri, data, CVV/CVC).</li>
              <li>Nëse problemi vazhdon, provo një kartë tjetër ose kontakto bankën.</li>
              <li>Shënim: “Wrong security code” ndodh kur CVV/CVC është i gabuar.</li>
            </ul>
          </>
        )}

        {oid && (
          <p className="mt-3 text-sm text-gray-500">
            ID e porosisë: <span className="font-mono">{oid}</span>
          </p>
        )}

        <div className="mt-6">
          <Link to="/" className="inline-block rounded-lg border border-line/60 bg-card px-4 py-2 text-sm hover:bg-card/80">
            Kthehu në faqen kryesore
          </Link>
        </div>
      </div>
    </section>
  );
}

