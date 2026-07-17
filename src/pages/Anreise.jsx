import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import anreiseImage from '../assets/img/1585603256 (1).jpg'

const Anreise = () => {
  return (
    <div className="min-h-screen bg-night-900">
      <Navbar />

      {/* Page Hero */}
      <div className="relative h-[60vh] flex items-end pb-16 justify-center overflow-hidden">
        <img src={anreiseImage} alt="Anreise Header" className="absolute inset-0 object-cover w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-night-900 via-black/50 to-black/30" />
        <div className="relative z-10 px-4 text-center">
          <p className="font-display text-blues tracking-[0.3em] text-xs uppercase mb-2">So kommst du zu uns</p>
          <h1 className="text-5xl font-bold tracking-wide text-white font-display md:text-6xl">Anreise</h1>
        </div>
      </div>

      {/* Intro */}
      <section className="px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-white font-display">So findest du zu uns</h2>
          <p className="text-base leading-relaxed font-body text-zinc-400">
            Die Tribute Night findet in der Mehrzweckhalle Laufenburg statt.
            Hier findest du alle wichtigen Informationen für deine Anreise.
          </p>
        </div>
      </section>

      <div className="px-6 mx-auto max-w-7xl">
        <div className="h-px bg-gradient-to-r from-transparent via-night-600 to-transparent" />
      </div>

      {/* Anreise Optionen */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-6 mb-10 lg:grid-cols-2">

            {/* Mit dem Fahrzeug */}
            <div className="p-8 border border-t-2 bg-night-800 border-night-600 border-t-white/40 rounded-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 border rounded-full bg-white/5 border-white/15">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.92 2.01C18.72 1.42 18.16 1 17.5 1h-11C5.84 1 5.28 1.42 5.08 2.01L3 8v13c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold tracking-wide text-white font-display">Mit dem Fahrzeug</h3>
              </div>
              <p className="mb-5 text-sm leading-relaxed font-body text-zinc-400">
                <strong className="text-white">Wichtiger Hinweis:</strong> Die Parkmöglichkeiten in Laufenburg sind beschränkt.
              </p>
              <ul className="space-y-4">
                {[
                  { name: 'Parkplatz beim oberen Stadttor', detail: 'Begrenzte Anzahl Parkplätze verfügbar' },
                  { name: 'Parkhaus Restaurant Warteck', detail: 'Überdachte Parkmöglichkeit' },
                  { name: 'Parkhaus Stadthalle', detail: 'Weitere Parkmöglichkeit' },
                ].map(({ name, detail }) => (
                  <li key={name} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 mt-1 rounded-full bg-white/50" />
                    <div>
                      <p className="text-sm font-semibold text-white font-body">{name}</p>
                      <p className="text-xs font-body text-zinc-500">{detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* ÖV */}
            <div className="p-8 border border-t-2 bg-night-800 border-night-600 border-t-white/40 rounded-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 border rounded-full bg-white/5 border-white/15">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V7h5v3zm5.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-7h-5V7h5v3z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold tracking-wide text-white font-display">Öffentlicher Verkehr</h3>
              </div>
              <p className="mb-5 text-sm leading-relaxed font-body text-zinc-400">
                <strong className="text-white">Empfehlung:</strong> Wir empfehlen die Anreise mit öffentlichen Verkehrsmitteln.
              </p>
              <ul className="mb-6 space-y-4">
                {[
                  { name: 'Zug Anfahrt', detail: 'Bahnhof Laufenburg' },
                  { name: 'Bus Haltestelle', detail: 'Spital Laufenburg' },
                ].map(({ name, detail }) => (
                  <li key={name} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 mt-1 rounded-full bg-white/50" />
                    <div>
                      <p className="text-sm font-semibold text-white font-body">{name}</p>
                      <p className="text-xs font-body text-zinc-500">{detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="p-4 border rounded-lg bg-night-700 border-night-600">
                <p className="mb-3 text-xs font-body text-zinc-400">Aktuelle Fahrpläne und Verbindungen:</p>
                <a
                  href="https://www.sbb.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-widest text-black uppercase transition-all duration-300 rounded bg-blues hover:bg-blues-dark font-display"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  SBB Fahrplan
                </a>
              </div>
            </div>

          </div>

          {/* Map */}
          <div className="overflow-hidden border bg-night-800 border-night-600 rounded-xl">
            <div className="p-6 border-b border-night-600">
              <h3 className="text-2xl font-bold tracking-wide text-white font-display">Standort</h3>
              <p className="mt-1 text-sm font-body text-zinc-500">Mehrzweckhalle Laufenburg · Laufenburg, Schweiz</p>
            </div>
            <div className="aspect-[16/7]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.6060286791535!2d8.064365875581265!3d47.56259206859855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4790442b0c1c43b7%3A0x8d90be5d33259318!2sStadthalle%20-%20Laufenburg!5e1!3m2!1sde!2sch!4v1755765238733!5m2!1sde!2sch"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Laufenburg Standort"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Anreise
