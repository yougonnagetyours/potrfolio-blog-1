import React from 'react';
import './MenuHamburger.css';
import kangarooSmall from './img/kangarooBig.png';

const MenuHamburger = (props) => {

  const isActive = props.isActive;

  return (
    <ul className={isActive ? "active" : "menu-hamburger"}>
      <img className="kangaroo-menu" src={kangarooSmall} alt="kangaroo" />
      <li>Home</li>
      <li>About me</li>
      <li>Contact</li>
    </ul>
  );
}

export default MenuHamburger;