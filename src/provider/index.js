import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import Home from '../screens/Home';
import HelloWorld from '../screens/Lab2/HelloWorld';
import CustomComponent from '../screens/Lab2/CustomComponent';
import StateProps from '../screens/Lab2/State_Props';
import Styling from '../screens/Lab2/Styling';
import ScrollView from '../screens/Lab2/ScrollView';

const Stack = createStackNavigator();
export default () => {
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromCenter,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
        initialRouteName={'Home'}>
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'HelloWorld'} component={HelloWorld} />
        <Stack.Screen name={'CustomComponent'} component={CustomComponent} />
        <Stack.Screen name={'StateProps'} component={StateProps} />
        <Stack.Screen name={'Styling'} component={Styling} />
        <Stack.Screen name={'ScrollView'} component={ScrollView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
