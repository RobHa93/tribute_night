import Navbar from '../components/Navbar.jsx'
import Header from '../components/Header.jsx'
import EventBoxes from '../components/Eventboxes.jsx'
import MainContent from '../components/MainContent.jsx'
import Footer from '../components/Footer.jsx'

  
  const Home = () => {
    return (
      <div>
        <Navbar />
        <Header />
        <EventBoxes />
        <MainContent />
        <Footer />
      </div>
    )
  };

export default Home