import bandImage from '../assets/img/Band2.PNG'
import logoImage from '../assets/img/text-1755775180564.png'

const Header = () => {
    return (
      <header className="bg-stone-300 relative h-[100vh] bg-gray-200">
        <img
          src={bandImage}
          alt="Beispielbild"
          className="w-full h-full object-fill"
        />
        
        {/* Logo über dem Header Bild */}
        <img
          src={logoImage}
          alt="Tribute Night Logo"
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 max-w-xl w-auto h-auto"
        />
        
      </header>
    );
  };
  
  export default Header;
