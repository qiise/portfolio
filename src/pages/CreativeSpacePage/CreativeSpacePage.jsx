import photoFrameLight from '../../../assets/Photo frame light.png';
import lightCloud3 from '../../../assets/Light cloud 3.png';
import PortfolioLayout from '../../components/PortfolioLayout';
import './styles.css';

function CreativeSpacePage() {
  return (
    <div className="creative-page">
      <img src={lightCloud3} alt="" className="creative-cloud" />
      <PortfolioLayout title="">
        <section className="section creative-section">
          <div className="creative-intro">
            <span className="section-label">Creative space</span>
            <p>This section showcases my personal creative art projects and design explorations.</p>
          </div>

          <article className="creative-card asset-showcase">
            <div className="asset-copy">
              <h3>Assets for this portfolio</h3>
              <p>
                Placeholder description for the visual system behind this site: clouds, frames, palette studies,
                interface sketches, and other supporting pieces that shape the portfolio's atmosphere.
              </p>
            </div>
            <div className="asset-gallery" aria-label="Portfolio asset placeholders">
              <div className="asset-placeholder asset-placeholder-large">
                <span>Feature asset</span>
              </div>
              <div className="asset-placeholder">
                <span>Cloud study</span>
              </div>
              <div className="asset-placeholder">
                <span>Frame study</span>
              </div>
            </div>
          </article>

          <aside className="creative-soon">
            <span>More to be added soon</span>
            <p>Future sketches, experiments, and visual explorations will live here.</p>
          </aside>
        </section>
      </PortfolioLayout>
    </div>
  );
}

export default CreativeSpacePage;
