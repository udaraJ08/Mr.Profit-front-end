import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, StatusBar } from 'react-native'
import { Box, FormControl, Input } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';

export class Signup extends Component {


    /////////API calling////////////

    ////////state changing/////////

    ///////event Handeling////////
    btnNavToLogin = () => {
        this.props.navigation.navigate("login", { name: "Login" })
    }

    //////lead functions//////////

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
                            <Icon name="user" color={"#ced6e0"} size={20} />
                        </Text>
                        <Text></Text>
                        <FormControl>
                            <Input
                                placeholder="username..."
                                placeholderTextColor="#dfe4ea"
                                color={"#dfe4ea"}
                                style={style.inputFields}></Input>
                        </FormControl>
                        <Text></Text>
                        <Text style={[style.inputLabels]}>Password
                            {"   "}
                            <Icon name="lock" color={"#ced6e0"} size={20} />
                        </Text>
                        <Text></Text>
                        <FormControl>
                            <Input
                                secureTextEntry={true}
                                placeholder="Password"
                                placeholderTextColor="#dfe4ea"
                                color={"#dfe4ea"}
                                style={style.inputFields}></Input>
                        </FormControl>
                        <Text></Text>
                        <Text style={[style.inputLabels]}>Re-enter password
                            {"   "}
                            <Icon name="lock" color={"#ced6e0"} size={20} />
                        </Text>
                        <Text></Text>
                        <FormControl>
                            <Input
                                secureTextEntry={true}
                                placeholder="Re-Enter Password"
                                placeholderTextColor="#dfe4ea"
                                color={"#dfe4ea"}
                                style={style.inputFields}></Input>
                        </FormControl>
                        <Text></Text>
                        <Text></Text>
                        <Box style={[style.btnContainer, normalize.center]}>
                            <TouchableOpacity style={[style.btnLogin, normalize.center]}>
                                <Text style={style.txtLogin}>SIGNUP</Text>
                            </TouchableOpacity>
                            <Text></Text>
                            <TouchableOpacity
                                onPress={() => { this.btnNavToLogin() }}
                                style={[style.btnSignup, normalize.center]}>
                                <Text style={style.txtSubBtn}>Having an account ?</Text>
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
        borderColor: "#dff9fb",
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
        color: "white",
        fontFamily: "Staatliches-Regular",
    },
    btnContainer: {
        width: "100%"
    },
    txtSubBtn: {
        fontFamily: "Quicksand-VariableFont_wght",
        color: "white",
        fontSize: 15
    }
})

const normalize = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Signup
