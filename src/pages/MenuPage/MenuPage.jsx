import { Link } from 'react-router-dom';
import PortfolioLayout from '../../components/PortfolioLayout';
import './styles.css';
import cloud from '../../../assets/Light cloud 3.png';
import cloud2 from '../../../assets/Cloud 4 light.png';
import cloud3 from '../../../assets/Cloud 5 light.png';

const navItems = [
  { path: '/about', label: 'About me' },
  { path: '/projects', label: 'Projects' },
  { path: '/experiences', label: 'Experiences' },
  { path: '/creative', label: 'Creative space' },
];

function MenuPage() {
  return (
    <div className="page-styling">
      <img src={cloud2} alt="" className="menu-cloud-2" />
      <img src={cloud3} alt="" className="menu-cloud-3" />
      <PortfolioLayout title="Where to next ?" isMenu>
        <div className="menu-grid">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className="menu-card">
              <span className="menu-card-label">{item.label}</span>
            </Link>
          ))}
        </div>
        <img src={cloud} alt="" className="menu-cloud" />
      </PortfolioLayout>
    </div>
    
  );
}

export default MenuPage;
