import photoFrameLight from '../../../assets/Photo frame light.png';
import PortfolioLayout from '../../components/PortfolioLayout';
import picture from '../../../assets/portfolio pfp.jpg';
import './styles.css';

function AboutPage() {
  return (
    <div className="about-page">
      <PortfolioLayout title="">
        <section className="section section-card">
          <span className="section-label">About me</span>

          <div className="about-intro">
            <h1 className="summary">I enjoy combining software, AI, and design to turn complex problems into clean, useful experiences.</h1>
          </div>

          <div className="photo-frame-stack">
            <img src={picture} alt="Hannah's profile picture" className="profile-picture" />
            <img src={photoFrameLight} alt="" className="photo-frame" />
          </div>

          <div className="section-copy">
            <p>
              Hello! My name is Hannah and I'm an Egleston Scholar at Columbia University studying Computer Science and Applied Math. 
              My interests lie in the areas of AI/ML (particularly in computer vision applications), software development, and fintech. 
              I enjoy building things that are both technically challenging and practically useful, whether that’s a mobile app to help 
              students navigate course selection, or AI tools for pet health or modeling chemical systems. 
              I’m particularly drawn to projects that combine creative thinking and design with real-world impact.
            </p>
            <p>Lately, I’ve been working on full-stack web and mobile development as well as exploring applications of AI for computer graphics. 
              These experiences have helped me explore how technology can make information more accessible and bring fun ideas to life. 
              I’m always excited to keep learning, thinking creatively, and collaborating with others on new and interesting projects!</p>
          </div>
        </section>
      </PortfolioLayout>
    </div>
  );
}

export default AboutPage;
