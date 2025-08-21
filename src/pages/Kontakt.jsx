import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import kontaktImage from '../assets/img/1585603256 (1).jpg'

const Kontakt = () => {
  return (
    <div>
      <Navbar />
      
      {/* Header mit Bild */}
      <div className="bg-stone-100 relative h-[70vh] flex items-center justify-center">
        <h1 className='text-4xl text-center absolute z-10 text-white font-bold'>Kontakt</h1>
        <img
          src={kontaktImage}
          alt="Kontakt Header"
          className="w-full h-full object-cover"
        />
        {/* Overlay für bessere Lesbarkeit */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Kontakt Content */}
      <div className="bg-stone-200 py-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Kontakt Informationen */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Kontakt & Informationen</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-blue-600 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Veranstalter</h3>
                      <p className="text-gray-600">Keropower</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="text-blue-600 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">E-Mail</h3>
                      <a href="mailto:keropower@bluewin.ch" className="text-blue-600 hover:text-blue-800">
                        keropower@bluewin.ch
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="text-blue-600 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Veranstaltungsort</h3>
                      <p className="text-gray-600">
                        Turnhalle Laufenburg<br />
                        Laufenburg, Schweiz
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="text-blue-600 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Event Termine</h3>
                      <div className="text-gray-600">
                        <p>Donnerstag: 19:30 - 23:00 Uhr</p>
                        <p>Freitag: 20:00 - 02:00 Uhr</p>
                        <p>Samstag: 19:30 - 02:00 Uhr</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rollstuhl Info */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Barrierefreiheit</h3>
                <p className="text-gray-600 mb-2">
                  Rollstuhlplätze sind ausschliesslich über den Veranstalter buchbar.
                </p>
                <p className="font-semibold text-blue-600">📞 +41 76 372 44 77</p>
              </div>
            </div>

            {/* Kontakt Formular */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Schreib uns eine Nachricht</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Dein Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="deine.email@beispiel.ch"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Betreff
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Worum geht es?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Deine Nachricht..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold"
                >
                  Nachricht senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Kontakt