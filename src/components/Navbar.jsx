import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../data/event';
import TicketLink from './TicketLink';
import logo from '../assets/img/web/logo-tribute-night.webp';

const SCROLL_THRESHOLD_PX = 40;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD_PX);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Offenes Mobile-Menü: Escape schliesst, Seite dahinter scrollt nicht mit
  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isSolid = isScrolled || menuOpen;

  return (
    <nav
      aria-label="Hauptnavigation"
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        isSolid
          ? 'border-hall-line bg-hall/95 backdrop-blur-md'
          : 'border-transparent bg-gradient-to-b from-hall/80 to-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6 md:h-[4.5rem]">
        {/* Auf dem Handy kein Logo in der Leiste: der Hero zeigt den Schriftzug, der Footer das Logo */}
        {/* Auf der Startseite ändert sich die Adresse nicht, darum dort selbst nach oben scrollen */}
        <Link
          to="/"
          onClick={() => pathname === '/' && window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="hidden md:block"
        >
          <img src={logo} alt="Tribute Night Laufenburg, Startseite" width="640" height="249" className="h-12 w-auto lg:h-14" />
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) => `nav-link ${isActive ? 'text-accent' : 'text-ink-muted hover:text-ink'}`}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <TicketLink label="Tickets" className="px-4 py-2" />
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="-mr-2 ml-auto flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Menü schliessen' : 'Menü öffnen'}
        >
          <span className={`block h-0.5 w-6 bg-ink transition-transform duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-transform duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="h-[calc(100svh-4rem)] animate-fade-in md:h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-hall-line bg-hall lg:hidden">
          <ul className="container-page flex flex-col py-6">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => `block py-3 font-display text-4xl font-bold uppercase ${isActive ? 'text-accent' : 'text-ink'}`}
              >
                Startseite
              </NavLink>
            </li>
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) => `block py-3 font-display text-4xl font-bold uppercase ${isActive ? 'text-accent' : 'text-ink'}`}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="container-page pb-10">
            <TicketLink className="w-full" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
