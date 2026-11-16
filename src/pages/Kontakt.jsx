import { useState } from 'react';
import PageHero from '../components/PageHero';
import { EVENT, NIGHTS } from '../data/event';
import { usePageTitle } from '../hooks/usePageTitle';
import heroImage from '../assets/img/web/publikum-handy.webp';

const FORM_FIELDS = [
  { id: 'name', label: 'Name', type: 'text', autoComplete: 'name', required: true },
  { id: 'email', label: 'E-Mail', type: 'email', autoComplete: 'email', required: true },
  { id: 'betreff', label: 'Betreff', type: 'text', autoComplete: 'off', required: false },
];

const Kontakt = () => {
  usePageTitle('Kontakt');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Versand folgt mit EmailJS. Bis dahin bleiben die Eingaben stehen und wir verweisen auf die E-Mail-Adresse.
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <PageHero title="Kontakt" image={heroImage} imageAlt="Besucherin filmt das Konzert mit dem Handy" imagePosition="52% 45%">
        Fragen zu Tickets, Rollstuhlplätzen oder Sponsoring? Schreib uns oder ruf an.
      </PageHero>

      <section className="section">
        <div className="container-content grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
          <div>
            <h2 className="heading-card">Veranstalter</h2>
            <dl className="mt-6 space-y-5">
              <div>
                <dt className="meta">Organisation</dt>
                <dd className="mt-1 font-semibold">{EVENT.organizer}</dd>
              </div>
              <div>
                <dt className="meta">E-Mail</dt>
                <dd className="mt-1"><a href={`mailto:${EVENT.email}`} className="link">{EVENT.email}</a></dd>
              </div>
              <div>
                <dt className="meta">Telefon</dt>
                <dd className="mt-1"><a href={EVENT.phone.href} className="link tabular-nums">{EVENT.phone.label}</a></dd>
              </div>
              <div>
                <dt className="meta">Veranstaltungsort</dt>
                <dd className="mt-1">{EVENT.venue}, {EVENT.postalTown}</dd>
              </div>
              <div>
                <dt className="meta">Event-Termine</dt>
                {NIGHTS.map((night) => (
                  <dd key={night.id} className="mt-1 tabular-nums">
                    {night.day} {night.date}: {night.start} – {night.end} Uhr
                  </dd>
                ))}
              </div>
            </dl>

            <div className="mt-10 border-t border-hall-line pt-6">
              <h2 className="heading-card">Rollstuhlplätze</h2>
              <p className="mt-3 text-ink-muted">
                Rollstuhlplätze sind ausschliesslich über den Veranstalter buchbar:{' '}
                <a href={EVENT.phone.href} className="link tabular-nums">{EVENT.phone.label}</a>
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-hall-surface p-6 md:p-10">
            <h2 className="heading-section">Schreib uns</h2>
            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              {FORM_FIELDS.map(({ id, label, type, autoComplete, required }) => (
                <div key={id}>
                  <label htmlFor={id} className="label">
                    {label} {required ? <span className="text-ink-subtle">(Pflichtfeld)</span> : null}
                  </label>
                  <input id={id} name={id} type={type} autoComplete={autoComplete} required={required} className="input" />
                </div>
              ))}
              <div>
                <label htmlFor="nachricht" className="label">
                  Nachricht <span className="text-ink-subtle">(Pflichtfeld)</span>
                </label>
                <textarea id="nachricht" name="nachricht" rows="6" required className="input resize-y" />
              </div>

              <button type="submit" className="btn-primary w-full">Nachricht senden</button>

              <p role="status" className="text-ink-muted">
                {isSubmitted && (
                  <>
                    Der Versand über das Formular wird gerade eingerichtet. Bitte schick deine Nachricht bis dahin direkt
                    an <a href={`mailto:${EVENT.email}`} className="link">{EVENT.email}</a>.
                  </>
                )}
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Kontakt;
