/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import PoopMap from './components/PoopMap';

export default class App extends React.Component {
  state = {
    userLocation: null
  }
  render() {
    return (
      <PoopMap/>
    );
  }
}