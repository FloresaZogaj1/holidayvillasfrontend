import React from "react";
import { VILLAS } from "../data/villas";
import VillaCard from "../components/VillaCard";

export default function Destinations(){
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="font-display text-4xl mb-4">Destinacionet tona</h1>
      <p className="font-body text-black/70 mb-8 max-w-2xl">
        Zbuloni vilat tona të kuruara me kujdes përreth Liqenit të Batllavës dhe
        rajoneve tjera të bukura. Çdo vilë ofron privatësi, arkitekturë moderne dhe
        përvoja të personalizuara për pushime të paharrueshme.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {VILLAS.map(v => (
          <VillaCard key={v.id} villa={v} />
        ))}
      </div>
    </div>
  );
}
