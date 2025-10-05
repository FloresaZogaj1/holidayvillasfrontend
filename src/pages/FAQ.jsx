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
  const [open, setOpen] = useState(-1);

  return (
    <section className="py-16 bg-bg text-ink">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="font-display text-3xl md:text-4xl tracking-tight">
            <span className="gradient-text">Pyetjet më të shpeshta</span>
          </h1>
          <p className="text-ink/70 mt-2 text-sm sm:text-base">
            Nëse nuk gjeni përgjigje këtu, <a href="/contact" className="hover:text-accent underline underline-offset-4">na kontaktoni</a>.
          </p>
        </div>

        {/* Accordion */}
        <div className="card lux-border divide-y divide-line/70 overflow-hidden">
          {QA.map((item, i) => {
            const expanded = open === i;
            const panelId = `faq-panel-${i}`;
            return (
              <div key={i} className="bg-card">
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                  onClick={() => setOpen(expanded ? -1 : i)}
                  aria-expanded={expanded}
                  aria-controls={panelId}
                >
                  <span className="font-semibold">{item.q}</span>
                  <svg
                    className={`w-5 h-5 shrink-0 transition-transform ${expanded ? "rotate-180" : ""}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M5.5 7.5 10 12l4.5-4.5" />
                  </svg>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-label={item.q}
                  className={`px-5 overflow-hidden transition-[max-height,opacity] duration-300 ${
                    expanded ? "max-h-40 opacity-100 pb-4" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-ink/70 text-sm">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Extra CTA */}
        <div className="mt-8 text-center">
          <a href="/rooms" className="btn-primary">Shiko vilat</a>
        </div>
      </div>
    </section>
  );
}
