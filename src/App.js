import React, { Component } from 'react';
import Home from './components/home/Home';
import Designers from './components/designers/DesignersPage';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Designers />
        </div>
    );
  }
}

export default App;
