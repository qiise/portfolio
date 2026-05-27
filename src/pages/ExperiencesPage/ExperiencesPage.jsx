import PortfolioLayout from '../../components/PortfolioLayout';
import './styles.css';

const experiences = [
  { period: '2025', label: 'Product design collaboration' },
  { period: '2024', label: 'Web development internship' },
  { period: '2023', label: 'Creative direction support' },
];

function ExperiencesPage() {
  return (
    <div className="experiences-page">
      <PortfolioLayout title="Experiences">
        <section className="section section-card section-lighter">
          <div className="section-copy">
            <span className="section-label">Experiences</span>
            <h2>Visual storytelling through roles and milestones.</h2>
            <p>Experiences are organized in a calm timeline style so the story remains easy to follow.</p>
          </div>
          <div className="timeline-list">
            {experiences.map((item) => (
              <div key={item.period} className="timeline-item">
                <strong>{item.period}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>
      </PortfolioLayout>
    </div>
  );
}

export default ExperiencesPage;
