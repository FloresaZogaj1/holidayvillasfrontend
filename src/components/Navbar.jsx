// src/components/Navbar.jsx
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import LangSwitch from "./LangSwitch"; // sigurohu që e ke krijuar
import logo from "../assets/Holiday - Colored.png";

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      [
        "px-3 py-2 transition-colors",
        "text-[14px] md:text-[15px] font-normal tracking-[0.01em]",
        isActive ? "text-ink" : "text-ink/80 hover:text-ink",
      ].join(" ")
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hotelOpen, setHotelOpen] = useState(false); // desktop + mobile
  const [solid, setSolid] = useState(false);
  const location = useLocation();
  const drawerRef = useRef(null);
  const btnRef = useRef(null);

  // Menutë dinamike nga i18n
  const linksLeft = [{ to: "/", label: t("nav.home") }];
  const hotelLinks = [
    { to: "/about", label: t("nav.about") },
    { to: "/services", label: t("nav.services") },
    { to: "/testimonials", label: t("nav.testimonials") },
    { to: "/faq", label: t("nav.faq") },
    { to: "/accomodation", label: t("nav.accomodation") }
  ];
  const linksRight = [
    { to: "/rooms", label: t("nav.villas") },
    { to: "/gallery", label: t("nav.gallery") },
    { to: "/contact", label: t("nav.contact") }
  ];

  // Timers për dropdown delay
  const openTimer = useRef(null);
  const closeTimer = useRef(null);
  const clearTimers = () => {
    if (openTimer.current) { clearTimeout(openTimer.current); openTimer.current = null; }
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
  };
  const openWithDelay = (ms = 120) => {
    clearTimers();
    openTimer.current = setTimeout(() => setHotelOpen(true), ms);
  };
  const closeWithDelay = (ms = 220) => {
    clearTimers();
    closeTimer.current = setTimeout(() => setHotelOpen(false), ms);
  };

  // Mbyll menut kur ndryshon ruta
  useEffect(() => {
    setMenuOpen(false);
    setHotelOpen(false);
    clearTimers();
  }, [location.pathname]);

  // Lock scroll kur drawer hapet
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : prev || "";
    return () => (document.body.style.overflow = prev || "");
  }, [menuOpen]);

  // Close on Esc / click jashtë (drawer)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        closeWithDelay(0);
      }
    };
    const onClick = (e) => {
      if (!menuOpen) return;
      if (
        drawerRef.current &&
        !drawerRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [menuOpen]);

  // Navbar solid kur scroll > 40
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const labelBtn = t("nav.resort"); // titulli i dropdown-it

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <nav
          className={[
            "mt-4 flex items-center justify-between rounded-2xl border shadow-lux transition-colors duration-200",
            solid
              ? "border-line/70 bg-card/90 backdrop-blur-md"
              : "border-line/60 bg-[#0f1412]/35 backdrop-blur-md",
          ].join(" ")}
        >
          {/* Majtas (desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {linksLeft.map((l) => (
              <NavItem key={l.to} to={l.to}>
                {l.label}
              </NavItem>
            ))}

            {/* Resorti dropdown (desktop): hover + click me delay */}
            <div
              className="relative"
              onMouseEnter={() => openWithDelay(120)}
              onMouseLeave={() => closeWithDelay(220)}
            >
              <button
                type="button"
                className="px-3 py-2 inline-flex items-center gap-1 text-ink/80 hover:text-ink transition-colors text-[14px] md:text-[15px]"
                aria-haspopup="menu"
                aria-expanded={hotelOpen}
                aria-controls="desktop-hotel-menu"
                onClick={() => setHotelOpen((v) => !v)} // click toggle
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setHotelOpen((v) => !v);
                  }
                  if (e.key === "Escape") setHotelOpen(false);
                  if (e.key === "ArrowDown") setHotelOpen(true);
                }}
              >
                {labelBtn}
                <svg
                  className={`w-4 h-4 transition-transform ${hotelOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                >
                  <path fill="currentColor" d="M5.5 7.5 10 12l4.5-4.5" />
                </svg>
              </button>

              <div
                id="desktop-hotel-menu"
                role="menu"
                tabIndex={-1}
                className={`absolute left-0 mt-3 min-w-56 rounded-xl2 border border-line/60 bg-card/95 p-2 shadow-lux z-50 ${
                  hotelOpen ? "block" : "hidden"
                }`}
                onMouseEnter={() => {
                  clearTimers();
                  setHotelOpen(true);
                }}
                onMouseLeave={() => closeWithDelay(220)}
                onFocus={() => {
                  clearTimers();
                  setHotelOpen(true);
                }}
                onBlur={() => closeWithDelay(220)}
              >
                {hotelLinks.map((h) => (
                  <Link
                    key={h.to}
                    to={h.to}
                    role="menuitem"
                    className="block px-3 py-2 rounded-lg text-sm text-ink/85 hover:bg-white/5"
                  >
                    {h.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Brand në qendër (desktop) + left (mobile) */}
          <div className="flex items-center md:justify-center justify-between w-full md:w-auto">
            <Link to="/" className="flex items-center gap-2 md:gap-3">
              <img
                src={logo}
                alt="Holiday Villas"
                className="h-9 w-auto md:h-14 rounded-full ring-1 ring-line/50"
              />
              <span className="hidden md:inline-block font-display text-[34px] leading-none text-ink">
                Holiday Villas
              </span>
            </Link>

            {/* Hamburger mobile */}
            <button
              ref={btnRef}
              className="md:hidden text-ink/85 px-3 py-2 rounded-lg ring-1 ring-line/60 inline-flex items-center gap-2"
              onClick={() => setMenuOpen((v) => !v)}
              aria-controls="mobile-drawer"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? t("nav.closeMenuAria") : t("nav.openMenuAria")}
              title={t("nav.menu")}
            >
              {menuOpen ? (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              )}
              <span className="hidden sm:inline">{t("nav.menu")}</span>
            </button>
          </div>

          {/* Djathtas (desktop) */}
          <div className="hidden md:flex items-center gap-6">
            {linksRight.map((l) => (
              <NavItem key={l.to} to={l.to}>
                {l.label}
              </NavItem>
            ))}
            {/* Lang switch (desktop) */}
            <LangSwitch />
            <Link
              to="/cart"
              className="inline-flex items-center px-2 py-2 text-ink/80 hover:text-ink"
              title={t("nav.cart")}
              aria-label={t("nav.cart")}
            >
              <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" d="M6 6h15l-1.5 9h-12z" />
                <circle cx="9" cy="20" r="1.5" />
                <circle cx="18" cy="20" r="1.5" />
              </svg>
            </Link>
            <Link to="/#book" className="btn-primary">{t("nav.book")}</Link>
          </div>
        </nav>
      </div>

      {/* Drawer mobile */}
      <div className={`md:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!menuOpen}>
        <div className={`fixed inset-0 bg-black/40 transition-opacity duration-200 ${menuOpen ? "opacity-100" : "opacity-0"} z-40`} />
        <aside
          ref={drawerRef}
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          className={`fixed top-0 left-0 h-full w-[86%] xs:w-4/5 max-w-sm bg-card text-ink border-r border-line/70 shadow-xl transform transition-transform duration-200 z-50 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="px-5 py-4 h-full overflow-y-auto">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
                <img src={logo} alt="Holiday Villas Logo" className="h-9 w-auto rounded-full ring-1 ring-line/50" />
                <span className="text-lg font-display">Holiday Villas</span>
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-lg ring-1 ring-line/60"
                aria-label={t("nav.closeMenuAria")}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="mt-6">
              <Link to="/" className="block py-3 text-base hover:text-accent" onClick={() => setMenuOpen(false)}>
                {t("nav.home")}
              </Link>

              <div className="border-t border-line/60">
                <button
                  onClick={() => setHotelOpen((v) => !v)}
                  className="w-full py-3 flex items-center justify-between text-base"
                  aria-expanded={hotelOpen}
                  aria-controls="hotel-accordion"
                >
                  <span>{labelBtn}</span>
                  <svg className={`h-4 w-4 transition-transform ${hotelOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div
                  id="hotel-accordion"
                  className={`overflow-hidden transition-[max-height,opacity] duration-200 ${hotelOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="pl-3 pb-2 space-y-1">
                    {hotelLinks.map((h) => (
                      <Link key={h.to} to={h.to} className="block py-2 hover:text-accent" onClick={() => setMenuOpen(false)}>
                        {h.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-line/60">
                <Link to="/rooms" className="block py-3 text-base hover:text-accent" onClick={() => setMenuOpen(false)}>
                  {t("nav.villas")}
                </Link>
              </div>
              <div className="border-t border-line/60">
                <Link to="/gallery" className="block py-3 text-base hover:text-accent" onClick={() => setMenuOpen(false)}>
                  {t("nav.gallery")}
                </Link>
              </div>
              <div className="border-t border-line/60">
                <Link to="/contact" className="block py-3 text-base hover:text-accent" onClick={() => setMenuOpen(false)}>
                  {t("nav.contact")}
                </Link>
              </div>

              {/* Lang switch (mobile) */}
              <div className="border-t border-line/60 mt-2 pt-3">
                <LangSwitch />
              </div>

              <div className="border-t border-line/60 mt-2 pt-3">
                <Link to="/#book" className="btn-primary w-full inline-flex justify-center" onClick={() => setMenuOpen(false)}>
                  {t("nav.book")}
                </Link>
              </div>
            </nav>
          </div>
        </aside>
      </div>
    </header>
  );
}
