import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Card from '../../src/components/Card';
import users from '../../assets/users';

import AnimatedStack from '../../src/components/AnimatedStack';

const Homepage = () => {

    const onSwipeLeft = (user) => {
        console.warn('swipe left: ', user.name)
    }

    
    const onSwipeRight = (user) => {
        console.warn('swipe right: ', user.name)
    }

    return(
        <View style={styles.container}>
            <AnimatedStack 
                data={users}
                renderItem={(({ item }) => <Card user={item} />)}
                onSwipeLeft={onSwipeLeft}
                onSwipeRight={onSwipeRight}
                />
            <StatusBar backgroundColor={'black'}/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        flex: 1,
        width: '100%',
    },
});

export default Homepage;