import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card text-ink border-t border-line/70">
      {/* Top */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="text-2xl font-display">Holiday Villas</div>
          <p className="text-ink/80 mt-2">
            {t("footer.brand.tagline")}
          </p>
        </div>

        {/* Reservations */}
        <div>
          <h4 className="font-semibold mb-3">{t("footer.reservations.title")}</h4>
          <address className="not-italic space-y-1">
            <a href="tel:+38348512512" className="block hover:text-accent" aria-label={t("footer.reservations.phoneAria")}>
              (+383) 48 512 512
            </a>
            <a
              href="mailto:holidayvillas@gmail.com"
              className="block hover:text-accent"
              aria-label={t("footer.reservations.emailAria")}
            >
              holidayvillas@gmail.com
            </a>
          </address>
          <p className="text-ink/70 text-sm mt-3">{t("footer.reservations.hours")}</p>
        </div>

        {/* Location */}
        <div>
          <h4 className="font-semibold mb-3">{t("footer.location.title")}</h4>
          <p className="text-ink/80">{t("footer.location.address")}</p>
          <a
            className="btn-ghost mt-3 inline-flex"
            href="https://maps.google.com/?q=Batllava%20Lake"
            target="_blank"
            rel="noreferrer"
            aria-label={t("footer.location.mapAria")}
          >
            {t("footer.location.viewMap")}
          </a>
        </div>

        {/* Quick links + Social */}
        <div>
          <h4 className="font-semibold mb-3">{t("footer.quick.title")}</h4>
          <nav aria-label={t("footer.quick.aria")} className="grid grid-cols-2 gap-y-2 gap-x-3">
            <Link to="/" className="hover:text-accent">{t("footer.quick.home")}</Link>
            <Link to="/rooms" className="hover:text-accent">{t("footer.quick.rooms")}</Link>
            <Link to="/gallery" className="hover:text-accent">{t("footer.quick.gallery")}</Link>
            <Link to="/about" className="hover:text-accent">{t("footer.quick.about")}</Link>
            <Link to="/faq" className="hover:text-accent">{t("footer.quick.faq")}</Link>
            <Link to="/contact" className="hover:text-accent">{t("footer.quick.contact")}</Link>
          </nav>

          <div className="mt-4">
            <h5 className="font-semibold mb-2">{t("footer.follow.title")}</h5>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/holidayvillas.ks"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-accent"
                aria-label={t("footer.follow.instagramAria")}
                title="@holidayvillas.ks"
              >
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
            © {year} Holiday Villas. {t("footer.bottom.rights")}
          </span>

          <div className="flex items-center gap-3">
            <Link to="/terms" className="hover:text-accent">{t("footer.bottom.terms")}</Link>
            <span className="opacity-40">•</span>
            <Link to="/privacy" className="hover:text-accent">{t("footer.bottom.privacy")}</Link>
          </div>

          <span className="text-center md:text-right">
            {t("footer.bottom.weLove", { name: "DARDI" })}
          </span>
        </div>
      </div>
    </footer>
  );
}
