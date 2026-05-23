import { Link } from 'react-router-dom';
import PortfolioLayout from '../components/PortfolioLayout';

const navItems = [
  { path: '/about', label: 'About me' },
  { path: '/projects', label: 'Projects' },
  { path: '/experiences', label: 'Experiences' },
  { path: '/creative', label: 'Creative space' },
];

function MenuPage() {
  return (
    <PortfolioLayout title="Choose a section to explore" isMenu>
      <div className="menu-grid">
        {navItems.map((item) => (
          <Link key={item.path} to={item.path} className="menu-card">
            <span className="menu-card-label">{item.label}</span>
            <p>Open the {item.label.toLowerCase()} page with focused content and clean layout.</p>
          </Link>
        ))}
      </div>
    </PortfolioLayout>
  );
}

export default MenuPage;
