import Band1 from '../assets/img/Band1.PNG'
import Band2 from '../assets/img/Band2.PNG'

const Eventboxes = () => {
  const events = [
    {
      day: 'DO',
      date: '22. Jan',
      night: 'Blues Night',
      theme: 'blues',
      acts: ['Andy Egert', 'Lucky Wüthrich'],
      time: 'Türöffnung 18:30 · Start 19:30',
      images: [Band2, Band1],
    },
    {
      day: 'FR',
      date: '23. Jan',
      night: 'Rock Night',
      theme: 'rock',
      acts: ['live/wire', 'Shades of Purple'],
      time: 'Türöffnung 19:30 · Start 20:00',
      images: [Band1, Band2],
    },
    {
      day: 'SA',
      date: '24. Jan',
      night: 'Rock Night',
      theme: 'rock',
      acts: ['CRAZY DIAMOND', 'WE2 – THE U2 TRIBUTE'],
      time: 'Türöffnung 19:00 · Start 19:30',
      images: [Band2, Band1],
    },
  ];

  return (
    <section id="programm" className="relative z-10 pb-0 mt-48 scroll-mt-40">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
          {events.map((event, index) => {
            const isBlues = event.theme === 'blues';
            const borderClass = isBlues
              ? 'border-blues/40 hover:border-blues'
              : 'border-rock/40 hover:border-rock';
            const badgeBg = isBlues
              ? 'bg-blues text-black'
              : 'bg-rock text-white';
            const titleColor = isBlues ? 'text-blues' : 'text-rock';

            return (
              <div
                key={index}
                className={`group relative bg-night-800 border ${borderClass} rounded-xl overflow-hidden transition-all duration-400 hover:-translate-y-1 hover:shadow-2xl ${
                  isBlues ? 'hover:shadow-blues/20' : 'hover:shadow-rock/20'
                }`}
              >
                {/* Image strip */}
                <div className="relative overflow-hidden h-44">
                  <div className="absolute inset-0 grid grid-cols-2">
                    <img src={event.images[0]} alt={event.acts[0]} className="object-cover w-full h-full" />
                    <img src={event.images[1]} alt={event.acts[1]} className="object-cover w-full h-full" />
                  </div>
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-night-800 via-transparent to-transparent" />

                  {/* Date badge top-left */}
                  <div className={`absolute top-3 left-3 flex items-baseline gap-1 ${badgeBg} rounded-md px-2.5 py-1`}>
                    <span className="text-xs font-bold tracking-widest uppercase font-display">{event.day}</span>
                    <span className="text-xs font-semibold font-display">{event.date}</span>
                  </div>
                </div>

                {/* Card body */}
                <div className="px-5 pt-4 pb-6">
                  <p className={`font-display font-bold text-xs tracking-[0.2em] uppercase mb-1 ${titleColor}`}>
                    {event.night}
                  </p>
                  <div className="mb-4 space-y-1">
                    {event.acts.map((act, i) => (
                      <p key={i} className="text-lg font-semibold leading-tight text-white font-display">
                        {act}
                      </p>
                    ))}
                  </div>
                  <p className="text-xs tracking-wide font-body text-zinc-500">
                    {event.time}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ${
                    isBlues ? 'bg-blues' : 'bg-rock'
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Eventboxes;

