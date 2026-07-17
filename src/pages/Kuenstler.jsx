import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import recklessRoses from '../assets/img/recless.jpg'
import liveWire from '../assets/img/livewire.jpg'
import abbornImg from '../assets/img/abborn.jpg'
import centurysCrimeImg from '../assets/img/centuryscrime.jpg'
import bandHero from '../assets/img/Band1.PNG'

const artists = [
  {
    slug: 'reckless-roses',
    name: 'Reckless Roses',
    tributeTo: 'Guns N’ Roses',
    day: 'Freitag · 03. September',
    genre: 'Rock',
    isBlues: false,
    image: recklessRoses,
    bio: 'Reckless Roses gelten als eine der authentischsten Guns N’ Roses Tribute-Bands Europas. Seit der Gründung 2012 in Budapest hat die Band über 400 Shows in mehr als 20 Ländern gespielt und bringt den Sound sowie die Energie der 80er- und 90er-Jahre GNR-Ära authentisch auf die Bühne.',
    highlights: ['Sweet Child o’ Mine', 'Knockin’ on Heaven’s Door', 'Paradise City', 'November Rain'],
    link: 'https://www.tributebands.ch/recklessroses',
  },
  {
    slug: 'live-wire',
    name: 'live/wire',
    tributeTo: 'AC/DC',
    day: 'Freitag · 03. September',
    genre: 'Rock',
    isBlues: false,
    image: liveWire,
    bio: 'live/wire gilt als eine der stärksten AC/DC Tribute-Shows Europas. Seit der Gründung 2002 aus den beiden Basler Bands Riff Raff und Jailbreak bringt die fünfköpfige Band über 50 AC/DC-Songs aus vier Jahrzehnten auf die Bühne, mit Angus Youngs Schuluniform, Brian Johnsons markanter Stimme und geballter Live-Energie.',
    highlights: ['Highway to Hell', 'Back in Black', 'Thunderstruck', 'You Shook Me All Night Long'],
    link: 'https://www.live-wire.ch/',
  },
  {
    slug: 'abborn',
    name: 'Abborn',
    tributeTo: 'ABBA',
    day: 'Samstag · 04. September',
    genre: 'Pop',
    isBlues: true,
    image: abbornImg,
    bio: 'Abborn zählt seit der Gründung 1999 zu den erfolgreichsten ABBA Tribute-Shows Europas mit über 5000 Konzerten. Sechs Performer sorgen komplett live, ohne Playback, für perfekte Vocals, Choreografie und authentische Kostüme – 2009 gekürt zur besten ABBA-Tribute-Show im französischen Fernsehen.',
    highlights: ['Dancing Queen', 'Mamma Mia', 'Waterloo', 'Money, Money, Money'],
    link: 'https://www.tributebands.ch/abborn',
  },
  {
    slug: 'centurys-crime',
    name: 'Century’s Crime',
    tributeTo: 'Supertramp',
    day: 'Samstag · 04. September',
    genre: 'Rock',
    isBlues: false,
    image: centurysCrimeImg,
    bio: 'Century’s Crime widmet sich den goldenen Jahren von Supertramp zwischen 1974 und 1983. Durch intensives Studium der Originalaufnahmen und Live-Videos rekonstruiert die Band den charakteristischen Sound bis ins Detail – für alle, die die grossen Klassiker noch einmal live erleben wollen.',
    highlights: ['Dreamer', 'Breakfast in America', 'The Logical Song', 'Take the Long Way Home'],
    link: 'https://www.centuryscrime.band/',
  },
]

const Kuenstler = () => {
  return (
    <div className="min-h-screen bg-night-900">
      <Navbar />

      {/* Hero */}
      <div className="relative h-[50vh] flex items-end pb-16 justify-center overflow-hidden">
        <img src={bandHero} alt="Tribute Night Künstler" className="absolute inset-0 object-cover w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-night-900 via-black/50 to-black/30" />
        <div className="relative z-10 px-4 text-center">
          <p className="font-display text-blues tracking-[0.3em] text-xs uppercase mb-2">Line Up 2027</p>
          <h1 className="text-5xl font-bold tracking-wide text-white font-display md:text-6xl">Acts</h1>
        </div>
      </div>

      {/* Intro */}
      <section className="px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base leading-relaxed font-body text-zinc-400">
            Vier Tribute-Bands, zwei Abende, unvergessliche Live-Momente. Hier erfährst du mehr über die
            Bands, die am 03. &amp; 04. September 2027 in der Mehrzweckhalle Laufenburg auf der Bühne stehen.
          </p>
        </div>
      </section>

      {/* Artists */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto space-y-6">
          {artists.map((artist) => (
            <div
              key={artist.slug}
              id={artist.slug}
              className="grid grid-cols-1 lg:grid-cols-5 border border-night-600 bg-night-800 rounded-xl overflow-hidden scroll-mt-28"
            >
              <div className="relative lg:col-span-2 h-64 lg:h-auto">
                <img src={artist.image} alt={artist.name} className="absolute inset-0 object-cover w-full h-full" />
              </div>
              <div className="lg:col-span-3 p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="font-display text-zinc-500 text-xs tracking-widest uppercase">{artist.day}</span>
                  <span className={`font-display font-bold text-xs tracking-[0.2em] uppercase px-2.5 py-1 rounded ${
                    artist.isBlues ? 'bg-blues/10 text-blues' : 'bg-rock/10 text-rock'
                  }`}>
                    {artist.genre}
                  </span>
                </div>
                <h2 className="font-rock font-extrabold text-4xl md:text-5xl tracking-wide text-white mb-1">
                  {artist.name}
                </h2>
                <p className="font-body text-sm text-zinc-500 uppercase tracking-widest mb-5">
                  Tribute to {artist.tributeTo}
                </p>
                <p className="font-body text-zinc-400 text-sm leading-relaxed mb-6">
                  {artist.bio}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {artist.highlights.map((song) => (
                    <span key={song} className="font-body text-xs text-zinc-300 bg-night-700 border border-night-600 rounded-full px-3 py-1">
                      {song}
                    </span>
                  ))}
                </div>
                <a
                  href={artist.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blues hover:text-blues-light font-body text-sm font-semibold transition-colors duration-300"
                >
                  Mehr über {artist.name}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Kuenstler
