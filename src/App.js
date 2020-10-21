import React, { Component } from 'react';
import './App.sass';
import backgroundBest2 from './img/background-best2.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import BurgerButton from './BurgerButton';
import Header from './Header';
import Photos from './Photos';
import AboutMe from './AboutMe';

class App extends Component {
  state = {
    isActive: false,
    isPortfolioActive: false
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
  handlePortfolio = () =>{
    this.setState({
      isPortfolioActive: !this.state.isPortfolioActive
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
          <Header isActive={this.state.isActive} handleApp={this.handleApp} />
          <Photos />
          <AboutMe />
          <footer>
            <p>@yougonnagetyours 2020</p>
          </footer>
        </div >
        <aside className="portfolio-selection">
          <div className="header-aside"></div>
          <div className="photos1-aside"></div>
          <div className="photos2-aside"></div>
        </aside>
      </>
    );
  }
}

export default App;
