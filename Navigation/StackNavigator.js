import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Pressable, View, ImageBackground, Image, StyleSheet, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import BottomTabNavigator from './TabNavigator';
import LoginPage from "../src/components/LoginPage";

import HeaderStyles from "../styles/HomeHeaders";



const Stack = createStackNavigator();

const LogoTitle = () => {
  return (
    <Image
      style={{ width: 35, height: 35 }}
      source={require('../assets/images/OtherLogo.png')}
      />
      );
    }
    
const MainStackNavigator = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: props => <LogoTitle {...props} />,
        headerLeft: () => (
            <Pressable style={HeaderStyles.profileButton} onPress={() => console.warn('not implemented yet')}>
                <View style={HeaderStyles.profileImageContainer}>
                    <ImageBackground 
                        source={{ 
                        uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png' 
                        }}
                        style={styles.profileImage}
                    />
                </View>
            </Pressable>
        ),

        headerRight: () => (
            <Pressable style={HeaderStyles.logoutButton} onPress={() => navigation.navigate('LoginPage', { screen: 'LoginPage' })}>
                <Text style={HeaderStyles.logoutButtonText}>Logout</Text>
            </Pressable>
        ),

        headerStyle: {
            backgroundColor: '#fff',
            height: 55,
        }
      }}
    >
      <Stack.Screen
        options={{headerShown: false}}
        name="LoginPage"
        component={LoginPage}
      />
      <Stack.Screen 
        name="MainTabNavigator" 
        component={BottomTabNavigator}
        options={{headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  );
}



export { MainStackNavigator };


const styles = StyleSheet.create({

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 400,
  },

  profileImage: {
      height: '100%',
      width: '100%',
      borderRadius: 20,
      overflow: 'hidden',
  },

});