import React, { Component } from 'react';
import './App.css';
import Right from './Right.js';
import Left from './Left.js';
import styled from 'styled-components';

const LeftSide= styled.div
`
  margin:0px;
  display:inline-block; 
 
`;

const RightSide= styled.div
`
  margin-top: -100px;
  margin-left:50px;
  display:inline-block;
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
