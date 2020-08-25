import React from 'react';
import './MenuHamburger.css';

const MenuHamburger = (props) => {

  const isActive = props.isActive;

  return (
    <nav className={isActive ? "active" : "menu-hamburger"}>
      <ul>
        <li>Home</li>
        <li>About me</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default MenuHamburger;