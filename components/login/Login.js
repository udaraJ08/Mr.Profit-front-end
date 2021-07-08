import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, StatusBar } from 'react-native'
import { Box, FormControl, Input } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';

export class Login extends Component {

    /////////API calling////////////

    ////////state changing/////////

    ///////event Handeling////////
    btnNavToSignup = () => {
        this.props.navigation.navigate("signup", { name: "Signup" })
    }

    //////lead functions//////////

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
                                placeholder="username..."
                                placeholderTextColor="#c8d6e5"
                                color={"#c8d6e5"}
                                style={style.inputFields}></Input>
                        </FormControl>
                        <Text></Text>
                        <Text></Text>
                        <Text style={[style.inputLabels]}>Password
                            {"   "}
                            <Icon name="lock" color={"#f1f2f6"} size={20} />
                        </Text>
                        <Text></Text>
                        <FormControl>
                            <Input
                                secureTextEntry={true}
                                placeholder="username..."
                                placeholderTextColor="#c8d6e5"
                                color={"#c8d6e5"}
                                style={style.inputFields}></Input>
                        </FormControl>
                        <Text></Text>
                        <Text></Text>
                        <Box style={[style.btnContainer, normalize.center]}>
                            <TouchableOpacity style={[style.btnLogin, normalize.center]}>
                                <Text style={style.txtLogin}>LOGIN</Text>
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
    }
})

const normalize = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Login
