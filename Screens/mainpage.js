import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";

const mainpage = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text
          style={{
            fontWeight: "900",
            fontSize: 40,
            fontStyle: "italic",
            paddingLeft: "10%",
            paddingTop: "20%",
          }}
        >
          Daily
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 40,
            fontStyle: "italic",
            paddingLeft: "10%",
          }}
        >
          Weather
        </Text>
      </View>
      <View style={{ flex: 4, justifyContent: "center" }}>
        <View
          style={{ flex: 4, justifyContent: "center",marginTop:"10%" }}
        >
          <Image
            style={{
              height: "90%",
              width: "70%",
              alignSelf: "flex-end",
              marginRight: "10%",
            }}
            source={require("../assets/p9.png")}
          />
        </View>
        <Animatable.View animation="fadeInUp" style={{ flex: 1, justifyContent: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#37003c",
              height: "75%",
              width: "80%",
              borderRadius: 40,
              alignSelf: "center",
              justifyContent: "center",
            }}
            onPress={() =>
              navigation.navigate("HomeScreen"
              )
            }
          >
            <Text style={{ alignSelf: "center", color: "white", fontSize: 30 }}>
              Let's start
            </Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </View>
  );
};

export default mainpage;

const styles = StyleSheet.create({});
