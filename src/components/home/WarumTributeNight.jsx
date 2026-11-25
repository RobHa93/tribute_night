import bannerImage from '../../assets/img/web/lichter-rot.webp';
import { EVENT } from '../../data/event';

const WarumTributeNight = () => (
  <section
    aria-labelledby="warum-titel"
    className="section relative isolate overflow-hidden bg-hall min-[1400px]:flex min-[1400px]:min-h-[clamp(38rem,36vw,46rem)] min-[1400px]:items-center min-[1400px]:py-16"
  >
    {/* Banner erst ab 1400 px, darunter bleibt der Text allein und das Bild wird gar nicht geladen.
        Echtes Foto einer früheren Ausgabe; «10 Jahre» als Schrift darüber statt ins Bild eingebacken. */}
    <div className="absolute inset-y-0 left-0 -z-10 hidden aspect-[1225/792] min-[1400px]:block">
      <img src={bannerImage} alt="" loading="lazy" className="h-full w-full object-cover" />
      {/* Rechte Bildkante in den Seitenhintergrund auslaufen lassen, unten für den Schriftzug abdunkeln */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent from-50% to-hall" />
      <div className="absolute inset-0 bg-gradient-to-t from-hall/90 via-hall/20 via-45% to-transparent" />
      {/* Gleiche Bildsprache wie der Hero: grosse Zahl, darüber ein schräger Gaffa-Tape-Streifen */}
      <p className="absolute bottom-[9%] left-[7%] font-brand uppercase leading-[0.78]">
        <span className="block text-[clamp(13rem,17vw,19rem)] text-ink drop-shadow-[0_6px_24px_rgba(0,0,0,0.55)]">10</span>
        <span className="relative -mt-[0.35em] ml-[0.4em] inline-block -rotate-3 bg-accent px-[0.3em] pb-[0.05em] pt-[0.15em] text-[clamp(2.25rem,3vw,3.25rem)] text-accent-ink shadow-[0_8px_24px_rgba(0,0,0,0.45)]">
          Jahre Tribute Night
        </span>
      </p>
    </div>
    {/* Weicher Übergang vom Programm-Abschnitt */}
    <div className="absolute inset-x-0 top-0 -z-10 hidden h-16 bg-gradient-to-b from-hall to-transparent min-[1400px]:block" />
    {/* Hinter dem Text abdunkeln, damit er auch über dem orangen Rauch lesbar bleibt */}
    <div className="absolute inset-y-0 right-0 -z-10 hidden w-[55%] bg-gradient-to-l from-hall/80 via-hall/60 to-transparent min-[1400px]:block" />

    {/* Ab 1400 px beginnt der Text bei 58 % der Bildschirmbreite, rechts neben der Grafik */}
    <div className="container-content min-[1400px]:mx-0 min-[1400px]:max-w-none min-[1400px]:pl-[58%]">
      <div className="max-w-3xl min-[1400px]:max-w-[38rem]">
        <h2 id="warum-titel" className="heading-section">Jubiläums Tribute Night</h2>
        <div className="mt-6 space-y-4 text-lg text-ink-muted">
          <p>
            Seit Jahren steht die Tribute Night Laufenburg für musikalische Qualität, professionelle Organisation und
            eine einzigartige Konzertatmosphäre. Wir wählen Bands aus, die ihre berühmten Vorbilder nicht nur
            musikalisch, sondern auch in Ausstrahlung und Bühnenpräsenz authentisch verkörpern.
          </p>
          <p>
            Was vor zehn Jahren mit der Idee begann, hochkarätige Tribute-Bands in die historische Stadt am Rhein zu
            holen, ist heute ein fester Termin im regionalen Veranstaltungskalender und ein Treffpunkt für Musikfans
            aller Generationen.
          </p>
          <p>
            Zum 10-jährigen Jubiläum wollen wir mit unserem Publikum etwas Besonderes feiern: zwei aussergewöhnliche
            Konzertabende voller Emotionen, Erinnerungen und grossartiger Livemusik.
          </p>
          <p className="text-ink">
            Wir freuen uns darauf, dich am 3. und 4. September 2027 in der {EVENT.venue} willkommen zu heissen!
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WarumTributeNight;
