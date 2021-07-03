import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

//importing installed modules
import LinearGradient from 'react-native-linear-gradient'
import { Grid } from 'react-native-animated-spinkit'


export class BasicLoading extends Component {
    render() {
        return (
            <LinearGradient
                colors={['#6AE3ED', '#D8FCFF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={style.loader}>
                <Grid size={70} color="#ff6b81" />
                <Text></Text>
                <Text
                    style={{
                        fontSize: 20,
                        color: "#57606f",
                        fontFamily: "Staatliches-Regular",
                    }}
                >{this.props.message}</Text>
            </LinearGradient>
        )
    }
}

const style = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
})

export default BasicLoading
