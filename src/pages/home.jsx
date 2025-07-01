import Navbar from '../components/navbar.jsx'
import Header from '../components/header.jsx'
import EventBoxes from '../components/eventboxes.jsx'
import MainContent from '../components/mainContent.jsx'

  
  const Home = () => {
    return (
      <div>
        <Header />
        <Navbar />
        <EventBoxes />
        <MainContent />
      </div>
    )
  };

export default Home