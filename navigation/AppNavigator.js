import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import HomeScreen from '../screens/HomeScreen';

const RootStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    BottomTab: {
      screen: MainTabNavigator,
      navigationOptions: ({ navigation }) => {
        return { header: null }
      }
    }
  }
)

export default createAppContainer(RootStack);
