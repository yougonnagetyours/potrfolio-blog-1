import React from 'react';
import './MenuPortfolio.css';
import { Link } from 'react-scroll';

const MenuHamburger = (props) => {

  const isActive = props.isActive;
  const handleApp = props.handleApp;

  return (
    <ul className={isActive ? "menu-hamburger active" : "menu-hamburger"} >
      <li className='li'>
        <div className='li'>Portfolio ></div>
      </li>
      <li className='li'>
        <Link className='li' onClick={handleApp} to='about-me' smooth={true} duration={700}>About me</Link>
      </li>
      <li className='li'>Contact</li>
    </ul>
  );
}

export default MenuHamburger;