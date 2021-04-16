import React, { useRef, useState, useEffect } from "react";
//import { COLORS, FONTS, SIZES } from "../../Assets/theme";
import { getWhether,getWeather2 } from "./index1";
import Nextday from "./Nextday";
import { getWhether1,getWhether4 } from "./index3";
import { LinearGradient } from "expo-linear-gradient";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  StatusBar,
  ActivityIndicator,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Linear,
} from "react-native";
import { ListItem } from "react-native-elements";

import { Card, Button } from "react-native-paper";
import { Header, Left, Right, Title, Subtitle, Icon, Body } from "native-base";
import * as Animatable from "react-native-animatable";
import BottomSheet from "react-native-gesture-bottom-sheet";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const HomeScreen = ({route,navigation}) => {
  const {currentLatitude} = route.params;
  const {currentLongitude} = route.params;
  var months1 = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const sh = Dimensions.get("window").height;
  const bottomSheet = useRef();
  const [city, setcity] = useState(" ");
  const [cities, setcities] = useState(" ");
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  const converTime = (time) => {
    let hour = time.split(":")[0];
    let min = time.split(":")[1];
    let part = hour > 12 ? "pm" : "am";

    min = (min + "").length == 1 ? `0${min}` : min;
    hour = hour > 12 ? hour - 12 : hour;
    hour = (hour + "").length == 1 ? `0${hour}` : hour;

    return `${hour}:${min} ${part}`;
  };

  console.log(converTime("18:00:00"));
  console.log(converTime("6:5:00"));
  const [dailyData, setdailyData] = useState();
  useEffect(() => {
    const fetchAPI = async () => {
      await setdailyData(await getWeather2(currentLatitude,currentLongitude));
    };
    fetchAPI();
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
    console.log("vvvvvvvvvvvvvvvvvvvvvv");

    console.log(dailyData);
  }, []);
  const ChangeCity = async (val) => {
    setcity(val);
    await getWhether(val).then((res) => {
      // alert("res"+res)
      res && setdailyData(res);
    });
    await getWhether1(val).then((res) => {
      // alert("res"+res)
      res ? setdailyData1(res) : alert("City Not Found");
    });
    //await setdailyData(await getWhether(val));
    //await setdailyData1(await getWhether1(val));
  };
  const [dailyData1, setdailyData1] = useState();
  useEffect(() => {
    const fetchAPI1 = async () => {
      await setdailyData1(await getWhether4(currentLatitude,currentLongitude));
    };
    fetchAPI1();
    console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
    console.log("vvvvvvvvvvvvvvvvvvvvvv");
  }, []);
  console.log(currentLongitude)
  console.log(currentLatitude)

  return (
    <>
      <StatusBar barStyle="default" />
      {dailyData && dailyData1 ? (
        <ScrollView
          contentContainerStyle={{ flex: 1, backgroundColor: "#37003c" }}
        >
          <Animatable.View
            animation="fadeInDown"
            style={{
              flex: 2.2,
              backgroundColor: "#ffff",
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
            }}
          >
            <Header
              style={{ backgroundColor: "#ffff", height: 60 }}
              androidStatusBarColor="#37003c"
              barStyle="light-content"
            >
              <Left>
                {/* <Icon name="grid" style={{ color: "black" }} /> */}
                <MaterialCommunityIcons name="weather-sunset" size={34} color="black" />
              </Left>
              <Body>
                <Title
                  style={{ fontSize: 23, fontWeight: "bold", color: "black" }}
                >
                  Weather Forcast
                </Title>
              </Body>
            </Header>

            <View
              style={{
                flex: 1,
                backgroundColor: "green",
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
              }}
            >
              <View style={{ backgroundColor: "#ffff", flex: 0.33 }}>
                {dailyData ? (
                  <Text
                    style={{
                      fontSize: 47,
                      justifyContent: "center",
                      alignSelf: "center",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    {dailyData.city.name}
                    {"\n"}
                    {"\n"}
                  </Text>
                ) : (
                  <Text>fd</Text>
                )}
              </View>
              <View
                style={{
                  backgroundColor: "white",
                  flex: 1,
                  borderBottomLeftRadius: 40,
                  borderBottomRightRadius: 40,
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    backgroundColor: "white",
                    flex: 0.39,
                    borderBottomLeftRadius: 40,
                  }}
                >
                  <View style={{ paddingLeft: 16, paddingTop: 20 }}>
                    {dailyData1 ? (
                      <Text
                        style={{
                          fontSize: 39,
                          fontWeight: "bold",
                          fontFamily: "serif",
                          color: "black",
                        }}
                      >
                        {(dailyData1.main.temp - 273.15).toFixed(1)}
                        {"\u00b0"}c
                      </Text>
                    ) : (
                      <Text>fd</Text>
                    )}
                  </View>
                  <View style={{ paddingLeft: 35, paddingTop: 18 }}>
                    {dailyData ? (
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          fontFamily: "serif",
                          color: "black",
                        }}
                      >
                        Today
                      </Text>
                    ) : (
                      <Text>fd</Text>
                    )}
                  </View>
                  <View style={{ paddingLeft: 35, paddingTop: 5 }}>
                    <Text
                      style={{
                        //paddingTop: ,
                        fontSize: 20,
                        fontWeight: "bold",
                        fontFamily: "serif",
                        color: "black",
                      }}
                    >
                      {dailyData.list[1].dt_txt.split(" ")[0].split("-")[2]},
                      {months1[month - 1]}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    backgroundColor: "#ffff",
                    flex: 0.56,
                    borderBottomRightRadius: 40,
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      paddingLeft: -0.01,
                      paddingTop: 60,
                      flex: 0.5,
                    }}
                  >
                    {dailyData1 ? (
                      <Image
                        source={{
                          uri: `http://openweathermap.org/img/w/${dailyData.list[1].weather[0].icon}.png`,
                        }}
                        style={{
                          height: 230,
                          width: 230,
                        }}
                      />
                    ) : (
                      <Text>fd</Text>
                    )}
                  </View>
                  <View
                    style={{
                      paddingLeft: 45,
                      paddingTop: 60,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                      }}
                    >
                      {dailyData.list[1].weather[0].description}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </Animatable.View>
          <View style={{ flex: 2.4, backgroundColor: "#37003c" }}>
            <Animatable.View animation="zoomIn" style={styles.card1}>
              <Card style={{ height: 95, width: 150, borderRadius: 15 }}>
                <View
                  style={{
                    flex: 0.5,
                    backgroundColor: "#ffff",
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 20 }}>Humidity</Text>
                </View>
                <View
                  style={{
                    flex: 0.5,
                    backgroundColor: "#ffff",
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 26 }}>
                    {dailyData1.main.humidity + "%"}
                  </Text>
                </View>
                {/* <Text>{dailyData1.main.humidity + '%'}</Text> */}
              </Card>
              <Card style={{ height: 95, width: 150, borderRadius: 15 }}>
                <View
                  style={{
                    flex: 0.5,
                    backgroundColor: "#ffff",
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 20 }}>Wind</Text>
                </View>
                <View
                  style={{
                    flex: 0.43,
                    backgroundColor: "#ffff",
                    borderBottomLeftRadius: 15,
                    borderBottomRightRadius: 15,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 23 }}>
                    {dailyData1.wind.speed + "m/s"}
                  </Text>
                </View>
                {/* <Text>{dailyData1.wind.speed + 'm/s'}</Text> */}
              </Card>
            </Animatable.View>

            <View
              style={{
                flex: 2,
                backgroundColor: "#ffff",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
            >
              <View
                style={{
                  flex: 0.17,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                  backgroundColor: "#ffff",
                }}
              >
                <Text
                  style={{ paddingLeft: 30, paddingTop: 8, fontWeight: "bold" }}
                >
                  Today
                </Text>
               
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Nextday", {
                      city1: dailyData,
                    })
                  }
                >
                 
                  <Text
                    style={{
                      paddingRight: 30,
                      paddingTop: 8,
                      fontWeight: "bold",
                      fontSize:17,
                      color:"#37003c",
                      textDecorationLine: 'underline'
                    }}
                  >
                    {"Next 5 days >"}
                  </Text>
                </TouchableOpacity>
                
              </View>

              <View style={{ flex: 0.5 }}>
                <ScrollView
                  horizontal
                  alwaysBounceHorizontal={false}
                  bounces={true}
                  decelerationRate="fast"
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    paddingTop: 6,
                    justifyContent: "space-evenly",
                    flexDirection: "row",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <LinearGradient
                      colors={["#37003c", "#4f1953", "#69316c"]}
                      style={{
                        height: 100,
                        width: 80,
                        borderRadius: 15,
                        marginHorizontal: 4,
                      }}
                    >
                      <View
                        style={{
                          flex: 0.27,
                          borderTopLeftRadius: 15,
                          borderTopRightRadius: 15,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ color: "#ffff", alignSelf: "center" }}>
                          {
                            converTime(
                              dailyData.list[0].dt_txt.split(" ")[1]
                            ).substring(0,2)
                          }
                          {
                            converTime(
                              dailyData.list[0].dt_txt.split(" ")[1]
                            ).split(" ")[1]
                          }{" "}
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 0.5,
                          paddingTop: 10,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          source={{
                            uri: `http://openweathermap.org/img/w/${dailyData.list[0].weather[0].icon}.png`,
                          }}
                          style={{
                            height: 60,
                            width: 90,
                          }}
                        />
                      </View>
                      <View
                        style={{
                          flex: 0.27,
                          borderBottomLeftRadius: 15,
                          borderBottomRightRadius: 15,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ color: "#ffff" }}>
                          {(dailyData.list[0].main.temp - 273.15).toFixed(1)}
                          {"\u00b0"}c
                        </Text>
                      </View>
                    </LinearGradient>

                    <LinearGradient
                      colors={["#37003c", "#4f1953", "#69316c"]}
                      style={{
                        height: 100,
                        width: 80,
                        borderRadius: 15,
                        marginHorizontal: 4,
                      }}
                    >
                      <View
                        style={{
                          flex: 0.27,
                          borderTopLeftRadius: 15,
                          borderTopRightRadius: 15,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ color: "#ffff", alignSelf: "center" }}>
                          {
                            converTime(
                              dailyData.list[1].dt_txt.split(" ")[1]
                            ).substring(0,2)
                          }
                          {
                            converTime(
                              dailyData.list[1].dt_txt.split(" ")[1]
                            ).split(" ")[1]
                          }
                        </Text>
                      </View>

                      <View
                        style={{
                          flex: 0.57,
                          paddingTop: 10,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          source={{
                            uri: `http://openweathermap.org/img/w/${dailyData.list[1].weather[0].icon}.png`,
                          }}
                          style={{
                            height: 60,
                            width: 90,
                          }}
                        />
                      </View>
                      <View
                        style={{
                          flex: 0.27,
                          borderBottomLeftRadius: 15,
                          borderBottomRightRadius: 15,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ color: "#ffff" }}>
                          {(dailyData.list[1].main.temp - 273.15).toFixed(1)}
                          {"\u00b0"}c
                        </Text>
                      </View>
                      {/* <Text style={{color:"white"}}>gytfyt</Text> */}
                    </LinearGradient>
                    <LinearGradient
                      colors={["#37003c", "#4f1953", "#69316c"]}
                      style={{
                        height: 100,
                        width: 80,
                        borderRadius: 15,
                        marginHorizontal: 4,
                      }}
                    >
                      <View
                        style={{
                          flex: 0.27,
                          borderTopLeftRadius: 15,
                          borderTopRightRadius: 15,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ color: "#ffff", alignSelf: "center" }}>
                          {
                            converTime(
                              dailyData.list[2].dt_txt.split(" ")[1]
                            ).substring(0,2)
                          }
                          {
                            converTime(
                              dailyData.list[2].dt_txt.split(" ")[1]
                            ).split(" ")[1]
                          }{" "}
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 0.57,
                          paddingTop: 10,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          source={{
                            uri: `http://openweathermap.org/img/w/${dailyData.list[2].weather[0].icon}.png`,
                          }}
                          style={{
                            height: 60,
                            width: 90,
                          }}
                        />
                      </View>
                      <View
                        style={{
                          flex: 0.27,
                          borderBottomLeftRadius: 15,
                          borderBottomRightRadius: 15,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ color: "#ffff" }}>
                          {(dailyData.list[2].main.temp - 273.15).toFixed(1)}
                          {"\u00b0"}c
                        </Text>
                      </View>
                    </LinearGradient>
                    <LinearGradient
                      colors={["#37003c", "#4f1953", "#69316c"]}
                      style={{
                        height: 100,
                        width: 80,
                        borderRadius: 15,
                        marginHorizontal: 4,
                      }}
                    >
                      <View
                        style={{
                          flex: 0.27,
                          borderTopLeftRadius: 15,
                          borderTopRightRadius: 15,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ color: "#ffff", alignSelf: "center" }}>
                          {
                            converTime(
                              dailyData.list[3].dt_txt.split(" ")[1]
                            ).substring(0,2)
                          }
                          {
                            converTime(
                              dailyData.list[3].dt_txt.split(" ")[1]
                            ).split(" ")[1]
                          }{" "}
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 0.57,
                          paddingTop: 10,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          source={{
                            uri: `http://openweathermap.org/img/w/${dailyData.list[3].weather[0].icon}.png`,
                          }}
                          style={{
                            height: 60,
                            width: 90,
                          }}
                        />
                      </View>
                      <View
                        style={{
                          flex: 0.27,
                          borderBottomLeftRadius: 15,
                          borderBottomRightRadius: 15,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ color: "#ffff" }}>
                          {(dailyData.list[3].main.temp - 273.15).toFixed(1)}
                          {"\u00b0"}c
                        </Text>
                      </View>
                    </LinearGradient>
                    <LinearGradient
                      colors={["#37003c", "#4f1953", "#69316c"]}
                      style={{
                        height: 100,
                        width: 80,
                        borderRadius: 15,
                        marginHorizontal: 4,
                      }}
                    >
                      <View
                        style={{
                          flex: 0.27,
                          borderTopLeftRadius: 15,
                          borderTopRightRadius: 15,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ color: "#ffff", alignSelf: "center" }}>
                          {
                            converTime(
                              dailyData.list[4].dt_txt.split(" ")[1]
                            ).substring(0,2)
                          }
                          {
                            converTime(
                              dailyData.list[4].dt_txt.split(" ")[1]
                            ).split(" ")[1]
                          }{" "}
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 0.57,
                          paddingTop: 10,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          source={{
                            uri: `http://openweathermap.org/img/w/${dailyData.list[4].weather[0].icon}.png`,
                          }}
                          style={{
                            height: 60,
                            width: 90,
                          }}
                        />
                      </View>
                      <View
                        style={{
                          flex: 0.27,
                          borderBottomLeftRadius: 15,
                          borderBottomRightRadius: 15,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ color: "#ffff" }}>
                          {(dailyData.list[4].main.temp - 273.15).toFixed(1)}
                          {"\u00b0"}c
                        </Text>
                      </View>
                    </LinearGradient>
                    <LinearGradient
                      colors={["#37003c", "#4f1953", "#69316c"]}
                      style={{
                        height: 100,
                        width: 80,
                        borderRadius: 15,
                        marginHorizontal: 3,
                      }}
                    >
                      <View
                        style={{
                          flex: 0.27,
                          borderTopLeftRadius: 15,
                          borderTopRightRadius: 15,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ color: "#ffff", alignSelf: "center" }}>
                          {
                            converTime(
                              dailyData.list[5].dt_txt.split(" ")[1]
                            ).substring(0,2)
                          }
                          {
                            converTime(
                              dailyData.list[5].dt_txt.split(" ")[1]
                            ).split(" ")[1]
                          }{" "}
                        </Text>
                      </View>
                      <View
                        style={{
                          flex: 0.57,
                          paddingTop: 10,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          source={{
                            uri: `http://openweathermap.org/img/w/${dailyData.list[5].weather[0].icon}.png`,
                          }}
                          style={{
                            height: 60,
                            width: 90,
                          }}
                        />
                      </View>
                      <View
                        style={{
                          flex: 0.27,
                          borderBottomLeftRadius: 15,
                          borderBottomRightRadius: 15,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text style={{ color: "#ffff" }}>
                          {(dailyData.list[5].main.temp - 273.15).toFixed(1)}
                          {"\u00b0"}c
                        </Text>
                      </View>
                    </LinearGradient>
                  </View>
                </ScrollView>
              </View>

              <Animatable.View
                animation="fadeInUp"
                style={{ flex: 0.34, justifyContent: "center" }}
              >
                <BottomSheet
                  ref={bottomSheet}
                  style={{ backgroundColor: "red" }}
                  height={200}
                  initialSnap={0}
                  snapPoints={["60%"]}
                  animation="fadeInUp"
                  // isVisible={true}
                >
                  <LinearGradient
                    colors={["#37003c", "#4f1953", "#69316c"]}
                    style={{ flex: 1 }}
                  >
                    <LinearGradient
                      colors={["#37003c", "#4f1953", "#69316c"]}
                      style={{ flex: 1 }}
                    >
                      <TextInput
                        placeholder="Search"
                        placeholderTextColor="white"
                        style={{
                          height: 45,
                          borderColor: "#4f1953",
                          borderWidth: 1,
                          color: "#ffff",
                          backgroundColor: "#69316c",
                          borderRadius: 20,
                          margin: 10,
                          marginTop: 16,
                          marginBottom: 10,
                          padding: 10,
                        }}
                        onChangeText={(text) => setcity(text)}
                      />
                      <LinearGradient
                  colors={["#37003c", "#4f1953", "#69316c"]} style={{backgroundColor:"white",height:"17%",width:"30%",justifyContent:"center",alignSelf:"center",borderRadius:20,marginTop:10,borderColor:"white",borderWidth:1}}>
                      <TouchableOpacity
                      
                        onPress={() => {
                          ChangeCity(city), bottomSheet.current.close();
                        }}
                      >
                        <Text style={{alignSelf:"center",color:"white"}}>Search</Text>
                      </TouchableOpacity>
                      </LinearGradient>
                      {/* <Button
                        icon="content-save"
                        onPress={() => {
                          ChangeCity(city), bottomSheet.current.close();
                        }}
                      >
                        Search
                      </Button> */}
                    </LinearGradient>
                  </LinearGradient>
                </BottomSheet>

                <LinearGradient
                  colors={["#37003c", "#4f1953", "#69316c"]}
                  style={{
                    alignSelf: "center",
                    width: "80%",
                    height: 60,
                    justifyContent: "center",
                    elevation: 0.8,

                    borderRadius: 20,
                  }}
                  start={{ x: 1.3, y: 0.25 }}
                >
                  <TouchableOpacity
                    style={{ alignSelf: "center" }}
                    onPress={() => bottomSheet.current.show()}
                  >
                    <Text style={{ color: "#ffff" }}>Search</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </Animatable.View>
            </View>
          </View>
        </ScrollView>
      ) : (
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <ActivityIndicator size="large" color="#4f1953" />
          {/* //<Text>hgyfr</Text> */}
        </View>
      )}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  card1: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 17,
  },
});
