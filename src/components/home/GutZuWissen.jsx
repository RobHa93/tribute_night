import { Link } from 'react-router-dom';
import barImage from '../../assets/img/web/bar-zapfhahn.webp';
import { EVENT } from '../../data/event';

const Fact = ({ title, children }) => (
  <div className="border-t border-hall-line pt-5">
    <dt className="heading-card">{title}</dt>
    <dd className="mt-3 text-ink-muted">{children}</dd>
  </div>
);

const GutZuWissen = () => (
  <section aria-labelledby="infos-titel" className="section bg-hall-surface">
    <div className="container-content grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
      <div>
        <h2 id="infos-titel" className="heading-section">Gut zu wissen</h2>
        <img
          src={barImage}
          alt="Helfer zapfen Bier an der Bar der Tribute Night"
          loading="lazy"
          width="800"
          height="534"
          className="mt-8 hidden w-full rounded-xl object-cover lg:block"
        />
      </div>

      <dl className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        <Fact title="Apéro & Verpflegung">
          Freitag und Samstag jeweils ab <strong className="text-ink">17:00 Uhr</strong>: Stimm dich bei einem
          gemütlichen Apéro auf die Tribute Night ein und geniess Feines vom Grill und verschiedene Getränke.
          Ankommen. Anstossen. Geniessen. Den ganzen Abend bis ca. 02:00 Uhr gibt es Bier, Wein, Prosecco, Mineral,
          Kaffee sowie warmes und kaltes Essen.
        </Fact>
        <Fact title="Alter">
          Mindestalter <strong className="text-ink">16 Jahre</strong>. Ab 10 Jahren ist der Eintritt in Begleitung
          eines Erwachsenen möglich.
        </Fact>
        <Fact title="Rollstuhlplätze">
          Rollstuhlplätze sind ausschliesslich über den Veranstalter buchbar:{' '}
          <a href={EVENT.phone.href} className="link tabular-nums">{EVENT.phone.label}</a>
        </Fact>
        <Fact title="Anreise">
          Parkplätze in Laufenburg sind knapp, wir empfehlen den öffentlichen Verkehr.{' '}
          <Link to="/anreise" className="link">Anreise planen</Link>
        </Fact>
      </dl>
    </div>
  </section>
);

export default GutZuWissen;
