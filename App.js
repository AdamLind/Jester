import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { MainStackNavigator } from './Navigation/StackNavigator';


const App = () => {

  return (
    <NavigationContainer style={styles.container}>
      <MainStackNavigator />
    </NavigationContainer>
  );
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});