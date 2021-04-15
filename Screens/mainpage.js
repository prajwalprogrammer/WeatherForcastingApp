import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Alert, Linking } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";
import { Constants } from "expo";
import { Button } from "react-native-paper";
import * as IntentLauncher from "expo-intent-launcher";

const mainpage = ({ navigation }) => {
  const [currentLongitude, setcurrentLongitude] = useState("unknown");
  const [currentLatitude, setcurrentLatitude] = useState("unknown");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        const currentLongitude = JSON.stringify(position.coords.longitude);
        //getting the Longitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);
        //getting the Latitude from the location json
        setcurrentLongitude(currentLongitude);
        setcurrentLatitude(currentLatitude);
        //this.setState({ currentLongitude: currentLongitude });
        //Setting state Longitude to re re-render the Longitude Text
        //this.setState({ currentLatitude: currentLatitude });
        //Setting state Latitude to re re-render the Longitude Text
      },
      
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    watchID = navigator.geolocation.watchPosition((position) => {
      //Will give you the location on location change
      console.log(position);
      const currentLongitude = JSON.stringify(position.coords.longitude);
      //getting the Longitude from the location json
      const currentLatitude = JSON.stringify(position.coords.latitude);
      //getting the Latitude from the location json
      setcurrentLongitude(currentLongitude);
      setcurrentLatitude(currentLatitude);
      //this.setState({ currentLongitude: currentLongitude });
      //Setting state Longitude to re re-render the Longitude Text
      //this.setState({ currentLatitude: currentLatitude });
      //Setting state Latitude to re re-render the Longitude Text
    });
  }, []);
  useEffect(() => {
    navigator.geolocation.clearWatch({ watchID });
  }, []);
  openSetting = () => {
    if (Platform.OS == "ios") {
      Linking.openURL("app-settings:");
    } else {
      IntentLauncher.startActivityAsync(
        IntentLauncher.ACTION_LOCATION_SOURCE_SETTINGS
      );
    }
    this.setState({ openSetting: false });
  };
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignSelf: "flex-end",
          flexDirection: "row",
        }}
      >
        <Image
          style={{
            height: "110%",
            width: "52%",
            alignSelf: "flex-start",
            //marginLeft: "50%",
            marginTop: 70,
            //paddingRight:20
          }}
          source={require("../assets/jj1.png")}
        />
        <View style={{ flexDirection: "column" }}>
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
              paddingRight: "10%",
              left: 0,
            }}
          >
            Weather
          </Text>
        </View>
      </View>
      <View style={{ flex: 4, justifyContent: "center" }}>
        <View style={{ flex: 4, justifyContent: "center", marginTop: "25%" }}>
          <Image
            style={{
              height: "150%",
              width: "110%",
              alignSelf: "flex-end",
              marginRight: "-8%",
            }}
            source={require("../assets/P2.png")}
          />
        </View>
        {/* <View>
          <Button
            onPress={() => {
              this.openSetting();
              this.setState({
                isLocationModalVisible: false,
                openSetting: true,
              });
            }}
          >
            jjjjjj
          </Button>
        </View> */}
       
        <Animatable.View
          animation="fadeInUp"
          style={{ flex: 1, justifyContent: "center" }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#37003c",
              height: "75%",
              width: "80%",
              borderRadius: 40,
              alignSelf: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              currentLatitude != "unknown" && currentLongitude != "unknown"
                ? navigation.navigate("HomeScreen", {
                    currentLatitude: currentLatitude,
                    currentLongitude: currentLongitude,
                  })
                : Alert.alert("Sorry", "Give access of your location", [
                    {
                      text: "Go to settings",
                      onPress: () => {
                        this.openSetting();
                        this.setState({
                          isLocationModalVisible: false,
                          openSetting: true,
                        });
                      },
                      style: "cancel",
                    },
                  ]);
            }}
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
