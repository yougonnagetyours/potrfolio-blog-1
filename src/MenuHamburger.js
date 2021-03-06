import React from 'react';
import './MenuHamburger.css';
import kangarooSmall from './img/kangarooBig.png';
import { Link } from 'react-scroll';

const MenuHamburger = (props) => {

  const isActive = props.isActive;
  const handleApp = props.handleApp;

  return (
    <ul className={isActive ? "menu-hamburger active" : "menu-hamburger"} >
      <img className="kangaroo-menu" src={kangarooSmall} alt="kangaroo" />
      <li className='li'>
        <Link className='li' onClick={handleApp} to='portfolio-slide' smooth={true} duration={700}>Portfolio</Link>
      </li>
      <li className='li'>
        <Link className='li' onClick={handleApp} to='about-me' smooth={true} duration={700}>About me</Link>
      </li>
      <Link className='li' onClick={handleApp} to='contact-container' smooth={true} duration={700}>Contact</Link>
    </ul>
  );
}

export default MenuHamburger;