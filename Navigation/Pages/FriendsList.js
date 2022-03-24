import * as React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import HeaderStyles from '../../styles/HomeHeaders';

const FriendsList = ({navigation}, props) => {
    
    return(
        <View style={HeaderStyles.container}>
            <Text style={HeaderStyles.containerText}>Friends List</Text>

        </View>
    )
}

export default FriendsList;
