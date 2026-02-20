import React, { useMemo, useState } from "react";
import http from "../requests";
import { useTranslation } from "react-i18next";

export default function BookingModal({ villa, onClose }) {
  const { t } = useTranslation();
  const [firstName, setFirstName] = useState("");
  const [lastName,  setLastName]  = useState("");
  const [email,     setEmail]     = useState("");
  const [phone,     setPhone]     = useState("");
  const [from,      setFrom]      = useState("");
  const [to,        setTo]        = useState("");
  const [guests,    setGuests]    = useState(2);
  const [mealAddOns, setMealAddOns] = useState({ lunch: true, dinner: false });
  const [submitting,setSubmitting]= useState(false);

  const nights = useMemo(() => {
    if (!from || !to) return 1;
    const d1 = new Date(from);
    const d2 = new Date(to);
    const diff = Math.ceil((d2 - d1) / 86400000);
    return Math.max(1, diff);
  }, [from, to]);

  const basePerNight    = villa?.category === "VIP" ? 250 : 200;
  const extraPersons    = Math.max(0, Math.min(6, guests) - 2);
  const lodgingPerNight = basePerNight + extraPersons * 50;
  const mealPerPerson = 50;
  const selectedMealsCount = (mealAddOns?.lunch ? 1 : 0) + (mealAddOns?.dinner ? 1 : 0);
  const mealPerNight = mealPerPerson * Math.max(1, Number(guests) || 1) * selectedMealsCount;
  const totalPerNight   = lodgingPerNight + mealPerNight;
  const totalPrice      = nights * totalPerNight;
  const totalPriceStr   = Number(totalPrice).toFixed(2);

  async function handlePay(e) {
    e.preventDefault();
    if (submitting) return;

    // proceed normally

    try {
      // proceed normally

      if (!firstName.trim() || !lastName.trim()) return alert(t("errName"));
      if (!email.trim()) return alert(t("errEmail"));
      if (!from || !to) return alert(t("errDates"));
      if (guests < 1 || guests > 6) return alert(t("errGuests"));

      setSubmitting(true);

      const meta = {
        villa: villa?.slug,
        villaName: villa?.name,
        category: villa?.category,
        from,
        to,
        nights,
        guests,
        addons: {
          meal: {
            lunch: !!mealAddOns?.lunch,
            dinner: !!mealAddOns?.dinner,
          },
          mealPerPerson,
          mealPerNight,
        },
        customer: { firstName, lastName, email, phone },
        pricing: {
          basePerNight,
          extraPersons,
          lodgingPerNight,
          mealPerNight,
          totalPerNight,
          totalPrice: totalPriceStr,
          currency: "EUR",
        },
      };

      const { data } = await http.post("/api/payments/init", {
        amount: totalPriceStr,
        email,
        meta,
      });

      if (!data?.gate || !data?.fields) throw new Error("Invalid payment response");

      const form = document.createElement("form");
      form.method = "POST";
      form.action = data.gate;
      form.target = "_self";
      form.acceptCharset = "UTF-8";
      form.style.display = "none";

      Object.entries(data.fields).forEach(([name, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = value == null ? "" : String(value);
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    } catch (err) {
      console.error(err);
      // If server returned a specific error message, show it to the user
      const serverMsg = err?.response?.data?.error || err?.response?.data?.message || err?.message;
      alert(serverMsg || t("errPaymentInit"));
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[9999] grid sm:place-items-center items-start bg-black/50 px-3 overflow-y-auto">
      <div className="w-full max-w-lg sm:max-w-2xl md:max-w-3xl mx-auto my-6 rounded-2xl bg-card text-ink shadow-2xl lux-border overflow-hidden">
        <div className="relative border-b border-line">
          <div className="px-4 py-4 sm:px-6 sm:py-5 bg-gradient-to-r from-transparent via-card to-card">
            <div className="flex items-start justify-between gap-3 sm:gap-4">
              <div>
                <h3 className="font-display text-xl sm:text-2xl tracking-tight">
                  {t("reserve")}: <span className="gradient-text">{villa?.name}</span>
                </h3>
                <p className="text-ink/60 text-xs sm:text-sm mt-1">
                  {villa?.category} • {t("basePerNight", { price: basePerNight })}
                </p>
              </div>
              <button
                onClick={onClose}
                className="btn-ghost px-3 py-1.5 rounded-xl border border-line hover-glow text-sm sm:text-base"
                aria-label={t("close")}
                type="button"
              >
                {t("close")}
              </button>
            </div>
          </div>
        </div>

        <form onSubmit={handlePay} className="p-4 sm:p-6 grid lg:grid-cols-5 gap-4 sm:gap-6">
          {/* Kolona e majtë */}
          <div className="lg:col-span-3 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] sm:text-xs text-ink/60 mb-1">{t("firstName")}</label>
                <input
                  type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}
                  className="w-full rounded-xl2 border border-line bg-bg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                  placeholder={t("firstName")} required
                />
              </div>
              <div>
                <label className="block text-[11px] sm:text-xs text-ink/60 mb-1">{t("lastName")}</label>
                <input
                  type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}
                  className="w-full rounded-xl2 border border-line bg-bg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                  placeholder={t("lastName")} required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] sm:text-xs text-ink/60 mb-1">{t("email")}</label>
                <input
                  type="email" value={email} onChange={(e)=>setEmail(e.target.value)}
                  className="w-full rounded-xl2 border border-line bg-bg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                  placeholder="email@example.com" required
                />
              </div>
              <div>
                <label className="block text-[11px] sm:text-xs text-ink/60 mb-1">{t("phone")}</label>
                <input
                  type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)}
                  className="w-full rounded-xl2 border border-line bg-bg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                  placeholder="+383 xx xxx xxx"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] sm:text-xs text-ink/60 mb-1">{t("from")}</label>
                <input
                  type="date" value={from} onChange={(e)=>setFrom(e.target.value)}
                  className="w-full rounded-xl2 border border-line bg-bg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] sm:text-xs text-ink/60 mb-1">{t("to")}</label>
                <input
                  type="date" value={to} onChange={(e)=>setTo(e.target.value)}
                  className="w-full rounded-xl2 border border-line bg-bg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] sm:text-xs text-ink/60 mb-1">{t("guests")}</label>
                <select
                  value={guests} onChange={(e)=>setGuests(Math.min(6, Math.max(1, +e.target.value)))}
                  className="w-full rounded-xl2 border border-line bg-bg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent text-sm"
                >
                  {[1,2,3,4,5,6].map((n)=>(
                    <option key={n} value={n}>{n} {t("guests_label",{count:n})}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] sm:text-xs text-ink/60 mb-1">Shtesa (ushqim)</label>
                <div className="grid gap-2 rounded-xl2 border border-line bg-bg px-3 py-2">
                  <label className="flex items-center gap-2 text-sm text-ink/80">
                    <input
                      type="checkbox"
                      checked={!!mealAddOns?.lunch}
                      onChange={(e) => setMealAddOns((s) => ({ ...s, lunch: e.target.checked }))}
                    />
                    <span>{t("lunch")} (+50€ / person)</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm text-ink/80">
                    <input
                      type="checkbox"
                      checked={!!mealAddOns?.dinner}
                      onChange={(e) => setMealAddOns((s) => ({ ...s, dinner: e.target.checked }))}
                    />
                    <span>{t("dinner")} (+50€ / person)</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Kolona e djathtë */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-line bg-card shadow-card p-4 sm:p-5 lg:sticky lg:top-6">
              <h4 className="font-semibold mb-3 text-base sm:text-lg">{t("priceSummary")}</h4>
              <ul className="text-sm text-ink/80 space-y-2">
                <li className="flex justify-between gap-2">
                  <span>{villa?.category} • {t("categoryBase")}</span>
                  <span>{basePerNight}€ / {t("perNight")}</span>
                </li>
                <li className="flex justify-between gap-2">
                  <span>{t("extraPersons")} {extraPersons>0 ? `(+${extraPersons})` : ""}</span>
                  <span>{extraPersons>0 ? `+${extraPersons*50}€` : "—"}</span>
                </li>
                <li className="flex justify-between gap-2">
                  <span>
                    {selectedMealsCount === 0
                      ? "—"
                      : [
                          mealAddOns?.lunch ? `${t("lunch")} (+${guests}×50€)` : null,
                          mealAddOns?.dinner ? `${t("dinner")} (+${guests}×50€)` : null,
                        ]
                          .filter(Boolean)
                          .join(", ")}
                  </span>
                  <span>{selectedMealsCount === 0 ? "—" : `+${mealPerNight}€`}</span>
                </li>
                <li className="border-t border-line pt-2 flex justify-between gap-2">
                  <span>{t("totalPerNight")}</span>
                  <span className="font-semibold">{totalPerNight}€</span>
                </li>
                <li className="flex justify-between gap-2">
                  <span>{t("nights")}</span>
                  <span>{nights}</span>
                </li>
              </ul>

              <div className="mt-3 py-3 px-4 rounded-xl2 bg-bg border border-line flex items-center justify-between">
                <span className="text-sm text-ink/70">{t("total")}</span>
                <span className="text-lg sm:text-xl font-semibold">{totalPriceStr}€</span>
              </div>

              <p className="text-[11px] sm:text-xs text-ink/60 mt-2">* {t("footnote")}</p>

              <div className="mt-4 flex flex-col sm:flex-row gap-2 sm:justify-end">
                <button
                  type="button" onClick={onClose}
                  className="w-full sm:w-auto px-4 py-2 rounded-xl2 border border-line bg-bg hover-glow"
                  disabled={submitting}
                >
                  {t("cancel")}
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-4 py-2 rounded-xl2 btn-primary disabled:opacity-60"
                  disabled={submitting}
                >
                  {submitting ? t("processing") : t("continueToPayment")}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
