import PageHero from '../components/PageHero';
import { ExternalIcon } from '../components/icons';
import { EVENT } from '../data/event';
import { usePageTitle } from '../hooks/usePageTitle';
import heroImage from '../assets/img/web/buehne-pink.webp';

const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.6060286791535!2d8.064365875581265!3d47.56259206859855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4790442b0c1c43b7%3A0x8d90be5d33259318!2sStadthalle%20-%20Laufenburg!5e1!3m2!1sde!2sch!4v1755765238733!5m2!1sde!2sch';

const PUBLIC_TRANSPORT = [
  { name: 'Zug', detail: 'Bahnhof Laufenburg' },
  { name: 'Bus', detail: 'Haltestelle Spital Laufenburg' },
];

const PARKING = [
  { name: 'Parkplatz beim oberen Stadttor', detail: 'Begrenzte Anzahl Parkplätze verfügbar' },
  { name: 'Parkhaus Restaurant Warteck', detail: 'Überdachte Parkmöglichkeit' },
  { name: 'Parkhaus Stadthalle', detail: 'Weitere Parkmöglichkeit' },
];

// Unterkünfte für Besucher mit Kombiticket; Gehzeiten ab der Stadthalle
const ACCOMMODATIONS = [
  { name: 'Haus am Schlossberg', place: 'CH-5080 Laufenburg', way: '10 Min. zu Fuss', url: 'https://hausamschlossberg.ch/' },
  { name: 'Brutsches Rebstock', place: 'DE-79725 Laufenburg (Baden)', way: '15 Min. zu Fuss', url: 'https://www.hotel-rebstock-laufenburg.de/' },
  {
    name: 'Bett und Beggeli Marianne',
    place: 'CH-5082 Kaisten',
    way: '15 Min. zu Fuss zum Bahnhof, dann 5 Min. mit dem Bus nach Kaisten',
    url: 'https://www.bb-marianne.com/',
  },
];

const PlaceList = ({ places }) => (
  <ul className="mt-6 space-y-4">
    {places.map(({ name, detail }) => (
      <li key={name} className="border-l-2 border-hall-line pl-4">
        <p className="font-semibold">{name}</p>
        <p className="text-ink-muted">{detail}</p>
      </li>
    ))}
  </ul>
);

const Anreise = () => {
  usePageTitle('Anreise');

  return (
    <>
      <PageHero title="Anreise" image={heroImage} imageAlt="Blick von hinten durch die Stadthalle Laufenburg auf die beleuchtete Bühne" imagePosition="center 45%">
        Die Tribute Night findet in der {EVENT.venue} statt. Parkplätze sind knapp, darum empfehlen wir die Anreise
        mit dem öffentlichen Verkehr.
      </PageHero>

      <section className="section">
        <div className="container-content grid gap-6 lg:grid-cols-2">
          <article className="rounded-xl bg-hall-surface p-6 md:p-8">
            <p className="inline-block rounded bg-accent px-2 py-0.5 text-sm font-bold text-accent-ink">Empfohlen</p>
            <h2 className="heading-card mt-4">Öffentlicher Verkehr</h2>
            <PlaceList places={PUBLIC_TRANSPORT} />
            <a href="https://www.sbb.ch" target="_blank" rel="noopener noreferrer" className="link mt-8">
              Verbindung im SBB-Fahrplan suchen
              <ExternalIcon className="h-4 w-4" />
            </a>
          </article>

          <article className="rounded-xl bg-hall-surface p-6 md:p-8">
            <h2 className="heading-card">Mit dem Auto</h2>
            <p className="mt-4 text-ink-muted">Die Parkmöglichkeiten in Laufenburg sind beschränkt.</p>
            <PlaceList places={PARKING} />
          </article>
        </div>

        <div className="container-content mt-6">
          <div className="overflow-hidden rounded-xl bg-hall-surface">
            <div className="flex flex-wrap items-end justify-between gap-4 p-6 md:p-8">
              <div>
                <h2 className="heading-card">Standort</h2>
                <p className="mt-2 text-ink-muted">
                  {EVENT.venue}, {EVENT.postalTown}
                </p>
              </div>
              <a href={EVENT.routeUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Route planen
                <ExternalIcon className="h-4 w-4" />
              </a>
            </div>

            <div className="aspect-[4/3] bg-hall-raised md:aspect-[16/7]">
              <iframe
                src={MAP_EMBED_URL}
                className="block h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Karte: ${EVENT.venue}`}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="uebernachten" aria-labelledby="uebernachten-titel" className="section bg-hall-surface">
        <div className="container-content">
          <h2 id="uebernachten-titel" className="heading-section">Übernachten</h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-muted">
            Du kommst an beiden Abenden? Viele Besucher mit Kombiticket haben nach Übernachtungsmöglichkeiten gefragt.
            Hier einige Vorschläge in der Nähe der Stadthalle.
          </p>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {ACCOMMODATIONS.map(({ name, place, way, url }) => (
              <li key={name} className="flex flex-col rounded-xl bg-hall p-6">
                <h3 className="heading-card">{name}</h3>
                <p className="mt-2 text-ink-muted">{place}</p>
                <p className="mt-4 flex-1 font-semibold">{way}</p>
                <a href={url} target="_blank" rel="noopener noreferrer" className="link mt-6">
                  Zur Website
                  <ExternalIcon className="h-4 w-4" />
                  <span className="sr-only"> von {name} (neues Fenster)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Anreise;
