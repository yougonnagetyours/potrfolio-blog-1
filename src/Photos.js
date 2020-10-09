import React from 'react';
import img1 from './img/IMG_2852.jpeg';
import img2 from './img/IMG_2863.jpeg';
import img3 from './img/IMG_2865.jpeg';
import img4 from './img/IMG_2867.jpeg';
import img5 from './img/IMG_2885.jpeg';
import img6 from './img/IMG_3386.jpeg';

const Photos = (props) => {

  // const isActive = props.isActive;

  return (
    <main>
      <div className="image-box">
        <div>
          <img src={img1} alt="img1" />
        </div>
        <div>
          <img src={img2} alt="img2" />
        </div>
        <div>
          <img src={img3} alt="img3" />
        </div>
        <div>
          <img src={img4} alt="img4" />
        </div>
        <div>
          <img src={img5} alt="img5" />
        </div>
        <div>
          <img src={img6} alt="img6" />
        </div>
      </div>
    </main>
  );
}

export default Photos;