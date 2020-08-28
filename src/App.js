import React, { Component } from 'react';
import './App.sass';
import kangarooSmall from './img/kangarooSmall.png';
import hamburger from './img/hamburger.png';
import close from './img/close.png';
import backgroundBest2 from './img/background-best2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './img/IMG_2852.jpeg';
import img2 from './img/IMG_2863.jpeg';
import img3 from './img/IMG_2865.jpeg';
import img4 from './img/IMG_2867.jpeg';
import img5 from './img/IMG_2885.jpeg';
import img6 from './img/IMG_3386.jpeg';
import MenuHamburger from './MenuHamburger'

class App extends Component {
  state = {
    isActive: false,
  }

  handleMenu = () => {
    console.log('click')
    this.setState({
      isActive: !this.state.isActive
    })
  }
  render() {
    return (
      <div className={this.state.isActive ? "App activeApp" : "App"}>
        <img className="background" src={backgroundBest2} alt="background" />
        <header>
          <nav>
            <div>
              <img className="kangaroo" src={kangarooSmall} alt="kangaroo" />
            </div>
            <div onClick={this.handleMenu} className="burger">
              <img className={this.state.isActive ? 'burger-img close' : 'burger-img'} alt="hamburger" src={this.state.isActive ? close : hamburger} />
            </div>
            <MenuHamburger isActive={this.state.isActive} />
          </nav>
          <div className="main-logo">
            <h2>Kangur</h2>
            <h1>Photography</h1>
          </div>
        </header>
        <main>
          <div class="image-box">
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
        <section className="about-me">
          <div className="about-me-wrap">
            <div className="top">
              <h2>about</h2>
              <h1>me</h1>
            </div>
            <div className="body">
              <p>I am a passionate photographer, specialized in the landscapes, beautiful views and the people with nature in the background</p>
            </div>
          </div>
        </section>
        <footer>
          <p>@yougonnagetyours 2020</p>
        </footer>
      </div >
    );
  }
}

export default App;
