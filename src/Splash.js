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
  Image
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

    /* navigation controller*/
    const { navigate } = this.props.navigation;

    /* Three second timout for splash*/
    setTimeout(function(){
      navigate("Main");
    }, 3000);

    /*UI design*/
    return (
      <View style={styles.container}>
        <Image source={require('.././assets/images/ic_launcher.png')} />
        <Text style={styles.welcome}>
          Top Sales
        </Text>
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
