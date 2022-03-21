import * as React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';
import HeaderStyles from '../../styles/HomeHeaders';
import { LinearGradient } from 'expo-linear-gradient';



const LogoTitle = () => {
    return (
      <Image
        style={{ width: 35, height: 35 }}
        source={require('../../assets/images/OtherLogo.png')}
      />
    );
  }

const Homepage = ({navigation}, props) => {
    
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: props => <LogoTitle {...props} />,
            headerRight: () => (
                <Pressable style={HeaderStyles.logoutButton} onPress={() => navigation.popToTop()}>
                    <Text style={HeaderStyles.logoutButtonText}>Logout</Text>
                </Pressable>
            ),

            headerLeft: () => (
                <Pressable style={HeaderStyles.profileButton} onPress={() => console.warn('not implemented yet')}>
                    <Text style={HeaderStyles.profileButtonText}>Profile</Text>
                </Pressable>
            ),
            
            headerStyle: {
                backgroundColor: '#f2ffdf',
            }
        })
    })
    
    return(
        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={['transparent', 'rgba(250,140,0,0.3)']}
                style={styles.background}
            />
            <View style={styles.card}>
                <Image 
                    source={{ 
                    uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png' 
                    }}
                    style={styles.image}
                />
            </View>
        </View>
    )
}

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray'
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 400,
  },

  card: {
      width: "99%",
      height: "98%"
  },

  image: {
      height: "100%",
      width: "100%",
      borderRadius: 10
  }

});