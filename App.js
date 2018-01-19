/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


/* Importing packages*/
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Splash from './src/index.js'

/*Class work*/
export default class App extends React.Component {
  render() {
    return (
        < Splash/>
    );
  }
}
