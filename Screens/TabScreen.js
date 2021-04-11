import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TabScreen = () => {
  return (
    <View>
     <Tab.Navigator
          tabBarOptions={tabOptions}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              const tintColor = focused ? COLORS.white : COLORS.black1;

              switch (route.name) {
                case "Dashboard":
                  return (
                    <View
                      style={
                        focused
                          ? {
                              borderRedius: "50%",
                              backgroundColor: COLORS.black1,
                              width: "60%",
                              height: "70%",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: 50,
                            }
                          : null
                      }
                    >
                      <MaterialCommunityIcons
                        name="home"
                        color={tintColor}
                        size={35}
                        style={
                          {
                            //tintColor: tintColor,
                            // width: 25,
                            // height: 25,
                          }
                        }
                      />
                    </View>
                  );
                case "Report":
                  return (
                    <View
                      style={
                        focused
                          ? {
                              borderRedius: "50%",
                              backgroundColor: COLORS.black1,
                              width: "60%",
                              height: "70%",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: 50,
                            }
                          : null
                      }
                    >
                      <MaterialCommunityIcons
                        name="cart-outline"
                        color={tintColor}
                        size={35}
                        style={
                          {
                            // tintColor: tintColor,
                          }
                        }
                      />
                    </View>
                  );

                case "Cart":
                  return (
                    <View
                      style={
                        focused
                          ? {
                              borderRedius: "50%",
                              backgroundColor: COLORS.black1,
                              width: "60%",
                              height: "70%",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: 50,
                            }
                          : null
                      }
                    >
                      <MaterialCommunityIcons
                        name="cart-arrow-right"
                        color={tintColor}
                        size={35}
                        style={
                          {
                            //  tintColor: tintColor,
                          }
                        }
                      />
                    </View>
                  );
                case "Profile":
                  return (
                    <View
                      style={
                        focused
                          ? {
                              borderRedius: "50%",
                              backgroundColor: COLORS.black1,
                              width: "60%",
                              height: "70%",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: 50,
                            }
                          : null
                      }
                    >
                      <MaterialCommunityIcons
                        name="face"
                        color={tintColor}
                        size={35}
                        style={
                          {
                            //tintColor: tintColor,
                          }
                        }
                      />
                    </View>
                  );
              }
            },
          })}
        >
          <Tab.Screen
            // options={{
            //   tabBarLabel: "Home",
            //   tabBarIcon: ({ color, size }) => (
            //     <MaterialCommunityIcons name="home" color={color} size={30} />
            //   ),
            // }}
            name="Dashboard"
            component={DashboardStack}
          />

          <Tab.Screen
            // options={{
            //   tabBarLabel: "Repeat",
            //   tabBarIcon: ({ color, size }) => (
            //     <MaterialCommunityIcons
            //       name="cart-outline"
            //       color={color}
            //       size={30}
            //     />
            //   ),
            // }}
            name="Report"
            component={MyCartStack}
          />
          <Tab.Screen
            // options={{
            //   tabBarLabel: "Show All",
            //   tabBarIcon: ({ color, size }) => (
            //     <MaterialCommunityIcons
            //       name="cart-arrow-right"
            //       color={color}
            //       size={30}
            //     />
            //   ),
            // }}
            name="Cart"
            component={AllProductStack}
          />
          <Tab.Screen
            // options={{
            //   tabBarLabel: "Profile",
            //   tabBarIcon: ({ color, size }) => (
            //     <MaterialCommunityIcons name="face" color={color} size={30} />
            //   ),
            // }}
            name="Profile"
            component={Profile}
          />
        </Tab.Navigator>
    </View>
  )
}

export default TabScreen

const styles = StyleSheet.create({})
