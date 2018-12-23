import React from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

import logo from '../assets/logo.png';


const menuElements = [
    {name:"CONCEPT", route:'/'},
    {name:"MODELS", route:'/models'},
    {name:"DESIGNERS", route:'/designers'},
    {name:"CONTACT", route:'/contact'},
]
const MenuContainer = styled.div`
    width : 300px;
    background : white;
    box-shadow: 0px 10px 10px 0px;
    height : 900px;
    position : absolute;
    top: 0px;
    left:15%;
`;

const Logo = styled.img`
    display:block;
    margin: 100px auto;
    height:auto;
    width: 150px;
`;

const List = styled.ul`
    margin-top:100px;
    list-style-type: none;
    text-align:center;
    padding: 0px;
    font-size:150%;
`;

const ListItem = styled.li`
    margin-top:50px;
`;

const EditionLabel = styled.p`
    text-align:center;
    position:relative;
    top:150px;   
    font-style:italic;
    color:gray;
    font-size:150%;
`;

class Menu extends React.Component{

    render(){
        return(
            <MenuContainer>
                <Logo src={logo} />
                <List>
                    {menuElements.map((element,index) =>
                            <ListItem key={index}>
                                <Link to={element.route} style={{ textDecoration: 'none', color:"black"}}>{element.name}</Link>
                            </ListItem>
                    )}
                </List>
               <EditionLabel>1st Edition</EditionLabel>
            </MenuContainer>
        );     
    }
}

export default Menu;
