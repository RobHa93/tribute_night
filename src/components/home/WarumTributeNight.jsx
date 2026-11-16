import bannerImage from '../../assets/img/web/jubilaeum-banner-breit.webp';
import { EVENT } from '../../data/event';

const WarumTributeNight = () => (
  <section
    aria-labelledby="warum-titel"
    className="section relative isolate overflow-hidden bg-hall min-[1400px]:flex min-[1400px]:min-h-[clamp(38rem,36vw,46rem)] min-[1400px]:items-center min-[1400px]:py-16"
  >
    {/* Banner erst ab 1400 px, darunter bleibt der Text allein und das Bild wird gar nicht geladen.
        Das Bild folgt der Abschnittshöhe statt der Breite: so bleibt es ganz sichtbar, von den Scheinwerfern bis zum Publikum. */}
    <div className="absolute inset-y-0 left-0 -z-10 hidden aspect-[1672/941] min-[1400px]:block">
      <img src={bannerImage} alt="10 Jahre Tribute Night" loading="lazy" className="h-full w-full object-cover" />
      {/* Rechte Bildkante in den Seitenhintergrund auslaufen lassen */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent from-55% to-hall" />
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
