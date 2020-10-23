import React, { Component } from 'react';
import './App.sass';
import backgroundBest2 from './img/background-best2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import BurgerButton from './BurgerButton';
import Header from './Header';
import Photos from './Photos';
import Photos1 from './Photos1';
import AboutMe from './AboutMe';

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
  // <BurgerButton isActive={this.state.isActive} handleMenu={this.handleMenu} />
  render() {
    return (
      <>
        <BurgerButton isActive={this.state.isActive} handleMenu={this.handleMenu} />
        <div className={this.state.isActive ? "App activeApp" : "App"} onClick={this.handleApp}>
          <img className="background" src={backgroundBest2} alt="background" />
          <Header isActive={this.state.isActive} handleApp={this.handleApp} handlePortfolio={this.handlePortfolio}  />
          <Photos />
          <AboutMe />
          <Photos1 />
          <footer>
            <p>@yougonnagetyours 2020</p>
          </footer>
        </div >
      </>
    );
  }
}

export default App;
