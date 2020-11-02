import React from 'react';
import z1 from './img/z1.jpg';
import z2 from './img/z2.jpg';
import z3 from './img/z3.jpg';
import z4 from './img/z4.jpg';
import './Photos2.css';


const Photos2 = (props) => {

  // const isActive = props.isActive;

  return (
    <main className="photos2" id="photos2">
      <h2 className="photos2-header">
        <div className='top-header'>Zakopane</div>
        <div className='mid-header'>Pieniny</div>
        <div className='bott-header'>2020</div>
      </h2>
      <div className="image-box-3">
        <div>
          <img src={z1} alt="z1" />
        </div>
        <div>
          <img src={z2} alt="z2" />
        </div>
        <div>
          <img src={z3} alt="z3" />
        </div>
        <div>
          <img src={z4} alt="z4" />
        </div>
      </div>
    </main>
  );
}

export default Photos2;