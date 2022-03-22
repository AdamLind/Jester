import * as React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, Pressable, StatusBar } from 'react-native';
import HeaderStyles from '../../styles/HomeHeaders';
import Card from '../../src/components/Card';
import users from '../../assets/users';


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
            
            headerStyle: {
                backgroundColor: '#f2ffdf',
                height: 50,
            }
        })
    })
    
    return(
        <View style={styles.container}>
            <StatusBar 
                backgroundColor={'black'}
            />
            <Card user={users[2]} />

        </View>
    )
}

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2ffdf'
  },

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