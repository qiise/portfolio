import PortfolioLayout from '../../components/PortfolioLayout';
import './styles.css';

const projects = [
  {
    title: 'Minimal web experience',
    description: 'A clean portfolio concept built with soft light tones and thoughtful layout.',
    githubUrl: '#',
    mediaUrl: '#',
    mediaLabel: 'View site',
    thumbnail: null,
    techStack: [
      { type: 'Frontend', tools: ['React', 'Vite', 'CSS'] },
      { type: 'Design', tools: ['Responsive UI', 'Visual system'] },
    ],
  },
  {
    title: 'Design system refresh',
    description: 'A visual identity system designed to feel airy, modern, and approachable.',
    githubUrl: '#',
    mediaUrl: '#',
    mediaLabel: 'View media',
    thumbnail: null,
    techStack: [
      { type: 'Design', tools: ['Components', 'Typography', 'Color'] },
      { type: 'Tools', tools: ['Figma', 'CSS'] },
    ],
  },
];

function ProjectsPage() {
  return (
    <div className="projects-page">
      <PortfolioLayout title="">
        <section className="section section-split">
          <div className="section-copy">
            <span className="section-label">Projects</span>
            <span className ="section-description">click on the links below each project to view more details</span>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-thumbnail">
                  {project.thumbnail ? (
                    <img src={project.thumbnail} alt={`${project.title} thumbnail`} />
                  ) : (
                    <span>Project screenshot</span>
                  )}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech-groups" aria-label={`${project.title} tech stack`}>
                  {project.techStack.map((group) => (
                    <div key={group.type} className="project-tech-group">
                      <span className="project-tech-type">{group.type}</span>
                      <ul className="project-tech-list">
                        {group.tools.map((tool) => (
                          <li key={tool}>{tool}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  {project.mediaUrl && (
                    <a href={project.mediaUrl} target="_blank" rel="noreferrer">
                      {project.mediaLabel}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </PortfolioLayout>
    </div>
  );
}

export default ProjectsPage;
