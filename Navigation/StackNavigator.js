import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNavigator from './TabNavigator';
import LoginPage from "../components/LoginPage";

import Homepage from "./Pages/Homepage";
import Postpage from "./Pages/Postpage";
import FriendsList from "./Pages/FriendsList";
import ChatList from "./Pages/ChatList";

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

const HomeStackNavigator = () => {
  return (
      <Stack.Navigator>
          <Stack.Screen name="Homepage" component={Homepage} 
              options={{ headerTitleAlign: 'center' }}
          />
      </Stack.Navigator>
  )
}

const PostStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Postpage" component={Postpage} 
                options={{ headerTitleAlign: 'center' }}
            />
        </Stack.Navigator>
    )
}

const FriendsStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="FriendsList" component={FriendsList} 
                options={{ headerTitleAlign: 'center' }}
            />
        </Stack.Navigator>
    )
}

const ChatStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ChatList" component={ChatList}
                options={{ headerTitleAlign: 'center' }}
            />
        </Stack.Navigator>
    )
}


export { MainStackNavigator, HomeStackNavigator, PostStackNavigator, FriendsStackNavigator, ChatStackNavigator };