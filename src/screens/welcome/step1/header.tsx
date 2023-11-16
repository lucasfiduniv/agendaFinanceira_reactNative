import React, { useEffect, useState } from 'react';
import { Image, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import icon from '../../../../assets/Logomark.png';
import logo from '../../../../assets/logoescura1.png';
import { useFonts } from 'expo-font';

export function Header() {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={icon} style={styles.imageLogo} />
        <Image source={logo} style={styles.imageEscrita} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Pular</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Alinha à esquerda
    paddingHorizontal: 20,
    width: '100%',
  },
  imageLogo: {
    resizeMode: 'contain',
    width: 50,
    height: 100,
  },
  imageEscrita: {
    resizeMode: 'contain',
    width: 120,
    height: 100,
    marginLeft: 10, // Espaço entre as imagens
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end', // Alinha à direita
    paddingRight: 20,
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'blue',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'blue',
    textAlign: 'center',
  },
});
