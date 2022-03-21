import * as React from 'react';
import { StyleSheet } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons'

// Screens
import LoginPage from '../components/LoginPage';
import Homepage from './Pages/Homepage';
import HomePage from './Pages/Homepage';
import PostPage from './Pages/Postpage';
import FriendsList from './Pages/FriendsList';
import ChatList from './Pages/ChatList';

// Screen names
const homeName = 'Home';
const postName = 'Post';
const friendsName = 'Friends';
const chatName = 'Chat';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        
            {/* <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn === postName) {
                        iconName = focused ? 'list' : 'list-outline';
                    } else if (rn === friendsName) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn === chatName) {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                },
            })}>

            <Tab.Screen name={homeName} component={HomePage}/>


            </Tab.Navigator> */}
    )
}


  
