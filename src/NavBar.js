import React from 'react';
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navBar'>
      <nav>
        <ul>
          <li><a href="/">O mnie</a></li>
          <li><a href="/">Moje projekty</a></li>
          <li><a href="/">Zainteresowania</a></li>
          <li><a href="/">Kontakt</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;