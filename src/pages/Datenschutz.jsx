import LegalPage from '../components/LegalPage';
import { EVENT } from '../data/event';
import { usePageTitle } from '../hooks/usePageTitle';

// Muss angepasst werden, sobald Tracking, Newsletter oder ein anderer Dienst dazukommt
const Datenschutz = () => {
  usePageTitle('Datenschutz');

  return (
    <LegalPage title="Datenschutz" updated="November 2026">
      <section>
        <h2>Das Wichtigste in Kürze</h2>
        <p>
          Diese Website informiert über die Tribute Night Laufenburg und führt zum Ticketverkauf. Wir verwenden keine
          Cookies, keine Analyse- oder Werbe-Tracker und keine Social-Media-Plugins. Auf der Seite Anreise ist eine
          Karte von Google Maps eingebunden; die Videos im Line-up laden erst, wenn du sie anklickst. Personendaten
          bearbeiten wir selbst nur, wenn du uns kontaktierst, und nur so weit, wie es für deine Anfrage nötig ist.
        </p>
      </section>

      <section>
        <h2>Verantwortlich</h2>
        <p>
          {EVENT.organizer}, E-Mail: <a href={`mailto:${EVENT.email}`} className="link">{EVENT.email}</a>
          <br />
          Diese Erklärung richtet sich nach dem Schweizer Datenschutzgesetz (DSG).
        </p>
      </section>

      <section>
        <h2>Besuch der Website</h2>
        <p>
          Beim Aufruf der Website speichert unser Hosting-Anbieter technisch notwendige Angaben wie IP-Adresse,
          Datum und Uhrzeit, aufgerufene Seite und Browsertyp. Diese Daten dienen dem sicheren Betrieb der Website, werden
          nicht mit anderen Daten zusammengeführt und nach kurzer Zeit gelöscht.
        </p>
        <p>Die Schriften sind auf unserem eigenen Server gespeichert; beim Laden der Seite wird keine Verbindung zu Google Fonts aufgebaut.</p>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>
          Wenn du uns per E-Mail, Telefon oder über das Kontaktformular schreibst, verwenden wir deine Angaben nur, um
          deine Anfrage zu beantworten. Nachrichten aus dem Kontaktformular werden per E-Mail an uns weitergeleitet. Wir
          geben deine Daten nicht an Dritte weiter und löschen sie, wenn sie nicht mehr benötigt werden.
        </p>
      </section>

      <section>
        <h2>Karte auf der Seite Anreise</h2>
        <p>
          Auf der Seite Anreise ist eine Karte von Google Maps (Google Ireland Limited, Gordon House, Barrow Street,
          Dublin 4, Irland) eingebunden, damit du den Weg zur Stadthalle findest. Beim Aufruf dieser Seite lädt dein
          Browser die Karte direkt von Google. Dabei werden Daten wie deine IP-Adresse, Datum und Uhrzeit sowie
          Angaben zum Browser an Google übermittelt, unter Umständen auch in die USA, und Google kann Cookies setzen.
          Wir haben keinen Einfluss darauf, wie Google diese Daten bearbeitet. Es gilt die{' '}
          <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="link">
            Datenschutzerklärung von Google
          </a>
          .
        </p>
      </section>

      <section>
        <h2>Videos auf der Seite Line-up</h2>
        <p>
          Die Live-Videos der Bands stammen von YouTube und werden erst geladen, wenn du auf «Live-Video abspielen»
          klickst. Wir binden sie über youtube-nocookie.com ein. Mit dem Klick werden Daten wie deine IP-Adresse an
          YouTube bzw. Google übermittelt, unter Umständen auch in die USA. Es gilt die oben verlinkte
          Datenschutzerklärung von Google.
        </p>
      </section>

      <section>
        <h2>Tickets und Links zu anderen Websites</h2>
        <p>
          Tickets kaufst du direkt bei Eventfrog. Für die Daten, die du dort angibst, ist Eventfrog verantwortlich; es
          gilt dessen Datenschutzerklärung. Dasselbe gilt für andere verlinkte Websites wie Facebook, Instagram oder
          die Websites der Bands, sobald du sie öffnest.
        </p>
      </section>

      <section>
        <h2>Deine Rechte</h2>
        <p>
          Du kannst jederzeit Auskunft über deine bei uns gespeicherten Daten verlangen und deren Berichtigung oder
          Löschung beantragen. Schreib uns dazu an{' '}
          <a href={`mailto:${EVENT.email}`} className="link">{EVENT.email}</a>.
        </p>
      </section>
    </LegalPage>
  );
};

export default Datenschutz;
