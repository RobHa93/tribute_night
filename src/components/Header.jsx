import bandImage from '../assets/img/Band2.PNG'

const Header = () => {
  return (
    <header className="relative h-screen overflow-hidden">
      {/* Background image */}
      <img
        src={bandImage}
        alt="Tribute Night – Live Band"
        className="absolute inset-0 object-cover object-center w-full h-full"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-night-900" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">

        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-6 animate-fade-in">
          <div className="h-px w-14 bg-blues/60" />
          <span className="font-body text-blues text-xs tracking-[0.45em] uppercase">Laufenburg am Rhy · 2026</span>
          <div className="h-px w-14 bg-blues/60" />
        </div>

        {/* Main brand title */}
        <div className="mb-1 leading-none animate-fade-in">
          <div className="font-bebas text-[clamp(4.5rem,14vw,11rem)] leading-[0.88] tracking-wider text-white">
            TRIBUTE
          </div>
          <div className="font-bebas text-[clamp(4.5rem,14vw,11rem)] leading-[0.88] tracking-wider text-blues">
            NIGHT
          </div>
        </div>

        {/* Sub-descriptor */}
        <div className="flex items-center gap-4 my-7 animate-fade-up-delay opacity-0-init">
          <div className="w-16 h-px bg-white/15" />
          <span className="font-body text-white/400 text-xs tracking-[0.35em] uppercase">Blues · Rock · 3 Abende · Coverbands</span>
          <div className="w-16 h-px bg-white/15" />
        </div>

        {/* Date / Location badges */}
        <div className="flex flex-wrap justify-center gap-3 animate-fade-up-delay opacity-0-init">
          <span className="inline-flex items-center px-5 py-2 text-sm tracking-widest uppercase border rounded border-blues/50 text-blues font-display">
            22.–24. Januar 2026
          </span>
          <span className="inline-flex items-center px-5 py-2 text-sm tracking-widest text-white uppercase border rounded border-white/20 font-body">
            Turnhalle Laufenburg
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-4 mt-8 sm:flex-row animate-fade-up-delay2 opacity-0-init">
          <a
            href="https://www.eventfrog.ch"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-3 text-xl tracking-widest text-black uppercase transition-all duration-300 rounded bg-blues hover:bg-blues-light font-bebas hover:scale-105 hover:shadow-xl hover:shadow-blues/40"
          >
            ▶ Tickets kaufen
          </a>
          <a
            href="#programm"
            className="inline-flex items-center gap-2 px-10 py-3 text-xl tracking-widest text-white uppercase transition-all duration-300 border rounded border-white/30 hover:bg-white/10 font-bebas"
          >
            Programm ansehen
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#programm"
        aria-label="Zum Programm scrollen"
        className="absolute z-10 flex flex-col items-center gap-1 transition-colors duration-300 -translate-x-1/2 bottom-8 left-1/2 text-zinc-400 hover:text-blues"
      >
        <div className="flex flex-col items-center gap-1 animate-bounce2">
          <span className="text-xs tracking-widest uppercase font-body">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </a>
    </header>
  );
};

export default Header;

