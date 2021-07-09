import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground, StatusBar } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';
import { Wave } from 'react-native-animated-spinkit'

import AsyncStorage from '@react-native-async-storage/async-storage';

export class MainLoader extends Component {

    componentDidMount = () => {
        console.log("Found !!!");
        setTimeout(() => {
            this.navToLogin()
        }, 3000)
    }

    componentDidCatch = () => {
        console.log("catch !!!");
        setTimeout(() => {
            this.navToLogin()
        }, 3000)
    }

    //////////navigations//////////
    navToLogin = async () => {
        const dis = await this.validateOneTimeUser()

        if (dis)
            this.props.navigation.navigate("main", { name: "MainNavigatorController" })
        else
            this.props.navigation.navigate("login", { name: "Login" })


    }

    ////////lead functions/////////////
    validateOneTimeUser = async () => {

        try {
            const raw = await AsyncStorage.getItem('user')

            return raw != null ? true : false;
        } catch (e) {
            if (e)
                console.log(e.message());
        }
    }

    render() {
        return (
            <ImageBackground
                style={[style.container, normalize.center]}
                source={{ uri: "https://i.pinimg.com/originals/4d/3a/2f/4d3a2fe99e78a2a62cfd8eeba6f14b9d.jpg" }}
            >
                <StatusBar
                    animated={true}
                    backgroundColor="#222f3e" />
                <Wave size={50} color="#feca57" />
                <Text></Text>
                <Text style={[style.mainTopic]}> Mr.Profit </Text>
                <Text style={[style.subTopic]}>Your personal money manager...</Text>
                <Text></Text>
                <Icon name="rocket" color={"#ffffff"} size={40} style={style.brandIco} />
            </ImageBackground>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#222f3e"
    },
    mainTopic: {
        color: '#ffffff',
        fontSize: 50,
        fontFamily: "Staatliches-Regular",
    },
    brandIco: {
        borderColor: "#48dbfb",
        borderWidth: 1,
        padding: 10,
        borderRadius: 100,
    },
    subTopic: {
        fontFamily: "Quicksand-VariableFont_wght",
        fontSize: 18,
        color: "#ffffff"
    }
})

const normalize = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: "center"
    }
})

export default MainLoader
