export default function Contact() {
  return (
    <section className="py-16 bg-ink/[0.04]">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10">
        {/* INFO */}
        <div>
          <h1 className="text-3xl md:text-4xl font-display mb-4">Na kontaktoni</h1>
          <p className="text-ink/70 mb-6">
            Jemi këtu për t’ju ndihmuar të planifikoni qëndrimin perfekt. Kontaktoni për rezervime, evente ose çdo pyetje tjetër.
          </p>
          <div className="space-y-3">
            <div><strong>Adresa:</strong>  Podujevë, Kosovo</div>
            <div><strong>Telefoni:</strong> +383 048 512 512</div>
            <div><strong>Email:</strong> holidayvillas.ks@gmail.com</div>
            <div><strong>Orari:</strong> Recepsion 24/7</div>
          </div>
          <div className="mt-8 aspect-video rounded-2xl overflow-hidden shadow-lux border border-line">
  <iframe
    title="Harta e Holiday Villas"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93648.6502464451!2d21.24012155973453!3d42.81962165930613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354bbacca467253%3A0x97c3dc45d12f998b!2sHoliday%20Villas!5e0!3m2!1sen!2s!4v1760723061539!5m2!1sen!2s"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    className="w-full h-full"
  />

          </div>
        </div>

        {/* FORM */}
        <form className="card p-6 grid gap-3">
          <div className="grid sm:grid-cols-2 gap-3">
            <input placeholder="Emri" className="px-4 py-3 border border-line/60 rounded-xl bg-[#0f1412]/60 text-ink placeholder:text-ink/55 focus:outline-none" />
            <input placeholder="Mbiemri" className="px-4 py-3 border border-line/60 rounded-xl bg-[#0f1412]/60 text-ink placeholder:text-ink/55 focus:outline-none" />
          </div>
          <input type="email" placeholder="Adresa e emailit" className="px-4 py-3 border border-line/60 rounded-xl bg-[#0f1412]/60 text-ink placeholder:text-ink/55 focus:outline-none" />
          <input placeholder="Subjekti" className="px-4 py-3 border border-line/60 rounded-xl bg-[#0f1412]/60 text-ink placeholder:text-ink/55 focus:outline-none" />
          <textarea placeholder="Mesazhi" rows="6" className="px-4 py-3 border border-line/60 rounded-xl bg-[#0f1412]/60 text-ink placeholder:text-ink/55 focus:outline-none" />
          <button className="btn-primary">Dërgo Mesazhin</button>
        </form>
      </div>
    </section>
  );
}
