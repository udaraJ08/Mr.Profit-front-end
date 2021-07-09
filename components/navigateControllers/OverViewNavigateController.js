import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderStyleInterpolators } from '@react-navigation/stack';

import OverView from '../OverView';
import OverViewDashboard from '../OverViewDashboard';
import { CardStyleInterpolators } from '@react-navigation/stack';
import CreateExpences from '../CreateExpences';

const Stack = createStackNavigator();

export class OverViewNavigateController extends Component {
    render() {
        return (
            <Stack.Navigator
                shifting="true"
                screenOptions={({ route, navigation }) => ({
                    gestureEnabled: true,
                    cardOverlayEnabled: true,
                    gestureDirection: "horizontal",
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    headerStyleInterpolator: HeaderStyleInterpolators.forFade,
                })}
            >
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="dashboard" component={OverViewDashboard} />
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="create"
                    component={CreateExpences} />
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="overviewMain" component={OverView} />
            </Stack.Navigator>
        )
    }
}

export default OverViewNavigateController
