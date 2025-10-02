// src/pages/FAQ.jsx
import { useState } from "react";

const QA = [
  {
    q: "A duhet të paguaj tarifa shtesë?",
    a: "Nuk ka tarifa të fshehura. Taksa lokale dhe opsionet shtesë (p.sh., transfer nga aeroporti, trajtime spa) shfaqen qartë gjatë rezervimit.",
  },
  {
    q: "A mund ta ndryshoj ose anuloj rezervimin?",
    a: "Po. Ndryshimet janë të mundshme në varësi të disponueshmërisë. Anulimi falas ofrohet brenda kushteve të përcaktuara në rezervimin tuaj.",
  },
  {
    q: "A ofrohet check-out i vonuar?",
    a: "Check-out i vonuar varet nga disponueshmëria. Ju lutemi kontaktoni recepsionin; mund të aplikohen tarifa shtesë.",
  },
  {
    q: "Çfarë ndodh nëse një mikpritës anulon?",
    a: "Në rast të rrallë të anulimit, ju do të merrni rimbursim të plotë ose një alternativë ekuivalente.",
  },
  {
    q: "A ofroni kode zbritjeje?",
    a: "Ne publikojmë oferta sezonale përmes newsletter-it dhe rrjeteve sociale. Abonohuni për të qëndruar të informuar.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-16 bg-paper">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-display mb-8">
          Pyetjet më të shpeshta
        </h1>
        <div className="divide-y">
          {QA.map((item, i) => (
            <div key={i} className="py-4">
              <button
                className="w-full flex items-center justify-between text-left"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-ink">{item.q}</span>
                <span>{open === i ? "▴" : "▾"}</span>
              </button>
              {open === i && <p className="mt-2 text-muted">{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
