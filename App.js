import { NativeBaseProvider } from 'native-base'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './components/Home'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import OverView from './components/OverView';

const Tab = createMaterialBottomTabNavigator();

export class App extends Component {
  render() {
    return (
      <NativeBaseProvider>
        <NavigationContainer>
          <Tab.Navigator
            shifting="true"
            activeColor="#f0edf6"
            inactiveColor="white"
          >
            <Tab.Screen
              options={{
                tabBarColor: '#43a8d6',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="list-alt" color={"white"} size={25} />
                )
              }}
              name="overview" component={OverView} />
            <Tab.Screen
              options={{
                tabBarColor: '#43a8d6',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="list-alt" color={"white"} size={25} />
                )
              }}
              name="home" component={Home} />

          </Tab.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    )
  }
}

export default App
