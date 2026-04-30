import { useState, useEffect } from 'react';

import image1 from '../assets/img/image.jpg';
import image2 from '../assets/img/1585603256.jpg';
import gitarre2 from '../assets/img/Gitarre2.PNG';
import image3 from '../assets/img/1536064883.jpg';
import image4 from '../assets/img/1585603256 (2).jpg';
import gitarre3 from '../assets/img/Gitarre3.PNG';
import band1 from '../assets/img/Band1.PNG';
import band2 from '../assets/img/Band2.PNG';
import image5 from '../assets/img/1585603256 (1).jpg';
import image6 from '../assets/img/1585603257.jpg';
import image7 from '../assets/img/1585603258.jpg';
import dj1 from '../assets/img/DJ1.PNG';

const InfoCard = ({ title, children, accent = 'zinc' }) => {
  const borderColor =
    accent === 'blues'
      ? 'border-t-blues'
      : accent === 'rock'
      ? 'border-t-rock'
      : 'border-t-zinc-600';

  return (
    <div
      className={`bg-night-800 border border-night-600 border-t-2 ${borderColor} rounded-xl p-6 md:p-8 hover:border-night-500 transition-all duration-300`}
    >
      <h3 className="font-display font-bold text-xl text-white mb-4 tracking-wide">
        {title}
      </h3>
      {children}
    </div>
  );
};

const MainContent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const sliderImages = [
    image1, image2, gitarre2, image3, image4,
    gitarre3, band1, band2, image5, image6, image7, dj1,
  ];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [sliderImages.length, isPaused]);

  const prev = () => setCurrentSlide((p) => (p - 1 + sliderImages.length) % sliderImages.length);
  const next = () => setCurrentSlide((p) => (p + 1) % sliderImages.length);

  return (
    <main className="bg-night-900">

      {/* ── Welcome Section ──────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-display text-blues tracking-[0.3em] text-sm uppercase mb-4">
            4. Ausgabe · 2026
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
            Willkommen zur<br />
            <span className="text-blues">Tribute Night</span><br />
            in Laufenburg
          </h1>
          <p className="font-body text-zinc-400 text-lg leading-relaxed max-w-3xl mx-auto">
            Die Tribute Night geht in die vierte Runde und bietet ein einzigartiges
            Musik-Erlebnis mit Coverbands, die euch in die besten Epochen der
            Musikgeschichte entführen. Drei Abende, eine Halle, unvergessliche Nächte.
          </p>
          <div className="mt-10">
            <a
              href="https://www.eventfrog.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blues hover:bg-blues-light text-black font-display font-bold text-base tracking-widest uppercase px-10 py-4 rounded transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blues/30"
            >
              🎟 Jetzt Tickets sichern
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-night-600 to-transparent" />
      </div>

      {/* ── Timetable ────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-display text-zinc-500 tracking-[0.3em] text-xs uppercase mb-2">Line-up</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-wide">Programm & Zeitplan</h2>
          </div>
          <div className="space-y-3">
            {[
              {
                num: '01', day: 'DO', date: '22. Jan', title: 'Blues Night',
                acts: ['Andy Egert', 'Lucky Wüthrich'], isBlues: true,
              },
              {
                num: '02', day: 'FR', date: '23. Jan', title: 'Rock Night',
                acts: ['live/wire', 'Shades of Purple'], isBlues: false,
              },
              {
                num: '03', day: 'SA', date: '24. Jan', title: 'Rock Night',
                acts: ['Crazy Diamond', 'WE2 – The U2 Tribute'], isBlues: false,
              },
            ].map(({ num, day, date, title, acts, isBlues }) => (
              <div
                key={num}
                className={`relative overflow-hidden flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 p-6 md:p-8 bg-night-800 border border-night-600 rounded-xl border-l-4 transition-all duration-300 hover:bg-night-700 group ${
                  isBlues ? 'border-l-blues' : 'border-l-rock'
                }`}
              >
                {/* Big watermark number */}
                <span
                  className={`absolute right-6 top-1/2 -translate-y-1/2 font-bebas text-[7rem] leading-none select-none pointer-events-none opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-300 ${
                    isBlues ? 'text-blues' : 'text-rock'
                  }`}
                >
                  {num}
                </span>

                {/* Date badge */}
                <div className={`flex-shrink-0 w-16 text-center rounded-lg py-2.5 border ${
                  isBlues ? 'bg-blues/10 border-blues/20' : 'bg-rock/10 border-rock/20'
                }`}>
                  <p className={`font-bebas text-xs tracking-widest ${ isBlues ? 'text-blues' : 'text-rock'}`}>{day}</p>
                  <p className="font-bebas text-2xl text-white leading-tight">{date.split('. ')[0]}</p>
                  <p className={`font-body text-xs ${ isBlues ? 'text-blues/70' : 'text-rock/70'}`}>Jan</p>
                </div>

                {/* Night info */}
                <div className="flex-1 min-w-0">
                  <h3 className={`font-bebas text-3xl md:text-4xl tracking-wider leading-none mb-2 ${
                    isBlues ? 'text-blues' : 'text-white'
                  }`}>
                    {title}
                  </h3>
                  <div className="flex flex-wrap gap-x-5 gap-y-0.5">
                    {acts.map(act => (
                      <span key={act} className="font-body text-sm text-zinc-300">{act}</span>
                    ))}
                  </div>
                </div>

                {/* Right decorative lines */}
                <div className="hidden sm:flex flex-col gap-2 flex-shrink-0">
                  {acts.map(act => (
                    <div key={act} className={`h-px w-16 ${ isBlues ? 'bg-blues/25' : 'bg-rock/25'}`} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-night-600 to-transparent" />
      </div>

      {/* ── Wichtige Infos ───────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-display text-zinc-500 tracking-[0.3em] text-xs uppercase mb-2">Details</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-wide">Wichtige Infos</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Zeiten */}
            <InfoCard title="Zeiten" accent="blues">
              <p className="font-body text-zinc-400 text-sm mb-5 leading-relaxed">
                Um euch möglichst viel Musik zu bieten, starten die Shows dieses Jahr etwas früher:
              </p>
              <ul className="space-y-3">
                {[
                  { day: 'Donnerstag', info: 'Türöffnung 18:30 · Start 19:30', theme: 'blues' },
                  { day: 'Freitag', info: 'Türöffnung 19:30 · Start 20:00', theme: 'rock' },
                  { day: 'Samstag', info: 'Türöffnung 19:00 · Start 19:30', theme: 'rock' },
                ].map(({ day, info, theme }) => (
                  <li key={day} className="flex items-start gap-3">
                    <span
                      className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${
                        theme === 'blues' ? 'bg-blues' : 'bg-rock'
                      }`}
                    />
                    <span className="font-body text-sm text-zinc-300">
                      <strong className="text-white">{day}:</strong> {info}
                    </span>
                  </li>
                ))}
              </ul>
            </InfoCard>

            {/* Verpflegung */}
            <InfoCard title="Verpflegung" accent="rock">
              <p className="font-body text-zinc-400 text-sm leading-relaxed mb-4">
                Am Freitag & Samstag könnt ihr schon ab{' '}
                <strong className="text-white">17:00 Uhr</strong> beim{' '}
                <span className="text-blues font-semibold">Fyrobe Apéro</span> vorbeischauen –
                mit feinem Essen vom Grill, kühlen Drinks und guter Stimmung. Danach geht's direkt
                weiter bis ca. 02:00 Uhr.
              </p>
              <p className="font-body text-zinc-400 text-sm leading-relaxed">
                Den ganzen Abend gibt es{' '}
                <strong className="text-white">Bier, Wein, Prosecco, Mineral, Kaffee</strong>{' '}
                sowie warmes & kaltes Essen.
              </p>
            </InfoCard>

            {/* Barrierefreiheit */}
            <InfoCard title="Barrierefreiheit">
              <p className="font-body text-zinc-400 text-sm leading-relaxed mb-4">
                Rollstuhlplätze sind ausschliesslich über den Veranstalter buchbar.
              </p>
              <a
                href="tel:+41763724477"
                className="inline-flex items-center gap-2 text-blues font-body font-semibold hover:text-blues-light transition-colors duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                +41 76 372 44 77
              </a>
            </InfoCard>

            {/* Altersbeschränkung */}
            <InfoCard title="Altersbeschränkung">
              <p className="font-body text-zinc-400 text-sm leading-relaxed mb-3">
                Mindestalter:{' '}
                <strong className="text-rock text-base">16 Jahre</strong>
              </p>
              <p className="font-body text-zinc-400 text-sm leading-relaxed">
                Ab 10 Jahren ist der Eintritt in Begleitung eines Erwachsenen möglich.
              </p>
            </InfoCard>

          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-night-600 to-transparent" />
      </div>

      {/* ── Impressionen Slider ──────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-display text-zinc-500 tracking-[0.3em] text-xs uppercase mb-2">Rückblick</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-wide">Impressionen</h2>
          </div>

          <div
            className="relative rounded-2xl overflow-hidden bg-night-800 border border-night-600 shadow-2xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Slides */}
            <div className="relative w-full aspect-[16/9]">
              {sliderImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Impression ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              {/* Side gradient overlays for arrows */}
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-night-800/60 to-transparent" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-night-800/60 to-transparent" />
            </div>

            {/* Arrows */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-night-900/80 border border-night-600 text-white hover:bg-blues hover:border-blues hover:text-black transition-all duration-300 flex items-center justify-center"
              aria-label="Zurück"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-night-900/80 border border-night-600 text-white hover:bg-blues hover:border-blues hover:text-black transition-all duration-300 flex items-center justify-center"
              aria-label="Weiter"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-5 h-2 bg-blues'
                      : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Bild ${index + 1}`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className="absolute top-4 right-4 font-body text-xs text-white/60 bg-night-900/60 px-2 py-1 rounded">
              {currentSlide + 1} / {sliderImages.length}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default MainContent;
