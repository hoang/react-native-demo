import React, { useState, useEffect, useRef } from 'react';
import { Animated, Text, View, StyleSheet, Image } from 'react-native';
import HeartImage from '../assets/heart.png';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        width: 100,
        height: 100
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%'
    }
})

const HeartView = (props) => {
    const [size] = useState(new Animated.Value(1))
    const [bgColor] = useState(new Animated.Value(0))
    const duration = 2000

    const animating = () => {
        Animated.parallel([
            Animated.sequence([
                Animated.timing(
                    size,
                    {
                        toValue: 4,
                        duration,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    size,
                    {
                        toValue: 1,
                        duration,
                        useNativeDriver: true
                    }
                )
            ]),
            Animated.sequence([
                Animated.timing(
                    bgColor,
                    {
                        toValue: 1,
                        duration,
                        useNativeDriver: false
                    }
                ),
                Animated.timing(
                    bgColor,
                    {
                        toValue: 0,
                        duration,
                        useNativeDriver: false
                    }
                )
            ])
        ]).start();
    }

    React.useEffect(() => {
        animating()
        let animatingInterval = setInterval(() => {
            animating()
        }, duration*2)

        return function cleanup() {
            console.log('clear animating interval')
            clearInterval(animatingInterval)
        }
    })

    const backgroundColor = bgColor.interpolate({
        inputRange: [0, 1],
        outputRange: ['rgba(155, 245, 66, 1)', 'rgba(245, 236, 66, 1)']
    })

    return (
        <Animated.View
            style={[styles.container, {backgroundColor}]}
        >
            <Animated.View
                style={{
                    ...styles.imageContainer,
                    transform: [{scale: size}]
                }}
            >
                <Image source={HeartImage} style={styles.image} />
            </Animated.View>
        </Animated.View>
    )
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default HeartView