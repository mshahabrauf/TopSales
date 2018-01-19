import React from 'react';
import { StackNavigator } from 'react-navigation';
import Splash from './Splash.js';
import MainActivity from './MainActivity.js'
export default ( RootNavigator = StackNavigator({
  Splash: { screen: Splash },
  Main: { screen: MainActivity }
}));
