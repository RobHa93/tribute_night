import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Sponsoren = () => {
  // Beispiel-Sponsoren-Daten
  const sponsors = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: `Sponsor ${index + 1}`,
    image: `https://via.placeholder.com/300x200/4ECDC4/FFFFFF?text=Sponsor+${index + 1}`,
    link: "#"
  }));

  return (
    <div>
      <Navbar />    

      {/* Sponsoren-Sektion mit Hintergrundbild */}
      <div
        className="relative h-[70vh] flex items-center justify-center bg-fill bg-center"
        style={{ backgroundImage: `url('/images/Unbenannt.PNG')` }}
      >
        {/* Overlay für bessere Lesbarkeit */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text oben drauf */}
        <h1 className="text-4xl text-center text-white font-bold z-10">
          Sponsoren
        </h1>
      </div>

      {/* Gönner-Infos */}
      <div className="bg-stone-200 py-10">
        <div className="max-w-4xl w-11/12 mx-auto">
          <h1 className="text-4xl text-center my-10">
            Unterstütze unseren Event als Gönner
          </h1>
          <br />
          <p className="my-5">
            Mit Deinem finanziellen Beitrag hilfst Du, unseren Event erfolgreich zu gestalten.
          </p>
          <p className="my-5">
            <b>Exklusives Dankeschön:</b> Für jede Spende ab CHF 100.00 erhältst Du ein Eintrittsticket – wahlweise für Donnerstag, Freitag oder Samstag (je nach Verfügbarkeit).
          </p>
          <p className="my-5">
            <b>Einzahlungsdetails:</b> IBAN: CH09 0076 1642 4020 2200 1
          </p>
          <p className="my-5">So funktioniert's:</p>
          <ol className="my-5 list-decimal list-inside">
            <li>
              Trage unter <b>Kontakt</b> Deinen Namen sowie den gespendeten Betrag ein, damit wir Dich auf unserer Gönnerliste aufführen können.
            </li>
            <li>
              Bei Spenden von CHF 100.00 oder mehr: Bitte gib zusätzlich den gewünschten Veranstaltungstag für Dein Eintrittsticket an. Dieses senden wir Dir kostenlos per Post zu.
            </li>
          </ol>
          <p className="my-5 font-semibold">
            Vielen Dank für Deine Unterstützung!
          </p>
        </div>
      </div>

      {/* Sponsor Cards Sektion */}
      <div className="bg-stone-200 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Unsere Sponsoren</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {sponsors.map((sponsor) => (
              <a
                key={sponsor.id}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200"
              >
                <div className="aspect-w-3 aspect-h-2">
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-center text-gray-800">
                    {sponsor.name}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Sponsoren
