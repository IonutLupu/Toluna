import React, { Component } from 'react';
import Bike from '../assets/bike-poster.jpeg';
import Arrow from '../assets/icon-plane-white.png';

import styled from "styled-components";

const Images = styled.img`
    width:100%;
    height:680px;
    float:left;
`;
const HomeD = styled.div`
    width:100%;
`;

const TextBoxIn = styled.input`
    width:25%;
    height:25px;
    position:relative;
    left:900px;
    top:100px;
    float:left;
`;

const ButtonIn = styled.input`
    margin:0px;
    width:6%;
    height:30px;
    border:none;
    float:left;
    position:relative;
    left:900px;
    top:100px;
    background-color:darkgrey;
    color: white;
`;

const ImgInSpan = styled.img`
    width:20px;
    height:25px;
    position:relative;
    left:875px;
    top:100px;
`;
class Home extends Component
{

    constructor() {
        super();
        this.state = { data: "" };
    }
    
 
    
    render() {
        return (
          <HomeD>
              <Images src = {Bike}  />

              <TextBoxIn 
                    type="text"
                    id="val"
                    name="title"
                    placeholder="Get out latest news"    
                />
                <p>{this.state.data}</p> 
                <span  onClick={()=>window.confirm("Going to sign up page") }>
                <ButtonIn 
                    type="submit"
                    id="val"
                    name="title"
                    value="SIGN UP" 
                    
                   
                />
                <ImgInSpan src = {Arrow}  />
                </span>
          
          </HomeD>
        );
      }

}

export default Home