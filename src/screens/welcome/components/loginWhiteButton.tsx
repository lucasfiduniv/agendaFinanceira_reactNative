import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet, View } from 'react-native';

interface LoginWhiteButtonProps {
  onPress?: () => void;
  imageSource?: any; // Tipo de imagem específico que você está usando
  text?: string;
}

const LoginWhiteButton = ({ onPress, imageSource, text }: LoginWhiteButtonProps) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <View style={styles.buttonContent}>
      {imageSource && <Image source={imageSource} style={styles.image} />}
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF', // Cor de fundo branca
    borderWidth: 1,
    borderColor: '#A1A1A1', // Cor da borda cinza
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  buttonContent: {
    flexDirection: 'row', // Alinha itens na horizontal
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  image: {
    width: 30, // Ajuste a largura da imagem conforme necessário
    height: 30, // Ajuste a altura da imagem conforme necessário
    marginRight: 10, // Espaçamento entre a imagem e o texto
  },
  buttonText: {
    color: '#000000', // Cor do texto preta
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default LoginWhiteButton;
