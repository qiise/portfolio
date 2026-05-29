import photoFrameLight from '../../../assets/Photo frame light.png';
import lightCloud3 from '../../../assets/Light cloud 3.png';
import PortfolioLayout from '../../components/PortfolioLayout';
import './styles.css';

function CreativeSpacePage() {
  return (
    <div className="creative-page">
      <PortfolioLayout title="">
        <section className="section creative-section">
          <div className="creative-hero">
            <img src={lightCloud3} alt="" className="creative-cloud" />
            <div>
              <span className="section-label">Creative space</span>
              <h2>A calm place for ideas, experiments, and visuals.</h2>
              <p>
                This section is meant for imaginative work, concept sketches, and quiet creative energy that
                complements the main portfolio.
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
      </PortfolioLayout>
    </div>
  );
}

export default CreativeSpacePage;
