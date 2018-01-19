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
  Button,
} from 'react-native';

import { StackNavigator } from 'react-navigation'
import MainActivity from './MainActivity'



/*Class work*/
export default class Splash extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'Splash'
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Top Sales
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate("Main")}
          title="Goto main"
        />
      </View>
    );
  }
}


/*Styling*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
