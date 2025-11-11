import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import http from '../requests.js';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await http.post('/api/contact', formData);
      
      if (response.data.ok) {
        setStatus({
          type: 'success',
          message: response.data.message || 'Mesazhi u dërgua me sukses!'
        });
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(response.data.error || 'Diçka shkoi gabim');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.response?.data?.error || error.message || 'Një gabim ndodhi. Ju lutem provoni përsëri.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-ink/[0.04]">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10">
        {/* INFO */}
        <div>
          <h1 className="text-3xl md:text-4xl font-display gradient-text mb-4">{t('contactPage.title')}</h1>
          <p className="text-ink/70 mb-6">
            {t('contactPage.subtitle')}
          </p>
          <div className="bg-white/90 rounded-2xl p-6 shadow-lg border border-accent/10 space-y-4">
            <h3 className="font-semibold text-accent text-lg mb-4">{t('contactPage.info.title')}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <div>
                  <strong className="text-ink">{t('contactPage.info.address')}:</strong>
                  <p className="text-ink/70">{t('contactPage.info.address')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <div>
                  <strong className="text-ink">Telefoni:</strong>
                  <p className="text-ink/70">{t('contactPage.info.phone')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <div>
                  <strong className="text-ink">Email:</strong>
                  <p className="text-ink/70">{t('contactPage.info.email')}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <div>
                  <strong className="text-ink">Orari:</strong>
                  <p className="text-ink/70">{t('contactPage.info.hours')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 aspect-video rounded-2xl overflow-hidden shadow-xl border border-accent/20">
            <iframe
              title={t('contactPage.mapTitle')}
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
        <form onSubmit={handleSubmit} className="card p-8 space-y-6 bg-white/95 backdrop-blur-sm shadow-xl border border-accent/10">
          <div className="mb-4">
            <h2 className="text-xl sm:text-2xl font-display text-accent mb-2">{t('contactPage.form.title')}</h2>
            <p className="text-ink/70 text-sm">{t('contactPage.form.subtitle')}</p>
          </div>
          
          {/* Status Message */}
          {status.message && (
            <div className={`p-4 rounded-xl text-sm ${status.type === 'success' 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              {status.message}
            </div>
          )}
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-ink/80">{t('contactPage.form.firstName')} *</label>
              <input 
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder={t('contactPage.form.firstNamePlaceholder')}
                className="w-full px-4 py-3 border border-accent/20 rounded-xl bg-white/90 text-ink placeholder:text-ink/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200" 
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-1">
              <label className="block text-sm font-medium text-ink/80">{t('contactPage.form.lastName')} *</label>
              <input 
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder={t('contactPage.form.lastNamePlaceholder')}
                className="w-full px-4 py-3 border border-accent/20 rounded-xl bg-white/90 text-ink placeholder:text-ink/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200" 
                required
                disabled={loading}
              />
            </div>
          </div>
          
          <div className="space-y-1">
            <label className="block text-sm font-medium text-ink/80">{t('contactPage.form.email')} *</label>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t('contactPage.form.emailPlaceholder')}
              className="w-full px-4 py-3 border border-accent/20 rounded-xl bg-white/90 text-ink placeholder:text-ink/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200" 
              required
              disabled={loading}
            />
          </div>
          
          <div className="space-y-1">
            <label className="block text-sm font-medium text-ink/80">{t('contactPage.form.subject')}</label>
            <input 
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder={t('contactPage.form.subjectPlaceholder')}
              className="w-full px-4 py-3 border border-accent/20 rounded-xl bg-white/90 text-ink placeholder:text-ink/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200" 
              disabled={loading}
            />
          </div>
          
          <div className="space-y-1">
            <label className="block text-sm font-medium text-ink/80">{t('contactPage.form.message')} *</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t('contactPage.form.messagePlaceholder')}
              rows="5" 
              className="w-full px-4 py-3 border border-accent/20 rounded-xl bg-white/90 text-ink placeholder:text-ink/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 resize-none" 
              required
              disabled={loading}
            />
          </div>
          
          <button 
            type="submit"
            disabled={loading}
            className={`w-full py-4 text-base font-semibold flex items-center justify-center gap-2 transition-all duration-200 rounded-xl ${
              loading 
                ? 'bg-gray-400 text-white cursor-not-allowed' 
                : 'btn-primary hover:shadow-lg'
            }`}
          >
            {loading ? (
              <>
                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Duke dërguar...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                {t('contactPage.form.submit')}
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}