import React from 'react';
import { StackNavigator } from 'react-navigation';
import homescreen from './screen/HomeScreen'

export default Navigator = StackNavigator(
  {
    HomeScreen: {
      screen: homescreen,
      navigationOptions: {
        title: "האפליקציה של טלטול",
        headerStyle: { backgroundColor: '#673AB7' },
        headerTitleStyle: { color: 'white' },
        headerTintColor: 'white'
      }
    },
  },
  {
    initialRouteName: 'HomeScreen'
  },
)