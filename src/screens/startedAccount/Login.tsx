import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginWhiteButton from '../welcome/components/loginWhiteButton';
import { Ionicons } from '@expo/vector-icons';

export function Login() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [loginType, setLoginType] = useState('email'); // Valor padrão: 'email'

  const redirectToRegistration = () => {
    // Substitua 'Registration' pelo nome da tela para a qual você deseja redirecionar
    navigation.navigate('Registration');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../../assets/Logomark.png')} style={styles.logomarca} />
        <Image source={require('../../../assets/logoescura1.png')} style={styles.logo} />
      </View>
      <Text style={styles.welcomeText}>Bem Vindo De Volta!</Text>
      <Text style={styles.descriptionText}>Digite sua conta registrada para fazer login</Text>

      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            { backgroundColor: loginType === 'email' ? '#FFFFFF' : '#E8EAED' },
          ]}
          onPress={() => setLoginType('email')}
        >
          <Text style={styles.toggleButtonText}>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleButton,
            { backgroundColor: loginType === 'phone' ? '#FFFFFF' : '#E8EAED' },
          ]}
          onPress={() => setLoginType('phone')}
        >
          <Text style={styles.toggleButtonText}>Telefone</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.placeHolder}>{loginType === 'email' ? 'Email' : 'Telefone'}</Text>
      <TextInput
        placeholder={`Insira o seu ${loginType === 'email' ? 'endereço de email' : 'número de telefone'}`}
        style={styles.input}
      />

<View style={styles.inputContainer}>
          <Text style={styles.placeHolder}>Senha</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.forgotPasswordText}>Esqueceu a Senha?</Text>
          </TouchableOpacity>
          </View>
          <View>
            <TextInput
              placeholder="Insira sua Senha"
              secureTextEntry={!showPassword}
              style={styles.input}
            />
            
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eyeIconContainer}
            >
              <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={21} color="#515973" />
            </TouchableOpacity>
</View>

      <LoginWhiteButton onPress={() => {}} text="Login Com Email" />

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

      <View style={styles.registrationContainer}>
        <Text style={styles.textRegistration}>Ainda não possui conta?</Text>
        <TouchableOpacity onPress={redirectToRegistration}>
          <Text style={[styles.textRegistration, styles.linkText]}>Registrar-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 30,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginRight: 150,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  logomarca: {
    width: 40,
    height: 150,
    resizeMode: 'contain',
  },
  welcomeText: {
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: -30,
  },
  descriptionText: {
    fontSize: 18,
    marginVertical: 10,
  },
  toggleContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    padding:5,
    backgroundColor:'#E8EAED',
    borderRadius:10
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 5,
  },
  toggleButtonText: {
    fontSize: 18,
    color: '#000000',
  },
  placeHolder: {
    fontSize: 18,
    fontWeight: '700',
    color: '#6A7187',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#C1C4CD',
    borderRadius: 8,
    padding: 14,
    marginBottom: 10,
    fontSize: 18,
  },
  passwordContainer: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#C1C4CD',
    position: 'relative',
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 10,
    top: '40%',
    transform: [{ translateY: -12 }],
  },
  forgotPasswordText: {
    color: 'blue',
    textAlign: 'right',
    fontSize: 17,
    position: 'relative',
    marginTop: -25,
    marginBottom: 10,
  },
  registrationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  textRegistration: {
    fontSize: 16,
    marginRight: 5,
  },
  linkText: {
    color: 'blue',
  },
});
