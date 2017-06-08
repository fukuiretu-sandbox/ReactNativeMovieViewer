import React, { Component } from 'react';
import {
  WebView,
  StatusBar,
} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Button,
  Icon,
} from 'native-base';

export default class DetailScreen extends Component {
  render() {
    return(
      <Container>
        <StatusBar/>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigator.pop()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Popular Movies</Title>
          </Body>
          <Right/>
        </Header>
        <WebView
          source={{ uri: this.props.uri }}
        />
      </Container>
    );
  }
}
