import { Link } from 'react-router-dom';
import landingBase from '../../assets/Landing page base light.png';
import lightCircle from '../../assets/Light circle.png';
import clouds2 from '../../assets/Clouds 2 .png';
import lightClouds from '../../assets/Light clouds.png';

function LandingPage() {
  return (
    <main className="landing-page">
      <div className="landing-copy">
        <p className="landing-kicker">Portfolio</p>
        <Link to="/menu" className="landing-title" aria-label="Enter Hannah Qi's portfolio">
          <h1>
            Hannah
            <span>Qi</span>
          </h1>
        </Link>
        <p className="landing-invitation">Click my name to explore</p>
      </div>

      <div className="landing-visual">
        <div className="landing-stack" aria-hidden="true">
          <img src={landingBase} alt="Landing page background" className="layer base" />
          <img src={lightCircle} alt="Light circle" className="layer circle" />
          <img src={clouds2} alt="Cloud detail" className="layer clouds-2" />
          <img src={lightClouds} alt="Light cloud detail" className="layer light-clouds" />
        </div>
      </div>
    </main>
  );
}

export default LandingPage;
