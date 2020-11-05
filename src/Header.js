import React from 'react';
import './Header.css';
import kangarooSmall from './img/kangarooSmall.png';
import MenuHamburger from './MenuHamburger';

const Header = (props) => {

  const isActive = props.isActive;
  const handleApp = props.handleApp;
  const isPortfolioActive = props.isPortfolioActive;
  const handlePortfolio = props.handlePortfolio;

  return (
    <header className='header'>
      <nav>
        <div className="kangaroo-container">
          <img className="kangaroo" src={kangarooSmall} alt="kangaroo" />
        </div>
        <MenuHamburger isActive={isActive} handleApp={handleApp} handlePortfolio={handlePortfolio} isPortfolioActive={isPortfolioActive} />
      </nav>
      <div className="main-logo">
        <h2>Kangur</h2>
        <h1>Photography</h1>
      </div>
    </header>
  );
}

export default Header;