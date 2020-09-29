import React from 'react';
import './MenuHamburger.css';
import kangarooSmall from './img/kangarooBig.png';
import { Link } from 'react-scroll';

const MenuHamburger = (props) => {

  const isActive = props.isActive;

  return (
    <ul className={isActive ? "active" : "menu-hamburger"}>
      <img className="kangaroo-menu" src={kangarooSmall} alt="kangaroo" />
      <li className='li'>Home</li>
      <Link className='li' to='about-me' smooth={true} duration={1000}>About me</Link>
      <li className='li'>Contact</li>
    </ul>
  );
}

export default MenuHamburger;