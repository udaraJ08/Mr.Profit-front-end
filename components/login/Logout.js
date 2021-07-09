import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import { Box, useToast } from 'native-base'

import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';


export class Logout extends Component {

    constructor(props) {
        super(props)

        this.state = {
            msg: ""
        }
    }

    //////////state handler/////////////
    setUserMsg = (user) => {
        this.setState({
            ...this,
            msg: `Good bye ${user}`
        })
    }

    ////////event handeling/////////////
    btnLogout = async () => {
        const user = await this.getUserFromAsync().catch(err => {
            if (err)
                console.log(err.message());
        })
        this.setUserMsg(user)
        console.log(user);
        await this.removeUserFromAsync().then(res => {
            this.navToLogin()
        })
    }

    ///////////navigating//////////////
    navToLogin = () => {
        this.cleanState()
        this.props.navigation.navigate("login", { name: "Login" })
    }

    //////////lead functions///////////
    getUserFromAsync = async () => {
        try {
            const raw = await AsyncStorage.getItem('user')
            const data = raw != null ? JSON.parse(raw) : null;
            return data.data.username;
        } catch (e) {
            if (e)
                console.log(e.message());
        }
    }

    removeUserFromAsync = async () => {
        try {
            await AsyncStorage.removeItem('user')
        } catch (e) {
            console.log(e.message());
        }

    }

    /////////////cleaners//////////////
    cleanState = () => {
        this.setState({
            ...this,
            msg: ""
        })
    }

    render() {
        return (
            <ImageBackground
                style={[style.container, normalize.center]}
                source={{ uri: "https://i.pinimg.com/originals/4d/3a/2f/4d3a2fe99e78a2a62cfd8eeba6f14b9d.jpg" }}
            >
                <Box style={[style.msgContainer, normalize.center]}>
                    <Text style={style.userMsg}>
                        {this.state.msg}
                    </Text>
                </Box>
                <Box style={style.btnContainer}>
                    <TouchableOpacity
                        onLongPress={() => {
                            this.btnLogout()
                        }}
                        style={[normalize.center]}>
                        <Icon name="power-off" color={"#eb4d4b"} size={100} />
                        <Text style={style.btnText}>Press and hold to logout</Text>
                    </TouchableOpacity>
                </Box>
            </ImageBackground>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    msgContainer: {
        flex: 2,
        width: "100%"
    },
    btnContainer: {
        flex: 3,
        width: "100%"
    },
    btnText: {
        fontFamily: "Quicksand-VariableFont_wght",
        color: "white",
        fontSize: 15
    },
    userMsg: {
        fontSize: 30,
        fontFamily: "Quicksand-VariableFont_wght",
        color: "#7ed6df",
    }
})

const normalize = StyleSheet.create({
    center: {
        justifyContent: "center",
        alignItems: 'center'
    }
})

export default Logout
