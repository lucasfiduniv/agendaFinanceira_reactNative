import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const DarkBlueButton = ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>Iniciar</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#061237', // Cor de fundo azul escuro
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // Cor do texto branco
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default DarkBlueButton;
