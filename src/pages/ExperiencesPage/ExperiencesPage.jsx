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
    period: '2024',
    role: 'Web Development Intern',
    company: 'Company name',
    description:
      'Built and refined web experiences, working across frontend implementation, visual polish, and user-facing interaction details.',
  },
  {
    period: '2023',
    role: 'Creative Direction Support',
    company: 'Company name',
    description:
      'Supported creative and digital presentation work through visual organization, content updates, and design-focused collaboration.',
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
