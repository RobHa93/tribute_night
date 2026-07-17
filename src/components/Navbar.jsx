import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/kuenstler', label: 'Acts' },
    { to: '/anreise', label: 'Anreise' },
    { to: '/ueber-uns', label: 'Über uns' },
    { to: '/sponsoren', label: 'Sponsoren' },
    { to: '/kontakt', label: 'Kontakt' },
  ];

  const isActive = (to) => location.pathname === to;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ${
        isScrolled || menuOpen
          ? 'bg-night-950/95 backdrop-blur-md shadow-xl shadow-black/40 border-b border-night-700'
          : 'bg-gradient-to-b from-black/60 to-transparent backdrop-blur-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex flex-col leading-none hover:opacity-80 transition-opacity duration-300">
          <span className="flex items-baseline">
            <span className="font-rock font-extrabold text-2xl sm:text-5xl tracking-wide text-white">TRIBUTE</span>
            <span className="font-rock font-light text-2xl sm:text-5xl tracking-wider text-blues">NIGHT</span>
          </span>
          <span className="font-rock font-medium text-[8px] sm:text-xs tracking-[0.35em] sm:tracking-[0.5em] text-zinc-400 mt-0.5">LAUFENBURG</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center space-x-8">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`font-body text-sm font-medium tracking-wide uppercase transition-colors duration-300 relative group ${
                  isActive(to) ? 'text-blues' : 'text-zinc-300 hover:text-white'
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-blues transition-all duration-300 ${
                    isActive(to) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://www.eventfrog.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blues hover:bg-blues-light text-black font-display font-semibold text-sm tracking-widest uppercase px-5 py-2.5 rounded transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blues/30"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
              </svg>
              Tickets
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2 group"
          aria-label="Menü öffnen"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col px-6 pb-6 space-y-4 border-t border-night-700 pt-4">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`block font-body text-base font-medium tracking-wide uppercase transition-colors duration-300 ${
                  isActive(to) ? 'text-blues' : 'text-zinc-300 hover:text-white'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://www.eventfrog.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blues hover:bg-blues-light text-black font-display font-semibold text-sm tracking-widest uppercase px-5 py-2.5 rounded transition-all duration-300"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
              </svg>
              Tickets kaufen
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

