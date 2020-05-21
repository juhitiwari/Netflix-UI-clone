import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const Container=styled.View`
    padding:20px 0;
`

const Label=styled.Text`
    color:#fff;
    font-size:16px;
    margin:0 0 5px 10px;
`

const MovieScroll=styled.ScrollView`
    padding-left:10px;
`

const MovieCard=styled.View`
    padding-right:9px;
`

const MoviePoster=styled.Image`
    width:${(Dimensions.get('window').width*28)/100}px;
    height:150px;

`

export default class Movies extends Component {


  render() {
    return (
      <Container>
          <Label>{this.props.label}</Label>
          <MovieScroll horizontal>
                {this.props.item.map((movie,item)=>{
                    return(
                        <MovieCard
                            key={String(item)}>
                            <MoviePoster
                                resizeMode="cover"
                                source={movie}/>
                        </MovieCard>
                    )
                })}
          </MovieScroll>
      </Container>
    );
  }
}
