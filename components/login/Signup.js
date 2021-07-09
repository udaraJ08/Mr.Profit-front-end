import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, StatusBar, TouchableHighlightBase } from 'react-native'
import { Box, FormControl, Input } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Wave } from 'react-native-animated-spinkit'

export class Signup extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            repassword: "",
            isloading: false,
            err: {
                errUserMsg: "",
                rePW: ""
            },
            welcomeMsg: ""
        }
    }


    /////////API calling////////////
    signupUser = async (data) => {

        console.log(data);
        this.changeStateLoading(true)
        await fetch("https://mrprofit.herokuapp.com/user/signup", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).
            then(data => {
                this.changeStateLoading(false)
                this.cleanState()
                this.setWelcomeMsg()
            }).catch(err => {
                if (err) {
                    this.changeStateLoading(false)
                    console.log(err.message);
                }
            })
    }

    ////////state changing/////////
    changeStateLoading = (dis) => {
        this.setState({
            ...this,
            isloading: dis
        })
    }

    rePwerrMsgStateSet = () => {

        this.setState({
            err: {
                errUserMsg: "",
                rePW: "*.Your passwords don't match"
            }
        })
    }

    setWelcomeMsg = () => {
        this.setState({
            ...this,
            welcomeMsg: "You successfully signed up !!!"
        })
    }

    ///////event Handeling////////
    btnNavToLogin = () => {
        this.cleanState()
        this.props.navigation.navigate("login", { name: "Login" })
    }

    txtUserNameOnChange = (e) => {

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

    txtRePasswordOnChange = (e) => {

        this.setState({
            ...this,
            repassword: e
        })
    }

    btnSignup = () => {

        if (!this.state.isloading) {
            const pw = this.state.password;
            const repw = this.state.repassword

            if (pw !== repw) {
                this.rePwerrMsgStateSet()
                return;
            }

            const data = {
                "username": this.state.username,
                "password": pw
            }

            this.signupUser(data)
        }
    }

    //////lead functions//////////
    popupModal = () => {

    }

    ///////cleaners//////////////
    cleanState = () => {
        this.setState({
            username: "",
            password: "",
            repassword: "",
            isloading: false,
            err: {
                errUserMsg: "",
                rePW: ""
            },
            welcomeMsg: ""
        })
    }

    render() {
        return (
            <ImageBackground
                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb2EST5M3Tml6HAV2EQ-KzV8spYYohj8JRJrBJHmEGZU5u6R31-0k6N0LqWFgq00HI48Y&usqp=CAU" }}
                style={style.container}
            >
                <StatusBar
                    animated={true}
                    backgroundColor="#130f40" />
                <Box style={[style.topicContainer, normalize.center]}>
                    <Text style={[style.mainTopic]}>SIGNUP</Text>
                    <Text></Text>
                    <Icon name="rocket" color={"#ffffff"} size={30} style={{
                        backgroundColor: '#c44569',
                        padding: 10,
                        borderRadius: 100,
                    }} />
                </Box>
                <Box style={[style.dataContainer, normalize.center]}>
                    <Box style={[style.formMidContanier]}>
                        <Text style={[style.inputLabels]}>User name
                            {"   "}
                            <Icon name="user" color={"#dfe4ea"} size={20} />
                        </Text>
                        <Text></Text>
                        <FormControl>
                            <Input
                                onChangeText={e => { this.txtUserNameOnChange(e) }}
                                value={this.state.username}

                                placeholder="username..."
                                placeholderTextColor="#95afc0"
                                color={"#dfe4ea"}
                                style={style.inputFields}></Input>
                            <Text style={style.errMsg}>{this.state.err.errUserMsg}</Text>
                        </FormControl>
                        <Text style={[style.inputLabels]}>Password
                            {"   "}
                            <Icon name="lock" color={"#ced6e0"} size={20} />
                        </Text>
                        <Text></Text>
                        <FormControl>
                            <Input
                                onChangeText={e => { this.txtPasswordOnChange(e) }}
                                value={this.state.password}

                                secureTextEntry={true}
                                placeholder="Password"
                                placeholderTextColor="#95afc0"
                                color={"#dfe4ea"}
                                style={style.inputFields}></Input>
                            <Text style={style.errMsg}>{this.state.err.rePW}</Text>

                        </FormControl>

                        <Text style={[style.inputLabels]}>Re-enter password
                            {"   "}
                            <Icon name="lock" color={"#ced6e0"} size={20} />

                        </Text>
                        <Text></Text>
                        <FormControl>
                            <Input
                                onChangeText={(e) => { this.txtRePasswordOnChange(e) }}
                                value={this.state.repassword}

                                secureTextEntry={true}
                                placeholder="Re-Enter Password"
                                placeholderTextColor="#95afc0"
                                color={"#dfe4ea"}
                                style={style.inputFields}></Input>
                            <Text style={style.errMsg}>{this.state.err.rePW}</Text>
                        </FormControl>
                        <Text></Text>
                        <Box style={[style.btnContainer, normalize.center]}>
                            <TouchableOpacity
                                onPress={() => { this.btnSignup() }}
                                style={[style.btnLogin, normalize.center]}>
                                <Text style={style.txtLogin}>SIGNUP {"   "}
                                    {
                                        (() => {
                                            if (this.state.isloading)
                                                return <Wave size={20} color="#ffffff" />
                                        })()
                                    }
                                </Text>
                            </TouchableOpacity>
                            <Text></Text>
                            <TouchableOpacity
                                onPress={() => { this.btnNavToLogin() }}
                                style={[style.btnSignup, normalize.center]}>
                                <Text style={style.txtSubBtn}>Having an account ?</Text>
                            </TouchableOpacity>
                            <Text></Text>
                            <Text style={style.txtWelcomeBtn}>{this.state.welcomeMsg}</Text>
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
        flex: .9,
        width: "100%"
    },
    mainTopic: {
        color: '#f6e58d',
        fontSize: 40,
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
        color: "#ced6e0",
        fontSize: 17,
        fontFamily: "Quicksand-VariableFont_wght",

    },
    btnLogin: {
        width: "50%",
        height: 60,
        backgroundColor: '#c44569',
        borderRadius: 10,
        borderColor: 'white',
    },
    txtLogin: {
        fontSize: 30,
        color: "#dfe4ea",
        fontFamily: "Staatliches-Regular",
    },
    btnContainer: {
        width: "100%"
    },
    txtSubBtn: {
        fontFamily: "Quicksand-VariableFont_wght",
        color: "#dfe4ea",
        fontSize: 15
    },
    txtWelcomeBtn: {
        fontFamily: "Quicksand-VariableFont_wght",
        color: "#ff6b81",
        fontSize: 20
    },
    errMsg: {
        color: "#ff6b81"
    }
})

const normalize = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Signup
