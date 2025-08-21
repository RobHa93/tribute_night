import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import UeberUns from './pages/UeberUns';
import Anreise from './pages/Anreise';
import Kontakt from './pages/Kontakt';
import Sponsoren from './pages/Sponsoren';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ueber-uns" element={<UeberUns />} />
        <Route path="/anreise" element={<Anreise />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/sponsoren" element={<Sponsoren />} />
      </Routes>
    </Router>
  );
}

export default App;
