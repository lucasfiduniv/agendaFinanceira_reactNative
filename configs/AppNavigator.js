// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../src/screens/Login'; // Substitua pelo caminho real
import { Step2 } from '../src/screens/welcome/step2';
import { GetStarted } from '../src/screens/welcome/getStarted';
import { Registration } from '../src/screens/Registration';
const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Step2" component={Step2} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Registration" component={Registration} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
