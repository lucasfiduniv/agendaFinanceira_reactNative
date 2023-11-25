import React from 'react';
import { View, Button, Alert } from 'react-native';
import * as GoogleSignIn from 'expo-google-app-auth';

const GoogleSignInExample = async () => {
  try {
    const { type, user } = await GoogleSignIn.logInAsync({
      androidClientId: '872373508940-cf6t8ddnennplv6371ntkgvo62pq911s.apps.googleusercontent.com',
      iosClientId: '872373508940-cf6t8ddnennplv6371ntkgvo62pq911s.apps.googleusercontent.com',
      webClientId: '872373508940-cf6t8ddnennplv6371ntkgvo62pq911s.apps.googleusercontent.com', // Use o Client ID aqui
      scopes: ['profile', 'email'],
    });

    if (type === 'success') {
      // O usuário fez login com sucesso, aqui você pode acessar as informações do usuário em user
      console.log(user);
    } else {
      // O usuário cancelou ou ocorreu um erro
      Alert.alert('Login cancelado ou erro durante o login');
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error);
  }
};

const GoogleSignInButton = () => {
  return (
    <View>
      <Button title="Login com Google" onPress={GoogleSignInExample} />
    </View>
  );
};

export default GoogleSignInButton;
