// src/components/BookingModal.jsx
import React, { useMemo, useState } from "react";
import http from "../requests";
import { useTranslation } from "react-i18next";

export default function BookingModal({ villa, onClose }) {
  const { t } = useTranslation();

  // ====== STATE ======
  const [firstName, setFirstName] = useState("");
  const [lastName,  setLastName]  = useState("");
  const [email,     setEmail]     = useState("");
  const [phone,     setPhone]     = useState("");
  const [from,      setFrom]      = useState("");
  const [to,        setTo]        = useState("");
  const [guests,    setGuests]    = useState(2);
  const [lunch,     setLunch]     = useState(false);
  const [dinner,    setDinner]    = useState(false);

  // ====== PRICING LOGIC ======
  const nights = useMemo(() => {
    if (!from || !to) return 1;
    const d1 = new Date(from);
    const d2 = new Date(to);
    const diff = Math.ceil((d2 - d1) / 86400000);
    return Math.max(1, diff);
  }, [from, to]);

  const basePerNight = villa?.category === "VIP" ? 250 : 200;
  const extraPersons    = Math.max(0, Math.min(6, guests) - 2);
  const lodgingPerNight = basePerNight + (extraPersons * 50);

  const lunchPerNight  = lunch  ? 25 * guests : 0;
  const dinnerPerNight = dinner ? 25 * guests : 0;

  const totalPerNight = lodgingPerNight + lunchPerNight + dinnerPerNight;
  const totalPrice    = nights * totalPerNight;

  // ====== SUBMIT ======
  async function handlePay(e) {
    e.preventDefault();
    try {
      if (!firstName.trim() || !lastName.trim()) return alert(t("errName"));
      if (!email.trim()) return alert(t("errEmail"));
      if (!from || !to)  return alert(t("errDates"));
      if (guests < 1 || guests > 6) return alert(t("errGuests"));

      const meta = {
        villa: villa?.slug,
        villaName: villa?.name,
        category: villa?.category,
        from, to, nights, guests,
        customer: { firstName, lastName, email, phone },
        pricing: {
          basePerNight, extraPersons, lodgingPerNight,
          lunch, dinner, lunchPerNight, dinnerPerNight,
          totalPerNight, totalPrice, breakfastIncluded: true, currency: "EUR",
        },
      };

      const { data } = await http.post("/api/payments/init", {
        amount: totalPrice,
        email,
        meta,
      });

      if (!data?.gate || !data?.fields) throw new Error("Invalid payment response");

      // Auto-POST te banka
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
      alert(t("errPaymentInit"));
    }
  }

  // ====== UI ======
  return (
    <div className="fixed inset-0 z-[9999] grid place-items-center bg-black/50 px-3">
      <div className="w-full max-w-3xl rounded-2xl bg-card text-ink shadow-2xl lux-border overflow-hidden">
        {/* Header */}
        <div className="relative border-b border-line">
          <div className="px-6 py-5 bg-gradient-to-r from-transparent via-card to-card">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl tracking-tight">
                  {t("reserve")}: <span className="gradient-text">{villa?.name}</span>
                </h3>
                <p className="text-ink/60 text-sm mt-1">
                  {villa?.category} • {t("basePerNight", { price: basePerNight })}
                  {" • "}
                  {t("breakfastIncluded")}
                </p>
              </div>
              <button
                onClick={onClose}
                className="btn-ghost px-3 py-1.5 rounded-xl border border-line hover-glow"
                aria-label={t("close")}
              >
                {t("close")}
              </button>
            </div>
          </div>
        </div>

        {/* Body */}
        <form onSubmit={handlePay} className="p-6 grid lg:grid-cols-5 gap-6">
          {/* Left: form fields */}
          <div className="lg:col-span-3 space-y-4">
            {/* Personal */}
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-ink/60 mb-1">{t("firstName")}</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  className="w-full rounded-xl2 border border-line bg-bg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder={t("firstName")}
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-ink/60 mb-1">{t("lastName")}</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  className="w-full rounded-xl2 border border-line bg-bg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder={t("lastName")}
                  required
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-ink/60 mb-1">{t("email")}</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full rounded-xl2 border border-line bg-bg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="email@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-ink/60 mb-1">{t("phone")}</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full rounded-xl2 border border-line bg-bg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="+383 xx xxx xxx"
                />
              </div>
            </div>

            {/* Dates & guests */}
            <div className="grid sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs text-ink/60 mb-1">{t("from")}</label>
                <input
                  type="date"
                  value={from}
                  onChange={e => setFrom(e.target.value)}
                  className="w-full rounded-xl2 border border-line bg-bg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-ink/60 mb-1">{t("to")}</label>
                <input
                  type="date"
                  value={to}
                  onChange={e => setTo(e.target.value)}
                  className="w-full rounded-xl2 border border-line bg-bg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-ink/60 mb-1">{t("guests")}</label>
                <select
                  value={guests}
                  onChange={e => setGuests(Math.min(6, Math.max(1, +e.target.value)))}
                  className="w-full rounded-xl2 border border-line bg-bg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  {[1,2,3,4,5,6].map(n => (
                    <option key={n} value={n}>{n} {t("guests_label", { count: n })}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Extras */}
            <div className="grid sm:grid-cols-2 gap-3">
              <label className="flex items-center gap-2 rounded-xl2 border border-line bg-card px-3 py-2 cursor-pointer hover-glow">
                <input type="checkbox" checked={lunch} onChange={e => setLunch(e.target.checked)} />
                <span className="text-ink/90">
                  {t("lunch")} <span className="text-ink/60">{t("perPersonPerNight", { price: 25 })}</span>
                </span>
              </label>
              <label className="flex items-center gap-2 rounded-xl2 border border-line bg-card px-3 py-2 cursor-pointer hover-glow">
                <input type="checkbox" checked={dinner} onChange={e => setDinner(e.target.checked)} />
                <span className="text-ink/90">
                  {t("dinner")} <span className="text-ink/60">{t("perPersonPerNight", { price: 25 })}</span>
                </span>
              </label>
            </div>
          </div>

          {/* Right: price card */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-line bg-card shadow-card p-5 sticky top-6">
              <h4 className="font-semibold mb-3">{t("priceSummary")}</h4>

              <ul className="text-sm text-ink/80 space-y-2">
                <li className="flex justify-between">
                  <span>{villa?.category} • {t("categoryBase")}</span>
                  <span>{basePerNight}€ / {t("perNight")}</span>
                </li>

                <li className="flex justify-between">
                  <span>{t("extraPersons")} {extraPersons > 0 ? `(+${extraPersons})` : ""}</span>
                  <span>{extraPersons > 0 ? `+${extraPersons * 50}€` : "—"}</span>
                </li>

                <li className="flex justify-between">
                  <span>{t("lunch")}</span>
                  <span>{lunch ? `${guests}×25€ = +${lunchPerNight}€` : "—"}</span>
                </li>

                <li className="flex justify-between">
                  <span>{t("dinner")}</span>
                  <span>{dinner ? `${guests}×25€ = +${dinnerPerNight}€` : "—"}</span>
                </li>

                <li className="border-t border-line pt-2 flex justify-between">
                  <span>{t("totalPerNight")}</span>
                  <span className="font-semibold">{totalPerNight}€</span>
                </li>

                <li className="flex justify-between">
                  <span>{t("nights")}</span>
                  <span>{nights}</span>
                </li>
              </ul>

              <div className="mt-3 py-3 px-4 rounded-xl2 bg-bg border border-line flex items-center justify-between">
                <span className="text-sm text-ink/70">{t("total")}</span>
                <span className="text-xl font-semibold">{totalPrice}€</span>
              </div>

              <p className="text-xs text-ink/60 mt-2">
                * {t("footnote")}
              </p>

              <div className="mt-4 flex gap-2 justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl2 border border-line bg-bg hover-glow"
                >
                  {t("cancel")}
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl2 btn-primary"
                >
                  {t("continueToPayment")}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
