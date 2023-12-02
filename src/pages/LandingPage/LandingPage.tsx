import Navbar from '../../components/Navbar/Navbar';
import About from '../../components/About/About';
import './LandingPage.css';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPage;
