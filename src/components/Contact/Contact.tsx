import { useEffect } from 'react';
import './Contact.css';

const Contact = () => {
	const handleScroll = (e: any) => {
		const eventTarget = e.currentTarget as HTMLElement;
		console.log(e);
		const bottom =
			eventTarget.scrollHeight - eventTarget.clientHeight ===
			eventTarget.scrollHeight - window.innerHeight;
		if (bottom) {
			console.log('bottom');
		}
		console.log(
			eventTarget.scrollHeight - eventTarget.clientHeight,
			eventTarget.scrollHeight - window.innerHeight
		);
	};

	useEffect(() => {
		document.addEventListener('scroll', handleScroll);

		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<section id='contact'>
			<div className='contact-container'>
				<div className='contact-content'>
					<h2 className='desc-contact'>Got a project in mind?</h2>
					<h1 className='title-contact'>Contact Us</h1>
				</div>
			</div>
		</section>
	);
};

export default Contact;
