import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground } from 'react-native'

import { Wander } from 'react-native-animated-spinkit'


export class BasicLoading extends Component {
    render() {
        return (
            <ImageBackground
                style={[style.container, normalize.center]}
                source={{ uri: "https://i.pinimg.com/originals/27/15/d8/2715d8c7ba89f7e54c485acd1fd6edb4.jpg" }}
            >
                <Wander size={70} color="#dfe4ea" />
                <Text style={style.txtLoader}>
                    {this.props.message}
                </Text>

            </ImageBackground>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    txtLoader: {
        color: 'white',
        fontSize: 18,
        fontFamily: "Quicksand-VariableFont_wght",
    }
})

const normalize = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default BasicLoading
