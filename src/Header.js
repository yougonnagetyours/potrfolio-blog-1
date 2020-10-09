import React from 'react';
import kangarooSmall from './img/kangarooSmall.png';
import MenuHamburger from './MenuHamburger';

const Header = (props) => {

  const isActive = props.isActive;
  const handleApp = props.handleApp;

  return (
    <header className='header'>
      <nav>
        <div>
          <img className="kangaroo" src={kangarooSmall} alt="kangaroo" />
        </div>
        <MenuHamburger isActive={isActive} handleApp={handleApp}/>
      </nav>
      <div className="main-logo">
        <h2>Kangur</h2>
        <h1>Photography</h1>
      </div>
    </header>
  );
}

export default Header;