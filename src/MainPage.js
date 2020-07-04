import React, { Component } from 'react';
import './MainPage.css'
import Typewriter from 'typewriter-effect';

class MainPage extends Component {
  state = {
    text: "",
  }

  typeText = () => {

  }
  render() {
    return (
      <div>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Hello World!')
              .callFunction(() => {
                console.log('String typed out!');
              })
              .pauseFor(2500)
              .deleteAll()
              .callFunction(() => {
                console.log('All strings were deleted');
              })
              .typeString('Bye World!')
              .start();
          }}
        />
      </div>
    );
  }
}

export default MainPage;
