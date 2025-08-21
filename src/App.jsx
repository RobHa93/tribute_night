import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Anreise from './pages/Anreise';
import UeberUns from './pages/UeberUns';
import Kontakt from './pages/Kontakt';
import Sponsoren from './pages/Sponsoren';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anreise" element={<Anreise />} />
        <Route path="/ueber-uns" element={<UeberUns />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/sponsoren" element={<Sponsoren />} />
      </Routes>
    </Router>
  );
};

export default App;
