import React, { useState } from 'react';
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
    <Text style={styles.numericButtonText}>Backspace</Text>
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
    // Encontre o índice do último dígito preenchido (não vazio)
    const lastIndex = code.length - 1;
    while (lastIndex >= 0 && code[lastIndex] === '') {
      lastIndex--;
    }
  
    if (lastIndex >= 0) {
      // Remova o último dígito preenchido
      const newCode = [...code];
      newCode[lastIndex] = '';
      setCode(newCode);
  
      // Mova o foco para o TextInput à esquerda
      if (lastIndex > 0) {
        refs[lastIndex - 1].focus();
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
            <BackspaceButton onPress={handleBackspace} />

            <TouchableOpacity
              style={styles.numericButton}
              onPress={() => handleCodeChange(code.findIndex((digit) => digit === ''), '0')}
            >
              <Text style={styles.numericButtonText}>0</Text>
            </TouchableOpacity>
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
    borderColor: "#E8EAED",
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
});
