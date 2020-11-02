import React from 'react';
import './MenuPortfolio.css';
import { Link } from 'react-scroll';

const MenuPortfolio = (props) => {

  // const isActive = props.isActive;
  // const handleApp = props.handleApp;

  return (
    <section>
      <ul className="" >
        <li className='li'>
          <div className='li'>Portfolio ></div>
        </li>
        <li className='li'>
          <Link className='li' onClick='' to='about-me' smooth={true} duration={700}>About me</Link>
        </li>
        <li className='li'>Contact</li>
      </ul>
    </section>
  );
}

export default MenuPortfolio;