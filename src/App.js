import React, { Component } from 'react';
import './App.sass';
import kangarooSmall from './img/kangarooSmall.png';
import hamburger from './img/hamburger.png';
import close from './img/close.png';
import backgroundBest2 from './img/background-best2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuHamburger from './MenuHamburger';
import Photos from './Photos';
import AboutMe from './AboutMe'

class App extends Component {
  state = {
    isActive: false,
  }
  handleMenu = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }
  handleApp = () => {
    this.setState({
      isActive: false
    })
  }
  // componentDidMount(
  //   console.log(document.querySelector('main').height());
  // )
  render() {
    return (
      <>
        <div onClick={this.handleMenu} className="burger">
          <img className={this.state.isActive ? 'burger-img close' : 'burger-img'} alt="hamburger" src={this.state.isActive ? close : hamburger} />
        </div>
        <div className={this.state.isActive ? "App activeApp" : "App"} onClick={this.handleApp}>
          <img className="background" src={backgroundBest2} alt="background" />
          <header className='header'>
            <nav>
              <div>
                <img className="kangaroo" src={kangarooSmall} alt="kangaroo" />
              </div>
              <MenuHamburger isActive={this.state.isActive} handleApp={this.handleApp}/>
            </nav>
            <div className="main-logo">
              <h2>Kangur</h2>
              <h1>Photography</h1>
            </div>
          </header>
          <Photos />
          <AboutMe />
          <footer>
            <p>@yougonnagetyours 2020</p>
          </footer>
        </div >
      </>
    );
  }
}

export default App;
