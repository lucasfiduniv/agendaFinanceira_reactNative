import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Header } from './components/header';
import { Image } from 'react-native';
import getStartedImage from '../../../assets/getstarted.png';
import { TextTitle } from './components/textTitle';
import { TextDescription } from './components/textDescription';
import DarkBlueButton from './components/darkBlueButton';
import { useNavigation } from '@react-navigation/native';

export function GetStarted() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={getStartedImage} style={styles.getStartedImage} />
        <View style={styles.textContainer}>
        <Text style={styles.textTitle}>Bem-Vindo ao GestãoPessoal</Text>
        <Text style={styles.textDescription}>Faça login para acessar suas informações financeiras e gerenciar suas transações com segurança</Text>
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
    height: '60%', // Cerca de 3/8 da altura
    width: '100%', // Define a largura como nula para ocupar a largura total
    resizeMode: 'cover', // Preenche a imagem mantendo a proporção
  },
  containerImage: {
    alignItems: 'flex-start', // Alinha no início horizontalmente
    justifyContent: 'flex-start', // Alinha no início verticalmente
  },
  textContainer: {
    marginTop: 10, // Reduz o espaço superior entre a imagem e os textos
    paddingHorizontal: 40, // Preenchimento lateral para espaçamento
    alignItems:'center',
  },
  textTitle: {
    color: 'blue',
    fontSize:27,
    fontWeight: '700', // Opcional: adiciona negrito ao texto
  },
  textDescription: {
    fontSize: 16,
    color:'#6B7280',
    marginTop: 10, // Adiciona espaço entre os textos
    textAlign: 'center',
  },
});
