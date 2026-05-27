import photoFrameLight from '../../../assets/Photo frame light.png';
import PortfolioLayout from '../../components/PortfolioLayout';
import './styles.css';

function AboutPage() {
  return (
    <div className="about-page">
      <PortfolioLayout title="About me">
        <section className="section section-card">
          <div className="section-copy">
            <span className="section-label">About me</span>
            <h2>Carefully crafted interactions with a calm visual balance.</h2>
            <p>
              I build thoughtful digital experiences with a light palette, clear hierarchy, and a focus on refined
              detail. This portfolio is designed to stay clean while offering a gentle, welcoming aesthetic.
            </p>
            <p>Explore this page to learn more about my approach, work, and creative mindset.</p>
          </div>
          <div className="photo-frame-block">
            <img src={photoFrameLight} alt="Photo frame placeholder" />
            <span className="photo-label">Personal highlight</span>
          </div>
        </section>
      </PortfolioLayout>
    </div>
  );
}

export default AboutPage;
