import React, { Component } from 'react';
import Home from './components/home/Home';
import Designers from './components/designers/DesignersPage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  text-align: center;
`;

const MenuTitle = styled.h1`
  font-family: "Brush Script MT";
  font-size: 40px;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  font-size: 18px;
  font-family: "Verdana";
`;

const ListItem = styled.li`
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  > a {
    text-decoration: none;
    color: #000000;

    &:hover {
      color: palevioletred;
    }
  }
`;

const ContentWrapper = styled.section`
  color: #fff;
  background-color: palevioletred;
  margin: 50px 0;
  padding: 100px 0;
  font-size: 100px;
  font-family: "Brush Script MT";
`;

const Home = () => <ContentWrapper>Home sweet home</ContentWrapper>;
const About = () => (
  <ContentWrapper>About life and other nonsense</ContentWrapper>
);

