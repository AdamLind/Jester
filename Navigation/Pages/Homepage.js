import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Card from '../../src/components/Card';
import { DataStore, Auth } from 'aws-amplify';
import {Match, User} from '../../src/models'

import AnimatedStack from '../../src/components/AnimatedStack';

const Homepage = () => {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [me, setMe] = useState(null);

    useEffect(() => {
        const getCurrentUser = async () => {
            const user = await Auth.currentAuthenticatedUser();
    
            const dbUsers = await DataStore.query(
                User, 
                u => u.sub === user.attributes.sub
            );
            if (dbUsers.length == 0) {
                console.warn('no hits')
                return;
            }
            setMe(dbUsers[0]);
        };
        getCurrentUser();
    }, [])

    useEffect(() => {
        const fetchUsers = async () => {
            const fetchedUsers = await DataStore.query(User);
            setUsers(fetchedUsers)
        }
        fetchUsers();
    }, [])

    const onSwipeLeft = () => {
        if (!currentUser || !me) {
            return;
        }
        console.warn('swipe left: ', currentUser.name)
    }

    
    const onSwipeRight = () => {
        if (!currentUser || !me) {
            return;
        }
        DataStore.save(new Match({
            User1ID: me.id,
            User2ID: currentUser.id,
        }))
        console.warn('swipe right: ', currentUser.name)
    }

    return(
        <View style={styles.container}>
            <AnimatedStack 
                data={users}
                renderItem={(({ item }) => <Card user={item} />)}
                setCurrentUser={setCurrentUser}
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