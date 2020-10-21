import React from 'react';
import './MenuHamburger.css';
import kangarooSmall from './img/kangarooBig.png';
import { Link } from 'react-scroll';

const MenuHamburger = (props) => {

  const isActive = props.isActive;
  const handleApp = props.handleApp;
  const isPortfolioActive = props.isPortfolioActive;
  const handlePortfolio = props.handlePortfolio;

  return (
    <ul className={(isActive ? "menu-hamburger active" : "menu-hamburger")||(isPortfolioActive ? "menu-hamburger active-portfolio" : "menu-hamburger")} >
      <img className="kangaroo-menu" src={kangarooSmall} alt="kangaroo" />
      <li className='li' onClick={handlePortfolio}>
        <div className='li'>Home</div>
      </li>
      <li className='li'>
        <Link className='li' onClick={handleApp} to='about-me' smooth={true} duration={700}>About me</Link>
      </li>
      <li className='li'>Contact</li>
    </ul>
  );
}

export default MenuHamburger;