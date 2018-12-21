import React, { Component } from 'react';
import First from '../assets/5.jpeg';
import Second from '../assets/2.jpeg';
import Third from '../assets/3.jpeg';
import styled from "styled-components";



const ColorText = styled.div`
    background-color: gray;
`;

const Text = styled.div`
    position: relative;
    left:1000px;
    text-align: center;
    width:30%;
`;

const Title = styled.h3`
    position: relative;
    left:1000px;
    text-align: center;
    width:30%;
`;

const ImgSubSection = styled.div `
    position: relative;
    top:15px; 
`;

const Images = styled.img`
    width:25%;
    height:25%;
`;
class Designers extends Component
{

    constructor() {
        super();
     //   this.state = { data: "" };
    }
    
    
    
    render() {
        return (
          <div className="Designers">
             <ColorText>
                <Text>
                     <h3>We are</h3>
                     <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </p>
                </Text>
            </ColorText>
            <br></br>
            <br></br>
            <br></br>
            <Title>Our designers</Title>
            <div className="ImgSection" align="right">
                <Images src = {First}  />
                <Images src = {Second}  />
                
                <ImgSubSection>
                    <Images src = {Third}  />
                </ImgSubSection>
            </div>
             
          </div>
        );
      }

}

export default Designers