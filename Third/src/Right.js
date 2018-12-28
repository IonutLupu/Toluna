import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Button from 'toluna-react-components/Inputs/Button';
import ThemeProvider from 'toluna-react-components/ThemeProvider';
import InputField from 'toluna-react-components/Inputs/InputField';

const FirstInput = styled.div
`
    margin:0px;
    display:inline-block;
`;

const SecondInput = styled.div
`
    margin-left:50px;
    display:inline-block;
`;


class Right extends Component {
    render() {
      return (
            <div>
                <h2>Welcome to Crowdise</h2>
                <span>
                    Let's get you all set up so you can verify  your nonprofit and begin setting up your first campaign!
                </span>
                <br />
                <br />
                <br />
                <br />
                <br />
                <span>
                    Already have an account?
                    <Button
                        onClick={() => alert('You haved logged in')}
                        buttonStyle={Button.BUTTON_STYLE.LINK_BUTTON}
                        text="Log in"
                    />
                </span>
                <br />
                <FirstInput>
                    <h5>First Name</h5>
                    <InputField type="text" placeholder="First name" width="200px" />
                </FirstInput>
                <SecondInput>
                    <h5>Last Name</h5>
                    <InputField type="text" placeholder="Last name" width="200px" />
                </SecondInput>
                <br />
                <FirstInput>
                    <h5>Phone</h5>
                    <InputField type="text" placeholder="Phone number" width="200px" />
                </FirstInput>
                <SecondInput>
                    <h5>Email</h5>
                    <InputField type="email" placeholder="Email" width="200px" />
                </SecondInput>
                <br />
                <FirstInput>
                    <h5>Password</h5>
                    <InputField type="password" placeholder="Password" width="200px" />
                </FirstInput>
                <SecondInput>
                    <h5>Confirm password</h5>
                    <InputField type="password" placeholder="Confirm password" width="200px" />
                </SecondInput>
            </div>
      );
    }
  }
  
  export default Right;