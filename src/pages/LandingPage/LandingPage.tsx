import Navbar from '../../components/Navbar/Navbar';
import About from '../../components/About/About';
import './LandingPage.css';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';

const LandingPage = () => {
	return (
		<>
			<Navbar />
			<div className='main-container'>
				<div className='header'>
					<h1 className='header-title'>Pulsar Digital</h1>
					<span className='header-text-container'>
						<h2 className='header-description'>We help you with</h2>
						<h2 className='header-description-title'>Websites</h2>
					</span>
				</div>
				<img className='main-img' src='./pulsar_background.png' />
				<div className='header-btn-container'>
					<button className='header-btn'>
						<img src='./arrow.svg' />
					</button>
				</div>
			</div>
			<About />
			<Projects />
			<Contact />
		</>
	);
};

export default LandingPage;
