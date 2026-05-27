import photoFrameLight from '../../../assets/Photo frame light.png';
import PortfolioLayout from '../../components/PortfolioLayout';
import './styles.css';

const projects = [
  {
    title: 'Minimal web experience',
    description: 'A clean portfolio concept built with soft light tones and thoughtful layout.',
  },
  {
    title: 'Design system refresh',
    description: 'A visual identity system designed to feel airy, modern, and approachable.',
  },
];

function ProjectsPage() {
  return (
    <div className="projects-page">
      <PortfolioLayout title="Projects">
        <section className="section section-split">
          <div className="section-copy">
            <span className="section-label">Projects</span>
            <h2>Selected work from the light portfolio.</h2>
            <p>Each project uses visual clarity and minimal clouds for a polished presence.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <img src={photoFrameLight} alt="Project placeholder" />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>
      </PortfolioLayout>
    </div>
  );
}

export default ProjectsPage;
