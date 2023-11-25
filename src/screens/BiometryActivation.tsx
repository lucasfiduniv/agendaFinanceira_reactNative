import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import biometryImage from "../../assets/biometry.png"; // Certifique-se de ter a imagem correta
import DarkBlueButton from './welcome/components/darkBlueButton';

export function BiometryActivation() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
      <Text style={styles.title}>
        Ativar Biometria
      </Text>    
      <Text style={styles.text}>
        A biometria é uma maneira conveniente e segura de fazer login em sua conta
      </Text>
      <View style={styles.imageView}>
        <Image
          source={biometryImage} // Substitua com a imagem correta
          style={styles.image}
        />
      </View>
     <DarkBlueButton text='Ativar Biometria'/>
        <Text style={styles.buttonText}>Talvez mais tarde</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    padding: 10,
  },
  closeButtonText: {
    fontSize: 30,
  },
  imageView: {
    justifyContent: 'center',
    alignContent: 'center',
    marginLeft: 10,  
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  text: {
    textAlign: 'center',
    marginBottom: 20,
    padding: 10,
    fontSize: 15,
    color: '#6A7187',
  },
  title:{
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  maybeLaterButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#1355FF',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  },
});
