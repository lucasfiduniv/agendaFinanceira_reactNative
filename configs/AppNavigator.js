import React, { useEffect, useState } from 'react';
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
import { Step1 } from '../src/screens/welcome/step1';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [firstTimeUser, setFirstTimeUser] = useState(true);

  useEffect(() => {
    const checkFirstTimeUser = async () => {
      try {
        const value = await AsyncStorage.getItem('@firstTimeUser');

        setFirstTimeUser(value === null);
      } catch (error) {
        console.error('Error checking first time user:', error);
      }
    };

    checkFirstTimeUser();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }} // Oculta o cabeçalho em todas as telas
      >
        {firstTimeUser ? (
          <>
            <Stack.Screen name="Step1" component={Step1} />
            <Stack.Screen name="Step2" component={Step2} /> 
           <Stack.Screen name="GetStarted" component={GetStarted} />
          </>
        ) : (
          <Stack.Screen name="GetStarted" component={GetStarted} />
        )}

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="PhoneRegistration" component={PhoneRegistration} />
        <Stack.Screen name="VerificationCode" component={VerificationCode} />
        <Stack.Screen name="BiometryActivation" component={BiometryActivation} />
        <Stack.Screen name="FaceId" component={FaceId} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
