import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState, useEffect, useRef } from 'react'
import djImage from '../assets/img/DJ1.PNG'

const CounterAnimation = ({ target, label, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 Sekunden
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={countRef}>
      <div className="font-display font-bold text-4xl text-blues">{count}{suffix}</div>
      <div className="font-body text-sm text-zinc-500 mt-1">{label}</div>
    </div>
  );
};

const UeberUns = () => {
  return (
    <div className="bg-night-900 min-h-screen">
      <Navbar />

      {/* Page Hero */}
      <div className="relative h-[60vh] flex items-end pb-16 justify-center overflow-hidden">
        <img src={djImage} alt="Tribute Night Team" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-night-900 via-black/50 to-black/30" />
        <div className="relative z-10 text-center px-4">
          <p className="font-display text-blues tracking-[0.3em] text-xs uppercase mb-2">Wer wir sind</p>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-white tracking-wide">Über uns</h1>
        </div>
      </div>

      {/* Einführung */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6 tracking-wide">
            Die Tribute Night Laufenburg
          </h2>
          <p className="font-body text-zinc-400 text-lg leading-relaxed">
            Seit 2022 bringen wir mit der Tribute Night Laufenburg ein einzigartiges Musik-Erlebnis
            in die historische Stadt an der Aare. Was als kleine Idee begann, ist heute zu einem
            der beliebtesten Musikevents der Region geworden.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-night-600 to-transparent" />
      </div>

      {/* Geschichte & Konzept */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-night-800 border border-night-600 border-t-2 border-t-white/40 rounded-xl p-8">
              <h3 className="font-display font-bold text-2xl text-white mb-6 tracking-wide">Unsere Geschichte</h3>
              <div className="space-y-4 font-body text-zinc-400 text-sm leading-relaxed">
                <p>Die Tribute Night entstand aus der Leidenschaft für großartige Musik und dem Wunsch, die größten Hits der Musikgeschichte live und authentisch zu erleben.</p>
                <p>Was 2022 mit der ersten Ausgabe begann, hat sich schnell zu einem festen Termin im Veranstaltungskalender entwickelt. Jedes Jahr wächst die Veranstaltung und zieht Musikfans aus der ganzen Region an.</p>
                <p>2027 feiern wir bereits die <strong className="text-white">vierte Ausgabe</strong>, ein Beweis für den Erfolg und die Beliebtheit unseres Konzepts.</p>
              </div>
            </div>
            <div className="bg-night-800 border border-night-600 border-t-2 border-t-white/40 rounded-xl p-8">
              <h3 className="font-display font-bold text-2xl text-white mb-6 tracking-wide">Unser Konzept</h3>
              <div className="space-y-4 font-body text-zinc-400 text-sm leading-relaxed">
                <p>Tribute Bands bringen die Musik legendärer Künstler mit derselben Energie, Leidenschaft und Authentizität wie die Originale zurück auf die Bühne.</p>
                <p>An zwei aufeinanderfolgenden Tagen verwandelt sich die Mehrzweckhalle Laufenburg in einen Hotspot für Musikliebhaber aller Generationen.</p>
                <p>Von Rock-Hymnen über Pop-Klassiker bis hin zu unvergesslichen Balladen bietet die Tribute Night ein vielfältiges Programm für jeden Geschmack.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-night-600 to-transparent" />
      </div>


      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-night-600 to-transparent" />
      </div>

      {/* Vision + Counters */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-night-800 border border-night-600 rounded-2xl p-10 md:p-14 text-center">
            <p className="font-display text-zinc-500 tracking-[0.3em] text-xs uppercase mb-3">Zahlen & Fakten</p>
            <h2 className="font-display font-bold text-3xl text-white mb-6 tracking-wide">Unsere Vision</h2>
            <p className="font-body text-zinc-400 text-base leading-relaxed max-w-3xl mx-auto mb-12">
              Wir möchten Laufenburg als Musikstadt etablieren und Menschen aller Generationen zusammenbringen.
              Die Tribute Night soll ein Ort sein, wo Musikliebhaber gemeinsam die größten Hits der Musikgeschichte feiern können.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <CounterAnimation target={4} label="Ausgaben" />
              <CounterAnimation target={2} label="Abende" />
              <CounterAnimation target={1000} label="Besucher" suffix="+" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default UeberUns