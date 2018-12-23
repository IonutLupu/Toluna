import React, { Component } from 'react';
import {BrowserRouter as Router, Route ,Link} from 'react-router-dom';

import MenuContainer from './components/common/Menu.js';
import Concept from './components/concept/Home.js';
import Designers from './components/designers/DesignersPage.js';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MenuContainer></MenuContainer>

          <Route path="/" exact component={Concept}></Route>
          <Route path="/designers" exact component={Designers}></Route>

          <h4 style={{textAlign:"center",color:"gray"}}>UK 2018</h4>
        </div>
      </Router>
    );
  }
}

export default App;
