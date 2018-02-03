import React from 'react';
import { StackNavigator } from 'react-navigation';
import homescreen from './screen/HomeScreen'

export default Navigator = StackNavigator(
  {
    HomeScreen: {
      screen: homescreen,
      navigationOptions: {
        header: null,
      }
    },
  },
  {
    initialRouteName: 'HomeScreen'
  },
)