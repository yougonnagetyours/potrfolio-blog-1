import React, { Component } from 'react';
import './App.css';
import kangarooSmall from './img/kangarooSmall.png';
import hamburger from './img/hamburger.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './img/IMG_2852.jpeg';
import img2 from './img/IMG_2863.jpeg';
import img3 from './img/IMG_2865.jpeg';
import img4 from './img/IMG_2867.jpeg';
import img5 from './img/IMG_2885.jpeg';
import img6 from './img/IMG_3386.jpeg';

class App extends Component {


  render() {
    return (
      <div className="App">
        <header>
          <nav className="navbar navbar-expand-sm navbar-top">
            <a className="navbar-brand" href="#">
              <img className="kangaroo" src={kangarooSmall} alt="kangaroo" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <img className='hamburger' src={hamburger} alt="hamburger" />
            </button>
            {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
               </ul> 
            </div>*/}
          </nav>
          <div className="main-logo">
            <h2>Kangur</h2>
            <h1>Photography</h1>
          </div>
        </header>
        <main>
          <div class="container">
            <div class="row">
              <div class="col-sm px-0 col-sm-4 px-2 pb-3">
                <img src={img1} className="img-fluid" alt="img1" />
              </div>
              <div class="col-sm px-0 col-sm-4 px-2 pb-3">
                <img src={img2} className="img-fluid" alt="img1" />
              </div>
              <div class="col-sm px-0 col-sm-4 px-2 pb-3">
                <img src={img3} className="img-fluid" alt="img1" />
              </div>
              <div class="col-sm px-auto mx-auto col-sm-4 px-2 pb-3">
                <img src={img4} className="img-fluid" alt="img1" />
              </div>
              <div class="col-sm px-auto mx-auto col-sm-4 px-2 pb-3">
                <img src={img5} className="img-fluid" alt="img1" />
              </div>
              <div class="col-sm px-0 col-sm-4 px-2 pb-3">
                <img src={img6} className="img-fluid" alt="img1" />
              </div>
            </div>
          </div>
        </main>
        <section className="about-me">
          {/* <p>ble ble ble</p> */}
        </section>
      </div >
    );
  }
}

export default App;
