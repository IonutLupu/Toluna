import React, { Component } from 'react';
import './App.css';
import Right from './Right.js';
import Left from './Left.js';
import styled from 'styled-components';

const LeftSide= styled.div`
  margin:0px;
  width:50%;
  float:left;
`;

const RightSide= styled.div`
  margin:0px;
  width:50%;
  float:left;
  position:realative;
  left:950 px;
`;
class App extends Component {
  render() {
    return (  
      <div>
          <LeftSide><Left /></LeftSide>
         <RightSide><Right /></RightSide>
      </div>
    );
  }
}

export default App;
