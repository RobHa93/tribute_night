import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Anreise = () => {
  return (
    <div>
      <Navbar />
      
      {/* Header mit Bild */}
      <div className="bg-stone-200 relative h-[70vh] flex items-center justify-center">
        <h1 className='text-4xl text-center absolute z-10 text-white font-bold'>Anreise</h1>
        <img
          src="/images/1585603256 (1).jpg"
          alt="Anreise Header"
          className="w-full h-full object-cover"
        />
        {/* Overlay für bessere Lesbarkeit */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Anreise Content */}
      <div className="bg-stone-200 py-16">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Einführungstext */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">So findest du zu uns</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Die Tribute Night findet in der Turnhalle Laufenburg statt. 
              Hier findest du alle wichtigen Informationen für deine Anreise.
            </p>
          </div>
        <br />
        <br />
          {/* Anreise Optionen */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            
            {/* Mit dem Fahrzeug */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.92 2.01C18.72 1.42 18.16 1 17.5 1h-11C5.84 1 5.28 1.42 5.08 2.01L3 8v13c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Mit dem Fahrzeug</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600 mb-4">
                  <strong>Wichtiger Hinweis:</strong> Die Parkmöglichkeiten in Laufenburg sind beschränkt.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-600 mt-1">📍</span>
                    <div>
                      <h4 className="font-semibold">Parkplatz beim oberen Stadttor</h4>
                      <p className="text-gray-600 text-sm">Begrenzte Anzahl Parkplätze verfügbar</p>
                    </div>
                  </div>
                  <br />
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-600 mt-1">📍</span>
                    <div>
                      <h4 className="font-semibold">Parkhaus Restaurant Warteck</h4>
                      <p className="text-gray-600 text-sm">Überdachte Parkmöglichkeit</p>
                    </div>
                  </div>
                  <br />
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-600 mt-1">📍</span>
                    <div>
                      <h4 className="font-semibold">Parkhaus Stadthalle</h4>
                      <p className="text-gray-600 text-sm">Weitere Parkmöglichkeit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
            {/* Öffentlicher Verkehr */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V7h5v3zm5.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-7h-5V7h5v3z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Öffentlicher Verkehr</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-600 mb-4">
                  <strong>Empfehlung:</strong> Wir empfehlen die Anreise mit öffentlichen Verkehrsmitteln.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1">🚆</span>
                    <div>
                      <h4 className="font-semibold">Zug Anfahrt</h4>
                      <p className="text-gray-600 text-sm">Bahnhof Laufenburg</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1">🚌</span>
                    <div>
                      <h4 className="font-semibold">Bus Haltestelle</h4>
                      <p className="text-gray-600 text-sm">Spital Laufenburg</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">SBB Fahrplan</h4>
                  <p className="text-green-700 text-sm mb-3">
                    Aktuelle Fahrpläne und Verbindungen:
                  </p>
                  <a 
                    href="https://www.sbb.ch" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-300"
                  >
                    <span className="mr-2">🌐</span>
                    SBB Fahrplan
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center mb-6">Standort</h3>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.6060286791535!2d8.064365875581265!3d47.56259206859855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4790442b0c1c43b7%3A0x8d90be5d33259318!2sStadthalle%20-%20Laufenburg!5e1!3m2!1sde!2sch!4v1755765238733!5m2!1sde!2sch"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Laufenburg Standort"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                <strong>Stadthalle Laufenburg</strong><br />
                Laufenburg, Schweiz
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    
  )
}

export default Anreise