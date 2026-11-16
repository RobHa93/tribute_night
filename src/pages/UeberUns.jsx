import PageHero from '../components/PageHero';
import { usePageTitle } from '../hooks/usePageTitle';
import heroImage from '../assets/img/web/buehne-fans-sw.webp';

const FACTS = [
  { value: '10', label: 'Jahre' },
  { value: '2', label: 'Abende' },
  { value: '1000+', label: 'Besucher' },
];

const UeberUns = () => {
  usePageTitle('Über uns');

  return (
    <>
      <PageHero
        title="Über uns"
        image={heroImage}
        imageAlt="Band auf der Bühne, Fans in der ersten Reihe strecken die Hände hoch"
        imagePosition="40% 30%"
      >
        Seit zehn Jahren bringen wir mit der Tribute Night ein einzigartiges Musik-Erlebnis in die historische Stadt
        am Rhein. Was als kleine Idee begann, ist heute einer der beliebtesten Musikevents der Region.
      </PageHero>

      <section className="section">
        <div className="container-content grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="heading-section">Unsere Geschichte</h2>
            <div className="mt-6 space-y-4 text-ink-muted">
              <p>
                Die Tribute Night entstand aus der Leidenschaft für grossartige Musik und dem Wunsch, die grössten Hits
                der Musikgeschichte live und authentisch zu erleben.
              </p>
              <p>
                Was vor zehn Jahren mit der Idee begann, hochkarätige Tribute-Bands nach Laufenburg zu holen, ist
                heute ein fester Bestandteil des regionalen Veranstaltungskalenders. Viele unvergessliche Konzerte,
                grossartige Musiker und ein begeistertes Publikum haben die Tribute Night geprägt.
              </p>
              <p>
                2027 feiern wir das <strong className="text-ink">10-jährige Jubiläum</strong>, mit zwei
                aussergewöhnlichen Konzertabenden voller Emotionen, Erinnerungen und grossartiger Livemusik.
              </p>
            </div>
          </div>
          <div>
            <h2 className="heading-section">Unser Konzept</h2>
            <div className="mt-6 space-y-4 text-ink-muted">
              <p>
                Tribute-Bands bringen die Musik legendärer Künstler mit derselben Energie, Leidenschaft und
                Authentizität wie die Originale zurück auf die Bühne.
              </p>
              <p>
                An zwei aufeinanderfolgenden Tagen verwandelt sich die Stadthalle Laufenburg in einen Hotspot für
                Musikliebhaber aller Generationen.
              </p>
              <p>
                Von Rock-Hymnen über Pop-Klassiker bis hin zu unvergesslichen Balladen bietet die Tribute Night ein
                vielfältiges Programm für jeden Geschmack.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="vision-titel" className="section bg-hall-surface">
        <div className="container-content">
          <h2 id="vision-titel" className="heading-section">Unsere Vision</h2>
          <p className="mt-5 max-w-3xl text-lg text-ink-muted">
            Wir möchten Laufenburg als Musikstadt etablieren und Menschen aller Generationen zusammenbringen. Die
            Tribute Night soll ein Ort sein, wo Musikliebhaber gemeinsam die grössten Hits der Musikgeschichte feiern.
          </p>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-hall-line pt-8">
            {FACTS.map(({ value, label }) => (
              <div key={label} className="flex flex-col-reverse">
                <dt className="mt-2 text-ink-muted">{label}</dt>
                <dd className="font-display text-[clamp(3rem,9vw,5.5rem)] font-extrabold leading-none text-accent tabular-nums">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
};

export default UeberUns;
