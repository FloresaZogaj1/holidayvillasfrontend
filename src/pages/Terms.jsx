// src/pages/Terms.jsx
export default function Terms() {
  return (
    <section className="py-16 bg-bg text-ink">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="font-display text-3xl md:text-4xl gradient-text mb-2">
          Termat & Kushtet
        </h1>
        <p className="text-ink/70 mb-8">Përditësuar: 06 Tetor 2025</p>

        <div className="card lux-border p-6 space-y-6">
          <div>
            <h2 className="font-semibold text-xl mb-2">1. Përmbledhje</h2>
            <p className="text-ink/80">
              Këto Terma rregullojnë përdorimin e faqes së internetit “Holiday Villas”
              dhe rezervimet e akomodimit tonë në Orllan, Liqeni i Batllavës. Duke
              përdorur faqen, ju pranoni këto kushte.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">2. Rezervimet & Pagesat</h2>
            <ul className="list-disc ml-5 text-ink/80 space-y-1">
              <li>Rezervimi konfirmohet pasi përfundoni pagesën ose paradhënien.</li>
              <li>Çmimet: Premium 200€/natë, VIP 250€/natë (baza deri 2 persona). Mbi 2 persona aplikohet +50€/person/natë (maksimumi 6 persona).</li>
              <li>Mëngjesi i përfshirë. Ekstra opsionale: Dreka +25€/person/natë, Darka +25€/person/natë.</li>
              <li>Pagesat procesohen përmes partnerit të pagesave; mund të aplikohen tarifa bankare/transaksioni.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">3. Anulimet & Ndryshimet</h2>
            <ul className="list-disc ml-5 text-ink/80 space-y-1">
              <li>Anulimet deri në 7 ditë para check-in: rimbursim i plotë i paradhënies.</li>
              <li>Anulimet brenda 7 ditëve: mund të aplikohet tarifë deri në 100% të natës së parë.</li>
              <li>Ndryshimet e datave varen nga disponueshmëria dhe mund të kenë diferencë çmimi.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">4. Check-in / Check-out</h2>
            <ul className="list-disc ml-5 text-ink/80 space-y-1">
              <li>Check-in nga ora 14:00 • Check-out deri në 10:00.</li>
              <li>Identifikimi me dokument zyrtar është i detyrueshëm në check-in.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">5. Rregullat e Shtëpisë</h2>
            <ul className="list-disc ml-5 text-ink/80 space-y-1">
              <li>Ndalohet duhani në hapësirat e brendshme; ndalohet organizimi i festave/eventeve pa miratim.</li>
              <li>Respektohet qetësia e orëve të natës dhe udhëzimet e sigurisë në pronë.</li>
              <li>Dëmet e shkaktuara gjatë qëndrimit faturëzohen sipas kostos së riparimit/zëvendësimit.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">6. Fëmijët, Shtesat & Kafshët</h2>
            <ul className="list-disc ml-5 text-ink/80 space-y-1">
              <li>Kapaciteti maksimal: 6 persona për vilë (përfshirë fëmijët).</li>
              <li>Kërkesat për krevat shtesë ose pajisje për fëmijë konfirmohen paraprakisht.</li>
              <li>Kafshët shtëpiake pranohen vetëm me miratim paraprak.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">7. Forca Madhore & Përgjegjësia</h2>
            <p className="text-ink/80">
              Nuk mbajmë përgjegjësi për vonesa ose anulime të shkaktuara nga rrethana
              jashtë kontrollit tonë (p.sh. fatkeqësi natyrore). Përgjegjësia jonë
              kufizohet në shumën e paguar për rezervimin përkatës, përveç rasteve kur
              ligji kërkon ndryshe.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">8. Pronësia Intelektuale</h2>
            <p className="text-ink/80">
              Markat, fotografitë dhe përmbajtja në këtë faqe janë pronë e Holiday
              Villas ose përdoren me licencë. Riprodhimi pa leje ndalohet.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">9. Ligji Zbatues & Juridiksioni</h2>
            <p className="text-ink/80">
              Këta Terma rregullohen nga ligjet e Republikës së Kosovës. Çdo mosmarrëveshje
              i nënshtrohet gjykatave kompetente në Kosovë.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">10. Kontakti</h2>
            <p className="text-ink/80">
              Pyetje për Termat? Na shkruani në <span className="font-semibold">holidayvillas.ks</span> (Instagram) ose email-in e kontaktit të publikuar në faqe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
