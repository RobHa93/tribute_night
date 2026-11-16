import { Link } from 'react-router-dom';
import { NIGHTS, artistsOfNight } from '../../data/event';
import TicketLink from '../TicketLink';
import { ChevronRightIcon } from '../icons';

const NightPanel = ({ night }) => (
  <article aria-labelledby={`abend-${night.id}`} className="flex flex-col rounded-xl bg-hall-surface p-6 md:p-8">
    <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-hall-line pb-5">
      <h3 id={`abend-${night.id}`} className="font-display text-3xl font-extrabold uppercase md:text-4xl">
        {night.day} <span className="font-light text-accent tabular-nums">{night.date}</span>
      </h3>
      <p className="meta">Apéro ab {night.apero}, Türöffnung {night.doors}, Start {night.start}</p>
    </header>

    <ul className="flex-1 divide-y divide-hall-line">
      {artistsOfNight(night).map((artist) => (
        <li key={artist.slug}>
          <Link to={`/kuenstler#${artist.slug}`} className="group flex items-center gap-5 py-5">
            <img
              src={artist.image}
              alt=""
              loading="lazy"
              className="h-20 w-20 shrink-0 rounded-lg object-cover grayscale-[40%] transition-[filter] duration-300 group-hover:grayscale-0 md:h-24 md:w-24"
              style={{ objectPosition: artist.imagePosition }}
            />
            <span className="min-w-0 flex-1">
              <span className="block font-display text-[clamp(2rem,6vw,3rem)] font-extrabold uppercase leading-[0.9] transition-colors group-hover:text-accent">
                {artist.tributeTo}
              </span>
              <span className="mt-1.5 block text-ink-muted">Tribute-Band: {artist.name}</span>
            </span>
            <ChevronRightIcon className="h-5 w-5 shrink-0 text-ink-subtle transition-[color,transform] duration-300 group-hover:translate-x-1 group-hover:text-accent" />
          </Link>
        </li>
      ))}
    </ul>

    <TicketLink label={`Tickets für ${night.day}`} className="mt-6 self-start" />
  </article>
);

const Programm = () => (
  <section id="programm" aria-labelledby="programm-titel" className="section">
    <div className="container-content">
      <div className="max-w-2xl">
        <h2 id="programm-titel" className="heading-section">Programm</h2>
        <p className="mt-4 text-lg text-ink-muted">
          Zum Jubiläum: zwei Abende, vier Tribute-Bands und eine Halle voller Livemusik, von Rock-Hymnen bis zu
          Pop-Klassikern. Damit mehr Zeit für Musik bleibt, starten die Shows dieses Jahr etwas früher.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {NIGHTS.map((night) => (
          <NightPanel key={night.id} night={night} />
        ))}
      </div>
    </div>
  </section>
);

export default Programm;
