import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState, useEffect, useRef } from 'react'

const CounterAnimation = ({ target, label, suffix = "" }) => {
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
      <div className="text-3xl font-bold text-violet-600">
        {count}{suffix}
      </div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
};

const UeberUns = () => {
  return (
    <div>
      <Navbar />
      
      {/* Header mit Bild */}
      <div className="bg-stone-200 relative h-[70vh] flex items-center justify-center">
        <h1 className='text-white text-4xl text-center absolute z-10 font-bold'>Über Uns</h1>
        <img
          src="src/assets/img/DJ1.PNG"
          alt="Tribute Night Team"
          className="w-full h-full object-cover"
        />
        {/* Overlay für bessere Lesbarkeit */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="bg-stone-200 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <br />
          {/* Einführung */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Die Tribute Night Laufenburg</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Seit 2022 bringen wir mit der Tribute Night Laufenburg ein einzigartiges Musik-Erlebnis 
              in die historische Stadt an der Aare. Was als kleine Idee begann, ist heute zu einem 
              der beliebtesten Musikevents der Region geworden.
            </p>
          </div>

          {/* Geschichte */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Unsere Geschichte</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Die Tribute Night entstand aus der Leidenschaft für großartige Musik und dem Wunsch, 
                  die größten Hits der Musikgeschichte live und authentisch zu erleben.
                </p>
                <p>
                  Was 2022 mit der ersten Ausgabe begann, hat sich schnell zu einem festen Termin 
                  im Veranstaltungskalender entwickelt. Jedes Jahr wächst die Veranstaltung und 
                  zieht Musikfans aus der ganzen Region an.
                </p>
                <p>
                  2025 feiern wir bereits die <strong>vierte Ausgabe</strong> - ein Beweis für 
                  den Erfolg und die Beliebtheit unseres Konzepts.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Unser Konzept</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Tribute Bands bringen die Musik legendärer Künstler zurück auf die Bühne - 
                  mit derselben Energie, Leidenschaft und Authentizität wie die Originale.
                </p>
                <p>
                  An drei aufeinanderfolgenden Tagen verwandelt sich die Turnhalle Laufenburg 
                  in einen Hotspot für Musikliebhaber aller Generationen.
                </p>
                <p>
                  Von Rock-Klassikern über Pop-Hits bis hin zu unvergesslichen Balladen - 
                  die Tribute Night bietet ein vielfältiges Programm für jeden Geschmack.
                </p>
              </div>
            </div>
          </div>

          {/* Team */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-12">Das Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-24 h-24 bg-violet-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Organisation</h3>
                <p className="text-gray-600">
                  Unser Organisationsteam sorgt dafür, dass jede Tribute Night reibungslos abläuft 
                  und unvergesslich wird.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-24 h-24 bg-violet-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Booking</h3>
                <p className="text-gray-600">
                  Wir suchen und buchen die besten Tribute Bands, um euch ein authentisches 
                  Musik-Erlebnis zu bieten.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-24 h-24 bg-violet-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Technik</h3>
                <p className="text-gray-600">
                  Professionelle Ton- und Lichttechnik sorgt für die perfekte Atmosphäre 
                  und optimale Klangqualität.
                </p>
              </div>
            </div>
          </div>

          {/* Vision mit animierten Countern */}
          <div className="bg-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Unsere Vision</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Wir möchten Laufenburg als Musikstadt etablieren und Menschen aller Generationen 
              zusammenbringen. Die Tribute Night soll ein Ort sein, wo Musikliebhaber gemeinsam 
              die größten Hits der Musikgeschichte feiern können.
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <CounterAnimation target={4} label="Ausgaben" />
              <CounterAnimation target={3} label="Tage" />
              <CounterAnimation target={1000} label="Besucher" suffix="+" />
            </div>
          </div>

          

        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default UeberUns