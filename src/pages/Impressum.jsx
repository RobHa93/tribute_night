import { Link } from 'react-router-dom';
import LegalPage from '../components/LegalPage';
import { EVENT } from '../data/event';
import { usePageTitle } from '../hooks/usePageTitle';

const Impressum = () => {
  usePageTitle('Impressum');

  return (
    <LegalPage title="Impressum" updated="November 2026">
      <section>
        <h2>Veranstalter und Verantwortlich für den Inhalt</h2>
        <p>
          <strong className="text-ink">{EVENT.organizer}</strong>
          {EVENT.address && (
            <>
              <br />
              {EVENT.address}
            </>
          )}
          <br />
          E-Mail: <a href={`mailto:${EVENT.email}`} className="link">{EVENT.email}</a>
          <br />
          Telefon: <a href={EVENT.phone.href} className="link tabular-nums">{EVENT.phone.label}</a>
        </p>
      </section>

      <section>
        <h2>Tickets</h2>
        <p>
          Tickets werden ausschliesslich über die Plattform Eventfrog verkauft. Für Kauf, Zahlung und Rückgabe gelten
          die Bedingungen von Eventfrog. Diese Website verkauft selbst keine Tickets.
        </p>
      </section>

      <section>
        <h2>Haftungsausschluss</h2>
        <p>
          Wir stellen die Informationen auf dieser Website mit Sorgfalt zusammen, übernehmen aber keine Gewähr für
          ihre Richtigkeit, Vollständigkeit und Aktualität. Programm, Zeiten und Angebote können sich ändern;
          massgebend sind die Angaben am Veranstaltungstag.
        </p>
      </section>

      <section>
        <h2>Links zu anderen Websites</h2>
        <p>
          Diese Website verlinkt auf Angebote Dritter, zum Beispiel Eventfrog, Google Maps, YouTube, Facebook,
          Instagram und die Websites der Bands. Für deren Inhalte sind ausschliesslich die jeweiligen Betreiber verantwortlich.
        </p>
      </section>

      <section>
        <h2>Urheberrecht</h2>
        <p>
          Texte und Fotos auf dieser Website gehören der Tribute Night Laufenburg oder den jeweiligen Fotografinnen,
          Fotografen und Bands. Eine Verwendung ist nur mit Erlaubnis gestattet.
        </p>
      </section>

      <p>
        Wie wir mit Personendaten umgehen, steht in der <Link to="/datenschutz" className="link">Datenschutzerklärung</Link>.
      </p>
    </LegalPage>
  );
};

export default Impressum;
