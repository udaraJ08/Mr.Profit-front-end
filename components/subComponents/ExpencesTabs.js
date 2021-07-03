import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Box } from 'native-base'

//importing installed modules
import LinearGradient from 'react-native-linear-gradient'

export class ExpencesTabs extends Component {

    ///////////API Calling//////////////
    deleteExpence = () => {

    }

    render() {
        return (
            <LinearGradient
                colors={['#FDFFC3', '#FFFFFF']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={style.expencesTab}>
                <Box style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    paddingTop: 10,
                    paddingLeft: 10,
                    backgroundColor: '#7bed9f',
                    borderBottomRightRadius: 100,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10
                }}>
                    <Icon name="eercast" color={"#5352ed"} size={30} />
                </Box>
                <Box style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignItems: "center"
                }}>
                    <Box style={{
                        width: "70%",
                        height: "70%",
                        justifyContent: 'space-between'
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: "#8395a7",
                        }}>{this.props.data.name}</Text>
                        <Text
                            style={{
                                fontSize: 18,
                                color: "#57606f",
                                letterSpacing: 1
                            }}
                        >{this.props.data.amount} <Text>/=</Text></Text>
                    </Box>
                </Box>
                <TouchableOpacity style={{
                    flex: 1,
                    borderTopLeftRadius: 100,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    backgroundColor: "#ff6b81",
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    paddingRight: 20,
                    paddingBottom: 15
                }}
                    onLongPress={() => { this.props.btnDelete(this.props.data.name) }}>
                    <Icon name="trash" color={"white"} size={30} />

                </TouchableOpacity>
            </LinearGradient>
        )
    }
}

const style = StyleSheet.create({
    expencesTab: {
        width: "100%",
        height: 70,
        marginBottom: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        flex: 1,
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 4,
    }
})

export default ExpencesTabs
