/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from './screens/home'
import Chart from './screens/chart'
import PieChart from './screens/pie-chart'
import ProgressCircle from './screens/progress-circle'
import Animation from './screens/animation'
import AnimationHeart from './screens/animation-heart'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Chart"
          component={Chart}
        />
        <Stack.Screen
          name="PieChart"
          component={PieChart}
        />
        <Stack.Screen
          name="ProgressCircle"
          component={ProgressCircle}
        />
        <Stack.Screen
          name="Animation"
          component={Animation}
        />
        <Stack.Screen
          name="AnimationHeart"
          component={AnimationHeart}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
