import { useEffect, useState } from 'react';
import { ChevronUpIcon } from './icons';

const SHOW_AFTER_PX = 600;

// Schwebender Button unten rechts, auf allen Seiten; erscheint erst nach etwa einer Bildschirmhöhe
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > SHOW_AFTER_PX);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Nach oben scrollen"
      // invisible nimmt den versteckten Button auch aus der Tab-Reihenfolge
      className={`fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 flex h-12 w-12 items-center justify-center rounded border border-hall-line bg-hall-raised/90 text-ink shadow-lg backdrop-blur transition-[opacity,transform,visibility,color,border-color] duration-300 hover:border-accent hover:text-accent md:right-6 ${
        isVisible ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-3 opacity-0'
      }`}
    >
      <ChevronUpIcon className="h-5 w-5" />
    </button>
  );
};

export default BackToTop;
