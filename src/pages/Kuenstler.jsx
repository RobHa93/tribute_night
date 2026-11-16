import { useState } from 'react';
import PageHero from '../components/PageHero';
import TicketLink from '../components/TicketLink';
import { ExternalIcon, PlayIcon } from '../components/icons';
import { EVENT, NIGHTS, artistsOfNight } from '../data/event';
import { usePageTitle } from '../hooks/usePageTitle';
import heroImage from '../assets/img/web/buehne-sw.webp';

// Zwei-Klick-Lösung wie bei der Karte: YouTube lädt erst nach Klick, ohne Cookies über youtube-nocookie.com
const ArtistMedia = ({ artist }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${artist.youtubeId}?autoplay=1`}
        title={`Live-Video von ${artist.name}, Tribute to ${artist.tributeTo}`}
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        className="block aspect-video w-full rounded-xl border-0 bg-hall-raised"
      />
    );
  }

  return (
    <div className="relative overflow-hidden rounded-xl">
      <img
        src={artist.image}
        alt={`${artist.name}, Tribute to ${artist.tributeTo}`}
        loading="lazy"
        className="aspect-[4/3] w-full object-cover"
        style={{ objectPosition: artist.imagePosition }}
      />
      {artist.youtubeId && (
        <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-center gap-x-4 gap-y-2 bg-gradient-to-t from-hall/95 via-hall/70 to-transparent p-4 pt-16 md:p-5 md:pt-20">
          <button type="button" onClick={() => setIsPlaying(true)} className="btn-primary">
            <PlayIcon className="h-4 w-4" />
            Live-Video abspielen
          </button>
          <p className="text-xs text-ink-muted">Lädt YouTube, dabei werden Daten an Google übertragen.</p>
        </div>
      )}
    </div>
  );
};

const ArtistFeature = ({ artist, imageRight }) => (
  <article id={artist.slug} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
    <div className={imageRight ? 'lg:order-2' : ''}>
      <ArtistMedia artist={artist} />
    </div>

    <div>
      <h3 className="font-display text-[clamp(2.75rem,7vw,4.5rem)] font-extrabold uppercase leading-[0.88]">
        {artist.tributeTo}
      </h3>
      <p className="mt-3 text-xl font-semibold">
        {artist.name}
        <span className="ml-3 text-base font-normal text-ink-subtle">{artist.genre}</span>
      </p>
      <p className="mt-5 max-w-prose text-ink-muted">{artist.bio}</p>

      <ul aria-label={`Song-Highlights von ${artist.name}`} className="mt-6 flex flex-wrap gap-2">
        {artist.highlights.map((song) => (
          <li key={song} className="rounded-full border border-hall-line px-3 py-1 text-sm text-ink-muted">
            {song}
          </li>
        ))}
      </ul>

      <a href={artist.link} target="_blank" rel="noopener noreferrer" className="link mt-8">
        Mehr über {artist.name}
        <ExternalIcon className="h-4 w-4" />
      </a>
    </div>
  </article>
);

const Kuenstler = () => {
  usePageTitle('Line-up');

  return (
    <>
      <PageHero title="Line-up 2027" image={heroImage} imageAlt="Band auf der Bühne der Tribute Night, Schwarzweiss" imagePosition="45% 55%">
        Vier Tribute-Bands, zwei Abende: am {EVENT.dateLabel} in der {EVENT.venue}.
      </PageHero>

      <nav aria-label="Abende" className="container-content flex flex-wrap gap-x-8 gap-y-2 pt-8">
        {NIGHTS.map((night) => (
          <a key={night.id} href={`#${night.id}`} className="nav-link text-ink-muted hover:text-ink">
            {night.day} {night.date}
          </a>
        ))}
      </nav>

      {NIGHTS.map((night) => (
        <section key={night.id} id={night.id} aria-labelledby={`${night.id}-titel`} className="section">
          <div className="container-content">
            <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-hall-line pb-6">
              <h2 id={`${night.id}-titel`} className="heading-section">
                {night.day} <span className="font-light text-accent tabular-nums">{night.date}</span>
              </h2>
              <p className="meta">Apéro ab {night.apero}, Türöffnung {night.doors}, Start {night.start}</p>
            </div>

            <div className="mt-12 space-y-16 md:space-y-24">
              {artistsOfNight(night).map((artist, index) => (
                <ArtistFeature key={artist.slug} artist={artist} imageRight={index % 2 === 1} />
              ))}
            </div>

            <TicketLink label={`Tickets für ${night.day}`} className="mt-14" />
          </div>
        </section>
      ))}
    </>
  );
};

export default Kuenstler;
