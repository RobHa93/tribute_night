import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { SPONSORS } from '../data/event';
import { usePageTitle } from '../hooks/usePageTitle';
import heroImage from '../assets/img/web/buehne-rot.webp';

const IBAN = 'CH09 0076 1642 4020 2200 1';

const Sponsoren = () => {
  usePageTitle('Gönner & Sponsoren');
  const [copyStatus, setCopyStatus] = useState('');

  const copyIban = async () => {
    try {
      await navigator.clipboard.writeText(IBAN.replaceAll(' ', ''));
      setCopyStatus('IBAN kopiert');
    } catch {
      setCopyStatus('Kopieren nicht möglich, bitte von Hand übernehmen');
    }
  };

  return (
    <>
      <PageHero title="Gönner & Sponsoren" image={heroImage} imageAlt="Band unter roten Scheinwerfern" imagePosition="center 62%">
        Partner und Unterstützer machen die Tribute Night möglich.
      </PageHero>

      <section aria-labelledby="goenner-titel" className="section">
        <div className="container-content grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 id="goenner-titel" className="heading-section">Werde Gönner</h2>
            <p className="mt-5 text-lg text-ink-muted">
              Mit deinem finanziellen Beitrag hilfst du, unseren Event erfolgreich zu gestalten.
            </p>
            <p className="mt-4 text-ink-muted">
              <strong className="text-ink">Dankeschön:</strong> Für jede Spende ab CHF 100.00 erhältst du ein
              Eintrittsticket, wahlweise für Freitag oder Samstag (je nach Verfügbarkeit).
            </p>
          </div>

          <div className="rounded-xl bg-hall-surface p-6 md:p-8">
            <h3 className="heading-card">Einzahlung</h3>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <p className="font-display text-2xl font-bold tracking-wide tabular-nums md:text-3xl">{IBAN}</p>
              <button type="button" onClick={copyIban} className="btn-secondary px-4 py-2">IBAN kopieren</button>
            </div>
            <p role="status" className="mt-2 min-h-[1.5em] text-sm text-ink-subtle">{copyStatus}</p>

            <h3 className="heading-card mt-6">So funktioniert’s</h3>
            <ol className="mt-4 space-y-4">
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-accent font-bold text-accent-ink">1</span>
                <p className="text-ink-muted">
                  Trage unter <Link to="/kontakt" className="link">Kontakt</Link> deinen Namen sowie den gespendeten
                  Betrag ein, damit wir dich auf unserer Gönnerliste aufführen können.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-accent font-bold text-accent-ink">2</span>
                <p className="text-ink-muted">
                  Bei Spenden ab CHF 100.00: Gib zusätzlich den gewünschten Veranstaltungstag für dein Eintrittsticket
                  an. Dieses senden wir dir kostenlos per Post zu.
                </p>
              </li>
            </ol>
            <p className="mt-8 font-semibold">Vielen Dank für deine Unterstützung!</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="sponsoren-titel" className="section bg-hall-surface">
        <div className="container-content">
          <h2 id="sponsoren-titel" className="heading-section">Unsere Sponsoren</h2>
          {SPONSORS.length > 0 ? (
            <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {SPONSORS.map(({ name, logo, url }) => (
                <li key={name}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex aspect-[3/2] items-center justify-center rounded-xl bg-hall-raised p-6"
                  >
                    <img src={logo} alt={name} loading="lazy" className="max-h-full max-w-full object-contain" />
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-5 max-w-2xl text-lg text-ink-muted">
              Unsere Sponsoren stellen wir hier bald vor. Interesse an einem Sponsoring?{' '}
              <Link to="/kontakt" className="link">Melde dich bei uns</Link>
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default Sponsoren;
