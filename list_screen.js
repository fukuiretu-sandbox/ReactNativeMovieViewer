import React, { Component } from 'react';
import {
  ListView,
  TouchableWithoutFeedback,
  TouchableHighligh,
  StatusBar,
} from 'react-native';
import {
  ListItem,
  Text,
  Thumbnail,
  Left,
  Body,
  Container,
  Header,
  Right,
  Title,
} from 'native-base';

export default class ListScreen extends Component {
  renderRow = (rowData, sectionID, rowID) => {
    return (
      <TouchableWithoutFeedback onPress={() => this.props.navigator.push(
          { index: 1, passProps: { uri: `https://www.themoviedb.org/movie/${rowData.id}` } }
        )}>
        <ListItem thumbnail>
          <Left>
            <Thumbnail
              square size={80}
              source={{ uri: `https://image.tmdb.org/t/p/w500${rowData.backdrop_path}` }}
            />
          </Left>
          <Body>
            <Text>{rowData.title}</Text>
          <Text note>{rowData.release_date}</Text>
          </Body>
        </ListItem>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    return (
      <Container>
        <StatusBar/>
        <Header>
          <Left/>
          <Body>
            <Title>Popular Movies</Title>
          </Body>
          <Right/>
        </Header>
        <ListView
          dataSource={this.props.dataSource}
          renderRow={this.renderRow}
          enableEmptySections
        />
      </Container>
    );
  }
}
