import { useState, useEffect } from 'react';

const MainContent = () => {
  // Slider Logik
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const sliderImages = [
    "src/assets/img/image.jpg",
    "src/assets/img/1585603256.jpg",
    "src/assets/img/Gitarre2.PNG",
    "src/assets/img/1536064883.jpg",
    "src/assets/img/1585603256 (2).jpg",
    "src/assets/img/Gitarre3.PNG",
    "src/assets/img/Band1.PNG",
    "src/assets/img/Band2.PNG",
    "src/assets/img/1585603256 (1).jpg",
    "src/assets/img/1585603257.jpg",
    "src/assets/img/1585603258.jpg",
    "src/assets/img/DJ1.PNG",

  ];

  // Auto-Slider alle 5 Sekunden
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [sliderImages.length]);

  return (
    <main className="bg-stone-200 py-16 -mt-48">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl mt-60 font-bold">
          Willkommen zur vierten Ausgabe der <br />
          <b>Tribute Night in Laufenburg!</b>
        </h1>
        <h1 className="mt-10 text-xl">
          Es ist wieder so weit! Die Tribute Night geht in die vierte Runde und
          bietet ein einzigartiges Musik-Erlebnis mit Coverbands, die euch einmal
          mehr in die besten Epochen der Musikgeschichte entführen. In einer
          gemütlichen und energiegeladenen Atmosphäre wird die Turnhalle für drei
          Tage zu einem Hotspot für Musikliebhaber. Lasst euch das nicht entgehen!
        </h1>
      </div>

      <div className="flex justify-center mt-10">
        <a 
          href="https://www.eventfrog.ch" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-violet-500 w-40 h-16 flex items-center justify-center rounded-lg text-white text-lg font-semibold group hover:bg-violet-600 transition-colors duration-300"
        >
          Tickets{" "}
          <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
            &gt;
          </span>
        </a>
      </div>

      <div className="bg-stone-200 py-16 flex justify-center">
        <img
          className="w-auto h-[800px]"
          src="src/assets/img/timetable.png"
          alt="timetable tribute night"
        />
      </div>

      {/* Infos Sektion */}
      <div className="bg-stone-200 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Wichtige Infos</h2>
          <br />
          <br />

          {/* Zeiten und Verpflegung nebeneinander */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            
            {/* Zeiten Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Zeiten</h3>
              <p className="mb-6 text-lg text-justify hyphens-auto text-gray-600">
                Um euch möglichst viel Musik zu bieten, starten die Shows dieses Jahr
                etwas früher:
              </p>
              <ul className="space-y-3 text-lg text-left">
                <li className="flex items-center text-gray-700">
                  <span className="mr-3 text-2xl">🎵</span>
                  <span><strong>Donnerstag:</strong> Türöffnung 18:30 Uhr / Start 19:30 Uhr</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-3 text-2xl">🎵</span>
                  <span><strong>Freitag:</strong> Türöffnung 19:30 Uhr / Start 20:00 Uhr</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="mr-3 text-2xl">🎵</span>
                  <span><strong>Samstag:</strong> Türöffnung 19:00 Uhr / Start 19:30 Uhr</span>
                </li>
              </ul>
            </div>

            {/* Verpflegung Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Verpflegung</h3>
              <p className="mb-6 text-lg text-justify hyphens-auto text-gray-600">
                Am Freitag & Samstag könnt ihr schon ab <b>17:00 Uhr</b> beim{" "}
                <span className="font-semibold text-blue-600">Fyrobe Apéro</span> vorbeischauen – mit
                feinem Essen vom Grill, kühlen Drinks und guter Stimmung. Danach geht's
                direkt weiter bis in die Nacht (bis ca. 02:00 Uhr).
              </p>
              <p className="text-lg text-justify hyphens-auto text-gray-600">
                Natürlich gibt's den ganzen Abend <b>Bier, Wein, Prosecco, Mineral, Kaffee</b> sowie warmes & kaltes Essen.
              </p>
            </div>
          </div>

          {/* Barrierefreiheit und Altersbeschränkung nebeneinander */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Barrierefreiheit Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Barrierefreiheit</h3>
              <p className="text-lg text-justify hyphens-auto text-gray-600">
                Rollstuhlplätze sind ausschliesslich über den Veranstalter buchbar:
              </p>
              <div className="mt-4 flex items-center">
                <span className="mr-2 text-2xl">📞</span>
                <span className="text-lg font-semibold text-blue-600">+41 76 372 44 77</span>
              </div>
            </div>

            {/* Altersbeschränkung Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Altersbeschränkung</h3>
              <p className="text-lg text-justify hyphens-auto text-gray-600">
                Mindestalter: <b className="text-red-600">16 Jahre</b>
              </p>
              <p className="text-lg text-justify hyphens-auto text-gray-600 mt-4">
                Ab 10 Jahren ist der Eintritt in Begleitung eines Erwachsenen möglich.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Sektion */}
      <div className="bg-stone-200 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Impressionen</h2>
          
          <div className="flex justify-center">
            <div className="relative w-[650px] h-[450px] overflow-hidden rounded-lg shadow-lg">
              {sliderImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slider Bild ${index + 1}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              
              {/* Slider Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentSlide ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
