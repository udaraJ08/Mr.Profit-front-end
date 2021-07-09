import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import {
    Box, Input, Stack, FormControl
} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';

////importing customer Components
import YearMonthCalender from './utils/YearMonthCalender';

import AsyncStorage from '@react-native-async-storage/async-storage';

export class CreateExpences extends Component {

    constructor(props) {
        super(props)

        this.state = {
            date: {
                year: ".....",
                month: "....."
            },
            income: "",
            expence: "",
            amount: "",
            item: {
                name: "",
                amount: ""
            },
            expenceItemsArr: []
        }
        this.setDate = this.setDate.bind(this)
    }

    ///////API calling///////////
    createExpAPI = async (data) => {

        await fetch("https://mrprofit.herokuapp.com/add", {
            method: "POST",
            headers: {
                accept: "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => {
            res.json()
        }).then(data => {
            alert("Success !!!")
            this.cleanState()
        }).catch(err => {
            if (err) alert("An error occured !!!")
        })
    }

    //////state changing////////
    setDate = (month, year) => {
        this.setState({
            ...this,
            date: {
                year: year,
                month: month
            },
        })
    }

    /////event handlers///////
    handleIncome = (e) => {
        this.setState({
            ...this,
            income: e
        })
    }

    setExpenceItemName = (e) => {

        const tempItem = this.state.item

        tempItem.name = e

        this.setState({
            ...this,
            item: tempItem
        })
    }

    setExpenceItemAmount = (e) => {

        const tempItem = this.state.item

        tempItem.amount = e

        this.setState({
            ...this,
            item: tempItem
        })
    }

    /////event handeling
    btnSubmit = async () => {

        let tempExp = {}

        this.state.expenceItemsArr.map(element => {
            tempExp[element.name] = element.amount
        })

        const data = {
            "userID": await this.getUserFromAsyncStore(),
            "year": this.state.date.year,
            "month": this.state.date.month,
            "income": this.state.income,
            "expences": tempExp
        }
        console.log(data);
        this.createExpAPI(data)
    }

    btnAddExpItem = () => {
        const tempArr = this.state.expenceItemsArr
        tempArr.push(this.state.item)
        this.setState({
            ...this,
            expenceItemsArr: tempArr
        })
        this.cleanExpItems()
    }

    //////Lead functions/////////////
    getUserFromAsyncStore = async () => {
        try {
            const raw = await AsyncStorage.getItem('user')
            const data = raw != null ? JSON.parse(raw) : null;
            console.log("create exp:::" + data.data.username);
            return data.data.username;
        } catch (e) {
            if (e)
                console.log(e.message());
        }
    }

    ///////////cleaners//////////////
    cleanExpItems = () => {
        this.setState({
            ...this,
            item: {
                name: "",
                amount: ""
            }
        })
    }

    cleanState = () => {
        this.setState({
            date: {
                year: ".....",
                month: "....."
            },
            income: "",
            expence: "",
            amount: "",
            item: {
                name: "",
                amount: ""
            },
            expenceItemsArr: []
        })
    }

    render() {
        return (
            <Box style={style.container}>
                <Box style={style.topicContainer}>
                    <Text style={style.mainTopic}>LET'S TRACK EXPENSES</Text>
                </Box>
                <Box style={[style.formContainer, normalize.center]}>
                    <Box style={style.midContainer}>
                        <Box style={[style.dateContainer, style.formMidContainers,]}>
                            <Box style={style.dateMidContainer}>
                                <Box style={[style.dateMidSubPicker, normalize.center]}>
                                    <YearMonthCalender setNewDate={this.setDate} />
                                </Box>
                                <Box style={[
                                    style.dateMidSubContainer,
                                    normalize.center]}>
                                    <Text style={[style.dateTopic, { color: '#ff6b81' }]}>YEAR</Text>
                                    <Text></Text>
                                    <Text style={[style.dateSubData, { color: '#686de0' }]}>{this.state.date.year}</Text>
                                </Box>
                                <Box style={[style.dateMidSubContainer, normalize.center]}>
                                    <Text style={[style.dateTopic, { color: '#ff7f50' }]}>MONTH</Text>
                                    <Text></Text>
                                    <Text style={[style.dateSubData, { color: '#686de0' }]}>{this.state.date.month}</Text>
                                </Box>
                            </Box>
                        </Box>
                        <Box style={[style.incomeContainer, style.formMidContainers]}>
                            <Box style={style.frmMidContainer}>
                                <Text
                                    style={{
                                        fontFamily: "Staatliches-Regular",
                                        color: "#57606f",
                                        fontSize: 30
                                    }}
                                >Your Income{"   "}
                                    <Icon name="line-chart" color={"#5352ed"} size={20} />
                                </Text>
                                <Box style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: 'flex-end'
                                }}>
                                    <FormControl>
                                        <Input
                                            name="value"
                                            value={this.state.income}
                                            onChangeText={(e) => { this.handleIncome(e) }}
                                            style={{
                                                borderColor: "#ff6348"
                                            }}></Input>
                                    </FormControl>
                                </Box>
                            </Box>
                        </Box>
                        <Box style={[
                            style.expencesContainer,
                            style.formMidContainers,
                            { backgroundColor: '#ff6b81', }
                        ]}>
                            <Box style={style.expTopicContainer}>
                                <Text style={{
                                    fontFamily: "Staatliches-Regular",
                                    color: 'white',
                                    fontSize: 20
                                }}>
                                    Add Expences {"   "}
                                    <Icon name="cubes" color={"white"} size={20} />
                                </Text>
                            </Box>
                            <Box style={style.expTabsContainer}>
                                <Box style={{
                                    flex: 1,
                                    marginLeft: 5,
                                }}>
                                    <FormControl>
                                        <Input
                                            onChangeText={(e) => { this.setExpenceItemName(e) }}
                                            value={this.state.item.name}
                                            placeholderTextColor="white"
                                            placeholder="Expence"
                                            color={"white"}
                                            style={{
                                                width: "100%",
                                                borderColor: "#ffffff"
                                            }}></Input>
                                    </FormControl>
                                </Box>
                                <Box style={{
                                    flex: 1,
                                    marginLeft: 5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <FormControl>
                                        <Input
                                            onChangeText={(e) => { this.setExpenceItemAmount(e) }}
                                            value={this.state.item.amount}
                                            placeholder="Amount"
                                            placeholderTextColor="white"
                                            color={"white"}
                                            style={{
                                                width: "100%",
                                                borderColor: "#ffffff",
                                                color: "white"
                                            }}></Input>
                                    </FormControl>
                                </Box>
                                <Box style={{
                                    flex: 1,
                                    marginLeft: 5,
                                }}>

                                    <TouchableOpacity
                                        onPress={() => {
                                            this.btnAddExpItem()
                                        }}
                                        style={style.btnAddExp}>
                                        <Text
                                            style={{
                                                fontFamily: "Staatliches-Regular",
                                                fontSize: 20,
                                                color: "#f7f1e3"
                                            }}
                                        >
                                            ADD
                                        </Text>
                                    </TouchableOpacity>
                                </Box>
                            </Box>
                            <Box style={[style.expSubmitContainer, normalize.center]}>
                                <TouchableOpacity
                                    onPress={() => { this.btnSubmit() }}
                                    style={style.btnSubmit}>
                                    <Text
                                        style={{
                                            fontFamily: "Staatliches-Regular",
                                            fontSize: 40,
                                            color: "#0f76a3"
                                        }}
                                    >SUBMIT</Text>
                                </TouchableOpacity>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f1f2f6"
    },
    topicContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#30336b'
    },
    formContainer: {
        flex: 4,
    },
    mainTopic: {
        fontFamily: "Staatliches-Regular",
        fontSize: 30,
        color: "#f6e58d",
    },
    midContainer: {
        width: "90%",
        height: "95%",
        justifyContent: "space-between"
    },
    formMidContainers: {
        backgroundColor: "#dfe4ea",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dateContainer: {
        width: "100%",
        height: "25%",
    },

    incomeContainer: {
        width: "100%",
        height: "30%",
    },
    expencesContainer: {
        width: "100%",
        height: "40%",
    },
    dateMidContainer: {
        width: "90%",
        height: "90%",
        flexDirection: "row"
    },
    dateMidSubContainer: {
        flex: 1.5,
    },
    dateMidSubPicker: {
        flex: 1,
        borderRightWidth: 3,
        borderColor: '#f1f2f6'
    },
    dateTopic: {
        fontSize: 20,
        fontFamily: "Staatliches-Regular",
    },
    dateSubData: {
        fontSize: 30,
        fontFamily: "Staatliches-Regular",
    },
    frmMidContainer: {
        width: "90%",
        height: "90%",
        justifyContent: 'space-around'
    },
    btnSubmit: {
        backgroundColor: '#f0e45c',
        borderRadius: 5,
        width: "80%",
        height: "90%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnAddExp: {
        backgroundColor: '#2bcbba',
        borderRadius: 5,
        width: "80%",
        height: "60%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    expTopicContainer: {
        flex: 1,
        width: "100%",
        justifyContent: 'center',
        paddingLeft: 20,
    },
    expTabsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 2,
        width: "100%",
        flexDirection: 'row'
    },
    expSubmitContainer: {
        flex: 1.5,
        width: "100%",
    }
})

const normalize = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CreateExpences
