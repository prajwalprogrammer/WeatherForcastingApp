import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import Nextday from './Screens/Nextday';
import mainpage from './Screens/mainpage';

export default function App() {
  const Stack = createStackNavigator();

  return (
<NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown:false
        }}
          name="mainpage"
          component={mainpage}
          //options={{ title: 'Welcome' }}
        />
        <Stack.Screen
        options={{
          headerShown:false
        }}
          name="HomeScreen"
          component={HomeScreen}
          //options={{ title: 'Welcome' }}
        />
        <Stack.Screen  options={{
          headerShown:false
        }} name="Nextday" component={Nextday} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
