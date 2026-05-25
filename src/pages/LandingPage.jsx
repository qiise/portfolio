import { Link } from 'react-router-dom';
import landingBase from '../../assets/Landing page base light.png';
import lightCircle from '../../assets/Light circle.png';
import clouds2 from '../../assets/Clouds 2 .png';
import lightClouds from '../../assets/Light clouds.png';

function LandingPage() {
  return (
    <main className="landing-page">
      <Link to="/menu" aria-label="Enter portfolio">
        <div className="landing-copy">
          <h1>Hannah Qi</h1>
        </div>
      </Link>

      <div className="landing-visual">
        <div className="landing-stack" aria-hidden="true">
          <img src={landingBase} alt="Landing page background" className="layer base" />
          <img src={lightCircle} alt="Light circle" className="layer circle" />
          <img src={clouds2} alt="Cloud detail" className="layer clouds-2" />
          <img src={lightClouds} alt="Light cloud detail" className="layer light-clouds" />
          <div className="landing-click-hint">click on my name to enter my portfolio!</div>
        </div>
      </div>
    </main>
  );
}

export default LandingPage;
