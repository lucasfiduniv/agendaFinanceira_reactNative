import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginWhiteButton from '../screens/welcome/components/loginWhiteButton';
import { Ionicons } from '@expo/vector-icons';
import DarkBlueButton from './welcome/components/darkBlueButton';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Registration() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const redirectToLogin = () => {
    navigation.navigate('Login');
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://192.168.1.6:3000/users', {
        nome: fullName,
        email: email,
        senha: password,
      });
      const userId = response.data.id;
      await AsyncStorage.setItem('userId', userId);
      console.log('Resposta do servidor:', response.data);

      navigation.navigate('PhoneRegistration');
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error.message);

    }
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={redirectToLogin}>
        <Ionicons name="arrow-back" size={34} color="#000" />
      </TouchableOpacity>

      <Text style={styles.welcomeText}>Criar Uma Conta</Text>
      <Text style={styles.descriptionText}>
        Crie um perfil sem compromisso para explorar produtos e recompensas financeiras
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.placeHolder}>Nome Completo</Text>
        <TextInput
          placeholder="John Doe"
          value={fullName}
          onChangeText={(text) => setFullName(text)}
          style={styles.input}
        />

        <Text style={styles.placeHolder}>Email</Text>
        <TextInput
          placeholder="johndoe@mail.com"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />

        <Text style={styles.placeHolder}>Senha</Text>
        <View>
            <TextInput
              placeholder="Insira sua Senha"
              secureTextEntry={!showPassword}
              style={styles.input}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eyeIconContainer}
            >
              <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={21} color="#515973" />
            </TouchableOpacity>
</View>
      </View>

      <View style={styles.termsContainer}>
        <Text style={styles.termsText}>
          Ao iniciar minha inscrição, concordo com os Termos de Serviço e a Política de Privacidade do
          GestaoPessoal
        </Text>
      </View>

      <DarkBlueButton onPress={handleSignUp} text="Registrar-se" />

      <View style={styles.loginContainer}>
        <Text style={styles.textRegistration}>Já Possui uma Conta?</Text>
        <TouchableOpacity onPress={redirectToLogin}>
          <Text style={[styles.textRegistration, styles.linkText]}>Entrar</Text>
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
    justifyContent:'center'
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 30,
    zIndex: 1,
  },
  welcomeText: {
    fontSize: 34,
    fontWeight: '700',
    marginTop: 20,
  },
  descriptionText: {
    fontSize: 18,
    marginVertical: 10,
    color:"#6A7187"
  },
  inputContainer: {
    marginTop: 20,
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
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 10,
    top: '40%',
    transform: [{ translateY: -12 }],
  },
  eyeText: {
    color: 'blue',
    fontSize: 16,
  },
  termsContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  termsText: {
    fontSize: 16,
    color: '#6A7187',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  textRegistration: {
    fontSize: 16,
    marginRight: 5,
  },
  linkText: {
    color: 'blue',
  },
});
