import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'


import { HomeStackNavigator, PostStackNavigator, FriendsStackNavigator, ChatStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const homeName = 'Home';
const postName = 'Post';
const friendsName = 'Friends';
const chatName = 'Chat';


const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#ffca61',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: { 
          height: 55,
          backgroundColor: '#f2ffdf'
        },
        tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
                iconName = focused ? 'star' : 'star-outline';
            } else if (rn === postName) {
                iconName = focused ? 'ios-videocam' : 'ios-videocam-outline';
            } else if (rn === friendsName) {
                iconName = focused ? 'md-people-circle' : 'md-people-circle-outline';
            } else if (rn === chatName) {
                iconName = focused ? 'md-chatbubbles-sharp' : 'md-chatbubbles-outline';
            }

            return <Ionicons name={iconName} size={size} color={color}/>
        },

    })}
    >
      <Tab.Screen name={homeName} 
        component={HomeStackNavigator}         
        options={{
            headerShown: false,
            headerTitleAlign: 'center'
        }}
        />
      <Tab.Screen name={postName} 
        component={PostStackNavigator}
        options={{
            headerShown: false,
            headerTitleAlign: 'center'
        }} 
      />
      <Tab.Screen name={friendsName} 
        component={FriendsStackNavigator} 
        options={{
            headerShown: false,
            headerTitleAlign: 'center'
        }} 
      />
      <Tab.Screen name={chatName}
        component={ChatStackNavigator} 
        options={{
            headerShown: false,
            headerTitleAlign: 'center'
        }} 
        />
    </Tab.Navigator>
  );
};




export default BottomTabNavigator;