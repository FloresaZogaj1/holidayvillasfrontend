export default function Contact() {
  return (
    <section className="py-16 bg-ink/[0.04]">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10">
        {/* INFO */}
        <div>
          <h1 className="text-3xl md:text-4xl font-display gradient-text mb-4">Na kontaktoni</h1>
          <p className="text-ink/70 mb-6">
            Jemi këtu për t’ju ndihmuar të planifikoni qëndrimin perfekt. Kontaktoni për rezervime, evente ose çdo pyetje tjetër.
          </p>
          <div className="bg-white/90 rounded-2xl p-6 shadow-lg border border-accent/10 space-y-4">
            <h3 className="font-semibold text-accent text-lg mb-4">Informacione kontakti</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <div>
                  <strong className="text-ink">Adresa:</strong>
                  <p className="text-ink/70">Podujevë, Kosovo</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <div>
                  <strong className="text-ink">Telefoni:</strong>
                  <p className="text-ink/70">+383 048 512 512</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <div>
                  <strong className="text-ink">Email:</strong>
                  <p className="text-ink/70">holidayvillas.ks@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <div>
                  <strong className="text-ink">Orari:</strong>
                  <p className="text-ink/70">Recepsion 24/7</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 aspect-video rounded-2xl overflow-hidden shadow-xl border border-accent/20">
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
        <form className="card p-8 space-y-6 bg-white/95 backdrop-blur-sm shadow-xl border border-accent/10">
          <div className="mb-4">
            <h2 className="text-xl sm:text-2xl font-display text-accent mb-2">Dërgoni një mesazh</h2>
            <p className="text-ink/70 text-sm">Plotësoni formën dhe do t'ju përgjigjem sa më shpejt.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-ink/80">Emri *</label>
              <input 
                placeholder="Shkruani emrin tuaj" 
                className="w-full px-4 py-3 border border-accent/20 rounded-xl bg-white/90 text-ink placeholder:text-ink/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200" 
                required
              />
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-ink/80">Mbiemri *</label>
              <input 
                placeholder="Shkruani mbiemrin tuaj" 
                className="w-full px-4 py-3 border border-accent/20 rounded-xl bg-white/90 text-ink placeholder:text-ink/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200" 
                required
              />
            </div>
          </div>
          
          <div className="space-y-1">
            <label className="block text-sm font-medium text-ink/80">Adresa e emailit *</label>
            <input 
              type="email" 
              placeholder="emri@example.com" 
              className="w-full px-4 py-3 border border-accent/20 rounded-xl bg-white/90 text-ink placeholder:text-ink/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200" 
              required
            />
          </div>
          
          <div className="space-y-1">
            <label className="block text-sm font-medium text-ink/80">Subjekti</label>
            <input 
              placeholder="Shkruani subjektin e mesazhit" 
              className="w-full px-4 py-3 border border-accent/20 rounded-xl bg-white/90 text-ink placeholder:text-ink/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200" 
            />
          </div>
          
          <div className="space-y-1">
            <label className="block text-sm font-medium text-ink/80">Mesazhi *</label>
            <textarea 
              placeholder="Shkruani mesazhin tuaj këtu..." 
              rows="5" 
              className="w-full px-4 py-3 border border-accent/20 rounded-xl bg-white/90 text-ink placeholder:text-ink/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 resize-none" 
              required
            />
          </div>
          
          <button 
            type="submit"
            className="w-full btn-primary py-4 text-base font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Dërgo Mesazhin
          </button>
        </form>
      </div>
    </section>
  );
}
