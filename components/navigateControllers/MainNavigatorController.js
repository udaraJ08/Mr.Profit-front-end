import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import OverViewNavigateController from './OverViewNavigateController'
import Home from '../Home'

import Icon from 'react-native-vector-icons/FontAwesome';


const Tab = createMaterialBottomTabNavigator();

export class MainNavigatorController extends Component {
    render() {
        return (
            <Tab.Navigator
                shifting="true"
                activeColor="#f0edf6"
                inactiveColor="white"
            >
                <Tab.Screen
                    options={{
                        tabBarColor: '#005380',
                        tabBarIcon: ({ tintColor }) => (
                            <Icon name="list-alt" color={"white"} size={25} />
                        )
                    }}
                    name="overView" component={OverViewNavigateController} />
                <Tab.Screen
                    options={{
                        tabBarColor: '#43a8d6',
                        tabBarIcon: ({ tintColor }) => (
                            <Icon name="list-alt" color={"white"} size={25} />
                        )
                    }}
                    name="home" component={Home} />

            </Tab.Navigator>
        )
    }
}

export default MainNavigatorController
