import { useState } from 'react';
import landingBase from '../assets/Landing page base light.png';
import lightCircle from '../assets/Light circle.png';
import clouds2 from '../assets/Clouds 2 .png';
import lightClouds from '../assets/Light clouds.png';
import photoFrameLight from '../assets/Photo frame light.png';
import lightCloud3 from '../assets/Light cloud 3.png';

const navItems = [
  { id: 'about', label: 'About me' },
  { id: 'projects', label: 'Projects' },
  { id: 'experiences', label: 'Experiences' },
  { id: 'creative', label: 'Creative space' },
];

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

const experiences = [
  { period: '2025', label: 'Product design collaboration' },
  { period: '2024', label: 'Web development internship' },
  { period: '2023', label: 'Creative direction support' },
];

function App() {
  const [showMain, setShowMain] = useState(false);

  return (
    <div className="app-shell">
      {showMain ? <PortfolioPage onHome={() => setShowMain(false)} /> : <LandingPage onEnter={() => setShowMain(true)} />}
    </div>
  );
}

function LandingPage({ onEnter }) {
  return (
    <main className="landing-page">
      <div className="landing-copy">
        <span className="eyebrow">Light mode portfolio</span>
        <h1>Soft, clean, and polished for your next story.</h1>
        <p>
          Start here to explore the portfolio sections and reach about, projects, experiences, and creative space.
        </p>
        <div className="landing-actions">
          <button type="button" onClick={onEnter} className="primary-button">
            Enter portfolio
          </button>
        </div>
      </div>

      <div className="landing-visual">
        <div className="landing-stack" onClick={onEnter} role="button" tabIndex={0}>
          <img src={landingBase} alt="Landing page background" className="layer base" />
          <img src={lightCircle} alt="Light circle" className="layer circle" />
          <img src={clouds2} alt="Cloud detail" className="layer clouds-2" />
          <img src={lightClouds} alt="Light cloud detail" className="layer light-clouds" />
          <div className="landing-click-hint">Click the circle to continue</div>
        </div>
      </div>
    </main>
  );
}

function PortfolioPage({ onHome }) {
  return (
    <div className="portfolio-page">
      <header className="portfolio-header">
        <div>
          <p className="brand">Portfolio light mode</p>
          <h1>Welcome to the portfolio experience</h1>
        </div>
        <nav className="portfolio-nav">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>{item.label}</a>
          ))}
          <button type="button" className="ghost-button" onClick={onHome}>
            Back to landing
          </button>
        </nav>
      </header>

      <main className="portfolio-main">
        <section id="about" className="section section-card">
          <div className="section-copy">
            <span className="section-label">About me</span>
            <h2>Carefully crafted interactions with a calm visual balance.</h2>
            <p>
              I build thoughtful digital experiences with a light palette, clear hierarchy, and a focus on refined detail.
              This portfolio is designed to stay clean while offering a gentle, welcoming aesthetic.
            </p>
            <p>
              Explore the sections below to learn more about my approach, work, and creative mindset.
            </p>
          </div>
          <div className="photo-frame-block">
            <img src={photoFrameLight} alt="Photo frame placeholder" />
            <span className="photo-label">Personal highlight</span>
          </div>
        </section>

        <section id="projects" className="section section-split">
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

        <section id="experiences" className="section section-card section-lighter">
          <div className="section-copy">
            <span className="section-label">Experiences</span>
            <h2>Visual storytelling through roles and milestones.</h2>
            <p>
              Experiences are organized in a calm timeline style so the story remains easy to follow.
            </p>
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

        <section id="creative" className="section creative-section">
          <div className="creative-hero">
            <img src={lightCloud3} alt="Decorative cloud" className="creative-cloud" />
            <div>
              <span className="section-label">Creative space</span>
              <h2>A calm place for ideas, experiments, and visuals.</h2>
              <p>
                This section is meant for imaginative work, concept sketches, and quiet creative energy that complements the main portfolio.
              </p>
            </div>
          </div>
          <div className="creative-grid">
            <article className="creative-card">
              <img src={photoFrameLight} alt="Creative placeholder" />
              <h3>Studio inspiration</h3>
            </article>
            <article className="creative-card">
              <img src={photoFrameLight} alt="Creative placeholder" />
              <h3>Light interface ideas</h3>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
