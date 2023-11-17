import React from 'react';
import { Image, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import icon from '../../../../assets/Logomark.png';
import logo from '../../../../assets/logoescura1.png';

export function Header() {
  const navigation = useNavigation();

  const redirectToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={icon} style={styles.imageLogo} />
        <Image source={logo} style={styles.imageEscrita} />

        <TouchableOpacity onPress={redirectToLogin} style={styles.button}>
          <Text style={styles.buttonText}>Pular</Text>
        </TouchableOpacity>
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
    width: 40,
    height: 100,
  },
  imageEscrita: {
    resizeMode: 'contain',
    width: 160,
    height: 60,
    marginLeft: 10, // Espaço entre as imagens
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'blue',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginLeft: 100,
  },
  buttonText: {
    color: 'blue', // Text color
    textAlign: 'center',
    fontSize: 13,
  },
});