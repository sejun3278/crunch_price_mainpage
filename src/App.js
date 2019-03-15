import React, { Component } from 'react';
import MainHeader from './MainHeader.js'
import ViewList from './ViewList.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainHeader />
        <ViewList />
      </div>
    );
  }
}

export default App