import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Button from 'toluna-react-components/Inputs/Button';
import ThemeProvider from 'toluna-react-components/ThemeProvider';
import InputField from 'toluna-react-components/Inputs/InputField';
import Label from 'toluna-react-components/Label';
import Title from 'toluna-react-components/Title';
import DropdownMenu from 'toluna-react-components/DropdownMenu/DropdownMenu';
import Cover from'./assets/privacy.jpeg';
import Modal from 'toluna-react-components/Modals/Modal';
import ScrollBar from 'toluna-react-components/Containers/Scroll';
const FirstInput = styled.div`
    margin:0px;
    display:inline-block;
`;

const SecondInput = styled.div`
    margin-left:10%;
    display:inline-block;
`;

const Container = styled.div`
    padding:5%;
`;

const LanguageBar = styled.div`
    position:absolute;
    right:10px;
`;
const btnComponent2 = (
    <Button
      buttonStyle={Button.BUTTON_STYLE.OVAL_WITH_ICON}
      iconName="tip"
      iconType="toluna"
      text="Language"
      small
    />
  ); 

const LeftSide = styled.div`
    margin:0px;
    width:50%;
    float:left; 
`;

const RightSide = styled.div`
    margin:0px;
    width:50%;
    float:left;
    position:realative;
    left:950 px;
`;

const Image = styled.img`
    
    width:100%;
    height:550px;
`;
const wrapperDivStyle = {
    width: '100%',
    height: 'auto',
    border: '1px solid rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};
const contentDivStyleWithShadow = {
    width: '88%',
    marginLeft: '2.5%',
    padding: '2% 0%'
};



const ModalContainer=styled.div`
    margin:0px;
`;
class Right extends Component {
    constructor(props){
        super(props);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);

        this.state = {
            showModal: false
        };
    }

    hideModal(){
        this.setState({
            showModal: false
        });
    }
    showModal(){
        this.setState({
            showModal: true
        });
    }
    
    
    render() {
        const {showModal} = this.state;
        let that = this;
      return (
        <Container>
            <div>
                <Label><Title title="Welcome to Crowdrise" fontSize={32} fontSizeUnit="px"></Title></Label>
                <br />
                <br />
                <Label>
                    Let's get you all set up so you can verify  your nonprofit and begin setting up your first campaign!
                </Label>
                <br />
                <br />
                <br />
                <br />
                <br />
                <span>
                    <Label>Already have an account?</Label>
                    <ThemeProvider config={{lightColor: '#008CBA'}}>
                         <Button
                            onClick={() => alert('You haved logged in')}
                            buttonStyle={Button.BUTTON_STYLE.LINK_BUTTON}
                            text="Log in"
                         />
                    </ThemeProvider>
                </span>
                <br />
                <br />
                <FirstInput>
                    <Label>First Name</Label>
                    <InputField type="text" placeholder="First name" width="200px" />
                </FirstInput>
                <SecondInput>
                    <Label>Last Name</Label>
                    <InputField type="text" placeholder="Last name" width="200px" />
                </SecondInput>
                <br />
                <FirstInput>
                    <Label>Phone</Label>
                    <InputField type="text" placeholder="Phone number" width="200px" />
                </FirstInput>
                <SecondInput>
                    <Label>Email</Label>
                    <InputField type="email" placeholder="Email" width="200px" />
                </SecondInput>
                <br />
                <FirstInput>
                    <Label>Password</Label>
                    <InputField type="password" placeholder="Password" width="200px" />
                </FirstInput>
                <SecondInput>
                    <Label>Confirm password</Label>
                    <InputField type="password" placeholder="Confirm password" width="200px" />
                </SecondInput>
                <br />
                <br />
                <input type="checkbox" name="check1" value="First" />
                <Label>Yes, I want to receive Crowdrise emails</Label>
                <br />
                <input type="checkbox" name="check2" value="Second" />
                <Label>I agree to the </Label>
                <ThemeProvider config={{lightColor: '#008CBA'}}>
                    <Button
                        onClick={() => alert('This are the terms!')}
                        buttonStyle={Button.BUTTON_STYLE.LINK_BUTTON}
                        text="Terms"
                    />
                </ThemeProvider>
                <Label>,</Label>
                <ThemeProvider config={{lightColor: '#008CBA'}}>
                    <Button
                        onClick={this.showModal}
                        buttonStyle={Button.BUTTON_STYLE.LINK_BUTTON}
                        text="Privacy policy"
                    />
                </ThemeProvider>
                <Label> and </Label>
                <ThemeProvider config={{lightColor: '#008CBA'}}>
                    <Button
                        onClick={() => alert('Fees!!!')}
                        buttonStyle={Button.BUTTON_STYLE.LINK_BUTTON}
                        text="Fees"
                    />
                </ThemeProvider>
                <br />
                <br />
                <br />
                <br />
                <ThemeProvider config={{lightColor: '#008CBA'}}>
                    <Button
                        onClick={() => alert('Sign up!!!')}
                        buttonStyle={Button.BUTTON_STYLE.RECTANGLE}
                        text="Sign up"
                        small
                        primary
                    />
                </ThemeProvider>
                <br />
                <br />
                <Label>Don't work for a nonprofit? </Label>
                <ThemeProvider config={{lightColor: '#008CBA'}}>
                    <Button
                        onClick={() => alert('This are the terms!')}
                        buttonStyle={Button.BUTTON_STYLE.LINK_BUTTON}
                        text="You can still fundraise for one"
                    />
                </ThemeProvider>
                <br />
                <br />
                <br />
                <LanguageBar>
                    <ThemeProvider config={{lightColor: 'CCCCCC'}}>
                    <DropdownMenu btnComponent={btnComponent2} wrapperWidth="auto" menuWidth="100%" menuPosition={DropdownMenu.MENU_POSITION.TOP}>
                        <DropdownMenu.Element text="Italian" onClick={() => alert('aaa')} />
                        <DropdownMenu.Element text="English" onClick={() => alert('bbb')} />
                        <DropdownMenu.Element text="German" onClick={() => alert('ccc')} />
                        <DropdownMenu.Element text="Romanian" onClick={() => alert('ddd')} />
                        <DropdownMenu.Element text="Russian" onClick={() => alert('eee')} />
                    </DropdownMenu>
                    </ThemeProvider>
                </LanguageBar>
            </div>
            {showModal &&(
                <div>
                    <Modal onClose={this.hideModal} width={"70%"}>
                        <Modal.Body>
                            <div>
                                
                                <LeftSide><Image src = {Cover} alt= "Cover picture"/></LeftSide>
                                <RightSide>
                                   
                                    <Title title="Privacy Policy" fontSize={32} fontSizeUnit="px"></Title>
                                    <div style={wrapperDivStyle}>
                                        <ScrollBar
                                            width={'100%'}
                                            autoHeightMax={500}
                                            autoHeight
                                            withShadow
                                            scrollStyle={ScrollBar.SCROLL_STYLE.DARK}
                                        >   
                                            <div style={contentDivStyleWithShadow}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque nec nam aliquam sem et tortor consequat id porta. Consequat ac felis donec et odio pellentesque. Tellus orci ac auctor augue mauris augue neque. Ut tortor pretium viverra suspendisse potenti nullam. Mauris in aliquam sem fringilla ut morbi tincidunt augue. Vitae nunc sed velit dignissim sodales ut eu. Nulla aliquet enim tortor at auctor urna nunc id cursus. Magna fringilla urna porttitor rhoncus. Massa tempor nec feugiat nisl pretium fusce id velit ut. Cursus risus at ultrices mi. Nec dui nunc mattis enim ut. Eget mauris pharetra et ultrices neque. Pellentesque diam volutpat commodo sed. Sed vulputate mi sit amet mauris commodo. Viverra maecenas accumsan lacus vel facilisis volutpat. Interdum varius sit amet mattis vulputate enim nulla. Scelerisque mauris pellentesque pulvinar pellentesque.

                                            Lobortis mattis aliquam faucibus purus in. Adipiscing at in tellus integer. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. At quis risus sed vulputate. Velit dignissim sodales ut eu sem integer vitae justo. Diam donec adipiscing tristique risus. Ultricies integer quis auctor elit sed vulputate mi sit amet. Duis ut diam quam nulla porttitor. Id nibh tortor id aliquet lectus. Sagittis orci a scelerisque purus semper eget.

                                            Egestas diam in arcu cursus euismod. Sit amet nisl suscipit adipiscing bibendum. Lectus urna duis convallis convallis tellus id interdum. Sed egestas egestas fringilla phasellus. Quam pellentesque nec nam aliquam. Dolor sed viverra ipsum nunc aliquet. Viverra orci sagittis eu volutpat odio facilisis mauris sit. Viverra tellus in hac habitasse. Aliquam id diam maecenas ultricies mi eget mauris. Suspendisse in est ante in. Augue neque gravida in fermentum et. Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Egestas egestas fringilla phasellus faucibus scelerisque. Et malesuada fames ac turpis egestas sed tempus urna et. Amet est placerat in egestas erat imperdiet sed euismod nisi. Neque laoreet suspendisse interdum consectetur libero id. Sed adipiscing diam donec adipiscing tristique risus. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque.

                                            In eu mi bibendum neque egestas congue quisque egestas. At quis risus sed vulputate odio ut enim. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Turpis egestas integer eget aliquet. Velit sed ullamcorper morbi tincidunt. Eget felis eget nunc lobortis mattis aliquam. Sed viverra tellus in hac habitasse. Amet risus nullam eget felis. Neque viverra justo nec ultrices dui sapien eget mi proin. Posuere ac ut consequat semper viverra nam. Et malesuada fames ac turpis egestas. Tellus at urna condimentum mattis pellentesque id. Neque gravida in fermentum et sollicitudin. Sed faucibus turpis in eu mi. Nisl vel pretium lectus quam id leo in vitae turpis. Ipsum dolor sit amet consectetur adipiscing. Sed enim ut sem viverra.

                                            Augue ut lectus arcu bibendum at. Pellentesque sit amet porttitor eget. Integer vitae justo eget magna. Arcu risus quis varius quam quisque id diam vel. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Ipsum dolor sit amet consectetur adipiscing elit ut. Mi bibendum neque egestas congue quisque. Quis varius quam quisque id diam vel quam elementum. Ac ut consequat semper viverra nam. At elementum eu facilisis sed odio morbi quis commodo odio. Morbi tincidunt augue interdum velit euismod in. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Velit laoreet id donec ultrices tincidunt arcu. Faucibus ornare suspendisse sed nisi lacus sed viverra. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. Volutpat blandit aliquam etiam erat velit. Consectetur adipiscing elit pellentesque habitant.

                                            Quis varius quam quisque id. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Cras pulvinar mattis nunc sed blandit libero volutpat. Eget magna fermentum iaculis eu non. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Justo eget magna fermentum iaculis eu. Sagittis purus sit amet volutpat consequat mauris nunc congue. Maecenas pharetra convallis posuere morbi leo urna molestie at. At tellus at urna condimentum mattis. Ante metus dictum at tempor commodo ullamcorper. Malesuada pellentesque elit eget gravida cum. Purus gravida quis blandit turpis cursus in hac habitasse platea. Amet justo donec enim diam vulputate ut pharetra sit. Massa enim nec dui nunc mattis. Integer vitae justo eget magna fermentum iaculis eu. Amet justo donec enim diam vulputate. Enim diam vulputate ut pharetra sit amet aliquam id diam. Elementum curabitur vitae nunc sed velit dignissim sodales. Sed odio morbi quis commodo odio aenean sed adipiscing. Placerat in egestas erat imperdiet.

                                            Dui ut ornare lectus sit amet est placerat in. In tellus integer feugiat scelerisque varius morbi enim. Gravida arcu ac tortor dignissim convallis aenean et tortor. Volutpat commodo sed egestas egestas. Tortor condimentum lacinia quis vel eros donec. Quisque non tellus orci ac auctor augue mauris. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Pretium quam vulputate dignissim suspendisse in est ante. Nunc id cursus metus aliquam eleifend mi. Enim nunc faucibus a pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada.

                                            Suscipit adipiscing bibendum est ultricies integer quis. Faucibus vitae aliquet nec ullamcorper sit amet risus. Massa id neque aliquam vestibulum morbi blandit cursus. Ultricies mi eget mauris pharetra et ultrices neque. Viverra maecenas accumsan lacus vel facilisis volutpat est velit egestas. Congue quisque egestas diam in arcu cursus euismod quis viverra. Convallis tellus id interdum velit. Arcu dictum varius duis at consectetur lorem. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Curabitur vitae nunc sed velit. Eget aliquet nibh praesent tristique. Hendrerit dolor magna eget est lorem ipsum dolor. Enim blandit volutpat maecenas volutpat blandit aliquam. Tempor nec feugiat nisl pretium fusce id velit ut. Tincidunt lobortis feugiat vivamus at augue. Libero volutpat sed cras ornare arcu dui.

                                            Volutpat est velit egestas dui id ornare. Sed odio morbi quis commodo odio aenean sed. Fringilla ut morbi tincidunt augue interdum velit euismod in. Eget nulla facilisi etiam dignissim diam quis enim lobortis. Viverra justo nec ultrices dui sapien. Viverra orci sagittis eu volutpat odio facilisis. Nisl vel pretium lectus quam id leo in vitae turpis. Sed enim ut sem viverra. Enim sed faucibus turpis in eu mi bibendum. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae.

                                            Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Id nibh tortor id aliquet. Mattis aliquam faucibus purus in massa tempor nec. At urna condimentum mattis pellentesque id nibh tortor id. Nisl pretium fusce id velit. Pharetra magna ac placerat vestibulum lectus mauris ultrices. Turpis cursus in hac habitasse platea dictumst quisque sagittis. Lorem ipsum dolor sit amet. Vivamus arcu felis bibendum ut. Arcu non odio euismod lacinia at quis. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Ante in nibh mauris cursus. Semper viverra nam libero justo laoreet sit amet. Amet nisl purus in mollis nunc. In hac habitasse platea dictumst vestibulum rhoncus.
                                            </div>
                                        </ScrollBar>
                                    </div>
                                    <br />
                                    <br />
                                    <br />
                                    <ThemeProvider config={{lightColor: '#008CBA'}}>
                                        <Button
                                            onClick={this.hideModal}
                                            buttonStyle={Button.BUTTON_STYLE.RECTANGLE}
                                            text="Got it!"
                                            primary
                                        />
                                    </ThemeProvider>
                                </RightSide>
                            </div>
                        </Modal.Body> 
                    </Modal>
                </div>
            )}
        </Container>
      );
    }
  }
  
  export default Right;