import React, { useState } from "react";
import { StyleSheet, Text, View, CheckBox, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import Temp from "./Temp";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Charts1 = (prop) => {
  console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmm");
  console.log(prop.datee);
  console.log(prop.wind);
  console.log(prop.humi);

  console.log(prop.temp);
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#37003c",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(255,255,255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  const [val, setval] = useState("Temp");
  const [selectedButton, setselectedButton] = useState("button1");
const [temp, settemp] = useState(prop.temp)
const [legends, setlegends] = useState("Temperature")
  return (
    <View style={{ flex: 1.3, backgroundColor: "#37003c" }}>
      <View style={{ backgroundColor: "#37003c", flex: 15 }}>
      
        <Temp datee={prop.datee} temp={temp} legends={legends}/>
      </View>
      <View style={{ flex: 1.4, flexDirection: "row", paddingBottom: 20 }}>
        <View style={{ width: "34%" }}>
          <TouchableOpacity
            style={{
              backgroundColor:
                selectedButton === "button1" ? "#37003c" : "white",
              padding: 15,
              justifyContent: "center",
              borderTopRightRadius:selectedButton === "button3"?0:20,
            }}
            onPress={() => {
              setselectedButton("button1");
              settemp(prop.temp)
              setlegends("Temperature")
            }}
          >
            <Text
              style={{
                color: selectedButton === "button1" ? "white" : "black",
                alignSelf: "center",
              }}
            >
              Temperature
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "34%" }}>
          <TouchableOpacity
            style={{
              backgroundColor:
                selectedButton === "button2" ? "#37003c" : "white",
              padding: 15,
              justifyContent: "center",
              borderTopRightRadius:selectedButton === "button1"?0:20,
              borderTopLeftRadius:selectedButton === "button1"?20:0
            }}
            onPress={() => {
              setselectedButton("button2");
              settemp(prop.wind);
              setlegends("Wind")
            }}
          >
            <Text
              style={{
                color: selectedButton === "button2" ? "white" : "black",
                alignSelf: "center",
              }}
            >
              Wind
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "34%" }}>
          <TouchableOpacity
            style={{
              backgroundColor:
                selectedButton === "button3" ? "#37003c" : "white",
              padding: 15,
              justifyContent: "center",
              borderTopLeftRadius:selectedButton === "button1"?0:20,
            }}
            onPress={() => {
              setselectedButton("button3");
              settemp(prop.humi);
              setlegends("Humidity")
            }}
          >
            <Text
              style={{
                color: selectedButton === "button3" ? "white" : "black",
                alignSelf: "center",
              }}
            >
              Humidity
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Charts1;

const styles = StyleSheet.create({});
