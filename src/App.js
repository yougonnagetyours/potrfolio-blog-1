import React, { Component } from 'react';
import './App.sass';
import kangarooSmall from './img/kangarooSmall.png';
import hamburger from './img/hamburger.png';
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
      <div className="App">
        <header>
          <nav className="navbar navbar-expand-sm navbar-top">
            <a className="navbar-brand" href="#">
              <img className="kangaroo" src={kangarooSmall} alt="kangaroo" />
            </a>
            <button onClick={this.handleMenu} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <img className='hamburger' src={hamburger} alt="hamburger" />
            </button>
          </nav>
          <div className="main-logo">
            <h2>Kangur</h2>
            <h1>Photography</h1>
          </div>
        </header>
        <MenuHamburger isActive={this.state.isActive} />
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
          <div className="about-me-wrap">
            <div className="top">
              <h2>about</h2>
              <h1>me</h1>
            </div>
            <div className="body">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatem necessitatibus laboriosam aspernatur incidunt quod quam quas debitis dolorem velit aliquid provident, corrupti hic obcaecati porro ipsum, cupiditate id! Sit</p>
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
