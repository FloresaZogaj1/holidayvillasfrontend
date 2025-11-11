// src/components/BookingBar.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import http from "../requests.js";

export default function BookingBar() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // state
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [persons, setPersons] = useState(2);           // 1–6
  const [villaCategory, setVillaCategory] = useState("VIP"); // VIP | Premium
  const [specificVilla, setSpecificVilla] = useState("vip-1"); // vip-1, vip-2, vip-3, premium-1, premium-2, premium-3
  const [availableVillas, setAvailableVillas] = useState([]);
  const [loading, setLoading] = useState(false);

  // All villa options
  const allVillaOptions = {
    VIP: [
      { value: "vip-1", label: "VIP 1" },
      { value: "vip-2", label: "VIP 2" }, 
      { value: "vip-3", label: "VIP 3" }
    ],
    Premium: [
      { value: "premium-1", label: "Premium 1" },
      { value: "premium-2", label: "Premium 2" },
      { value: "premium-3", label: "Premium 3" }
    ]
  };

  // Get available villas for current dates and category
  const checkAvailability = async () => {
    if (!checkIn || !checkOut) {
      // If no dates, show all villas
      setAvailableVillas(allVillaOptions[villaCategory]);
      return;
    }

    setLoading(true);
    try {
      const response = await http.post('/api/availability/available-villas', {
        checkIn,
        checkOut,
        category: villaCategory
      });

      if (response.data.ok) {
        const available = response.data.availableVillas.map(villa => ({
          value: villa.slug,
          label: villa.name
        }));
        setAvailableVillas(available);
        
        // If current selection is not available, reset to first available
        const currentVillaAvailable = available.find(v => v.value === specificVilla);
        if (!currentVillaAvailable && available.length > 0) {
          setSpecificVilla(available[0].value);
        }
      }
    } catch (error) {
      console.error('Error checking availability:', error);
      // On error, show all villas
      setAvailableVillas(allVillaOptions[villaCategory]);
    } finally {
      setLoading(false);
    }
  };

  // Check availability when dates or category changes
  useEffect(() => {
    checkAvailability();
  }, [checkIn, checkOut, villaCategory]);

  // When category changes, reset specific villa to first option
  const handleCategoryChange = (category) => {
    setVillaCategory(category);
    const firstVilla = allVillaOptions[category][0].value;
    setSpecificVilla(firstVilla);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        
        // If a specific villa is selected, go directly to that villa
        if (specificVilla && specificVilla !== 'all') {
          const params = new URLSearchParams({
            checkIn: checkIn || "",
            checkOut: checkOut || "",
            persons: persons.toString()
          });
          navigate(`/rooms/${specificVilla}?${params.toString()}`);
        } else {
          // Otherwise go to rooms list with filters
          const params = new URLSearchParams({
            checkIn: checkIn || "",
            checkOut: checkOut || "",
            persons: persons.toString(),
            category: villaCategory,
            villa: specificVilla
          });
          navigate(`/rooms?${params.toString()}`);
        }
      }}
      className="w-full max-w-5xl mx-auto rounded-2xl border border-white/20 bg-white/95 backdrop-blur-md shadow-2xl p-3 sm:p-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-2 sm:gap-3">
        {/* Check-in */}
        <div className="lg:col-span-1 flex items-center gap-2 rounded-xl bg-white/90 px-3 sm:px-4 py-3 border border-accent/20 shadow-sm">
          <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7 2v2h10V2h2v2h3v18H2V4h3V2zM4 6v14h16V6z"/>
          </svg>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            placeholder="Check-in"
            className="w-full bg-transparent text-ink focus:outline-none text-sm sm:text-base"
          />
        </div>

        {/* Check-out */}
        <div className="lg:col-span-1 flex items-center gap-2 rounded-xl bg-white/90 px-3 sm:px-4 py-3 border border-accent/20 shadow-sm">
          <svg className="w-4 h-4 text-accent" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7 2v2h10V2h2v2h3v18H2V4h3V2zM4 6v14h16V6z"/>
          </svg>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            placeholder="Check-out"
            className="w-full bg-transparent text-ink focus:outline-none text-sm sm:text-base"
          />
        </div>

        {/* Persona (max 6) */}
        <label className="sr-only" htmlFor="persons">{t("persons_label", "Persona (max 6)")}</label>
        <select
          id="persons"
          value={persons}
          onChange={(e) => setPersons(+e.target.value)}
          className="lg:col-span-1 px-3 sm:px-4 py-3 rounded-xl bg-white/90 border border-accent/20 text-ink text-sm sm:text-base shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        >
          {[1,2,3,4,5,6].map((n) => (
            <option key={n} value={n}>
              {t("persons_option", { defaultValue: `${n} persona`, count: n, n })}
            </option>
          ))}
        </select>

        {/* Kategoria e Vilës */}
        <label className="sr-only" htmlFor="villaCategory">{t("villa_category", "Kategoria e Vilës")}</label>
        <select
          id="villaCategory"
          value={villaCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="lg:col-span-1 px-3 sm:px-4 py-3 rounded-xl bg-white/90 border border-accent/20 text-ink text-sm sm:text-base shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        >
          <option value="VIP">Villa VIP</option>
          <option value="Premium">Villa Premium</option>
        </select>

        {/* Vila Specifike */}
        <label className="sr-only" htmlFor="specificVilla">{t("specific_villa", "Vila Specifike")}</label>
        <select
          id="specificVilla"
          value={specificVilla}
          onChange={(e) => setSpecificVilla(e.target.value)}
          disabled={loading || availableVillas.length === 0}
          className={`lg:col-span-1 px-3 sm:px-4 py-3 rounded-xl bg-white/90 border border-accent/20 text-ink text-sm sm:text-base shadow-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? (
            <option>Duke kontrolluar...</option>
          ) : availableVillas.length === 0 ? (
            <option>Asnjë vilë e disponueshme</option>
          ) : (
            availableVillas.map((villa) => (
              <option key={villa.value} value={villa.value}>
                {villa.label}
              </option>
            ))
          )}
        </select>

        {/* Kërko */}
        <button type="submit" className="lg:col-span-1 btn-primary w-full py-3 text-sm sm:text-base font-semibold">{t("search")}</button>
      </div>
    </form>
  );
}
