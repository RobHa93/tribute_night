import { Link } from 'react-router-dom';
import { ExternalIcon, TicketIcon } from '../components/icons';
import { EVENT, NIGHTS, TICKETS } from '../data/event';
import { usePageTitle } from '../hooks/usePageTitle';

const formatPrice = (francs) => `${francs}.–`;

const TicketOption = ({ option }) => {
  const isCombo = option.id === 'kombi';

  return (
    <li
      className={`relative flex flex-col rounded-xl p-6 md:p-8 ${
        isCombo ? 'bg-hall-raised ring-2 ring-accent' : 'bg-hall-surface'
      }`}
    >
      {isCombo && (
        <p className="absolute -top-3 left-6 rounded bg-accent px-2 py-0.5 text-sm font-bold text-accent-ink">
          Beide Abende
        </p>
      )}
      <h2 className="heading-card">{option.title}</h2>
      <p className="mt-1 text-ink-muted">{option.date}</p>
      <p className="meta mt-1">{option.acts}</p>

      <div className="mt-8 flex-1">
        <p className="text-sm font-semibold text-accent">Early Bird bis {TICKETS.earlyBirdUntil}</p>
        <p className="mt-1 font-display text-6xl font-black leading-none tabular-nums">
          <span className="mr-2 align-top text-2xl font-bold text-ink-muted">CHF</span>
          {formatPrice(option.earlyBird)}
        </p>
        <p className="mt-3 text-ink-muted tabular-nums">
          Ab {TICKETS.normalFrom}: CHF {formatPrice(option.normal)}
        </p>
      </div>

      {isCombo ? (
        <div className="mt-8">
          <p className="text-sm text-ink-muted">Auf Eventfrog bei Freitag oder Samstag die Option «beide Abende» wählen.</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {NIGHTS.map((night) => (
              <a key={night.id} href={night.ticketUrl} target="_blank" rel="noopener noreferrer" className="btn-primary px-3">
                Über {night.day}
                <span className="sr-only"> Kombiticket buchen (Eventfrog, neues Fenster)</span>
              </a>
            ))}
          </div>
        </div>
      ) : (
        <a href={option.url} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
          <TicketIcon />
          {option.title} buchen
          <span className="sr-only"> (Eventfrog, neues Fenster)</span>
        </a>
      )}
    </li>
  );
};

const Tickets = () => {
  usePageTitle('Tickets');

  return (
    <div className="container-content pb-24 pt-32 md:pt-40">
      <h1 className="heading-page">Tickets</h1>
      <p className="mt-5 max-w-2xl text-lg text-ink-muted md:text-xl">
        Tickets ganz einfach online über Eventfrog bestellen oder direkt an der Abendkasse kaufen.
      </p>

      <ul className="mt-14 grid gap-6 md:grid-cols-3">
        {TICKETS.options.map((option) => (
          <TicketOption key={option.id} option={option} />
        ))}
      </ul>

      <p className="mt-6 flex items-center gap-2 text-sm text-ink-subtle">
        <ExternalIcon className="h-4 w-4" />
        Der Kauf läuft über Eventfrog; dort gelten deren Bedingungen.
      </p>

      <dl className="mt-16 grid gap-x-10 gap-y-8 border-t border-hall-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <dt className="font-semibold">Abendkasse</dt>
          <dd className="mt-1 text-ink-muted">An beiden Abenden, solange es Plätze hat.</dd>
        </div>
        <div>
          <dt className="font-semibold">Alter</dt>
          <dd className="mt-1 text-ink-muted">Ab 16 Jahren, ab 10 Jahren in Begleitung eines Erwachsenen.</dd>
        </div>
        <div>
          <dt className="font-semibold">Rollstuhlplätze</dt>
          <dd className="mt-1 text-ink-muted">
            Nur über den Veranstalter:{' '}
            <a href={EVENT.phone.href} className="link tabular-nums">{EVENT.phone.label}</a>
          </dd>
        </div>
        <div>
          <dt className="font-semibold">Übernachten</dt>
          <dd className="mt-1 text-ink-muted">
            Mit Kombiticket an beiden Abenden dabei?{' '}
            <Link to="/anreise#uebernachten" className="link">Unterkünfte in der Nähe</Link>
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default Tickets;
