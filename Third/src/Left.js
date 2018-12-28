import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Cover from'./assets/crowd.jpg';

const Image = styled.img
`
    width:760px;
    height:964px;
`;
class Left extends Component {
    render() {
      return (
            <div>
              <Image  src={Cover}/>
            </div>
      );
    }
  }
  
  export default Left;