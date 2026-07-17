import bandImage from '../assets/img/Band2.PNG'

const Header = () => {
  return (
    <header className="relative h-screen overflow-hidden">
      {/* Background image */}
      <img
        src={bandImage}
        alt="Tribute Night Live Band"
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
          <span className="font-body text-blues text-xs tracking-[0.45em] uppercase">Laufenburg am Rhy · 2027</span>
          <div className="h-px w-14 bg-blues/60" />
        </div>

        {/* Main brand title */}
        <div className="mb-1 leading-none animate-fade-in">
          <div className="font-rock font-extrabold text-[clamp(3.8rem,12vw,9.5rem)] leading-[0.9] tracking-tight text-white">
            TRIBUTE
          </div>
          <div className="font-rock font-light text-[clamp(3.8rem,12vw,9.5rem)] leading-[0.9] tracking-tight text-blues">
            NIGHT
          </div>
        </div>

        {/* Sub-descriptor */}
        <div className="flex items-center gap-4 my-7 animate-fade-up-delay opacity-0-init">
          <div className="w-16 h-px bg-white/15" />
          <span className="font-body text-white/60 text-xs tracking-[0.35em] uppercase">Rock · Pop · 2 Abende · Coverbands</span>
          <div className="w-16 h-px bg-white/15" />
        </div>

        {/* Date / Location badges */}
        <div className="flex flex-wrap justify-center gap-3 animate-fade-up-delay opacity-0-init">
          <span className="inline-flex items-center px-5 py-2 text-sm tracking-widest uppercase border rounded border-blues/50 text-blues font-display">
            03.–04. September 2027
          </span>
          <span className="inline-flex items-center px-5 py-2 text-sm tracking-widest text-white uppercase border rounded border-white/20 font-body">
            Mehrzweckhalle Laufenburg
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
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
            </svg>
            Tickets kaufen
          </a>
          <a
            href="#lineup"
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

