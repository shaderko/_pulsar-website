import './Projects.css';

const Projects = () => {
	return (
		<section id='projects' className='section'>
			<div className='projects-container'>
				<div className='projects-header'>
					<h1 className='title-section'>Projects</h1>
					<p className='desc'>
						We have developed numerous successful projects, each tailored to the
						client's unique needs. Our expertise in custom web designs, UX
						optimization, responsive web development, SEO strategies, content
						creation, and ongoing maintenance ensures that every project is a
						success.
					</p>
				</div>
				<div className='projects-content'>
					<div className='projects-card agentura'>
						<img src='./agentura.png' />
					</div>
					<div className='projects-card mentalboost'>
						<img src='./mentalboost.png' />
					</div>
					<div className='projects-card rdsmilovice'>
						<img src='./rdsmilovice.jpg' />
					</div>
					<div className='projects-card bytyopocno'>
						<img src='./bytyopocno.png' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
