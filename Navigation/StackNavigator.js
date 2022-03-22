import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNavigator from './TabNavigator';
import LoginPage from "../src/components/LoginPage";



const Stack = createStackNavigator();



const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="LoginPage"
        component={LoginPage}
      />
      <Stack.Screen 
        name="MainTabNavigator" 
        component={BottomTabNavigator}
        options={{headerShown: false}} 
      />
    </Stack.Navigator>
  );
}



export { MainStackNavigator };