// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-card text-ink border-t border-line/70">
      {/* Top */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="text-2xl font-display">Holiday Villas</div>
          <p className="text-ink/80 mt-2">
            Përvojë 5-yje pranë natyrës — luks, qetësi dhe mikpritje e ngrohtë në
            Liqenin e Batllavës.
          </p>
          <a
            href="/#book"
            className="btn-primary mt-4 inline-flex"
            aria-label="Rezervo tani te Holiday Villas"
          >
            Rezervo tani
          </a>
        </div>

        {/* Rezervime */}
        <div>
          <h4 className="font-semibold mb-3">Rezervime</h4>
          <address className="not-italic space-y-1">
            <a href="tel:+38348512512" className="block hover:text-accent">
              (+383) 48 512 512
            </a>
            <a
              href="mailto:holidayvillas@gmail.com"
              className="block hover:text-accent"
            >
              holidayvillas@gmail.com
            </a>
          </address>
          <p className="text-ink/70 text-sm mt-3">E hënë – E diel: 09:00 – 21:00</p>
        </div>

        {/* Lokacioni */}
        <div>
          <h4 className="font-semibold mb-3">Lokacioni</h4>
          <p className="text-ink/80">Liqeni i Batllavës, Orllan 📍</p>
          <a
            className="btn-ghost mt-3 inline-flex"
            href="https://maps.google.com/?q=Batllava%20Lake"
            target="_blank"
            rel="noreferrer"
            aria-label="Hape hartën në Google Maps"
          >
            Shiko në hartë
          </a>
        </div>

        {/* Quick links + Social */}
        <div>
          <h4 className="font-semibold mb-3">Linjat e shpejta</h4>
          <nav aria-label="Footer quick links" className="grid grid-cols-2 gap-y-2 gap-x-3">
            <a href="/" className="hover:text-accent">Ballina</a>
            <a href="/rooms" className="hover:text-accent">Vilat</a>
            <a href="/gallery" className="hover:text-accent">Galeria</a>
            <a href="/about" className="hover:text-accent">Rreth Nesh</a>
            <a href="/faq" className="hover:text-accent">FAQ</a>
            <a href="/contact" className="hover:text-accent">Kontakti</a>
          </nav>

          <div className="mt-4">
            <h5 className="font-semibold mb-2">Na ndiqni</h5>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/holidayvillas.ks"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-accent"
                aria-label="Instagram i Holiday Villas"
                title="@holidayvillas.ks"
              >
                {/* Instagram icon (SVG) */}
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.75-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/>
                </svg>
                <span>@holidayvillas.ks</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-line/70">
        <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-ink/70 flex flex-col md:flex-row items-center justify-between gap-2">
          <span className="text-center md:text-left">
            © {new Date().getFullYear()} Holiday Villas. Të gjitha të drejtat e rezervuara.
          </span>

          <div className="flex items-center gap-3">
            <a href="/terms" className="hover:text-accent">Termat</a>
            <span className="opacity-40">•</span>
            <a href="/privacy" className="hover:text-accent">Privatësia</a>
          </div>

          <span className="text-center md:text-right">
            WE <span className="text-red-500">❤</span> DARDI
          </span>
        </div>
      </div>
    </footer>
  );
}
