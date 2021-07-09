import { NativeBaseProvider } from 'native-base'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { CardStyleInterpolators } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderStyleInterpolators } from '@react-navigation/stack';
import MainNavigatorController from './components/navigateControllers/MainNavigatorController';
import Login from './components/login/Login';
import Signup from './components/login/Signup';

import { ToastProvider } from 'react-native-styled-toast'
import MainLoader from './components/loadingScreens/MainLoader';

const Stack = createStackNavigator();

export class App extends Component {
  render() {
    return (
      <NativeBaseProvider>
        <NavigationContainer>
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
                gestureEnabled: false,
                headerShown: false,
              }}
              name="mainLoader" component={MainLoader} />
            <Stack.Screen
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
              name="login" component={Login} />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="signup" component={Signup} />
            <Stack.Screen
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
              name="main" component={MainNavigatorController} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    )
  }
}

export default App
