
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Step1 } from './src/screens/welcome/step1';
import { Login } from './src/screens/Login';
import { Step2 } from './src/screens/welcome/step2';
import { GetStarted } from './src/screens/welcome/getStarted';
import { Registration } from './src/screens/Registration';
import { PhoneRegistration } from './src/screens/PhoneRegistration';
import { VerificationCode } from './src/screens/VerificationCode';
import { FaceId } from './src/screens/FaceId';
import { BiometryActivation } from './src/screens/BiometryActivation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Step1"
          component={Step1}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Step2"
          component={Step2}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Registration"
          component={Registration}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="PhoneRegistration"
          component={PhoneRegistration}
          options={{ headerShown: false }}
        />
                  <Stack.Screen
          name="VerificationCode"
          component={VerificationCode}
          options={{ headerShown: false }}
        />
                          <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FaceId"
          component={FaceId}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BiometryActivation"
          component={BiometryActivation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
