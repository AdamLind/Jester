import * as React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground, Pressable } from 'react-native';
import HeaderStyles from '../../styles/HomeHeaders';



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

            <View style={styles.card}>
                <ImageBackground 
                    source={{ 
                    uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png' 
                    }}
                    style={styles.image}
                >
                    <View style={styles.cardInner}>
                        <Text style={styles.name}>Elon Musk</Text>
                        <Text style={styles.bio}>A dude with a rocket looking for a gal with some fuel.</Text>
                    </View>
                </ImageBackground>
            </View>
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

  card: {
      width: "99%",
      height: "98%",
      borderRadius: 10,

      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,

      elevation: 11,
  },

  image: {
      height: "100%",
      width: "100%",
      borderRadius: 10,
      overflow: 'hidden',

      justifyContent: 'flex-end',
  },

  cardInner: {
    padding: 10,
  },

  name: {
      fontSize: 30,
      color: 'white',
      fontWeight: 'bold',
  },

  bio: {
    fontSize: 18,
    color: 'white',
    lineHeight: 25,
  },

});