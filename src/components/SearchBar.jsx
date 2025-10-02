import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [q, setQ] = useState("");
  const [guests, setGuests] = useState(2);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  return (
    <div className="w-full p-3 md:p-4 rounded-2xl border border-line bg-card shadow-lux">
      <div className="grid md:grid-cols-5 gap-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Kërko destinacion ose villë"
          className="col-span-2 px-4 py-3 rounded-xl border border-line/60 bg-[#0f1412]/60 text-ink placeholder:text-ink/55 focus:outline-none"
        />
        <input
          type="date"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="px-4 py-3 rounded-xl border border-line/60 bg-[#0f1412]/60 text-ink focus:outline-none"
        />
        <input
          type="date"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="px-4 py-3 rounded-xl border border-line/60 bg-[#0f1412]/60 text-ink focus:outline-none"
        />

        <div className="flex gap-2">
          <input
            type="number"
            min={1}
            value={guests}
            onChange={(e) => setGuests(+e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-line/60 bg-[#0f1412]/60 text-ink focus:outline-none"
          />
          <button
            onClick={() => onSearch?.({ q, from, to, guests })}
            className="btn-primary"
          >
            Kërko
          </button>
        </div>
      </div>
    </div>
  );
}
