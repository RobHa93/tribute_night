import Hero from '../components/home/Hero';
import Programm from '../components/home/Programm';
import WarumTributeNight from '../components/home/WarumTributeNight';
import GutZuWissen from '../components/home/GutZuWissen';
import Impressionen from '../components/home/Impressionen';
import { usePageTitle } from '../hooks/usePageTitle';

const Home = () => {
  usePageTitle();

  return (
    <>
      <Hero />
      <Programm />
      <WarumTributeNight />
      <GutZuWissen />
      <Impressionen />
    </>
  );
};

export default Home;
