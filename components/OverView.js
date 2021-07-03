import { Box } from 'native-base'
import React, { Component } from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

///importing customer components
import OverViewChart from './charts/OverViewChart';
import BasicLoading from './loadingScreens/BasicLoading'

//import installed node modules
import LinearGradient from 'react-native-linear-gradient'
import ExpencesTabs from './subComponents/ExpencesTabs';

export class OverView extends Component {

    constructor(props) {
        super(props)

        this.state = {
            expences: {
                name: "udara"
            },
            loading: true
        }
        this.btnDelete = this.btnDelete.bind(this);
    }

    ///////////Life cycle methods/////////
    componentDidMount() {
        this.fetchingExpences()
    }

    /////////API Calling///////////////////
    fetchingExpences = async () => {
        const date = new Date();

        const month = date.getMonth()
        const year = date.getFullYear()

        console.log(`${month}-${year}`);

        const rawResponse = await fetch("https://mrprofit.herokuapp.com/find/bytime", {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "time": {
                    "year": 2021,
                    "month": "june"
                }
            }),
        }).then(response => response.json()).then(
            data => {
                this.setState({
                    expences: data[0],
                    loading: false
                })
            }
        )
    }

    ////////State handeling///////////////

    ////////Lead functions///////////////
    testClick = () => {
        console.log(this.state.expences.time.year);
    }

    btnDelete = (data) => {
        alert(data)
    }

    /////////Event managing/////////////

    render() {
        const arr = {
            name: "udara",
            age: 20,
            address: "Panadura"
        }
        if (this.state.loading) {
            return (
                <BasicLoading message={"Cooking your data..."} />
            )
        } else {
            const exp = this.state.expences
            return (
                <ScrollView style={style.container}>
                    <Box style={style.overview}>
                        <Text style={{
                            fontFamily: "Staatliches-Regular",
                            fontWeight: "500",
                            fontSize: 25,
                            color: "#57606f"
                        }}>overview</Text>

                    </Box>
                    <Box style={style.overview, {
                        flexDirection: "row",
                        justifyContent: "space-around",
                        borderTopColor: "#a4b0be",
                        borderTopWidth: 1,
                        paddingTop: 5
                    }}>
                        <Text style={{
                            fontFamily: "Staatliches-Regular",
                            fontWeight: "500",
                            fontSize: 40,
                            color: "#686de0"
                        }}>{exp.time.year}</Text>
                        <Text style={{
                            fontFamily: "Staatliches-Regular",
                            fontWeight: "500",
                            fontSize: 40,
                            color: "#f8c291",

                        }}>{exp.time.month}</Text>
                    </Box>
                    <Box style={style.cashContainer}>
                        <Box style={style.cashMidContainer}>
                            <Box style={{
                                backgroundColor: '#ff6b81',
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                flex: 1, width: "100%", alignItems: 'baseline'

                            }}>
                                <Text style={{
                                    color: "white",
                                    fontSize: 16,
                                    padding: 5,

                                }}>
                                    <Icon name="list-alt" color={"white"} size={20} />
                                    {"   "}
                                    Account Details
                                </Text>
                            </Box>
                            <Box style={{
                                flex: 1.5, width: "100%",
                                paddingLeft: 20,
                                paddingRight: 20,
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                            }}>
                                <Text style={{
                                    color: "#8395a7",
                                    fontSize: 16,
                                }}>Income</Text>
                                <Text
                                    style={{
                                        fontFamily: "Staatliches-Regular",
                                        letterSpacing: 1,
                                        color: "#1e90ff",
                                        fontSize: 17
                                    }}
                                >{exp.income} <Text>/=</Text> </Text>
                            </Box>
                            <Box style={{
                                flex: 1.5, width: "100%",
                                paddingLeft: 20,
                                paddingRight: 20,
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                                borderBottomColor: '#f1f2f6',
                                borderBottomWidth: 5
                            }}>
                                <Text style={{
                                    color: "#8395a7",
                                    fontSize: 16,
                                }}>Expences Amount</Text>
                                <Text
                                    style={{
                                        fontFamily: "Staatliches-Regular",
                                        letterSpacing: 1,
                                        color: "#ff6b6b",
                                        fontSize: 17
                                    }}
                                >{exp.expencesAmount} <Text>/=</Text> </Text>
                            </Box>
                            <Box style={{
                                flex: 1.5, width: "100%",
                                paddingLeft: 20,
                                paddingRight: 20,
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                            }}>
                                <Text style={{
                                    color: "#ff6b81",
                                    fontSize: 20,
                                }}>Profit</Text>
                                <Text
                                    style={{
                                        fontFamily: "Staatliches-Regular",
                                        letterSpacing: 1,
                                        color: "#10ac84",
                                        fontSize: 22
                                    }}
                                >{exp.profit} <Text>/=</Text> </Text>
                            </Box>
                        </Box>
                    </Box>
                    <Text></Text>
                    <Box style={style.overViewDiagramContainer}>
                        <Box style={style.overViewDiagramMidContainer}>
                            <OverViewChart
                                income={exp.income}
                                expence={exp.expencesAmount}
                                profit={exp.profit}
                            />
                        </Box>
                    </Box>
                    <LinearGradient
                        colors={['#2090EF', '#469DFF']}
                        start={{ x: 1, y: 1 }}
                        end={{ x: 1, y: 0 }}
                        style={style.expencesContainer}>
                        <Box style={{
                            flex: 1,
                            backgroundColor: '#ff6b81',
                            borderTopLeftRadius: 50,
                            borderTopRightRadius: 50,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Icon name="angle-double-up" color={"white"} size={20} />
                        </Box>
                        <Box style={{
                            flex: 8,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Box style={style.expencesMidContainer}>
                                <Box style={{
                                    flex: 1,
                                }}>
                                    <Text style={{
                                        fontFamily: "Staatliches-Regular",
                                        fontWeight: "500",
                                        fontSize: 20,
                                        color: "#f1f2f6"
                                    }}>
                                        <Icon name="rocket" color={"white"} size={25} />
                                        {"   "}
                                        My Expences
                                    </Text>
                                </Box>
                                <Box style={{
                                    flex: 8,
                                }}>
                                    <ScrollView style={{
                                        overflow: "scroll",
                                        width: "100%",
                                        height: "100%"
                                    }}>
                                        {
                                            Object.keys(exp.expences).map(element => {
                                                return (
                                                    <ExpencesTabs
                                                        data={{
                                                            name: element,
                                                            amount: exp.expences[element],
                                                            month: exp.time.month,
                                                            year: exp.time.year
                                                        }}
                                                        btnDelete={this.btnDelete}
                                                    />
                                                )
                                            })
                                        }
                                    </ScrollView>
                                </Box>
                            </Box>
                        </Box>
                    </LinearGradient>
                </ScrollView>
            )
        }
    }
}

const style = StyleSheet.create({

    loader: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
        paddingBottom: 5
    },
    container: {
        backgroundColor: '#f1f2f6',
        flex: 1,
    },
    overview: {
        width: "100%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    cashContainer: {
        width: "100%",
        height: 200,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cashMidContainer: {
        borderRadius: 10,
        width: "90%",
        height: "90%",
        alignItems: 'center',
        backgroundColor: '#dfe4ea'
    },
    overViewDiagramContainer: {
        width: "100%",
        height: 300,
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    overViewDiagramMidContainer: {
        width: "90%",
        height: "90%",
    },
    expencesContainer: {
        width: "100%",
        height: 500,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50
    },
    expencesMidContainer: {
        width: "90%",
        height: "95%",
    },
})

export default OverView
