import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import getStartedImage from '../../../assets/getstarted.png';
import DarkBlueButton from './components/darkBlueButton';
import { useNavigation } from '@react-navigation/native';
import LoginWhiteButton from './components/loginWhiteButton';


export function GetStarted() {
  const navigation = useNavigation();

  const redirectToRegistration = () => {
    // Substitua 'Registration' pelo nome da tela para a qual você deseja redirecionar
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={getStartedImage} style={styles.getStartedImage} />
        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>Bem-Vindo ao GestãoPessoal</Text>
          <Text style={styles.textDescription}>Faça login para acessar suas informações financeiras e gerenciar suas transações com segurança</Text>
        </View>
        <View style={styles.buttonContainer}>
          <DarkBlueButton text='Login Com Email' onPress={redirectToRegistration}/>
          <LoginWhiteButton
  onPress={() => {}}
  imageSource={require('../../../assets/foundation_social-apple.png')}
  text="Login com Apple"
/>
<LoginWhiteButton
  onPress={() => {}}
  imageSource={require('../../../assets/flat-color-icons_google.png')}
  text="Login com Google"
/>
        </View>
        <View style={styles.registrationContainer}>
          <Text style={styles.textRegistration}>Ainda não possui Conta?</Text>
          <TouchableOpacity onPress={redirectToRegistration}>
          <Text style={[styles.textRegistration, styles.linkText]}>Registrar-se</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  getStartedImage: {
    height: '47%', // Cerca de 3/8 da altura
    width: '100%', // Define a largura como nula para ocupar a largura total
    resizeMode: 'cover', // Preenche a imagem mantendo a proporção
  },
  containerImage: {
    alignItems: 'flex-start', // Alinha no início horizontalmente
    justifyContent: 'flex-start', // Alinha no início verticalmente
  },
  textContainer: {
    marginTop: 20, // Reduz o espaço superior entre a imagem e os textos
    paddingHorizontal: 20, // Preenchimento lateral para espaçamento
    alignItems: 'center',
  },
  textTitle: {
    color: '#061237',
    fontSize: 30,
    fontWeight: '800', // Opcional: adiciona negrito ao texto
  },
  textDescription: {
    fontSize: 20,
    color: '#6B7280',
    paddingHorizontal: 20,
    marginTop: 10, // Adiciona espaço entre os textos
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20, // Reduz o espaço superior entre a imagem e os textos
paddingHorizontal:20,
    alignItems: 'center',
    width: '100%', // O botão ocupa 100% da largura
  },
  textRegistration: {
    fontSize: 20,
    color: '#061237',
    paddingLeft: 20,
    marginTop: 10, // Adiciona espaço entre os textos
    textAlign: 'center',
  },
  registrationContainer: {
    flexDirection: 'row', // Alinha itens na horizontal
    justifyContent: 'center', // Alinha ao centro horizontalmente
    marginTop: 10,
    paddingHorizontal:20
  },

  linkText: {
    color: '#1355FF', // Cor do link
  },
});
