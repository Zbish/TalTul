
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Navigator from './src/Navigator'

export default class App extends Component {
  render() {
    return (
      <Navigator></Navigator>
    );
  }
}

const styles = StyleSheet.create({
});
