// src/components/Navbar.jsx
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/Holiday - Colored.png";

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      [
        "px-3 py-2 transition-colors",
        "text-[14px] md:text-[15px] font-normal tracking-[0.01em]",
        isActive ? "text-accent" : "text-ink-secondary hover:text-accent",
      ].join(" ")
    }
  >
    {children}
  </NavLink>
);

export default function Navbar() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hotelOpen, setHotelOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const location = useLocation();
  const drawerRef = useRef(null);
  const btnRef = useRef(null);

  const linksLeft = [{ to: "/", label: t("nav.home") }];
  const hotelLinks = [
    { to: "/about", label: t("nav.about") },
    { to: "/services", label: t("nav.services") },
    { to: "/testimonials", label: t("nav.testimonials") },
    { to: "/faq", label: t("nav.faq") },
    { to: "/accomodation", label: t("nav.accomodation") },
  ];
  const linksRight = [
    { to: "/gallery", label: t("nav.gallery") },
  ];
  const linksRightAfterResort = [
    { to: "/contact", label: t("nav.contact") },
  ];

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

  useEffect(() => {
    setMenuOpen(false);
    setHotelOpen(false);
    clearTimers();
  }, [location.pathname]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : prev || "";
    return () => (document.body.style.overflow = prev || "");
  }, [menuOpen]);

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

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const labelBtn = t("nav.villas");

  return (
    <header className="fixed top-0 inset-x-0 z-[100] safe-top">
      <div className="mx-auto max-w-7xl px-3 sm:px-4">
        <nav
          className={[
            "mt-2 sm:mt-4 flex items-center justify-between rounded-xl sm:rounded-2xl border shadow-xl transition-all duration-300",
            solid
              ? "border-accent/30 bg-white/95 backdrop-blur-lg shadow-2xl ring-1 ring-accent/20"
              : "border-white/20 bg-white/90 backdrop-blur-md shadow-lg",
          ].join(" ")}
        >
          {/* Left (desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {linksLeft.map((l) => (
              <NavItem key={l.to} to={l.to}>
                {l.label}
              </NavItem>
            ))}

            {/* Villat link (desktop) */}
            <NavItem to="/rooms">
              {labelBtn}
            </NavItem>
          </div>

          {/* Brand center (desktop) / left (mobile) */}
          <div className="flex items-center md:justify-center justify-between w-full md:w-auto px-2 sm:px-0">
            <Link to="/" className="flex items-center gap-2 md:gap-3 py-2 sm:py-0">
              <img
                src={logo}
                alt="Holiday Villas"
                className="h-8 w-auto sm:h-9 md:h-14 rounded-full ring-1 ring-line/50"
              />
              <span className="hidden sm:inline-block md:inline-block font-display text-lg sm:text-xl md:text-[34px] leading-none text-ink">
                Holiday Villas
              </span>
            </Link>

            {/* Hamburger mobile */}
            <button
              ref={btnRef}
              className="md:hidden text-ink px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg ring-1 ring-line/60 inline-flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base touch-manipulation"
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

          {/* Right (desktop) */}
          <div className="hidden md:flex items-center gap-6">
            {linksRight.map((l) => (
              <NavItem key={l.to} to={l.to}>
                {l.label}
              </NavItem>
            ))}
            
            {/* Resort dropdown (desktop) */}
            <div
              className="relative"
              onMouseEnter={() => openWithDelay(120)}
              onMouseLeave={() => closeWithDelay(220)}
            >
              <button
                type="button"
                className={`px-3 py-2 inline-flex items-center gap-1 transition-all duration-200 text-[14px] md:text-[15px] font-normal tracking-[0.01em] ${
                  hotelOpen 
                    ? 'text-accent' 
                    : 'text-ink-secondary hover:text-accent'
                }`}
                aria-haspopup="menu"
                aria-expanded={hotelOpen}
                aria-controls="desktop-hotel-menu"
                onClick={() => setHotelOpen((v) => !v)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setHotelOpen((v) => !v);
                  }
                  if (e.key === "Escape") setHotelOpen(false);
                  if (e.key === "ArrowDown") setHotelOpen(true);
                }}
              >
                {t("nav.resort")}
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${hotelOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                >
                  <path fill="currentColor" d="M5.5 7.5 10 12l4.5-4.5" />
                </svg>
              </button>

              <div
                id="desktop-hotel-menu"
                role="menu"
                tabIndex={-1}
                className={`absolute right-0 mt-3 min-w-64 rounded-xl border border-gray-200 bg-white shadow-2xl ring-1 ring-black/5 p-3 z-50 ${
                  hotelOpen ? "block" : "hidden"
                }`}
                style={{
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                }}
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
                <div className="space-y-1">
                  {hotelLinks.map((h) => (
                    <Link
                      key={h.to}
                      to={h.to}
                      role="menuitem"
                      className="flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:text-accent hover:bg-accent/5 transition-all border border-transparent hover:border-accent/20 hover:shadow-sm group"
                    >
                      <span>{h.label}</span>
                      <svg className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            {linksRightAfterResort.map((l) => (
              <NavItem key={l.to} to={l.to}>
                {l.label}
              </NavItem>
            ))}
            
            <Link
              to="/cart"
              className="inline-flex items-center px-2 py-2 text-ink-secondary hover:text-accent"
              title={t("nav.cart")}
              aria-label={t("nav.cart")}
            >
              <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" d="M6 6h15l-1.5 9h-12z" />
                <circle cx="9" cy="20" r="1.5" />
                <circle cx="18" cy="20" r="1.5" />
              </svg>
            </Link>
          </div>
        </nav>
      </div>

      {/* Drawer mobile */}
        <div className={`md:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!menuOpen}>
        <div className={`fixed inset-0 bg-black/60 transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"} z-40`} />
        <aside
          ref={drawerRef}
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          className={`fixed top-0 left-0 h-full w-[85%] max-w-sm bg-white text-ink shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <Link to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
                <img src={logo} alt="Holiday Villas Logo" className="h-10 w-auto rounded-full shadow-sm" />
                <span className="text-xl font-display font-semibold text-accent">Holiday Villas</span>
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
                aria-label={t("nav.closeMenuAria")}
              >
                <svg className="h-5 w-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation */}
            <div className="flex-1 py-6">
              <nav className="space-y-2">
                <Link 
                  to="/" 
                  className="flex items-center py-3 px-4 text-gray-900 font-medium rounded-lg hover:bg-accent hover:text-white transition-all group" 
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{t("nav.home")}</span>
                </Link>
                
                <Link 
                  to="/rooms" 
                  className="flex items-center py-3 px-4 text-gray-900 font-medium rounded-lg hover:bg-accent hover:text-white transition-all group" 
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{t("nav.villas")}</span>
                </Link>

                <Link 
                  to="/gallery" 
                  className="flex items-center py-3 px-4 text-gray-900 font-medium rounded-lg hover:bg-accent hover:text-white transition-all group" 
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{t("nav.gallery")}</span>
                </Link>

                {/* Resort Dropdown */}
                <div className="space-y-1">
                  <button
                    onClick={() => setHotelOpen((v) => !v)}
                    className={`w-full flex items-center justify-between py-3 px-4 font-medium rounded-lg transition-all group ${
                      hotelOpen 
                        ? 'bg-accent text-white' 
                        : 'text-gray-900 hover:bg-accent hover:text-white'
                    }`}
                    aria-expanded={hotelOpen}
                    aria-controls="hotel-accordion"
                  >
                    <span>{t("nav.resort")}</span>
                    <svg 
                      className={`h-5 w-5 transition-transform duration-200 ${hotelOpen ? "rotate-180" : ""}`} 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  
                  <div
                    id="hotel-accordion"
                    className={`overflow-hidden transition-all duration-300 ${hotelOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
                  >
                    <div className="ml-3 mr-2 space-y-1 bg-gray-50 rounded-lg p-3">
                      {hotelLinks.map((h) => (
                        <Link 
                          key={h.to} 
                          to={h.to} 
                          className="flex items-center py-3 px-4 text-sm font-medium text-gray-700 hover:text-accent hover:bg-white rounded-lg transition-all shadow-sm border border-gray-200 hover:border-accent/30 hover:shadow-md" 
                          onClick={() => setMenuOpen(false)}
                        >
                          <span className="flex-1">{h.label}</span>
                          <svg className="w-4 h-4 text-gray-400 group-hover:text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link 
                  to="/contact" 
                  className="flex items-center py-3 px-4 text-gray-900 font-medium rounded-lg hover:bg-accent hover:text-white transition-all group" 
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{t("nav.contact")}</span>
                </Link>
              </nav>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
