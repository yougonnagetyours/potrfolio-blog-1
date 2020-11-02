import React from 'react';
import baltic1 from './img/Baltic1.jpg';
import baltic2 from './img/Baltic2.jpg';
import baltic3 from './img/Baltic3.jpg';
import baltic4 from './img/Baltic4.jpg';
import baltic5 from './img/Baltic5.jpg';
import baltic6 from './img/Baltic6.jpg';
import baltic7 from './img/Baltic7.jpg';
import baltic8 from './img/Baltic8.jpg';
import baltic9 from './img/Baltic9.jpg';
import baltic10 from './img/Baltic10.jpg';
import baltic11 from './img/Baltic11.jpg';
import baltic12 from './img/Baltic12.jpg';
import baltic13 from './img/Baltic13.jpg';


const Photos1 = (props) => {

  // const isActive = props.isActive;

  return (
    <main className="photos1" id="photos1">
      <h2 className="photos1-header">
          <div className='top-header'>baltic</div>
          <div className='bott-header'>trip</div>
      </h2>
      <div className="image-box-2">
        <div>
          <img src={baltic1} alt="img1" />
        </div>
        <div>
          <img src={baltic2} alt="img2" />
        </div>
        <div>
          <img src={baltic3} alt="img3" />
        </div>
        <div>
          <img src={baltic4} alt="img4" />
        </div>
        <div>
          <img src={baltic5} alt="img5" />
        </div>
        <div>
          <img src={baltic6} alt="img6" />
        </div>
      </div>
    </main>
  );
}

export default Photos1;