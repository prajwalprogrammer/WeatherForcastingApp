import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView,Image } from "react-native";
import { Header, Left, Title, Icon, Body } from "native-base";
import { ListItem } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import { getWhether } from "./index1";
import Charts1 from "./Charts1";

const Nextday = ({route,navigation}) => {
  const {city1} = route.params;
  
  console.log(city1)
  // const [dailyData, setdailyData] = useState();
  // useEffect(() => {
  //   const fetchAPI = async () => {
  //     await setdailyData(await getWhether(city1));
  //   };
  //   fetchAPI();
  //   console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
  //   console.log("vvvvvvvvvvvvvvvvvvvvvv");

  //   console.log(dailyData);
  // }, []);
  
  var gsDayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  
  



  var labels = [];
    var data = [];
    var data1 = [];
    var datee=[];
    var wind=[];
    var humi=[];
    labels1=[];
    const l = 40;
    
    const y = city1.list[0].dt_txt.split(' ')[0].split('-')[2];
    var y1 = parseInt(y) + 5;
    
    for (var j = parseInt(y) + 1; j <= y1; j = j + 1) {
      var t1 = 0;
      var t = 0;
      var w=0;
      var h=0;
      var c = 0;
      var t2=0;
      var t3=0;
     var h2=0;
     var w2=0;
      for (var i = 0; i < l; i = i + 1) {
        if (city1.list[i].dt_txt.split(' ')[0].split('-')[2] == j) {
          c += 1;
          t += city1.list[i].main.temp - 273.15;
          t2 += city1.list[i].main.temp_max - 273.15;
h+=city1.list[i].main.humidity
w+=city1.list[i].wind.speed

        }
        h2=h/c;
        w2=w/c
        t1 = t / c;
        t3=t2/c;
        
      }
      data.push((t1).toFixed(2));
      data1.push((t3).toFixed(2));
      labels.push(j);
      humi.push((h2).toFixed(2));
      wind.push((w2).toFixed(2));
      
    }

    console.log(labels);
    console.log(data);
    var  months1 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var months=[];
    for(var i=4; i<37;i=i+8){
      console.log(city1.list[i].dt_txt.split(' ')[0])
      var yt=city1.list[i].dt_txt.split(' ')[0];
    var d = new Date(yt);
  var dayName = gsDayNames[d.getDay()];
  var yt1=((city1.list[i].dt_txt.split(' ')[0].split('-')[1])[1])-1;
  var monthName=months1[yt1];
  
  months.push(monthName)
datee.push(dayName)
}
console.log(months)
//labels:date, monts:month,datee:dayname,data:temp,data1:max temp
  return (
    <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: "#37003c" }}>
      {/* <Header
          style={{ backgroundColor: "#ffff", height: 60 }}
          androidStatusBarColor="#ffff"
          barStyle="light-content"
        >
          <Left>
            <Icon name="grid" style={{ color: "black" }} />
          </Left>
          <Body>
            <Title style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
              Weather Forcast
            </Title>
          </Body>
        </Header> */}
      <Header
        style={{ backgroundColor: "#ffff", height: 60 }}
        androidStatusBarColor="#ffff"
        barStyle="light-content"
      >
        <Left>
          <Icon name="grid" />
        </Left>
        <Body>
          <Title style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
            Weather Forcast
          </Title>
        </Body>
      </Header>
      <View style={{ flex: 1.3, backgroundColor: "#37003c" }}>

        {/* <Text style={{color:"white"}}>
        { city1.city.name}
        </Text> */}
        <Charts1 datee={datee} temp={data} humi={humi} wind={wind}/>
      </View>
      
      <ScrollView style={{ flex: 1, backgroundColor: "white",borderTopRightRadius:30,borderTopLeftRadius:30 }}>
        <Animatable.View animation="fadeInUp"> 
        <ListItem
          containerStyle={{
            marginVertical: "2%",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,

            height: 65,
            elevation: 6,
          }}
          friction={90}
          tension={100}
          activeScale={0.95}
          linearGradientProps={{
            colors: ["#37003c", "#4f1953", "#69316c"],
          }}
          ViewComponent={LinearGradient}
        >
          <ListItem.Content>
            <ListItem.Title style={{paddingLeft:20}}>
              <Text style={{ color: "white" }}>{datee[0]} ,{"\n"}</Text>
              <Text style={{ color: "white" }}>{labels[0]} {months[0]}</Text>
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Content>
          <View style={{paddingTop:6,justifyContent:"center",alignSelf:"center"}}>
          <Image
                          source={{
                            uri: `http://openweathermap.org/img/w/${city1.list[9].weather[0].icon}.png`,
                          }}
                          style={{
                            height: 40,
                            width: 80,
                          }}
                          />
                          </View>
            {/* <Text style={{color:"white",paddingLeft:50}}>rrt</Text> */}
          </ListItem.Content>
          <ListItem.Content right>
          <Text style={{ color: "white",padding:7 }}> Temp</Text>

            <Text style={{ color: "white",paddingRight:5  }}>{data[0]}{'\u00b0'}c</Text>
          </ListItem.Content>
        </ListItem>
        <ListItem
          containerStyle={{
            marginVertical: "2%",

            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,

            height: 65,
            elevation: 6,
          }}
          friction={90}
          tension={100}
          activeScale={0.95}
          linearGradientProps={{
            colors: ["#37003c", "#4f1953", "#69316c"],
          }}
          ViewComponent={LinearGradient}
        >
          <ListItem.Content>
            <ListItem.Title style={{paddingLeft:20}}>
              <Text style={{ color: "white" ,padding:7}}>{datee[1]} ,{"\n"}</Text>
              <Text style={{ color: "white" }}>{labels[1]} {months[1]}</Text>
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Content>
          <View style={{paddingTop:6,justifyContent:"center",alignSelf:"center"}}>
          <Image
                          source={{
                            uri: `http://openweathermap.org/img/w/${city1.list[17].weather[0].icon}.png`,
                          }}
                          style={{
                            height: 40,
                            width: 80,
                          }}
                          />
                          </View>
            {/* <Text style={{color:"white",paddingLeft:50}}>rrt</Text> */}
          </ListItem.Content>
          <ListItem.Content right>
          <Text style={{ color: "white",padding:7 }}> Temp</Text>

            <Text style={{ color: "white" ,paddingRight:5 }}>{data[1]}{'\u00b0'}c</Text>
          </ListItem.Content>
        </ListItem>
        <ListItem
          containerStyle={{
            marginVertical: "2%",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,

            height: 65,
            elevation: 6,
          }}
          friction={90}
          tension={100}
          activeScale={0.95}
          linearGradientProps={{
            colors: ["#37003c", "#4f1953", "#69316c"],
          }}
          ViewComponent={LinearGradient}
        >
          <ListItem.Content>
            <ListItem.Title style={{paddingLeft:20}}>
              
              <Text style={{ color: "white" }}>{datee[2]} ,{"\n"}{labels[2]} {months[2]}</Text>
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Content>
          <View style={{paddingTop:6,justifyContent:"center",alignSelf:"center"}}>
          <Image
                          source={{
                            uri: `http://openweathermap.org/img/w/${city1.list[25].weather[0].icon}.png`,
                          }}
                          style={{
                            height: 40,
                            width: 80,
                          }}
                          />
                          </View>
            {/* <Text style={{color:"white",paddingLeft:50}}>rrt</Text> */}
          </ListItem.Content>
          <ListItem.Content right>
           
              <Text style={{ color: "white",padding:7 }}> Temp</Text>
            <Text style={{ color: "white",paddingRight:5 }}>{data[2]}{'\u00b0'}c</Text>
            
            
           
          </ListItem.Content>
        </ListItem>
        <ListItem
          containerStyle={{
            marginVertical: "2%",
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,

            height: 65,
            elevation: 6,
          }}
          friction={90}
          tension={100}
          activeScale={0.95}
          linearGradientProps={{
            colors: ["#37003c", "#4f1953", "#69316c"],
          }}
          ViewComponent={LinearGradient}
        >
          <ListItem.Content>
            <ListItem.Title style={{paddingLeft:20}}>
              <Text style={{ color: "white" }}>{datee[3]} ,{"\n"}{labels[3]} {months[3]}</Text>
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Content>
          <View style={{paddingTop:6,justifyContent:"center",alignSelf:"center"}}>
          <Image
                          source={{
                            uri: `http://openweathermap.org/img/w/${city1.list[33].weather[0].icon}.png`,
                          }}
                          style={{
                            height: 40,
                            width: 80,
                          }}
                          />
                          </View>
            {/* <Text style={{color:"white",paddingLeft:50}}>rrt</Text> */}
          </ListItem.Content>
          <ListItem.Content right>
          <Text style={{ color: "white",padding:7 }}> Temp</Text>

            <Text style={{ color: "white" ,paddingRight:5 }}>{data[3]}{'\u00b0'}c</Text>
          </ListItem.Content>
        </ListItem>
        <ListItem
          containerStyle={{
            marginVertical: "2%",
            borderTopLeftRadius:40,
            borderTopRightRadius: 40,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,

            height: 65,
            elevation: 6,
          }}
          friction={90}
          tension={100}
          activeScale={0.95}
          linearGradientProps={{
            colors: ["#37003c", "#4f1953", "#69316c"],
          }}
          ViewComponent={LinearGradient}
        >
          <ListItem.Content>
            <ListItem.Title style={{paddingLeft:20}}>
              <Text style={{ color: "white" }}>{datee[4]} ,{"\n"}{labels[4]} {months[4]}</Text>
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Content style={{marginRight:1}}>
          <View style={{paddingTop:6,justifyContent:"center",alignSelf:"center"}}>
          <Image
                          source={{
                            uri: `http://openweathermap.org/img/w/${city1.list[39].weather[0].icon}.png`,
                          }}
                          style={{
                            height: 40,
                            width: 80,
                            
                          }}
                          />
                          </View>
                          
            {/* <Text style={{color:"white",paddingLeft:50}}>rrt</Text> */}
          </ListItem.Content>
          <ListItem.Content right>
          <Text style={{ color: "white",padding:7 }}> Temp</Text>

            <Text style={{ color: "white",paddingRight:5  }}>{data[4]}{'\u00b0'}c</Text>
          </ListItem.Content>
        </ListItem>
        </Animatable.View>
      </ScrollView>
    </ScrollView>
  );
};

export default Nextday;

const styles = StyleSheet.create({});
