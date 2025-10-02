export default function Footer() {
  return (
    <footer className="bg-card text-ink border-t border-line/70">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="text-2xl font-display">Holiday Villas</div>
          <p className="text-ink/80 mt-2">
            Përvojë 5-yje pranë atraksioneve kryesore…
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Rezervime</h4>
          <div>(+383) 48 512 512</div>
          <div>hollidayvillas@gmail.com</div>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Lokacioni</h4>
          <div>Liqeni i Batllavës, Orllan 📍</div>
        </div>
      </div>

      <div className="border-t border-line/70">
        <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-ink/70 flex items-center justify-between">
          <span>
            © {new Date().getFullYear()} Holiday Villas. Të gjitha të drejtat e
            rezervuara.
          </span>
          <span>
            WE <span className="text-red-500">❤</span> DARDI
          </span>
        </div>
      </div>
    </footer>
  );
}
