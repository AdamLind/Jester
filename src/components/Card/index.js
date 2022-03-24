import React from 'react';
import { View, Image, Text, ImageBackground, StyleSheet } from 'react-native';

const Card = (props) => {
    const {name, image, bio, talent} = props.user;
    return (
        <View style={styles.card}>
            <ImageBackground 
                source={{ 
                uri: image
                }}
                style={styles.image}
            >
                <View style={styles.talentHeaderContainer}>
                    <View style={styles.talentHeader}>
                        <Text style={styles.talentHeaderText}>{talent}</Text>
                    </View>
                </View>
                <View style={styles.cardInner}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.bio}>{bio}</Text>
                </View>
            </ImageBackground>
        </View>
    )
}



const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        backgroundColor: '#fefefe',
        
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        
        elevation: 11,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        
        justifyContent: 'space-between',
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
    talentHeaderContainer:{
        height: 90,
        alignItems: 'center',
    },
    talentHeader: {
        top: 15,
        paddingHorizontal: 54,
        paddingVertical: 3,
        borderWidth: 3,
        borderColor: '#ffec85',
        borderRadius: 5,
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    talentHeaderText: {
        color: '#ffec85',
        fontSize: 18,
    }
});

export default Card;