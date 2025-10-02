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
            <div><strong>Adresa:</strong> Batllave, Podujevë, Kosovo</div>
            <div><strong>Telefoni:</strong> +383 048 512 512</div>
            <div><strong>Email:</strong> holidayvillas.ks@gmail.com</div>
            <div><strong>Orari:</strong> Recepsion 24/7</div>
          </div>
          <div className="mt-8 aspect-video rounded-2xl overflow-hidden shadow-lux border border-line">
            <iframe
              title="Harta"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93762.3171063214!2d21.08706320562922!3d42.744520215310146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354a580fdfb4613%3A0x735486830206f337!2s125%2C%20Batllav%C3%AB%2011050!5e0!3m2!1sen!2s!4v1758120491483!5m2!1sen!2s"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
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
