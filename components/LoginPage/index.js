import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';
import { LinearGradient } from 'expo-linear-gradient';
import { withNavigation } from 'react-navigation';

class LoginPage extends React.Component {

    state = {
        registered: false
    }

    register = () => {
        this.setState({registered: true})
        console.warn('Registration Complete!')
    }

    login = () => {
        this.props.navigation.navigate('MainTabNavigator', { screen: 'Homepage' })
    }

    render() {
    return (
        <View style={styles.container}>

            <LinearGradient
                // Background Linear Gradient
                colors={['rgba(250,140,0,0.3)', 'transparent']}
                style={styles.background}
            />

            <Image style={styles.logo} source={require('../../assets/images/OtherLogo.png')}/>

            <View style={styles.buttonsContainer}>
                <StyledButton 
                    type="primary"
                    content={"Register"}
                    onPress={this.register}
                />

                <StyledButton 
                    type="secondary"
                    content={"Log In"}
                    onPress={ this.state.registered === true ? this.login : () => console.warn('Please register before logging in.')}
                />

            </View>
        </View>



    )
}
}

export default withNavigation(LoginPage);