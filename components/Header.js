import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';


const Container=styled.View`
    align-items:center;
    flex-direction:row;
    justify-content:space-between;
    padding:25px 25px 0 25px;
    width:100%

`
const Logo=styled.Image`
    width:20px;
    height:40px;
`

const Menu=styled.Text`
    font-size:18px;
    color:#fff;
    letter-spacing:0.1px
`

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>
          <Logo
            resizeMode='contain'
            source={require('../assets/logo.png')}/>
           <Menu>Series</Menu>
           <Menu>Films</Menu>
           <Menu>My List</Menu>
      </Container>
    );
  }
}
