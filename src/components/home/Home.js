import React, { Component } from 'react';
import Bike from '../assets/bike-poster.jpeg';
import Arrow from '../assets/icon-plane-white.png';
import './styleHome.css';


class Home extends Component
{

    constructor() {
        super();
        this.state = { data: "" };
    }
    
 
    
    render() {
        return (
          <div className="Home">
              <img src = {Bike} as = "Bike" />

              <input className="TextBox"
                    type="text"
                    id="val"
                    name="title"
                    placeholder="Get out latest news"
                   // onChange={this.handle.bind(this)}
                    
                />
                <p>{this.state.data}</p> 
                <span  onClick={()=>window.confirm("Going to sign up page") }>
                <input className = "Button"
                    type="submit"
                    id="val"
                    name="title"
                    value="SIGN UP" 
                    
                   
                />
                <img src = {Arrow} as = "Arrow" />
                </span>
          
          </div>
        );
      }

}

export default Home