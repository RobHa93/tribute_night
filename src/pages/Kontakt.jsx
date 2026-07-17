import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import kontaktImage from '../assets/img/1585603256 (1).jpg'

const Kontakt = () => {
  return (
    <div className="min-h-screen bg-night-900">
      <Navbar />

      {/* Hero */}
      <div className="relative h-[60vh] flex items-end pb-16 justify-center overflow-hidden">
        <img src={kontaktImage} alt="Kontakt" className="absolute inset-0 object-cover w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-night-900 via-black/50 to-black/30" />
        <div className="relative z-10 px-4 text-center">
          <p className="font-display text-blues tracking-[0.3em] text-xs uppercase mb-2">Wir freuen uns auf dich</p>
          <h1 className="text-5xl font-bold tracking-wide text-white font-display md:text-6xl">Kontakt</h1>
        </div>
      </div>

      {/* Content */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Info cards */}
            <div className="space-y-4">
              <div className="mb-8">
                <p className="font-display text-zinc-500 tracking-[0.3em] text-xs uppercase mb-2">Infos</p>
                <h2 className="font-display font-bold text-3xl text-white tracking-wide">Kontakt & Informationen</h2>
              </div>

              {[
                {
                  label: 'Veranstalter',
                  value: 'Keropower',
                  icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/></svg>,
                },
                {
                  label: 'E-Mail',
                  value: <a href="mailto:keropower@bluewin.ch" className="text-blues hover:text-blues-light transition-colors">keropower@bluewin.ch</a>,
                  icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>,
                },
                {
                  label: 'Veranstaltungsort',
                  value: 'Mehrzweckhalle Laufenburg, Schweiz',
                  icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>,
                },
                {
                  label: 'Event Termine',
                  value: (
                    <div className="space-y-1 font-body text-sm text-zinc-300">
                      <p>Freitag: 20:00 – 02:00 Uhr</p>
                      <p>Samstag: 19:30 – 02:00 Uhr</p>
                    </div>
                  ),
                  icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/></svg>,
                },
              ].map(({ label, value, icon }) => (
                <div key={label} className="flex gap-4 p-5 bg-night-800 border border-night-600 rounded-xl">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 border border-white/15 text-white flex items-center justify-center">
                    {icon}
                  </div>
                  <div>
                    <p className="font-display text-zinc-500 text-xs tracking-widest uppercase mb-1">{label}</p>
                    {typeof value === 'string'
                      ? <p className="font-body text-white text-sm">{value}</p>
                      : value}
                  </div>
                </div>
              ))}

              {/* Barrierefreiheit */}
              <div className="p-5 bg-night-800 border border-night-600 border-l-4 border-l-white/40 rounded-xl">
                <p className="font-display text-white text-xs tracking-widest uppercase mb-2">Barrierefreiheit</p>
                <p className="font-body text-zinc-300 text-sm leading-relaxed mb-3">
                  Rollstuhlplätze sind ausschliesslich über den Veranstalter buchbar.
                </p>
                <p className="font-display text-white font-semibold tracking-wide text-sm">+41 76 372 44 77</p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-night-800 border border-night-600 border-t-2 border-t-white/40 rounded-xl p-8">
              <p className="font-display text-zinc-500 tracking-[0.3em] text-xs uppercase mb-2">Schreib uns</p>
              <h2 className="font-display font-bold text-2xl text-white tracking-wide mb-8">Schreib uns eine Nachricht</h2>
              <form className="space-y-5">
                {[
                  { id: 'name', label: 'Name *', type: 'text', placeholder: 'Dein Name' },
                  { id: 'email', label: 'E-Mail *', type: 'email', placeholder: 'deine.email@beispiel.ch' },
                  { id: 'betreff', label: 'Betreff', type: 'text', placeholder: 'Worum geht es?' },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label htmlFor={id} className="block font-display text-zinc-400 text-xs tracking-widest uppercase mb-2">{label}</label>
                    <input
                      id={id}
                      type={type}
                      placeholder={placeholder}
                      className="w-full bg-night-700 border border-night-600 text-white placeholder-zinc-600 font-body text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-blues/60 focus:ring-1 focus:ring-blues/30 transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="nachricht" className="block font-display text-zinc-400 text-xs tracking-widest uppercase mb-2">Nachricht *</label>
                  <textarea
                    id="nachricht"
                    rows="5"
                    placeholder="Deine Nachricht..."
                    className="w-full bg-night-700 border border-night-600 text-white placeholder-zinc-600 font-body text-sm px-4 py-3 rounded-lg focus:outline-none focus:border-blues/60 focus:ring-1 focus:ring-blues/30 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blues hover:bg-blues-light text-black font-display font-bold tracking-widest uppercase py-4 rounded transition-all duration-300 hover:shadow-lg hover:shadow-blues/30"
                >
                  Nachricht senden
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Kontakt