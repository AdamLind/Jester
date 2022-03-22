import React from 'react';
import { View, Image, Text, ImageBackground, StyleSheet } from 'react-native';

const Card = (props) => {
    const {name, image, bio} = props.user;
    return (
        <View style={styles.card}>
            <ImageBackground 
                source={{ 
                uri: image
                }}
                style={styles.image}
            >
                <View style={styles.cardInner}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.bio}>{bio}</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Card;


const styles = StyleSheet.create({

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