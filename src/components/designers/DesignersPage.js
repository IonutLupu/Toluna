import React, { Component } from 'react';
import First from '../assets/5.jpeg';
import Second from '../assets/2.jpeg';
import Third from '../assets/3.jpeg';
import styled from "styled-components";

const ColorText = styled.div`
    background-color: lightgray;
`;

const Text = styled.div`
    margin-left: 1100px;
    width:400px;
    text-align:center;

`;

const Title = styled.h3`
    margin-left: 1100px;
    width:400px;
    text-align:center;
    font-size:150%;
`;


const Images = styled.img`
    margin:10px;
`;

const ImageContainer = styled.div`
    margin-left:1050px;
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
            <Title>Our designers</Title>
            <ImageContainer>
                <Images src = {First} width="250px" height="auto" />
                <Images src = {Second} width="250px" height="auto" />
                
                <div>
                    <Images src = {Third} width="520px" height="auto"/>
                </div>
            </ImageContainer>
             
          </div>
        );
      }

}

export default Designers