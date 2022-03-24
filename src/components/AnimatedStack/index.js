import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Animated, { 
    useSharedValue, 
    useAnimatedStyle, 
    useDerivedValue,
    useAnimatedGestureHandler,
    interpolate,
    withSpring,
    runOnJS,
 } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import Like from '../../../assets/images/tinderImages/LIKE.png';
import Nope from '../../../assets/images/tinderImages/NOPE.png';

const ROTATION = 60;
const SWIPE_VELOCITY = 800;

const AnimatedStack = (props) => {

    const { data, renderItem, onSwipeLeft, onSwipeRight } = props;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(currentIndex + 1);

    const currentProfile = data[currentIndex];
    const nextProfile = data[nextIndex];

    const {width: screenWidth} = useWindowDimensions();

    const hiddenTranslateX = 2 * screenWidth;

    const translateX = useSharedValue(0);
    const rotate = useDerivedValue(() => interpolate(
        translateX.value,
        [0, hiddenTranslateX],
        [0, ROTATION],
    ) + 'deg',
    );

    const cardStyle = useAnimatedStyle(() => ({
        transform: [
            {
            translateX: translateX.value,
            },
            {
                rotate: rotate.value,
            },

        ],
    }));

    const nextCardStyle = useAnimatedStyle(() => ({
        transform: [
          {
            scale: interpolate(translateX.value, 
              [-hiddenTranslateX, 0, hiddenTranslateX], 
              [1, 0.95, 1]
            ),
          },
        ],
    }));

    const likeStyle = useAnimatedStyle(() => ({
        opacity: interpolate(translateX.value, 
            [0, 100], 
            [0, 1]
          ),
    }));

    const nopeStyle = useAnimatedStyle(() => ({
        opacity: interpolate(translateX.value, 
            [-100 , 0], 
            [1, 0]
          ),
    }));


    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, context) => {
            context.startX = translateX.value
        },
        onActive: (event, context) => {
            translateX.value = context.startX + event.translationX;
        },
        onEnd: (event) => {
            if (Math.abs(event.velocityX) < SWIPE_VELOCITY) {
                translateX.value = withSpring(0); 
                return;
            }

            translateX.value = withSpring(
                hiddenTranslateX * Math.sign(event.velocityX),
                {},
                () => runOnJS(setCurrentIndex)(currentIndex + 1)
            );

            const onSwipe = event.velocityX > 0 ? onSwipeRight : onSwipeLeft;
            runOnJS(onSwipe)(currentProfile);
        },
    });

    useEffect(() => {
        translateX.value = 0;
        setNextIndex(currentIndex + 1);
    }, [currentIndex])

    return(
        <View style={styles.root}>
            {nextProfile && (
            <View style={styles.nextCardContainer}>
                <Animated.View style={[styles.animatedCard, nextCardStyle]}>
                    {renderItem({ item: nextProfile })}
                </Animated.View>
            </View>
            )}

            {currentProfile && (
            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={[styles.animatedCard, cardStyle]}>
                    <Animated.Image source={Like} style={[styles.like, likeStyle, {left: 10}]} resizeMode="contain" />                    
                    <Animated.Image source={Nope} style={[styles.like, nopeStyle, {right: 10}]} resizeMode="contain" />
                    {renderItem({ item: currentProfile })}
                </Animated.View>
            </PanGestureHandler>
            )}
            
            <StatusBar backgroundColor={'black'}/>
        </View>
    )
}


const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        flex: 1,
        width: '100%',
    },
    animatedCard: {
        bottom: 3,
        width: '98.5%',
        height: '98%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextCardContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
    like: {
        width: 200,
        height: 200,
        top: 10,
        zIndex: 1,
        elevation: 12,
        position: 'absolute',
    },
    likeNopeContainer: {
        elevation: 12,
        zIndex: 1,
        width: '100%',
        top: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flex: 1
    },
});

export default AnimatedStack;