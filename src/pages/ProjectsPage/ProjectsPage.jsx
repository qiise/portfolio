import PortfolioLayout from '../../components/PortfolioLayout';
import proj1 from '../../../assets/projectfiles/project 2 thumbnail.png';
import proj2 from '../../../assets/projectfiles/angryballsthumbnail.png';
import proj3 from '../../../assets/projectfiles/segmentationthumbnail.png';
import aiDarwinThumbnail from '../../../assets/projectfiles/aidarwinthumbnail.png';
import spectatorGamesThumbnail from '../../../assets/projectfiles/spectatornewthumbnail.png';
import petHealthThumbnail from '../../../assets/projectfiles/pethealththumbmail.jpg';
import autonomousIntelligenceThumbnail from '../../../assets/projectfiles/autonomousintelligencethumbnail.png';
import premedThumbnail from '../../../assets/projectfiles/premedthumbnail.png';
import mutualFundThumbnail from '../../../assets/projectfiles/mutualfundthumbnail.png';
import lionDanceThumbnail from '../../../assets/projectfiles/liondancethumbnail.png';
import clockworkThumbnail from '../../../assets/projectfiles/clockworkthumbnail.png';
import personalPortfolioThumbnail from '../../../assets/projectfiles/personalportfoliothumbnail.png';
import portfolioPartyThumbnail from '../../../assets/projectfiles/portfoliopartythumbnail.png';
import recolorizationReport from '../../../assets/projectfiles/DLCGProject2Report.pdf';
import angryBallsReport from '../../../assets/projectfiles/angryballsreport.pdf';
import angryBallsPoster from '../../../assets/projectfiles/Angry Balls Poster.pdf';
import segmentationReport from '../../../assets/projectfiles/COMS_BC3168__Project_1 (1).pdf';
import paleBlueDotReport from '../../../assets/projectfiles/Hannah Qi - Pale Blue Dot (1).pdf';
import './styles.css';

const projects = [
  {
    title: 'Personal Portfolio',
    description: 'Built to tell you a little bit more about me.',
    mediaUrl: null,
    graphicUrl: null,
    graphicLabel: 'view media',
    mediaLabel: 'visit site',
    thumbnail: personalPortfolioThumbnail,
    thumbnailClassName: 'project-thumbnail-image--crop-right',
    techStack: [
      { type: 'Frontend', tools: ['React.js', 'Vite'] },
      { type: 'Styling', tools: ['CSS',] },,
    ],
  },
  {
    title: 'CNN Image Recolorization',
    description:
      'Built a convolutional neural network pipeline for computer graphics image colorization. After training on various datasets, we explored how a model can learn to reconstruct plausible color from image structure and visual context.',
    githubUrl: null,
    mediaUrl: recolorizationReport,
    graphicUrl: null,
    graphicLabel: 'view media',
    mediaLabel: 'view report',
    thumbnail: proj1,
    techStack: [
      { type: 'AI/ML', tools: ['CNNs', 'Transfer Learning'] },
      { type: 'Libraries', tools: ['PyTorch', 'OpenCV'] },
      { type: 'Languages', tools: ['Python'] },
    ],
  },
  {
    title: 'AngryBalls: A Physics-Based Game Powered by RL and CV',
    description:
      'Designed an object-aware physics game that combines computer vision, game mechanics, and reinforcement learning ideas to detect scene elements and drive interactive gameplay.',
    githubUrl: null,
    mediaUrl: angryBallsReport,
    graphicUrl: angryBallsPoster,
    graphicLabel: 'view poster',
    mediaLabel: 'view report',
    thumbnail: proj2,
    techStack: [
      { type: 'Languages', tools: ['Python'] },
      { type: 'AI/ML', tools: ['Reinforcement Learning', 'Computer Vision'] },
      { type: 'Libraries', tools: ['OpenCV', 'Pytorch', 'Pygame', 'Pymunk'] },
    ],
  },
  {
    title: 'Image Segmentation, Regressors, and Classifiers for Computer Graphics',
    description:
      'Implemented and compared segmentation, regression, and classification approaches for computer graphics image tasks, focusing on how models interpret visual regions and predict image-level structure.',
    githubUrl: null,
    mediaUrl: segmentationReport,
    graphicUrl: null,
    graphicLabel: 'view media',
    mediaLabel: 'view report',
    thumbnail: proj3,
    techStack: [
      { type: 'Languages', tools: ['Python'] },
      { type: 'Libraries', tools: ['Pytorch', 'OpenCV'] },
    ],
  },
  {
    title: 'AI-DARWIN',
    description: 'Research project conducted with CRIS Lab @ Columbia University that uses symbolic regression to uncover mechanisms in chemical systems. \
        Utilizing a set of initial conditions, elementary equations, and parallel computing, the tool builds a set of ODEs that is capable of modeling \
        reaction mechanisms with high accuracy. Abstract submitted to AIChE 2025.',
    githubUrl: null,
    mediaUrl: null,
    graphicUrl: null,
    graphicLabel: 'view media',
    mediaLabel: 'view report',
    thumbnail: aiDarwinThumbnail,
    techStack: [
      { type: 'Languages', tools: ['Python'] },
      { type: 'Libraries', tools: ['NumPy', 'SymPy', 'Matplotlib'] },
    ],
  },
  {
    title: 'Columbia Spectator Games',
    description: 'Built for the Columbia Daily Spectator Publishing Company, this project is a web-based platform that currently hosts interactive crosswords and minis that are published by the Spectator Games team. The platform is to be expanded in the future to include more games.',
    githubUrl: null,
    mediaUrl: 'https://games.columbiaspectator.com/',
    graphicUrl: null,
    graphicLabel: 'view media',
    mediaLabel: 'visit site',
    thumbnail: spectatorGamesThumbnail,
    techStack: [
      { type: 'Backend', tools: ['JavaScript'] },
      { type: 'Frontend', tools: ['React.js', 'CSS'] },
    ],
  },
  {
    title: 'Pet Health Vision Model',
    description: 'Built a computer vision model that specializes in analyzing the pet eye health. The goal is to reduce the number of unnecessary pet visits \
        to help pet owners be more cost-efficient. I built full backend and frontend integration of this tool into the existing web app design so that users can upload and image and \
        recieve the prediction by interacting with various UI elements.',
    githubUrl: null,
    mediaUrl: null,
    graphicUrl: null,
    graphicLabel: 'view media',
    mediaLabel: 'view report',
    thumbnail: petHealthThumbnail,
    techStack: [
      { type: 'Frontend', tools: ['React.js', 'Next.js', 'Tailwind CSS'] },
      { type: 'Backend', tools: ['FastAPI'] },
      { type: 'Libraries', tools: ['Pytorch', 'TensorFlow'] },
      { type: 'Tools', tools: ['HuggingFace'] },
    ],
  },
  {
    title: 'Autonomous Intelligence',
    description: 'Worked to develop a collaborative multi-agent AI system chatbot. https://www.youtube.com/watch?v=zJfx-4YyNKc',
    githubUrl: 'https://github.com/anote-ai/Autonomous-Intelligence',
    mediaUrl: paleBlueDotReport,
    graphicUrl: null,
    graphicLabel: 'view media',
    mediaLabel: 'view paper',
    thumbnail: autonomousIntelligenceThumbnail,
    techStack: [
      
    ],
  },
  {
    title: 'PreMed Profiles',
    description: 'Created a web app to support premed students navigating the med school application process.\
        Served as the lead developer for PreMed Profiles and spearheaded the development of the current UI/UX design and database manipulation.\
        PreMed Profiles has gained over $10K+ in revenue.',
    githubUrl: 'https://github.com/droooski/premedcheatsheet',
    mediaUrl: 'https://www.premedprofiles.com/',
    graphicUrl: null,
    graphicLabel: 'view media',
    mediaLabel: 'visit site',
    thumbnail: premedThumbnail,
    techStack: [
      { type: 'Frontend', tools: ['React.js', 'SCSS'] },
      { type: 'Backend', tools: ['JavaScript'] },
      { type: 'Tools', tools: ['Firebase', 'Vercel'] },
    ],
  },
  {
    title: 'Mutual Fund Calculator',
    description: 'Built a full-stack mutual fund calculator that estimates future investment value using CAPM-based projections, fund beta data, and risk-free rate inputs. The app lets users compare funds, view historical performance charts, and generate investment summaries as well as use AI to provide personalized investment advice.',
    githubUrl: 'https://github.com/kostakarathana/Goldman_ELS',
    mediaUrl: 'https://goldman-els.vercel.app/#/calculator',
    graphicUrl: null,
    graphicLabel: 'view media',
    mediaLabel: 'visit site',
    thumbnail: mutualFundThumbnail,
    techStack: [
      { type: 'Frontend', tools: ['React', 'Vite', 'Tailwind CSS'] },
      { type: 'Backend', tools: ['Node.js', 'Express'] },
      { type: 'Data/APIs', tools: ['Newton Analytics', 'FRED', 'Supabase'] },
      { type: 'Testing', tools: ['Jest', 'Supertest'] },
    ],
  },
  {
    title: 'Columbia University Lion Dance Team Website',
    description:
      'Maintained and developed the Columbia University Lion Dance website, sharing troupe information, events, booking details, and contact links.',
    githubUrl: 'https://github.com/culiondance/culiondance.github.io',
    mediaUrl: 'https://culiondance.org/',
    graphicUrl: null,
    graphicLabel: 'view media',
    mediaLabel: 'visit site',
    thumbnail: lionDanceThumbnail,
    techStack: [
      { type: 'Frontend', tools: ['HTML', 'CSS', 'JavaScript'] },
      { type: 'Styling', tools: ['Bootstrap', 'SCSS'] },
    ],
  },
  {
    title: 'Clockwork',
    description:
      'Built an AI scheduling assistant that turns natural-language meeting requests into confirmed calendar events with less back-and-forth. Clockwork combines a deterministic scheduling engine with Gemini-powered interpretation, Google Calendar integration, and a React interface for manual or AI-assisted scheduling.',
    githubUrl: 'https://github.com/nathangendler/Clockwork',
    mediaUrl: 'https://devpost.com/software/clockwork-apkv01?_gl=1*14ulthh*_gcl_au*MTMxNTIwNDQxNC4xNzgwMTA2NDYz*_ga*MTQ3MDI4NTQ3OC4xNzgwMTA2NDY0*_ga_0YHJK3Y10M*czE3ODAxMDY0NjMkbzEkZzEkdDE3ODAxMDY0NzUkajQ4JGwwJGgw',
    graphicUrl: null,
    graphicLabel: 'view media',
    mediaLabel: 'DevPost',
    thumbnail: clockworkThumbnail,
    techStack: [
      { type: 'Frontend', tools: ['React', 'Vite'] },
      { type: 'Backend', tools: ['Python', 'Flask', 'SQLAlchemy'] },
      { type: 'APIs', tools: ['Gemini API', 'Google Calendar API', 'Google People API'] },
      { type: 'Database', tools: ['PostgreSQL', 'Supabase'] },
    ],
  },
  {
    title: 'PortfolioParty',
    description: 'PortfolioParty is centered on making personal portfolios feel more interactive, social, and fun.elf-expression, projects, and personal branding into a more engaging experience. Using data pulled from yfinance, this project allows users to see what others in their community are investing in, share their own portfolios, and discover new investment opportunities through a more social and interactive platform.',
    githubUrl: 'https://github.com/qiise/PortfolioParty',
    mediaUrl: null,
    graphicUrl: null,
    graphicLabel: 'view media',
    mediaLabel: 'visit site',
    thumbnail: portfolioPartyThumbnail,
    techStack: [
      { type: 'Backend', tools: ['Python'] },
      { type: 'Frontend', tools: ['React.js', 'TypeScript', "TailwindCSS"] },
      { type: 'Tools', tools: ['yfinance'] },
    ],
  },
];

function ProjectsPage() {
  return (
    <div className="projects-page">
      <PortfolioLayout title="">
        <section className="section section-split">
          <div className="section-copy">
            <span className="section-label">Projects</span>
            <span className ="section-description">click on the link(s) below each project to view more details</span>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-thumbnail">
                  {project.thumbnail ? (
                    <img
                      src={project.thumbnail}
                      alt={`${project.title} thumbnail`}
                      className={project.thumbnailClassName}
                    />
                  ) : (
                    <span>Project Thumbnail</span>
                  )}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech-groups" aria-label={`${project.title} tech stack`}>
                  {project.techStack.map((group) => (
                    <div key={group.type} className="project-tech-group">
                      <span className="project-tech-type">{group.type}</span>
                      <ul className="project-tech-list">
                        {group.tools.map((tool) => (
                          <li key={tool}>{tool}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="project-links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  )}
                  {project.mediaUrl && (
                    <a href={project.mediaUrl} target="_blank" rel="noreferrer">
                      {project.mediaLabel}
                    </a>
                  )}
                  {project.graphicUrl && (
                    <a href={project.graphicUrl} target="_blank" rel="noreferrer">
                      {project.graphicLabel}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </PortfolioLayout>
    </div>
  );
}

export default ProjectsPage;
