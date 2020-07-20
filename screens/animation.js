import React, { useState, useEffect } from 'react';
import { Animated, Text, View, StyleSheet } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        // justifyContent: 'center'
    },
    fadeInView: {
        width: 250, 
        height: 100, 
        backgroundColor: 'powderblue', 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})

const FadeInView = (props) => {
    const {screenHeight} = props
    const [topDistance] = useState(new Animated.Value(0))

    let realTopDistance = 0
    topDistance.addListener(({value}) => {
        realTopDistance = value
    })

    const transformStyle = {
        transform: [{
            translateY: topDistance
        }]
    }

    const slidingView = (toValue) => {
        Animated.timing(
            topDistance,
            {
                toValue,
                duration: 300,
                useNativeDriver: true
            }
        ).start();
    }

    React.useEffect(() => {
        if (screenHeight > 0) {
            slidingView(parseInt(screenHeight/2) - 50)
        }
    }, [screenHeight]);

    const configGestureRecognizer = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };

    const onSwipeUp = () => {
        if (screenHeight && realTopDistance > (parseInt(screenHeight/2) - 50))
            slidingView(parseInt(screenHeight/2) - 50)
        else
            slidingView(0)
    }

    const onSwipeDown = () => {
        if (screenHeight) {
            if (realTopDistance == 0)
                slidingView(parseInt(screenHeight/2) - 50)
            else
                slidingView(screenHeight - 100)
        }
    }

    return (
        <GestureRecognizer
            onSwipeUp={(state) => onSwipeUp(state)}
            onSwipeDown={(state) => onSwipeDown(state)}
            config={configGestureRecognizer}
            style={{flex: 1}}
        >
            <Animated.View                 // Special animatable View
            style={{
                ...props.style,
                ...transformStyle
            }}
            >
            {props.children}
            </Animated.View>
        </GestureRecognizer>
    );
}


// You can then use your `FadeInView` in place of a `View` in your components:
export default () => {
    const [screenHeight, setScreenHeight] = useState(0)

    const onLayoutHandler = (event) => {
        setScreenHeight(event.nativeEvent.layout.height)
    }

    return (
        <View onLayout={onLayoutHandler} style={styles.container}>
        <FadeInView screenHeight={screenHeight} style={styles.fadeInView}>
            <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Vertical Swipe</Text>
        </FadeInView>
        </View>
    )
}