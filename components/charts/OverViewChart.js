import React, { Component } from 'react'
import { Text, View, Dimensions } from 'react-native'

import { PieChart } from "react-native-chart-kit";

export class OverViewChart extends Component {

    render() {
        const data = [
            {
                name: "income",
                population: this.props.income,
                color: "#1dd1a1",
                legendFontColor: "#1dd1a1",
                legendFontSize: 13
            },
            {
                name: "expences",
                population: this.props.expence,
                color: "#ff4757",
                legendFontColor: "#ff4757",
                legendFontSize: 13
            },
            {
                name: "Profit",
                population: this.props.profit,
                color: "#eccc68",
                legendFontColor: "#eccc68",
                legendFontSize: 13
            },
        ];

        const chartConfig = {
            backgroundGradientFrom: "#1E2923",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#08130D",
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.2,
            useShadowColorFromDataset: false, // optional
            decimalPlaces: 2,
        };
        return (
            <View>
                <Text style={{
                    fontFamily: "Staatliches-Regular",
                    fontWeight: "500",
                    fontSize: 20,
                    color: "#57606f"
                }}>Income-Expences Diagram</Text>
                <PieChart
                    data={data}
                    width={Dimensions.get("screen").width - 40}
                    height={220}
                    chartConfig={chartConfig}
                    accessor={"population"}
                    backgroundColor={"#2f3542"}
                    paddingLeft={"2"}
                    center={[10, 0]}
                    absolute
                    style={{
                        borderRadius: 10,
                        paddingTop: 10
                    }}
                />
            </View>
        )
    }
}

export default OverViewChart
