import { Link } from 'react-router-dom';
import landingBase from '../../assets/Landing page base light.png';
import lightCircle from '../../assets/Light circle.png';
import clouds2 from '../../assets/Clouds 2 .png';
import lightClouds from '../../assets/Light clouds.png';

function LandingPage() {
  return (
    <main className="landing-page">
      <div className="landing-copy">
        <span className="eyebrow">Light mode portfolio</span>
        <h1>Soft, clean, and polished for your next story.</h1>
        <p>Start here to explore the portfolio sections and reach about, projects, experiences, and creative space.</p>
        <div className="landing-actions">
          <Link to="/menu" className="primary-button">
            Enter portfolio
          </Link>
        </div>
      </div>

      <div className="landing-visual">
        <Link to="/menu" className="landing-stack" aria-label="Enter portfolio">
          <img src={landingBase} alt="Landing page background" className="layer base" />
          <img src={lightCircle} alt="Light circle" className="layer circle" />
          <img src={clouds2} alt="Cloud detail" className="layer clouds-2" />
          <img src={lightClouds} alt="Light cloud detail" className="layer light-clouds" />
          <div className="landing-click-hint">Click the circle to continue</div>
        </Link>
      </div>
    </main>
  );
}

export default LandingPage;
