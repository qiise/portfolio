import { useState } from 'react';
import landingBase from '../assets/Landing page base light.png';
import lightCircle from '../assets/Light circle.png';
import clouds2 from '../assets/Clouds 2 .png';
import lightClouds from '../assets/Light clouds.png';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencesPage from './pages/ExperiencesPage';
import CreativeSpacePage from './pages/CreativeSpacePage';

const navItems = [
  { id: 'about', label: 'About me' },
  { id: 'projects', label: 'Projects' },
  { id: 'experiences', label: 'Experiences' },
  { id: 'creative', label: 'Creative space' },
];

function App() {
  const [view, setView] = useState('landing');

  return (
    <div className="app-shell">
      {view === 'landing' ? (
        <LandingPage onEnter={() => setView('menu')} />
      ) : (
        <MainApp view={view} setView={setView} />
      )}
    </div>
  );
}

function LandingPage({ onEnter }) {
  return (
    <main className="landing-page">
      <div className="landing-copy">
        <span className="eyebrow">Light mode portfolio</span>
        <h1>Soft, clean, and polished for your next story.</h1>
        <p>Start here to explore the portfolio sections and reach about, projects, experiences, and creative space.</p>
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

function MainApp({ view, setView }) {
  const currentSection = navItems.find((item) => item.id === view);

  return (
    <div className="portfolio-page">
      <header className="portfolio-header">
        <div>
          <p className="brand">Portfolio light mode</p>
          <h1>{view === 'menu' ? 'Choose a section to explore' : currentSection?.label}</h1>
          <p>
            {view === 'menu'
              ? 'Navigate with the buttons below to view each section on its own page.'
              : 'Each section is displayed independently so you can focus on the content you want.'}
          </p>
        </div>
        <nav className="portfolio-nav">
          {view !== 'menu' && (
            <button type="button" className="ghost-button" onClick={() => setView('menu')}>
              Back to menu
            </button>
          )}
          <button type="button" className="ghost-button" onClick={() => setView('landing')}>
            Back to landing
          </button>
        </nav>
      </header>

      <main className="portfolio-main">
        {view === 'menu' ? <PortfolioMenu onNavigate={setView} /> : <SectionPage view={view} />}
      </main>
    </div>
  );
}

function PortfolioMenu({ onNavigate }) {
  return (
    <div className="menu-grid">
      {navItems.map((item) => (
        <button key={item.id} type="button" className="menu-card" onClick={() => onNavigate(item.id)}>
          <span className="menu-card-label">{item.label}</span>
          <p>Open the {item.label.toLowerCase()} page with focused content and clean layout.</p>
        </button>
      ))}
    </div>
  );
}

function SectionPage({ view }) {
  if (view === 'about') return <AboutPage />;
  if (view === 'projects') return <ProjectsPage />;
  if (view === 'experiences') return <ExperiencesPage />;
  if (view === 'creative') return <CreativeSpacePage />;
  return null;
}

export default App;
