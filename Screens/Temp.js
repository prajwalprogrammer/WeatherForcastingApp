import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width;
const screenWidth1 = Dimensions.get("window").height;

const Temp = (prop) => {
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
   // backgroundGradientTo: "#37003c",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(255,255,255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
     barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  const data = {
    labels: [
      prop.datee[0].substring(0, 3),
      prop.datee[1].substring(0, 3),
      prop.datee[2].substring(0, 3),
      prop.datee[3].substring(0, 3)    ],
    datasets: [
      {
        data: [prop.temp[0], prop.temp[1], prop.temp[2], prop.temp[3]],
        color: (opacity = 1) => `rgba(255,255,255, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: [prop.legends], // optional
  };
  return (
    <View>
      <LineChart
          data={data}
          width={screenWidth+40}
          height={screenWidth1-430}
          chartConfig={chartConfig}
          bezier
        />
    </View>
  )
}

export default Temp

const styles = StyleSheet.create({})
