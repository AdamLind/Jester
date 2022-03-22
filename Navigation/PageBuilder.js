import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";


import Homepage from "./Pages/Homepage";
import Postpage from "./Pages/Postpage";
import FriendsList from "./Pages/FriendsList";
import ChatList from "./Pages/ChatList";

const Stack = createStackNavigator();


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
  

  export { HomeStackNavigator, PostStackNavigator, FriendsStackNavigator, ChatStackNavigator };