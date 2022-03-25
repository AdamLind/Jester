import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native/dist/Auth';
import config from './src/aws-exports';

import { MainStackNavigator } from './Navigation/StackNavigator';



Amplify.configure(config);

const App = () => {

  return (
    <NavigationContainer style={styles.container}>
      <MainStackNavigator />
    </NavigationContainer>
  );
}
export default withAuthenticator(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});