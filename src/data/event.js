// Einzige Quelle für Eventdaten: Startseite, Line-up, Kontakt und Footer lesen von hier.
import recklessRosesImg from '../assets/img/web/band-reckless-roses.webp';
import liveWireImg from '../assets/img/web/band-live-wire.webp';
import abbornImg from '../assets/img/web/band-abborn.webp';
import centurysCrimeImg from '../assets/img/web/band-centurys-crime.webp';

import buehnePink from '../assets/img/web/buehne-pink.webp';
import buehneSw from '../assets/img/web/buehne-sw.webp';
import barZapfhahn from '../assets/img/web/bar-zapfhahn.webp';
import lichterRot from '../assets/img/web/lichter-rot.webp';
import gitarreSw from '../assets/img/web/gitarre-sw.webp';
import hallePublikum from '../assets/img/web/halle-publikum.webp';
import buehneRot from '../assets/img/web/buehne-rot.webp';
import saengerSw from '../assets/img/web/saenger-sw.webp';
import lichtpult from '../assets/img/web/lichtpult.webp';

export const EVENT = {
  name: 'Tribute Night Laufenburg',
  dateLabel: '03.–04. September 2027',
  venue: 'Stadthalle Laufenburg',
  postalTown: '5080 Laufenburg',
  organizer: 'Keropower',
  // Postadresse fürs Impressum, erscheint dort, sobald eingetragen
  address: '',
  email: 'keropower@bluewin.ch',
  phone: { label: '+41 76 372 44 77', href: 'tel:+41763724477' },
  // Gleicher Standort wie die eingebettete Karte auf der Anreise-Seite
  routeUrl: 'https://www.google.com/maps/dir/?api=1&destination=47.56259,8.06437',
};

export const NIGHTS = [
  {
    id: 'freitag',
    day: 'Freitag',
    date: '03.09.',
    apero: '17:00',
    doors: '19:30',
    start: '20:00',
    end: '02:00',
    acts: ['reckless-roses', 'live-wire'],
    ticketUrl: 'https://eventfrog.ch/de/p/konzerte/pop-rock/tribute-night-laufenburg-10-jahre-jubilaeum-laufenburg-7504640735544664563.html',
  },
  {
    id: 'samstag',
    day: 'Samstag',
    date: '04.09.',
    apero: '17:00',
    doors: '19:00',
    start: '19:30',
    end: '02:00',
    acts: ['abborn', 'centurys-crime'],
    ticketUrl: 'https://eventfrog.ch/de/p/konzerte/pop-rock/tribute-night-laufenburg-10-jahre-jubilaeum-laufenburg-7504642929597614667.html',
  },
];

// Preise in CHF; Early Bird gilt bis earlyBirdUntil, danach der Normalpreis
export const TICKETS = {
  earlyBirdUntil: '31.07.2027',
  normalFrom: '01.08.2027',
  options: [
    { id: 'freitag', title: 'Freitag', date: '03.09.2027', acts: 'Guns N’ Roses & AC/DC', earlyBird: 38, normal: 42, url: NIGHTS[0].ticketUrl },
    { id: 'samstag', title: 'Samstag', date: '04.09.2027', acts: 'ABBA & Supertramp', earlyBird: 38, normal: 42, url: NIGHTS[1].ticketUrl },
    // Kein eigener Link: auf Eventfrog bei Freitag oder Samstag als Option «beide Abende» wählbar
    { id: 'kombi', title: 'Kombiticket', date: 'Freitag und Samstag', acts: 'Alle vier Tribute-Bands', earlyBird: 70, normal: 80 },
  ],
};

// youtubeId: Live-Video der Band, übernommen von der bisherigen Website
export const ARTISTS = [
  {
    slug: 'reckless-roses',
    youtubeId: 'QiO3pY12iO4',
    name: 'Reckless Roses',
    tributeTo: 'Guns N’ Roses',
    genre: 'Rock',
    image: recklessRosesImg,
    imagePosition: 'center 30%',
    bio: 'Reckless Roses gelten als eine der authentischsten Guns N’ Roses Tribute-Bands Europas. Seit der Gründung 2012 in Budapest hat die Band über 400 Shows in mehr als 20 Ländern gespielt und bringt den Sound sowie die Energie der 80er- und 90er-Jahre GNR-Ära authentisch auf die Bühne.',
    highlights: ['Sweet Child o’ Mine', 'Knockin’ on Heaven’s Door', 'Paradise City', 'November Rain'],
    link: 'https://www.tributebands.ch/recklessroses',
  },
  {
    slug: 'live-wire',
    youtubeId: 'wiT1TBEnRfI',
    name: 'live/wire',
    tributeTo: 'AC/DC',
    genre: 'Rock',
    image: liveWireImg,
    imagePosition: 'center top',
    bio: 'live/wire gilt als eine der stärksten AC/DC Tribute-Shows Europas. Seit der Gründung 2002 aus den beiden Basler Bands Riff Raff und Jailbreak bringt die fünfköpfige Band über 50 AC/DC-Songs aus vier Jahrzehnten auf die Bühne, mit Angus Youngs Schuluniform, Brian Johnsons markanter Stimme und geballter Live-Energie.',
    highlights: ['Highway to Hell', 'Back in Black', 'Thunderstruck', 'You Shook Me All Night Long'],
    link: 'https://www.live-wire.ch/',
  },
  {
    slug: 'abborn',
    youtubeId: 'Cs0mY0LNb0Y',
    name: 'Abborn',
    tributeTo: 'ABBA',
    genre: 'Pop',
    image: abbornImg,
    imagePosition: 'center 85%',
    bio: 'Abborn zählt seit der Gründung 1999 zu den erfolgreichsten ABBA Tribute-Shows Europas mit über 5000 Konzerten. Sechs Performer sorgen komplett live, ohne Playback, für perfekte Vocals, Choreografie und authentische Kostüme – 2009 gekürt zur besten ABBA-Tribute-Show im französischen Fernsehen.',
    highlights: ['Dancing Queen', 'Mamma Mia', 'Waterloo', 'Money, Money, Money'],
    link: 'https://www.tributebands.ch/abborn',
  },
  {
    slug: 'centurys-crime',
    youtubeId: 'Nq0x-3DcRiY',
    name: 'Century’s Crime',
    tributeTo: 'Supertramp',
    genre: 'Rock',
    image: centurysCrimeImg,
    imagePosition: '45% center',
    bio: 'Century’s Crime widmet sich den goldenen Jahren von Supertramp zwischen 1974 und 1983. Durch intensives Studium der Originalaufnahmen und Live-Videos rekonstruiert die Band den charakteristischen Sound bis ins Detail – für alle, die die grossen Klassiker noch einmal live erleben wollen.',
    highlights: ['Dreamer', 'Breakfast in America', 'The Logical Song', 'Take the Long Way Home'],
    link: 'https://www.centuryscrime.band/',
  },
];

export const artistsOfNight = (night) =>
  night.acts.map((slug) => ARTISTS.find((artist) => artist.slug === slug));

export const NAV_LINKS = [
  { to: '/kuenstler', label: 'Line-up' },
  { to: '/anreise', label: 'Anreise' },
  { to: '/sponsoren', label: 'Gönner & Sponsoren' },
  { to: '/kontakt', label: 'Kontakt' },
];

// Werden erst angezeigt, sobald eine URL eingetragen ist
export const SOCIAL_LINKS = [
  { label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100011500600450' },
  { label: 'Instagram', url: 'https://www.instagram.com/tributenightamrhy/' },
];

// Einträge: { name, logo, url } – solange leer, zeigt die Seite Gönner & Sponsoren einen Hinweis
export const SPONSORS = [];

// width/height verhindern Layout-Sprünge, solange die Bilder lazy nachladen
export const IMPRESSIONS = [
  { src: buehnePink, alt: 'Band auf der Bühne in pinkem Licht vor vollem Saal', width: 1500, height: 1001 },
  { src: buehneSw, alt: 'Schwarzweiss-Aufnahme der Bühne mit Lichtkegeln', width: 1250, height: 845 },
  { src: lichterRot, alt: 'Rote Scheinwerfer über dem Publikum', width: 1225, height: 792 },
  { src: gitarreSw, alt: 'Nahaufnahme einer karierten E-Gitarre', width: 1240, height: 821 },
  { src: hallePublikum, alt: 'Publikum in der Stadthalle vor Konzertbeginn', width: 1500, height: 1037 },
  { src: buehneRot, alt: 'Band spielt unter roten und weissen Lichtstrahlen', width: 1500, height: 998 },
  { src: saengerSw, alt: 'Sänger und Gitarrist im Gegenlicht vor dem Publikum', width: 1600, height: 1067 },
  { src: barZapfhahn, alt: 'Helfer zapfen Bier an der Bar', width: 800, height: 534 },
  { src: lichtpult, alt: 'Lichttechniker am Mischpult in blauem Licht', width: 1232, height: 825 },
];
