// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../src/screens/startedAccount/Login'; // Substitua pelo caminho real
import { Step2 } from '../src/screens/welcome/step2';
import { GetStarted } from '../src/screens/welcome/getStarted';
import { Registration } from '../src/screens/startedAccount/Registration';
import { PhoneRegistration } from '../src/screens/startedAccount/PhoneRegistration';
import { VerificationCode } from '../src/screens/startedAccount/VerificationCode';
import { FaceId } from '../src/screens/startedAccount/FaceId';
import { BiometryActivation } from '../src/screens/startedAccount/BiometryActivation';
const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Step2" component={Step2} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="PhoneRegistration" component={PhoneRegistration} />
      <Stack.Screen name="VerificationCode" component={VerificationCode} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="FaceId" component={FaceId} />
      <Stack.Screen name="BiometryActivation" component={BiometryActivation} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
