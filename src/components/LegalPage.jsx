// Schlichter Rahmen für Rechtstexte: kein Bild-Hero, gut lesbare Zeilenlänge
const LegalPage = ({ title, updated, children }) => (
  <article className="container-content pb-24 pt-32 md:pt-40">
    <h1 className="heading-page">{title}</h1>
    <p className="meta mt-4">Stand: {updated}</p>
    <div className="mt-12 max-w-3xl space-y-10 text-ink-muted [&_h2]:heading-card [&_h2]:mb-3 [&_h2]:text-ink [&_p+p]:mt-3">
      {children}
    </div>
  </article>
);

export default LegalPage;
