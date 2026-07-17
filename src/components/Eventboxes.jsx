import { Link } from 'react-router-dom'
import recklessRoses from '../assets/img/recless.jpg'
import liveWire from '../assets/img/livewire.jpg'
import abbornImg from '../assets/img/abborn.jpg'
import centurysCrimeImg from '../assets/img/centuryscrime_logo.jpg'

const Eventboxes = () => {
  const events = [
    {
      day: 'FR',
      date: '03. Sep',
      acts: [
        { tributeTo: 'Guns N Roses', name: 'Reckless Roses', genre: 'Rock', slug: 'reckless-roses', isBlues: false, image: recklessRoses },
        { tributeTo: 'AC/DC', name: 'live/wire', genre: 'Rock', slug: 'live-wire', isBlues: false, image: liveWire, fitMobile: true },
      ],
      time: 'Türöffnung 19:30 · Start 20:00',
    },
    {
      day: 'SA',
      date: '04. Sep',
      acts: [
        { tributeTo: 'ABBA', name: 'Abborn', genre: 'Pop', slug: 'abborn', isBlues: true, image: abbornImg },
        { tributeTo: 'Supertramp', name: "Century's Crime", genre: 'Rock', slug: 'centurys-crime', isBlues: false, image: centurysCrimeImg, fitMobile: true },
      ],
      time: 'Türöffnung 19:00 · Start 19:30',
    },
  ];

  return (
    <section id="programm" className="relative z-10 pb-0 mt-48 scroll-mt-40">
      <div className="px-4 mx-auto max-w-5xl sm:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-10">
          {events.map((event, index) => (
            <div
              key={index}
              className="group relative overflow-hidden transition-all duration-400 border rounded-xl bg-night-800 border-night-600 hover:border-zinc-400 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/10"
            >
              {/* Image strip */}
              <div className="relative overflow-hidden h-64">
                <div className="absolute inset-0 grid grid-cols-2">
                  <img
                    src={event.acts[0].image}
                    alt={event.acts[0].name}
                    className={`w-full h-full bg-night-800 ${event.acts[0].fitMobile ? 'object-contain sm:object-cover' : 'object-cover'}`}
                  />
                  <img
                    src={event.acts[1].image}
                    alt={event.acts[1].name}
                    className={`w-full h-full bg-night-800 ${event.acts[1].fitMobile ? 'object-contain sm:object-cover' : 'object-cover'}`}
                  />
                </div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-night-800 via-transparent to-transparent" />

                {/* Date badge top-left */}
                <div className="absolute top-4 left-4 flex items-baseline gap-1.5 bg-white text-black rounded-md px-3 py-1.5">
                  <span className="text-sm font-bold tracking-widest uppercase font-display">{event.day}</span>
                  <span className="text-sm font-semibold font-display">{event.date}</span>
                </div>
              </div>

              {/* Card body */}
              <div className="px-7 pt-6 pb-8">
                <div className="mb-1 space-y-5">
                  {event.acts.map((act, i) => (
                    <div key={i}>
                      <Link
                        to={`/kuenstler#${act.slug}`}
                        className="text-2xl font-semibold leading-tight text-white hover:text-blues font-display transition-colors duration-300"
                      >
                        {act.tributeTo} Tribute: {act.name} 
                      </Link>
                      <p className={`font-display font-bold text-sm tracking-[0.2em] uppercase mt-1.5 ${
                        act.isBlues ? 'text-blues' : 'text-rock'
                      }`}>
                        {act.genre}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm tracking-wide font-body text-zinc-500">
                  {event.time}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-blues to-rock" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Eventboxes;

