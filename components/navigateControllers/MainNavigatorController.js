import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import OverViewNavigateController from './OverViewNavigateController'
import Home from '../Home'

import Icon from 'react-native-vector-icons/FontAwesome';
import Logout from '../login/Logout';


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
                            <Icon name="first-order" color={"white"} size={24} />
                        )
                    }}
                    name="overView" component={OverViewNavigateController} />
                <Tab.Screen
                    options={{
                        tabBarColor: '#43a8d6',
                        tabBarIcon: ({ tintColor }) => (
                            <Icon name="user" color={"white"} size={25} />
                        )
                    }}
                    name="home" component={Home} />
                <Tab.Screen
                    options={{
                        tabBarColor: '#2f3640',
                        tabBarIcon: ({ tintColor }) => (
                            <Icon name="power-off" color={"#ff7979"} size={25} />
                        )
                    }}
                    name="logout" component={Logout} />

            </Tab.Navigator>
        )
    }
}

export default MainNavigatorController
