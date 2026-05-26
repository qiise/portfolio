import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import landingBase from '../../../assets/Landing page base light.png';
import lightCircle from '../../../assets/Light circle.png';
import clouds2 from '../../../assets/Clouds 2 .png';
import lightClouds from '../../../assets/Light clouds.png';
import './styles.css';

function LandingPage() {
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();

  function handleTitleClick(event) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();

    if (!isExiting) {
      setIsExiting(true);
    }
  }

  function handleTransitionEnd(event) {
    if (isExiting && event.animationName === 'landingFadeOut') {
      navigate('/menu');
    }
  }

  return (
    <main
      className={`landing-page${isExiting ? ' is-exiting' : ''}`}
      onAnimationEnd={handleTransitionEnd}
    >
      <div className="landing-copy">
        <p className="landing-kicker">Portfolio</p>
        <Link
          to="/menu"
          className="landing-title"
          aria-label="Enter Hannah Qi's portfolio"
          onClick={handleTitleClick}
        >
          <h1>
            Hannah
            <span>Qi</span>
          </h1>
        </Link>
        <p className="landing-invitation">click on my name to explore</p>
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
