import { Link } from 'react-router-dom';
import { TicketIcon } from './icons';

// Mit href: direkter Eventfrog-Link eines Abends. Ohne href: zur Ticket-Seite mit allen Optionen.
const TicketLink = ({ href, label = 'Tickets kaufen', className = '' }) =>
  href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`btn-primary ${className}`}>
      <TicketIcon />
      {label}
      <span className="sr-only"> (Eventfrog, neues Fenster)</span>
    </a>
  ) : (
    <Link to="/tickets" className={`btn-primary ${className}`}>
      <TicketIcon />
      {label}
    </Link>
  );

export default TicketLink;
