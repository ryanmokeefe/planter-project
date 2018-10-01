import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Info from './Components/Info.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Tree Plotter</h1>
        </header>
        
        <Info />

        
      </div>
    );
  }
}

export default App;
