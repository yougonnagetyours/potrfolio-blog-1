import React from 'react';
import './MenuHamburger.css';

const MenuHamburger = (props) => {

  const isActive = props.isActive;

  return (
    <ul className={isActive ? "active" : "menu-hamburger"}>
      <li>Home</li>
      <li>About me</li>
      <li>Contact</li>
    </ul>
  );
}

export default MenuHamburger;