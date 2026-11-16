import { useEffect, useRef } from 'react';
import { IMPRESSIONS } from '../../data/event';
import { ChevronLeftIcon, ChevronRightIcon } from '../icons';

// Das eingebaute smooth-Scrollen ist in Chrome sehr schnell; darum eine eigene, ruhigere Bewegung
const SCROLL_DURATION_MS = 600;
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

// Scroll-Position, an der das nächste bzw. vorherige Bild bündig links anliegt
const neighbourImageOffset = (track, direction) => {
  const trackLeft = track.getBoundingClientRect().left;
  const offsets = [...track.children].map((img) => img.getBoundingClientRect().left - trackLeft + track.scrollLeft);
  const current = track.scrollLeft;
  const maxScroll = track.scrollWidth - track.clientWidth;
  const target =
    direction > 0 ? offsets.find((x) => x > current + 1) : offsets.findLast((x) => x < current - 1);
  return Math.min(Math.max(target ?? (direction > 0 ? maxScroll : 0), 0), maxScroll);
};

const Impressionen = () => {
  const trackRef = useRef(null);
  const animationRef = useRef(0);

  useEffect(() => () => cancelAnimationFrame(animationRef.current), []);

  const scrollTrack = (direction) => {
    const track = trackRef.current;
    const start = track.scrollLeft;
    const target = neighbourImageOffset(track, direction);
    cancelAnimationFrame(animationRef.current);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      track.scrollLeft = target;
      return;
    }

    // Snap während der Bewegung aus, sonst rastet die Leiste bei jedem Zwischenschritt ein
    track.style.scrollSnapType = 'none';
    const startTime = performance.now();
    const step = (now) => {
      const progress = Math.min((now - startTime) / SCROLL_DURATION_MS, 1);
      track.scrollLeft = start + (target - start) * easeInOutCubic(progress);
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(step);
      } else {
        track.style.scrollSnapType = '';
      }
    };
    animationRef.current = requestAnimationFrame(step);
  };

  const arrowClass =
    'flex h-11 w-11 items-center justify-center rounded border border-hall-line text-ink transition-colors hover:border-accent hover:text-accent';

  return (
    <section aria-labelledby="impressionen-titel" className="section">
      <div className="container-content flex items-end justify-between gap-6">
        <div>
          <h2 id="impressionen-titel" className="heading-section">Impressionen</h2>
          <p className="mt-3 text-ink-muted">So sah die Tribute Night in den letzten Jahren aus.</p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button type="button" onClick={() => scrollTrack(-1)} className={arrowClass} aria-label="Vorheriges Bild">
            <ChevronLeftIcon />
          </button>
          <button type="button" onClick={() => scrollTrack(1)} className={arrowClass} aria-label="Nächstes Bild">
            <ChevronRightIcon />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        role="region"
        aria-label="Fotos der letzten Ausgaben, horizontal scrollbar"
        tabIndex={0}
        className="mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4"
      >
        {IMPRESSIONS.map(({ src, alt, width, height }) => (
          <img
            key={src}
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            className="h-64 w-auto shrink-0 snap-start bg-hall-raised object-cover md:h-96"
          />
        ))}
      </div>
    </section>
  );
};

export default Impressionen;
