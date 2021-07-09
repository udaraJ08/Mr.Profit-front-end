import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native'

import { Box, Image } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';

export class OverViewDashboard extends Component {


    constructor(props) {
        super(props)
    }

    btnOverView = () => {
        this.props.navigation.navigate("overviewMain", { name: "OverView" })
    }

    btnCreateExp = () => {
        this.props.navigation.navigate("create", { name: "CreateExpences" })

    }

    btnUpdateExp = () => {

    }

    render() {
        return (
            <ImageBackground
                source={{ uri: "https://i.pinimg.com/originals/aa/b1/ac/aab1ac66d88ed8784e14aa8a68cd65e9.jpg" }}
                style={style.container}>
                <Box style={style.topicContainer}>
                    <Text style={style.mainTopic}>Mr.Profit Manager</Text>
                    {/* <Text></Text> */}
                    <Text style={[style.subTopic]}>Your personal money manager...</Text>
                    <Text></Text>
                    <Text></Text>
                    <Icon
                        style={{
                            backgroundColor: '#0f76a3',
                            padding: 10,
                            borderRadius: 100
                        }}
                        name="rocket"
                        color={"#dfe4ea"} size={50} />

                </Box>
                <Box style={style.buttonContainer}>

                    <TouchableOpacity
                        onPress={() => {
                            this.btnOverView()
                        }}
                        style={[style.expencesButtons]}>
                        <Text style={[
                            style.btnContentTxt,
                        ]}>Overview</Text>
                        <Icon
                            name="list-alt" color={"#f1f2f6"} size={25} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            this.btnCreateExp()
                        }}
                        style={[style.expencesButtons]}>
                        <Text style={[
                            style.btnContentTxt,
                        ]}>Create Expence</Text>
                        <Icon name="pencil-square-o" color={"#f1f2f6"} size={25} />
                    </TouchableOpacity>

                    <TouchableOpacity style={[style.expencesButtons]}>
                        <Text style={[
                            style.btnContentTxt,
                        ]}>Update expences</Text>
                        <Icon name="coffee" color={"#f1f2f6"} size={25} />
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
        color: "#dff9fb"
    },
    subTopic: {
        fontFamily: "Quicksand-VariableFont_wght",
        fontSize: 15,
        color: "#ffffff"
    },
    topicContainer: {
        flex: 1,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        flex: 1.5,
        width: "100%",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    expencesButtons: {
        width: "70%",
        height: 60,
        backgroundColor: 'transparent',
        borderRadius: 10,
        borderColor: '#ffffff',
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
        color: "#ffffff",
    },
})

export default OverViewDashboard
