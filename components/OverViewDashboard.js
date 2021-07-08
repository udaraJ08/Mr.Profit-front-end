import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native'

import { Box, Image } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';

//requiring images


export class OverViewDashboard extends Component {


    constructor(props) {
        super(props)
    }

    btnOverView = () => {
        this.props.navigation.navigate("signup", { name: "Signup" })
    }

    btnCreateExp = () => {
        this.props.navigation.navigate("create", { name: "CreateExpences" })

    }

    btnUpdateExp = () => {

    }

    render() {
        return (
            <ImageBackground
                source={{ uri: "https://wallpaperaccess.com/full/698623.png" }}
                style={style.container}>
                <Box style={style.topicContainer}>
                    <Text style={style.mainTopic}>Mr.Profit Manager</Text>
                    <Text></Text>
                    <Image
                        style={{
                            backgroundColor: '#f6e58d',
                            borderRadius: 100,
                        }}
                        source={{
                            uri: "https://image.flaticon.com/icons/png/512/1580/1580764.png",
                        }}
                        alt="Alternate Text"
                        size={"md"}
                    />
                </Box>
                <Box style={style.buttonContainer}>

                    <TouchableOpacity
                        onPress={() => {
                            this.btnOverView()
                        }}
                        style={[style.expencesButtons, { borderColor: '#7bed9f' }]}>
                        <Text style={[
                            style.btnContentTxt,
                            { color: '#7bed9f' }
                        ]}>Overview</Text>
                        <Icon name="list-alt" color={"#7bed9f"} size={25} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            this.btnCreateExp()
                        }}
                        style={[style.expencesButtons, { borderColor: '#7ed6df' }]}>
                        <Text style={[
                            style.btnContentTxt,
                            { color: '#7ed6df' }
                        ]}>Create Expence</Text>
                        <Icon name="pencil-square-o" color={"#7ed6df"} size={25} />
                    </TouchableOpacity>

                    <TouchableOpacity style={[style.expencesButtons, { borderColor: '#ff7979' }]}>
                        <Text style={[
                            style.btnContentTxt,
                            { color: '#ff7979' }
                        ]}>Update expences</Text>
                        <Icon name="coffee" color={"#ff7979"} size={25} />
                    </TouchableOpacity>
                </Box>
            </ImageBackground>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainTopic: {
        fontFamily: "Staatliches-Regular",
        fontSize: 40,
        color: "#f6e58d"
    },
    topicContainer: {
        flex: 1,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        flex: 1,
        width: "100%",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: '#005380'
    },
    expencesButtons: {
        width: "70%",
        height: 60,
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderColor: 'crimson',
        borderWidth: 1.5,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: "row"
    },
    btnContentTxt: {
        fontSize: 17,
        fontFamily: "Quicksand-Medium",
        color: "#57606f",
    }
})

export default OverViewDashboard
