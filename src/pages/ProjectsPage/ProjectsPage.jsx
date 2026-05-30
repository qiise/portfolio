import PortfolioLayout from '../../components/PortfolioLayout';
import proj1 from '../../../assets/projectfiles/project 2 thumbnail.png';
import proj2 from '../../../assets/projectfiles/angryballsthumbnail.png';
import proj3 from '../../../assets/projectfiles/segmentationthumbnail.png';
import aiDarwinThumbnail from '../../../assets/projectfiles/aidarwinthumbnail.png';
import spectatorGamesThumbnail from '../../../assets/projectfiles/spectatorgamesthumbnail.png';
import autonomousIntelligenceThumbnail from '../../../assets/projectfiles/autonomousintelligencethumbnail.png';
import premedThumbnail from '../../../assets/projectfiles/premedthumbnail.png';
import mutualFundThumbnail from '../../../assets/projectfiles/mutualfundthumbnail.png';
import lionDanceThumbnail from '../../../assets/projectfiles/liondancethumbnail.png';
import clockworkThumbnail from '../../../assets/projectfiles/clockworkthumbnail.png';
import recolorizationReport from '../../../assets/projectfiles/DLCGProject2Report.pdf';
import angryBallsReport from '../../../assets/projectfiles/angryballsreport.pdf';
import angryBallsPoster from '../../../assets/projectfiles/Angry Balls Poster.pdf';
import segmentationReport from '../../../assets/projectfiles/COMS_BC3168__Project_1 (1).pdf';
import paleBlueDotReport from '../../../assets/projectfiles/Hannah Qi - Pale Blue Dot (1).pdf';
import './styles.css';

const projects = [
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
      { type: 'AI/ML', tools: ['CNNs'] },
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
      { type: 'Game', tools: ['Pygame', 'Physics simulation'] },
      { type: 'AI/ML', tools: ['Reinforcement learning', 'Object awareness'] },
      { type: 'Computer Vision', tools: ['OpenCV', 'Scene detection'] },
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
      { type: 'Design', tools: ['Components', 'Typography', 'Color'] },
      { type: 'Tools', tools: ['Figma', 'CSS'] },
    ],
  },
  {
    title: 'AI-DARWIN',
    description: 'Research project conducted with CRIS Lab @ Columbia University that uses symbolic regression to uncover mechanisms in chemical systems. \
        Utilizing a set of initial conditions, elementary equations, and parallel computing, the tool builds a set of ODEs that is capable of modeling \
        reaction mechanisms with high accuracy. Abstract submitted to AIChE 2025.',
    githubUrl: null,
    mediaUrl: segmentationReport,
    graphicUrl: null,
    graphicLabel: 'view media',
    mediaLabel: 'view report',
    thumbnail: aiDarwinThumbnail,
    techStack: [
      { type: 'Design', tools: ['Components', 'Typography', 'Color'] },
      { type: 'Tools', tools: ['Figma', 'CSS'] },
    ],
  },
  {
    title: 'Columbia Spectator Games',
    description: 'A visual identity system designed to feel airy, modern, and approachable.',
    githubUrl: null,
    mediaUrl: 'https://games.columbiaspectator.com/',
    graphicUrl: null,
    graphicLabel: 'view media',
    mediaLabel: 'visit site',
    thumbnail: spectatorGamesThumbnail,
    techStack: [
      { type: 'AI/ML', tools: ['Classifiers', 'Regressors', 'Model evaluation'] },
      { type: 'Computer Vision', tools: ['Image segmentation', 'Feature extraction'] },
      { type: 'Tools', tools: ['Python'] },
    ],
  },
  {
    title: 'Pet Health Vision Model',
    description: 'A visual identity system designed to feel airy, modern, and approachable.',
    githubUrl: null,
    mediaUrl: null,
    graphicUrl: null,
    graphicLabel: 'view media',
    mediaLabel: 'view report',
    thumbnail: proj3,
    techStack: [
      { type: 'AI/ML', tools: ['Classifiers', 'Regressors', 'Model evaluation'] },
      { type: 'Computer Vision', tools: ['Image segmentation', 'Feature extraction'] },
      { type: 'Tools', tools: ['Python'] },
    ],
  },
  {
    title: 'Autonomous Intelligence',
    description: 'A visual identity system designed to feel airy, modern, and approachable.',
    githubUrl: 'https://github.com/anote-ai/Autonomous-Intelligence',
    mediaUrl: paleBlueDotReport,
    graphicUrl: null,
    graphicLabel: 'view media',
    mediaLabel: 'view paper',
    thumbnail: autonomousIntelligenceThumbnail,
    techStack: [
      { type: 'AI/ML', tools: ['Classifiers', 'Regressors', 'Model evaluation'] },
      { type: 'Computer Vision', tools: ['Image segmentation', 'Feature extraction'] },
      { type: 'Tools', tools: ['Python'] },
    ],
  },
  {
    title: 'PreMed Profiles',
    description: 'A visual identity system designed to feel airy, modern, and approachable.',
    githubUrl: 'https://github.com/droooski/premedcheatsheet',
    mediaUrl: 'https://www.premedprofiles.com/',
    graphicUrl: null,
    graphicLabel: 'view media',
    mediaLabel: 'visit site',
    thumbnail: premedThumbnail,
    techStack: [
      { type: 'AI/ML', tools: ['Classifiers', 'Regressors', 'Model evaluation'] },
      { type: 'Computer Vision', tools: ['Image segmentation', 'Feature extraction'] },
      { type: 'Tools', tools: ['Python'] },
    ],
  },
  {
    title: 'Mutual Fund Calculator',
    description: 'A visual identity system designed to feel airy, modern, and approachable.',
    githubUrl: 'https://github.com/kostakarathana/Goldman_ELS',
    mediaUrl: 'https://goldman-els.vercel.app/#/calculator',
    graphicUrl: null,
    graphicLabel: 'view media',
    mediaLabel: 'visit site',
    thumbnail: mutualFundThumbnail,
    techStack: [
      { type: 'AI/ML', tools: ['Classifiers', 'Regressors', 'Model evaluation'] },
      { type: 'Computer Vision', tools: ['Image segmentation', 'Feature extraction'] },
      { type: 'Tools', tools: ['Python'] },
    ],
  },
  {
    title: 'Columbia University Lion Dance Team Website',
    description: 'A visual identity system designed to feel airy, modern, and approachable.',
    githubUrl: 'https://github.com/culiondance/culiondance.github.io',
    mediaUrl: 'https://culiondance.org/',
    graphicUrl: null,
    graphicLabel: 'view media',
    mediaLabel: 'visit site',
    thumbnail: lionDanceThumbnail,
    techStack: [
      { type: 'AI/ML', tools: ['Classifiers', 'Regressors', 'Model evaluation'] },
      { type: 'Computer Vision', tools: ['Image segmentation', 'Feature extraction'] },
      { type: 'Tools', tools: ['Python'] },
    ],
  },
  {
    title: 'Clockwork',
    description: 'A visual identity system designed to feel airy, modern, and approachable.',
    githubUrl: 'https://github.com/nathangendler/Clockwork',
    mediaUrl: 'https://devpost.com/software/clockwork-apkv01?_gl=1*14ulthh*_gcl_au*MTMxNTIwNDQxNC4xNzgwMTA2NDYz*_ga*MTQ3MDI4NTQ3OC4xNzgwMTA2NDY0*_ga_0YHJK3Y10M*czE3ODAxMDY0NjMkbzEkZzEkdDE3ODAxMDY0NzUkajQ4JGwwJGgw',
    graphicUrl: null,
    graphicLabel: 'view media',
    mediaLabel: 'DevPost',
    thumbnail: clockworkThumbnail,
    techStack: [
      { type: 'AI/ML', tools: ['Classifiers', 'Regressors', 'Model evaluation'] },
      { type: 'Computer Vision', tools: ['Image segmentation', 'Feature extraction'] },
      { type: 'Tools', tools: ['Python'] },
    ],
  },
  {
    title: 'PortfolioParty',
    description: 'A visual identity system designed to feel airy, modern, and approachable.',
    githubUrl: 'https://github.com/qiise/PortfolioParty',
    mediaUrl: null,
    graphicUrl: null,
    graphicLabel: 'view media',
    mediaLabel: 'visit site',
    thumbnail: proj3,
    techStack: [
      { type: 'AI/ML', tools: ['Classifiers', 'Regressors', 'Model evaluation'] },
      { type: 'Computer Vision', tools: ['Image segmentation', 'Feature extraction'] },
      { type: 'Tools', tools: ['Python'] },
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
                    <img src={project.thumbnail} alt={`${project.title} thumbnail`} />
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
