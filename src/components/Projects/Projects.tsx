import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="projects-container">
        <div className="projects-header">
          <h1 className="title-section">Projects</h1>
          <p className="desc">
            We have developed numerous successful projects, each tailored to the
            client's unique needs. Our expertise in custom web designs, UX
            optimization, responsive web development, SEO strategies, content
            creation, and ongoing maintenance ensures that every project is a
            success.
          </p>
        </div>
        <div className="projects-content">
          <div className="projects-card agentura">
            <div className="project-card-header">
              <div className="project-card-title-container">
                <h1 className="project-card-title">Agentura Renaissance</h1>
              </div>
            </div>
            <img src="./agentura.png" draggable={false} />
          </div>
          <div className="projects-card mentalboost">
            <div className="project-card-header">
              <div className="project-card-title-container">
                <h1 className="project-card-title">Mental Boost</h1>
              </div>
            </div>
            <img src="./mentalboost.png" draggable={false} />
          </div>
          <div className="projects-card rdsmilovice">
            <div className="project-card-header">
              <div className="project-card-title-container">
                <h1 className="project-card-title">Rdsmilovice</h1>
              </div>
            </div>
            <img src="./rdsmilovice.jpg" draggable={false} />
          </div>
          <div className="projects-card bytyopocno">
            <div className="project-card-header">
              <div className="project-card-title-container">
                <h1 className="project-card-title">Byty opocno</h1>
              </div>
            </div>
            <img src="./bytyopocno.png" draggable={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
