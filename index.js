/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  ListView,
} from 'react-native';
import CustomComponents from 'react-native-deprecated-custom-components';
import ListScreen from './list_screen';
import DetailScreen from './detail_screen';

const API_KEY = '';

const routes = [
  {
    title: 'Popular Movies',
    index: 0
  }, {
    title: 'Movie Detail',
    index: 1
  }
]

export default class ReactNativeMovieViewer extends Component {
  constructor() {
    super();
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: this.ds.cloneWithRows([]),
    };
  }

  componentDidMount = () => {
    // this.fetchData();
    this.setState({
      dataSource: this.ds.cloneWithRows(
        [
          {
            id: 1,
            backdrop_path: 'hoge.png',
            title: 'abcde',
            release_date: '2017-06-01'
          },
          {
            id: 2,
            backdrop_path: 'hoge.png',
            title: 'bbbbbbbbbbb',
            release_date: '2017-06-02'
          }
        ]
      ),
    })
  }

  renderScene = (route, navigator) => {
    switch(route.index) {
      case 0:
        return (
          <ListScreen
            navigator={navigator}
            route={routes[route.index]}
            dataSource={this.state.dataSource}
            {...route.passProps}
          />
        );
      case 1:
        return (
          <DetailScreen
            navigator={navigator}
            route={routes[route.index]}
            {...route.passProps}
          />
        );
    }
  }

  fetchData = () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`)
    .then((response) => {
      return response.json();
    })
    .then((results) => {
      this.setState({
        dataSource: this.ds.cloneWithRows(results.results),
      })
    })
    .catch((error) => {
      console.log(error);
    });

  }

  render() {
    return (
      <CustomComponents.Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={this.renderScene}
        configureScene={(route, routeStack) => CustomComponents.Navigator.SceneConfigs.PushFromRight}
      />
    );
  }
}

AppRegistry.registerComponent('ReactNativeMovieViewer', () => ReactNativeMovieViewer);
