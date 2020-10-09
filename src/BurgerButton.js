import React from 'react';
import hamburger from './img/hamburger.png';
import close from './img/close.png';

const BurgerButton = (props) => {

  const isActive = props.isActive;
  const handleMenu = props.handleMenu;

  return (
    <div onClick={handleMenu} className="burger">
      <img className={isActive ? 'burger-img close' : 'burger-img'} alt="hamburger" src={isActive ? close : hamburger} />
    </div>
  );
}

export default BurgerButton;