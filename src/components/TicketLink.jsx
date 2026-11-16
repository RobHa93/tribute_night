import { EVENT } from '../data/event';
import { TicketIcon } from './icons';

const TicketLink = ({ label = 'Tickets kaufen', className = '' }) => (
  <a href={EVENT.ticketUrl} target="_blank" rel="noopener noreferrer" className={`btn-primary ${className}`}>
    <TicketIcon />
    {label}
    <span className="sr-only"> (Eventfrog, neues Fenster)</span>
  </a>
);

export default TicketLink;
