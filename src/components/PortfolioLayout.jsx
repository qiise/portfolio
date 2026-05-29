import { Link } from 'react-router-dom';

function PortfolioLayout({ title, children, isMenu = false }) {
  return (
    <div className={`portfolio-page${isMenu ? ' menu-page' : ''}`}>
      <header className="portfolio-header">
        <div>
          <p className="brand">{isMenu ? 'Hannah Qi' : 'Hannah Qi'}</p>
          <h1>{title}</h1>
        </div>
        <nav className="portfolio-nav">
          {!isMenu && (
            <Link className="ghost-button" to="/menu">
              Back to menu
            </Link>
          )}
          {isMenu && (
            <Link className="ghost-button" to="/">
              Back to landing
            </Link>
          )}
          
        </nav>
      </header>

      <main className="portfolio-main">{children}</main>
      
    </div>
  );
}

export default PortfolioLayout;
