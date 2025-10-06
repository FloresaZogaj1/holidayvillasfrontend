// src/pages/Privacy.jsx
export default function Privacy() {
  return (
    <section className="py-16 bg-bg text-ink">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="font-display text-3xl md:text-4xl gradient-text mb-2">
          Privatësia & Cookies
        </h1>
        <p className="text-ink/70 mb-8">Përditësuar: 06 Tetor 2025</p>

        <div className="card lux-border p-6 space-y-6">
          <div>
            <h2 className="font-semibold text-xl mb-2">1. Kush jemi</h2>
            <p className="text-ink/80">
              “Holiday Villas” ofron akomodim në Orllan, Liqeni i Batllavës.
              Respektojmë privatësinë tuaj dhe përpunojmë të dhënat personale në
              përputhje me GDPR dhe ligjet lokale.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">2. Çfarë të dhënash mbledhim</h2>
            <ul className="list-disc ml-5 text-ink/80 space-y-1">
              <li>Të dhëna identifikimi dhe kontakti (emër, mbiemër, email, telefon).</li>
              <li>Të dhëna rezervimi (datat, numri i mysafirëve, preferencat e shërbimit).</li>
              <li>Të dhëna pagese (përpunohen te procesuesi i pagesave; nuk ruajmë kartat).</li>
              <li>Të dhëna teknike (cookies, IP, shfletuesi) për statistika dhe siguri.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">3. Si i përdorim</h2>
            <ul className="list-disc ml-5 text-ink/80 space-y-1">
              <li>Për të menaxhuar rezervimin dhe qëndrimin tuaj.</li>
              <li>Për komunikime mbi konfirmimin, faturimin dhe mbështetjen.</li>
              <li>Për siguri, parandalim abuzimi dhe përmirësim të shërbimit.</li>
              <li>Me pëlqimin tuaj: oferta, njoftime marketingu (mund të çabonoheni në çdo kohë).</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">4. Baza ligjore</h2>
            <ul className="list-disc ml-5 text-ink/80 space-y-1">
              <li>Përmbushje kontrate (rezervimi/akomodimi).</li>
              <li>Detyrim ligjor (faturimi, raportimet).</li>
              <li>Interes legjitim (siguri, përmirësim shërbimi).</li>
              <li>Pëlqim (marketing, cookies jo-thelbësore).</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">5. Ndarja me palë të treta</h2>
            <p className="text-ink/80">
              Ndarja bëhet vetëm sa është e nevojshme: procesuesi i pagesave, ofrues
              IT/hosting, dhe platforma rezervimi (p.sh. Booking.com) kur rezervoni përmes
              tyre. Këto palë përpunojnë të dhënat si përpunues me marrëveshje të vlefshme.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">6. Cookies</h2>
            <p className="text-ink/80 mb-2">
              Përdorim cookies thelbësore për funksionimin e faqes (p.sh. session),
              si dhe analitike/performancë me pëlqimin tuaj. Mund të menaxhoni cookies
              nga shiritin e pëlqimit ose nga cilësimet e shfletuesit.
            </p>
            <ul className="list-disc ml-5 text-ink/80 space-y-1">
              <li>Thelbësore: funksionaliteti i rezervimit dhe siguria.</li>
              <li>Analitike: vizita dhe përdorimi i faqes (të anonimizuara kur është e mundur).</li>
              <li>Marketing: vetëm me pëlqimin tuaj (p.sh. pixel-et social).</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">7. Ruajtja & Siguria</h2>
            <p className="text-ink/80">
              Të dhënat ruhen vetëm për aq kohë sa nevojitet për qëllimet e mësipërme
              dhe sa kërkohet nga ligji. Aplikojmë masa teknike dhe organizative për
              të mbrojtur konfidencialitetin, integritetin dhe disponueshmërinë e tyre.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">8. Të drejtat tuaja</h2>
            <ul className="list-disc ml-5 text-ink/80 space-y-1">
              <li>Qasje, korrigjim, fshirje (“e drejta për t’u harruar”).</li>
              <li>Kufizim ose kundërshtim i përpunimit.</li>
              <li>Portueshmëri e të dhënave (kur zbatohet).</li>
              <li>Tërheqje e pëlqimit për marketing/cookies jo-thelbësore.</li>
              <li>Ankesë te autoriteti i mbrojtjes së të dhënave kompetent.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">9. Të miturit</h2>
            <p className="text-ink/80">
              Shërbimet tona u drejtohen të rriturve. Rezervimet nga të miturit
              kërkojnë prani dhe miratim të prindit/kujdestarit ligjor.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-xl mb-2">10. Kontakt & DPO</h2>
            <p className="text-ink/80">
              Për çdo kërkesë mbi të dhënat personale, na kontaktoni:{" "}
              <span className="font-semibold">holidayvillas.ks</span> (Instagram) ose email-in e kontaktit në faqe.
              Do t’ju përgjigjemi sa më shpejt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
