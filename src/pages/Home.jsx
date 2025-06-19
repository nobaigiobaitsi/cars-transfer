import HeroSection from '../components/hero-section.jsx'
import Info from '../components/info.jsx'
import FleetHome from '../components/fleet-home.jsx'
import Contact from '../components/contact.jsx'
//I want to add a carousel to all pages

const Home = () => {
  return (
    <>
      <HeroSection />
      <Info />
      <FleetHome />
      <Contact />
    </>
  );
};

export default Home;