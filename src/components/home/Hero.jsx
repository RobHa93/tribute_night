import hallImage from '../../assets/img/web/halle-buehne-orange.webp';
import { ARTISTS, EVENT } from '../../data/event';
import TicketLink from '../TicketLink';
import { ChevronDownIcon } from '../icons';

const tributeNames = ARTISTS.map((artist) => artist.tributeTo);
const tributeList = `${tributeNames.slice(0, -1).join(', ')} und ${tributeNames.at(-1)}`;

const Hero = () => (
  <header className="relative isolate flex min-h-svh items-end overflow-hidden">
    <img
      src={hallImage}
      alt="Publikum als Silhouetten vor der orange beleuchteten Bühne in der Stadthalle Laufenburg"
      className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
    />
    {/* Dunkel nur unten (Übergang zur Seite) und links hinter dem Text; die Bühne bleibt hell und kontrastreich.
        Auf dem Handy läuft der Text über die ganze Breite, darum dort zusätzlich leicht abdunkeln. */}
    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-hall via-hall/40 via-30% to-hall/10" />
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-hall/85 via-hall/45 to-transparent md:from-hall/75 md:via-hall/20" />
    <div className="absolute inset-0 -z-10 bg-hall/30 md:hidden" />

    <div className="container-page pb-20 pt-32 md:pb-24">
      {/* "Night" auf einem schrägen Gaffa-Tape-Streifen */}
      <h1 className="animate-rise-in text-[clamp(4.5rem,16vw,10rem)] uppercase leading-[0.82]">
        <span className="block font-display font-black">Tribute</span>
        <span className="mt-[0.08em] inline-block -rotate-2 bg-accent px-[0.12em] pb-[0.02em] pt-[0.08em] font-display font-extrabold text-accent-ink">
          Night
        </span>
        <span className="sr-only"> Laufenburg 2027</span>
      </h1>

      <p className="mt-6 max-w-xl animate-rise-in text-lg text-ink-muted [animation-delay:120ms] md:text-xl">
        Wir feiern 10 Jahre Tribute Night: <strong className="font-semibold text-ink">{EVENT.dateLabel}</strong> in
        der {EVENT.venue}. Zwei Abende mit Tributes an {tributeList}.
      </p>

      <div className="mt-8 flex animate-rise-in flex-wrap gap-3 [animation-delay:240ms]">
        <TicketLink />
      </div>
    </div>

    {/* Zeigt, dass unter dem Hero noch Inhalt kommt; führt zum Programm */}
    <a
      href="#programm"
      aria-label="Weiter zum Programm"
      className="absolute inset-x-0 bottom-4 mx-auto flex h-11 w-11 animate-nudge items-center justify-center text-ink-muted transition-colors hover:text-accent md:bottom-6"
    >
      <ChevronDownIcon className="h-7 w-7" strokeWidth={2} />
    </a>
  </header>
);

export default Hero;
