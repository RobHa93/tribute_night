import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import sponsorenImage from '../assets/img/Unbenannt.PNG'

const Sponsoren = () => {
  const sponsors = Array.from({ length: 20 }, (_, i) => ({ id: i + 1, name: `Sponsor ${i + 1}` }))

  return (
    <div className="min-h-screen bg-night-900">
      <Navbar />

      {/* Hero */}
      <div className="relative h-[60vh] flex items-end pb-16 justify-center overflow-hidden">
        <img src={sponsorenImage} alt="Sponsoren" className="absolute inset-0 object-cover w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-night-900 via-black/50 to-black/30" />
        <div className="relative z-10 px-4 text-center">
          <p className="font-display text-blues tracking-[0.3em] text-xs uppercase mb-2">Partner & Unterstützer</p>
          <h1 className="text-5xl font-bold tracking-wide text-white font-display md:text-6xl">Sponsoren</h1>
        </div>
      </div>

      {/* Gönner Section */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-display text-zinc-500 tracking-[0.3em] text-xs uppercase mb-2">Werde Teil des Events</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-wide">Unterstütze unseren Event als Gönner</h2>
          </div>

          <div className="bg-night-800 border border-night-600 border-t-2 border-t-blues rounded-xl p-8 md:p-10">
            <p className="text-zinc-300 font-body leading-relaxed mb-6">
              Mit Deinem finanziellen Beitrag hilfst Du, unseren Event erfolgreich zu gestalten.
            </p>
            <p className="text-zinc-300 font-body leading-relaxed mb-8">
              <span className="text-blues font-semibold">Exklusives Dankeschön:</span> Für jede Spende ab CHF 100.00 erhältst Du ein Eintrittsticket – wahlweise für Donnerstag, Freitag oder Samstag (je nach Verfügbarkeit).
            </p>

            {/* IBAN Box */}
            <div className="bg-night-700 border border-night-600 border-l-4 border-l-blues rounded-lg p-5 mb-8">
              <p className="font-display text-zinc-400 text-xs tracking-widest uppercase mb-1">Einzahlungsdetails</p>
              <p className="font-display text-white text-lg tracking-wider">IBAN: CH09 0076 1642 4020 2200 1</p>
            </div>

            <p className="font-display text-zinc-400 text-xs tracking-widest uppercase mb-5">So funktioniert's</p>
            <ol className="space-y-5">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blues/20 border border-blues/40 text-blues font-display font-bold text-sm flex items-center justify-center">1</span>
                <p className="text-zinc-300 font-body text-sm leading-relaxed pt-0.5">
                  Trage unter <a href="/kontakt" className="text-blues hover:text-blues-light underline underline-offset-2 transition-colors">Kontakt</a> Deinen Namen sowie den gespendeten Betrag ein, damit wir Dich auf unserer Gönnerliste aufführen können.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blues/20 border border-blues/40 text-blues font-display font-bold text-sm flex items-center justify-center">2</span>
                <p className="text-zinc-300 font-body text-sm leading-relaxed pt-0.5">
                  Bei Spenden von CHF 100.00 oder mehr: Bitte gib zusätzlich den gewünschten Veranstaltungstag für Dein Eintrittsticket an. Dieses senden wir Dir kostenlos per Post zu.
                </p>
              </li>
            </ol>

            <p className="mt-8 text-blues font-display tracking-wide font-semibold text-sm">Vielen Dank für Deine Unterstützung!</p>
          </div>
        </div>
      </section>

      <div className="px-6 mx-auto max-w-7xl">
        <div className="h-px bg-gradient-to-r from-transparent via-night-600 to-transparent" />
      </div>

      {/* Sponsors Grid */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-display text-zinc-500 tracking-[0.3em] text-xs uppercase mb-2">Die uns ermöglichen</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-wide">Unsere Sponsoren</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="bg-night-800 border border-night-600 rounded-xl p-6 flex items-center justify-center hover:border-blues/50 transition-colors duration-300"
              >
                <p className="font-display text-zinc-400 text-sm text-center tracking-wide">{sponsor.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Sponsoren
