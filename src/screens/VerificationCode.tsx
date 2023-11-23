import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

const BackspaceButton = ({ onPress }) => (
  <TouchableOpacity style={[styles.numericButton, { flex: 1 }]} onPress={onPress}>
    <Icon name="backspace" size={24} color="black" /> 
  </TouchableOpacity>
);

export function VerificationCode() {
  const [code, setCode] = useState(['', '', '', '', '']);

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
    // Encontre o índice do último dígito preenchido (não vazio) começando do final
    const lastIndex = code.slice().reverse().findIndex((value) => value !== '');
  
    if (lastIndex >= 0) {
      // Converta o índice para o índice no array original
      const originalIndex = code.length - 1 - lastIndex;
  
      // Remova o último dígito preenchido
      const newCode = [...code];
      newCode[originalIndex] = '';
      setCode(newCode);
  
      // Mova o foco para o TextInput à direita
      if (originalIndex < code.length - 1) {
        refs[originalIndex + 1].focus();
      }
    }
  };
  

  const handleSubmit = () => {
    const enteredCode = code.join('');

    console.log('Entered Code:', enteredCode);
  };

  const refs = [];

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
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

        <View style={styles.keyboardContainer}>
          <View style={styles.row}>
            {[1, 2, 3].map((number) => (
              <TouchableOpacity
                key={number}
                style={styles.numericButton}
                onPress={() => handleCodeChange(code.findIndex((digit) => digit === ''), String(number))}
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
                onPress={() => handleCodeChange(code.findIndex((digit) => digit === ''), String(number))}
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
                onPress={() => handleCodeChange(code.findIndex((digit) => digit === ''), String(number))}
              >
                <Text style={styles.numericButtonText}>{number}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              style={styles.numericButton}
              onPress={() => handleCodeChange(code.findIndex((digit) => digit === ''), '*')}
            >
              <Text style={styles.numericButtonText}>*</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.numericButton}
              onPress={() => handleCodeChange(code.findIndex((digit) => digit === ''), '0')}
            >
              <Text style={styles.numericButtonText}>0</Text>
            </TouchableOpacity>     
                 <BackspaceButton onPress={handleBackspace} />
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
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  codeInput: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "black",
    textAlign: 'center',
    marginRight: 10,
    fontSize: 30,
    color:"black"
  },
  keyboardContainer: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  numericButton: {
    width:120,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',

  },
  numericButtonText: {
    fontSize: 24,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  receivedcode:{
    color:"#1355FF",
    marginBottom:20
  }
});
