import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 600); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md shadow-md transition-colors duration-300 ${
      isScrolled ? 'bg-white/90' : 'bg-transparent'
    }`}>
      <ul className="flex justify-end space-x-8 px-10 py-6">
        <li className={`hover:text-violet-500 transition-colors duration-300 ${
          isScrolled ? 'text-gray-800' : 'text-white'
        }`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`hover:text-violet-500 transition-colors duration-300 ${
          isScrolled ? 'text-gray-800' : 'text-white'
        }`}>
          <Link to="/anreise">Anreise</Link>
        </li>
        <li className={`hover:text-violet-500 transition-colors duration-300 ${
          isScrolled ? 'text-gray-800' : 'text-white'
        }`}>
          <Link to="/ueber-uns">Über uns</Link>
        </li>
        <li className={`hover:text-violet-500 transition-colors duration-300 ${
          isScrolled ? 'text-gray-800' : 'text-white'
        }`}>
          <Link to="/sponsoren">Sponsoren</Link>
        </li>
        <li className={`hover:text-violet-500 transition-colors duration-300 ${
          isScrolled ? 'text-gray-800' : 'text-white'
        }`}>
          <Link to="/kontakt">Kontakt</Link>
        </li>
        <li className={`hover:text-violet-500 transition-colors duration-300 font-semibold ${
          isScrolled ? 'text-gray-800' : 'text-white'
        }`}>
          <a 
            href="https://www.eventfrog.ch" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Tickets
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
