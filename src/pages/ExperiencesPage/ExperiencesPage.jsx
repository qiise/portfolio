import PortfolioLayout from '../../components/PortfolioLayout';
import cloud from '../../../assets/Cloud 4 light.png';
import './styles.css';

const experiences = [
  {
    period: 'June 2026 - August 2026',
    role: 'Business Analyst Intern',
    company: 'Capital One',
    description:
      'Incoming summer 2026 intern.',
   },
  {
    period: 'September 2024 - Present',
    role: 'Engineering Associate',
    company: 'Columbia Daily Spectator Publishing Company',
    description:
      'placeholder',
  },
  {
    period: 'January 2026 - April 2026',
    role: 'Engineering Emerging Leader Series',
    company: 'Goldman Sachs',
    description:
      ' placeholder',
  },
  {
    period: 'January 2025 - December 2025',
    role: 'Software Development Researcher',
    company: 'CRIS Lab @ Columbia University',
    description:
      ' placeholder',
  },
  {
    period: 'May 2025 - September 2025',
    role: 'Software Development Intern',
    company: 'Anote',
    description:
      ' placeholder',
  },
  {
    period: 'May 2025 - September 2025',
    role: 'AI/ML Engineering Intern',
    company: 'Onawa Pet',
    description:
      ' placeholder',
  },
];

function ExperiencesPage() {
  return (
    <div className="experiences-page">
      <img src={cloud} alt="" className="experiences-cloud" />
      <PortfolioLayout title="">
        <section className="section section-card section-lighter">
          <div className="section-copy">
            <span className="section-label">Experiences</span>
          </div>
          <div className="timeline-list">
            {experiences.map((item) => (
              <div key={`${item.company}-${item.role}`} className="timeline-item">
                <time>{item.period}</time>
                <div className="timeline-content">
                  <div>
                    <h3>{item.role}</h3>
                    <span>{item.company}</span>
                  </div>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </PortfolioLayout>
    </div>
  );
}

export default ExperiencesPage;
