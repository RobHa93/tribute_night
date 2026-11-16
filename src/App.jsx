import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import SiteLayout from './layouts/SiteLayout';
import Home from './pages/Home';
import UeberUns from './pages/UeberUns';
import Anreise from './pages/Anreise';
import Kontakt from './pages/Kontakt';
import Sponsoren from './pages/Sponsoren';
import Kuenstler from './pages/Kuenstler';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/kuenstler" element={<Kuenstler />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/anreise" element={<Anreise />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/sponsoren" element={<Sponsoren />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
