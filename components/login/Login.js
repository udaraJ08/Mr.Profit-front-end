import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, StatusBar } from 'react-native'
import { Box, FormControl, Input } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Wave } from 'react-native-animated-spinkit'

import AsyncStorage from '@react-native-async-storage/async-storage';

export class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            err: {
                pwErrMsg: "",
                userMsg: ""
            },
            isloading: false
        }
    }


    /////////API calling////////////
    userLogin = async (data) => {

        this.setLoader(true)
        await fetch("https://mrprofit.herokuapp.com/user/login", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).
            then(data => {
                this.setLoader(false)
                if (data.satus) {
                    this.btnNavToDashboard()
                    this.cleanState()
                    this.userDataPlacementInAsyncStorage(data)
                } else {
                    this.setErrMsg(data.password, data.username)
                }
            }).catch(err => {
                if (err) console.log(err.message);
            })
    }

    ////////state changing/////////
    setErrMsg = (password, username) => {
        this.setState({
            ...this,
            err: {
                pwErrMsg: password,
                userMsg: username
            }
        })
    }

    setLoader = (dis) => {

        this.setState({
            isloading: dis
        })
    }

    ///////event Handeling////////
    btnNavToSignup = () => {
        this.props.navigation.navigate("signup", { name: "Signup" })
    }

    btnNavToDashboard = () => {
        this.props.navigation.navigate("main", { name: "MainNavigatorController" })
    }

    btnLogin = () => {
        const data = {
            "username": this.state.username,
            "password": this.state.password
        }

        if (!this.state.isloading)
            this.userLogin(data)
    }

    txtUsernameOnChange = (e) => {

        this.setState({
            ...this,
            username: e
        })
    }

    txtPasswordOnChange = (e) => {

        this.setState({
            ...this,
            password: e
        })
    }
    //////lead functions//////////
    userDataPlacementInAsyncStorage = async (data) => {

        console.log(data);
        try {
            await AsyncStorage.setItem('user', JSON.stringify(data))
        } catch (e) {
            console.log(e.message());
        }
    }

    /////////cleaners/////////////
    cleanState = () => {
        this.setState({
            username: "",
            password: "",
            err: {
                pwErrMsg: "",
                userMsg: ""
            }
        })
    }

    render() {
        return (
            <ImageBackground
                source={{ uri: "https://1.bp.blogspot.com/-UAidN8h_8KU/X3XF0rXKtaI/AAAAAAAAbes/zQCO41IfYGgPvQSgnj1NQeLGLUQZblSaACLcBGAsYHQ/s16000/minimal-camping-wallpaper-hd.png" }}
                style={style.container}
            >
                <StatusBar
                    animated={true}
                    backgroundColor="#130f40" />
                <Box style={[style.topicContainer, normalize.center]}>
                    <Text style={[style.mainTopic]}>Mr. Profit</Text>
                    <Text style={[style.subTopic]}>Your personal money manager...</Text>
                    <Text></Text>
                    <Icon name="rocket" color={"#ffffff"} size={40} style={{
                        backgroundColor: '#0f76a3',
                        padding: 10,
                        borderRadius: 100,
                    }} />
                </Box>
                <Box style={[style.dataContainer, normalize.center]}>
                    <Box style={[style.formMidContanier]}>
                        <Text style={[style.inputLabels]}>User name
                            {"   "}
                            <Icon name="user" color={"#f1f2f6"} size={20} />
                        </Text>
                        <Text></Text>
                        <FormControl>
                            <Input
                                onChangeText={e => { this.txtUsernameOnChange(e) }}
                                value={this.state.username}
                                placeholder="username..."
                                placeholderTextColor="#c8d6e5"
                                color={"#c8d6e5"}
                                style={style.inputFields}></Input>
                        </FormControl>
                        <Text style={style.txtErrorMsg}>{this.state.err.userMsg}</Text>
                        <Text></Text>
                        <Text style={[style.inputLabels]}>Password
                            {"   "}
                            <Icon name="lock" color={"#f1f2f6"} size={20} />
                        </Text>
                        <Text></Text>
                        <FormControl>
                            <Input
                                onChangeText={e => { this.txtPasswordOnChange(e) }}
                                value={this.state.password}
                                secureTextEntry={true}
                                placeholder="password..."
                                placeholderTextColor="#c8d6e5"
                                color={"#c8d6e5"}
                                style={style.inputFields}></Input>
                            <Text style={style.txtErrorMsg}>{this.state.err.pwErrMsg}</Text>
                        </FormControl>
                        <Text></Text>
                        <Text></Text>
                        <Box style={[style.btnContainer, normalize.center]}>
                            <TouchableOpacity
                                onPress={() => { this.btnLogin() }}
                                style={[style.btnLogin, normalize.center]}>
                                <Text style={style.txtLogin}>LOGIN{"   "}

                                    {
                                        (() => {
                                            if (this.state.isloading)
                                                return <Wave size={20} color="#ffffff" />

                                        })()
                                    }

                                </Text>
                            </TouchableOpacity>
                        </Box>
                        <Text></Text>
                        <Box style={style.subBtnContainer}>
                            <TouchableOpacity
                                onPress={() => { this.btnNavToSignup() }}
                                style={[style.btnSignup, normalize.center]}>
                                <Text style={style.txtSubBtn}>Create a new Account</Text>
                            </TouchableOpacity>
                            <Text></Text>
                            <TouchableOpacity style={[style.btnSignup, normalize.center]}>
                                <Text style={style.txtSubBtn}>Forgot password ?</Text>
                            </TouchableOpacity>
                        </Box>
                    </Box>
                </Box>
            </ImageBackground>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    topicContainer: {
        flex: 1.5,
        width: "100%"
    },
    mainTopic: {
        color: '#ffffff',
        fontSize: 50,
        fontFamily: "Staatliches-Regular",
    },
    subTopic: {
        fontFamily: "Quicksand-VariableFont_wght",
        fontSize: 18,
        color: "#ffffff"
    },
    dataContainer: {
        flex: 3,
        width: "100%"
    },
    formMidContanier: {
        width: "90%",
        height: "90%",
    },
    inputFields: {
        width: "100%",
        borderColor: "#95afc0",
        borderWidth: 1
    },
    inputLabels: {
        color: "#c8d6e5",
        fontSize: 20,
        fontFamily: "Quicksand-VariableFont_wght",
    },
    btnLogin: {
        width: "50%",
        height: 60,
        backgroundColor: '#0f76a3',
        borderRadius: 10,
    },
    txtLogin: {
        fontSize: 30,
        color: "#dff9fb",
        fontFamily: "Staatliches-Regular",
    },
    btnContainer: {
        width: "100%"
    },
    subBtnContainer: {
        width: "100%",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    txtSubBtn: {
        fontFamily: "Quicksand-VariableFont_wght",
        color: "white",
        fontSize: 15
    },
    txtErrorMsg: {
        color: "#ff4757"
    }
})

const normalize = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Login
