import React from 'react';
import aboutMePic from './img/aboutMePic.jpg';

const AboutMe = (props) => {

  // const isActive = props.isActive;

  return (
    <section className="about-me" id="about-me">
      <div className="about-me-container">
        <div className="about-me-wrap">
          <div className="top">
            <h2>about</h2>
            <h1>me</h1>
          </div>
          <div className="body">
            <p>I am a passionate photographer, specialized in the landscapes, beautiful views and the people with nature in the background</p>
          </div>
        </div>
        <div className="about-me-box">
          <div>
            <img src={aboutMePic} alt="boguś" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;