import cloud4LightCropped from '../../../assets/Cloud 4 light cropped.png';
import cloud5LightCropped from '../../../assets/Cloud 5 light cropped.png';
import clouds2 from '../../../assets/Clouds 2 .png';
import landingPageBaseLight from '../../../assets/Landing page base light.png';
import lightCircle from '../../../assets/Light circle.png';
import lightClouds from '../../../assets/Light clouds.png';
import lightClouds1 from '../../../assets/Light clouds (1).png';
import lightCloud2 from '../../../assets/Light cloud 3.png';
import photoFrameLight from '../../../assets/Photo frame light.png';
import PortfolioLayout from '../../components/PortfolioLayout';
import './styles.css';

function CreativeSpacePage() {
  return (
    <div className="creative-page">
      <img src={lightClouds1} alt="" className="creative-cloud" />
      <PortfolioLayout title="">
        <section className="section creative-section">
          <div className="creative-intro">
            <span className="section-label">Creative space</span>
            <p>This section showcases my personal creative art projects and design explorations.</p>
          </div>

          <article className="creative-card asset-showcase">
            <header className="asset-copy">
              <h3>Assets for this portfolio</h3>
              <p>
                All graphic assets for this portfolio were drawn by me in Procreate. I wanted to create a cohesive visual design that reflects my personal style and the imaginative spirit of this portfolio.

              </p>
            </header>
            <div className="asset-carousel" aria-label="Portfolio assets">
              <figure className="asset-slide asset-slide-landing">
                <div className="landing-preview" aria-label="Landing page artwork without title">
                  <img src={landingPageBaseLight} alt="" className="landing-preview-layer" />
                  <img src={lightCircle} alt="" className="landing-preview-layer" />
                  <img src={clouds2} alt="" className="landing-preview-layer" />
                  <img src={lightClouds} alt="" className="landing-preview-layer" />
                </div>
                <figcaption>Landing page artwork</figcaption>
              </figure>

              <figure className="asset-slide">
                <img src={photoFrameLight} alt="Photo frame light artwork" />
                <figcaption>Photo frame</figcaption>
              </figure>

              <figure className="asset-slide">
                <img src={lightClouds1} alt="Light clouds artwork" />
                <figcaption>Clouds</figcaption>
              </figure>

              <figure className="asset-slide">
                <img src={lightCloud2} alt="Light cloud 2 artwork" />
                <figcaption>Clouds</figcaption>
              </figure>

              <figure className="asset-slide">
                <img src={cloud5LightCropped} alt="Cloud 5 light artwork" className="asset-image-large-cloud" />
                <figcaption>Clouds</figcaption>
              </figure>

              <figure className="asset-slide">
                <img src={cloud4LightCropped} alt="Cloud 4 light artwork" className="asset-image-large-cloud" />
                <figcaption>Clouds</figcaption>
              </figure>
            </div>
          </article>

          <aside className="creative-soon">
            <span>More to be added soon</span>
            <p>Future sketches and designs will live here.</p>
          </aside>
        </section>
      </PortfolioLayout>
    </div>
  );
}

export default CreativeSpacePage;
