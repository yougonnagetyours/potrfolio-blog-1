import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <MainPage />
      </div>
    );
  }
}

export default App;
