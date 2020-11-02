import React from 'react';
import './MenuPortfolio.css';
import { Link } from 'react-scroll';

const MenuPortfolio = (props) => {

  // const isActive = props.isActive;
  // const handleApp = props.handleApp;

  return (
    <section className="menu-portfolio" id="menu-portfolio">
      <ul className="" >
        <li className='li'>
          <Link className='li' to='photos1' smooth={true} duration={700}>Baltic trip</Link>
        </li>
        <li className='li'>
          <Link className='li' to='photos2' smooth={true} duration={700}>Zakopane/Pieniny 2020</Link>
        </li>
      </ul>
    </section>
  );
}

export default MenuPortfolio;