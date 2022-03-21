import * as React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import HeaderStyles from '../../styles/HomeHeaders';


const LogoTitle = () => {
    return (
      <Image
        style={{ width: 35, height: 35 }}
        source={require('../../assets/images/OtherLogo.png')}
      />
    );
  }

const Postpage = ({navigation}, props) => {
    
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
        <View style={HeaderStyles.container}>
            <Text style={HeaderStyles.containerText}>Post Page</Text>

        </View>
    )
}

export default Postpage;
