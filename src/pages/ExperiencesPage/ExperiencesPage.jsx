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
    bullets: [
      'Led full-stack development of Columbia’s professor review platform using Node.js, SQL, and React',
      'Designed Android/IOS mobile app with React Native and launched the IOS version in the app store with 1.3K+ downloads in under 4 months',
      'Oversaw and contributed to website optimization and rollouts, supporting 1,000+ student users, and collaborating across divisions in the company',
    ],
  },
  {
    period: 'January 2026 - April 2026',
    role: 'Engineering Emerging Leader Series',
    company: 'Goldman Sachs',
    bullets: [
      'Built a mutual fund calculator to model fund performance, compare investment scenarios, and make financial tradeoffs easier to understand',
      'Collaborated with peers and mentors through Goldman Sachs’ Engineering Emerging Leader Series while strengthening technical problem-solving and product thinking',
      'Presented project to senior leadership in Dallas, Texas'
    ],
  },
  {
    period: 'January 2026 - March 2026',
    role: 'Lead Software Developer',
    company: 'Premed Profiles',
    bullets: [
      '  Generated $10K+ in recurring monthly revenue while addressing the gap in opportunities and knowledge for\
        premed students navigating the medical school application space',
      'Managed and implemented consistent optimizations and updated to production',
    ],
  },
  {
    period: 'January 2025 - December 2025',
    role: 'Software Development Researcher',
    company: 'CRIS Lab @ Columbia University',
    bullets: [
      'Built ML models with Python and scikit-learn to derive mechanism-based ODE equations for modeling chemical mechanisms',
      'Expanded the project to model stochastic systems with agent-based simulations and reinforcement learning',
      'Developed agent-based simulations using game theoretical approaches to reduce costs and increase efficiency in industrial metal rod production.',
      'Research submitted to AIChE 2025; advised by Prof. Venkatasubramanian and Kyungil Kim.'
    ],
  },
  {
    period: 'May 2025 - September 2025',
    role: 'Software Development Intern',
    company: 'Anote',
    bullets: [ 'Worked on Autonomous Intelligence project providing a novel tool that enhances LLM query resolution using an intelligent orchestrator with React frontend and Next.js backend.',
      'Developed guest access functionality to provided limited chatbot services to anonymous users and collaborated with team members to integrate playbook sharing between chat users',
      'Collaborated with other product teams to ensure cross-functionality and integration through weekly sprints.',
    ],
  },
  {
    period: 'May 2025 - September 2025',
    role: 'AI/ML Engineering Intern',
    company: 'Onawa Pet',
    bullets: [
      'Worked on developing a computer vision model to help enhance care for pets',
      'Utilized Hugging Face, PyTorch, and TensorFlow for the model and built full frontend and backend integration into the current web app using React and Next.js',
      'Collaborated with nala team members through weekly stand-ups and sprints.',
    ],
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
                  {item.bullets ? (
                    <ul>
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : (
                  <p>{item.description}</p>
                  )}
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
