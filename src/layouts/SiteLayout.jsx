import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const SiteLayout = () => (
  <>
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:font-semibold focus:text-accent-ink"
    >
      Zum Inhalt springen
    </a>
    <Navbar />
    <main id="main" tabIndex={-1} className="focus:outline-none">
      <Outlet />
    </main>
    <Footer />
    <BackToTop />
  </>
);

export default SiteLayout;
