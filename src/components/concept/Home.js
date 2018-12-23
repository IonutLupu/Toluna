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

const TextBoxIn  = styled.input`
    margin-top: 70px;
    width:25%;
    height:25px;
`;

const SignUpContainer = styled.div`
    margin-left:900px;    
`;

const ImgInSpan = styled.img`
    width:20px;
    height:25px;
    position:relative;
    top: 7px;
    left:-22px;
`;

const ButtonIn = styled.input`
  
    width:100px;
    height:31px;
    border:none;
    background-color:darkgrey;
    color: white;
    
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
               <SignUpContainer>
                <TextBoxIn  
                    type="text"
                    id="val"
                    name="title"
                    placeholder="Get out latest news" />
               
               <span  onClick={()=>window.confirm("Going to sign up page") }>
                        <ButtonIn 
                            type="submit"
                            id="val"
                            name="title"
                            value="SIGN UP" 
                           
                        />
                        <ImgInSpan src = {Arrow}  />
                        
                </span>
                    
                </SignUpContainer>  
               
          </HomeD>
        );
      }

}

export default Home