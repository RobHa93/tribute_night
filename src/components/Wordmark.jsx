// Schriftzug als Logo; Bebas Neue gibt es nur in 400, eine künstliche Fettung würde unsauber aussehen
const Wordmark = ({ className = '' }) => (
  <span className={`font-brand uppercase leading-none tracking-normal ${className}`}>
    Tribute <span className="text-accent">Night</span>
  </span>
);

export default Wordmark;
