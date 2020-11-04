import React from 'react';
import './Contact.css';
import { Link } from 'react-scroll';
import kangarooSmall from './img/kangarooBig.png';

const Contact = (props) => {

  // const isActive = props.isActive;
  // const handleApp = props.handleApp;

  return (
    <section className="contact-container" id="contact-container">
      <ul className="" >
        <li className='li'>
          <img className="kangaroo-menu" src={kangarooSmall} alt="kangaroo" />
        </li>
        <li className='li'>
          Kangur Photography
        </li>
        <li className='li'>
          Instagram
        </li>
        <li className='li'>
          facebook
        </li>
      </ul>
    </section>
  );
}

export default Contact;