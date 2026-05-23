import { Link } from 'react-router-dom';

function PortfolioLayout({ title, children, isMenu = false }) {
  return (
    <div className="portfolio-page">
      <header className="portfolio-header">
        <div>
          <p className="brand">Portfolio light mode</p>
          <h1>{title}</h1>
          <p>
            {isMenu
              ? 'Navigate with the buttons below to view each section on its own page.'
              : 'Each section is displayed independently so you can focus on the content you want.'}
          </p>
        </div>
        <nav className="portfolio-nav">
          {!isMenu && (
            <Link className="ghost-button" to="/menu">
              Back to menu
            </Link>
          )}
          <Link className="ghost-button" to="/">
            Back to landing
          </Link>
        </nav>
      </header>

      <main className="portfolio-main">{children}</main>
    </div>
  );
}

export default PortfolioLayout;
