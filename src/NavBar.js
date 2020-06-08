import React from 'react';
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navBar'>
      <nav>
        <ul>
          <li className='about-me'><a href="/">O mnie</a></li>
          <li className='projects'><a href="/">Moje projekty</a></li>
          <li className='hobby'><a href="/">Zainteresowania</a></li>
          <li className='contact'><a href="/">Kontakt</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;