import React, { Component } from 'react';
import './App.css';
import kangarooSmall from './img/kangarooSmall.png';
import hamburger from './img/hamburger.png';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {


  render() {
    return (
      // <div className="App">
      //   <header>
      //     <img className="kangaroo" src={kangarooSmall} alt="kangaroo" />
      //     <div className="main-logo">
      //       <h2>Kangur</h2>
      //       <h1>Photography</h1>
      //     </div>
      //   </header>
      // </div>
      <div className="App">
        <header>
          <nav className="navbar navbar-expand-md navbar-top">
            <a className="navbar-brand" href="#">
              <img className="kangaroo" src={kangarooSmall} alt="kangaroo" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              {/* <span className="navbar-toggler-icon"></span> */}
              <img className='hamburger' src={hamburger} alt="hamburger" />
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default App;
