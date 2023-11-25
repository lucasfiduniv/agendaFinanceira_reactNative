import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Ionicons } from '@expo/vector-icons';

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import DarkBlueButton from './welcome/components/darkBlueButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const BackspaceButton = ({ onPress }) => (
  <TouchableOpacity style={[styles.numericButton, { flex: 1 }]} onPress={onPress}>
    <Icon name="backspace" size={24} color="black" />
  </TouchableOpacity>
);

export function VerificationCode() {
  const [code, setCode] = useState(['', '', '', '', '']);
  const navigation = useNavigation();

  
  const handleCodeChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;

    if (index < 4 && value !== '') {
      // Move focus to the next TextInput
      refs[index + 1].focus();
    }

    setCode(newCode);
  };

  const handleBackspace = () => {
    const lastIndex = code.slice().reverse().findIndex((value) => value !== '');

    if (lastIndex >= 0) {
      const originalIndex = code.length - 1 - lastIndex;

      const newCode = [...code];
      newCode[originalIndex] = '';
      setCode(newCode);

      if (originalIndex < code.length - 1) {
        refs[originalIndex + 1].focus();
      }
    }
  };

  const handleSubmit = async () => {
    console.log("Submit");
    try {
      const userId = await AsyncStorage.getItem('userId');
      const verificationCode = code.join('');
      const response = await axios.post("http://192.168.1.6:3000/email-verification/validaty-code", {
        code: verificationCode,
        id: userId,
      });
  
      console.log(response);
  
      // Adicione lógica adicional conforme necessário com base na resposta da API
      // Por exemplo, você pode redirecionar o usuário para a próxima tela se a validação for bem-sucedida.
    } catch (error) {
      console.error('Erro ao processar a solicitação:', error.message);
      // Adicione lógica para lidar com o erro, como exibição de uma mensagem ao usuário
    }
  };

  const redirectToLogin = () => {
    navigation.navigate('PhoneRegistration');
  };
  const refs = [];

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={redirectToLogin}>
          <Ionicons name="arrow-back" size={34} color="#000" />
        </TouchableOpacity>
        {/* Parte com outra cor no topo */}
        <View style={styles.topHalf}>
          <Text style={styles.title}>Código de Validação</Text>
          <View style={styles.codeContainer}>
            {code.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.codeInput}
                value={digit}
                onChangeText={(value) => handleCodeChange(index, value)}
                maxLength={1}
                editable={false}
                ref={(input) => (refs[index] = input)}
              />
            ))}
          </View>
          <Text style={styles.receivedcode}>Não Recebeu o Código? </Text>
          <DarkBlueButton text="Continue" onPress={handleSubmit} />
        </View>

        {/* Parte inferior com o teclado */}
        <View style={styles.bottomHalf}>
          <View style={[styles.keyboardContainer, { alignItems: 'flex-end' }]}>
            <View style={styles.row}>
              {[1, 2, 3].map((number) => (
                <TouchableOpacity
                  key={number}
                  style={styles.numericButton}
                  onPress={() =>
                    handleCodeChange(
                      code.findIndex((digit) => digit === ''),
                      String(number)
                    )
                  }
                >
                  <Text style={styles.numericButtonText}>{number}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.row}>
              {[4, 5, 6].map((number) => (
                <TouchableOpacity
                  key={number}
                  style={styles.numericButton}
                  onPress={() =>
                    handleCodeChange(
                      code.findIndex((digit) => digit === ''),
                      String(number)
                    )
                  }
                >
                  <Text style={styles.numericButtonText}>{number}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.row}>
              {[7, 8, 9].map((number) => (
                <TouchableOpacity
                  key={number}
                  style={styles.numericButton}
                  onPress={() =>
                    handleCodeChange(
                      code.findIndex((digit) => digit === ''),
                      String(number)
                    )
                  }
                >
                  <Text style={styles.numericButtonText}>{number}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.row}>
              <TouchableOpacity
                style={styles.numericButton}
                onPress={() =>
                  handleCodeChange(
                    code.findIndex((digit) => digit === ''),
                    '*'
                  )
                }
              >
                <Text style={styles.numericButtonText}>*</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.numericButton}
                onPress={() =>
                  handleCodeChange(
                    code.findIndex((digit) => digit === ''),
                    '0'
                  )
                }
              >
                <Text style={styles.numericButtonText}>0</Text>
              </TouchableOpacity>
              <BackspaceButton onPress={handleBackspace} />
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 30,
    zIndex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  codeInput: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'black',
    textAlign: 'center',
    marginRight: 10,
    fontSize: 30,
    color: 'black',
  },
  receivedcode: {
    color: '#1355FF',
    marginBottom: 20,
  },
  keyboardContainer: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  numericButton: {
    width: 120,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numericButtonText: {
    fontSize: 24,
  },
  topHalf: {
    flex: 2,
    width: '100%',
    justifyContent: 'flex-end',

  },
  bottomHalf: {
    flex: 1,
    width: '100%',

    justifyContent: 'flex-end',
  },
});
