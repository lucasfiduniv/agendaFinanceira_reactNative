import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import { Step1 } from './src/screens/welcome/step1/step1';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Configuração da StatusBar */}
      <StatusBar
        barStyle="dark-content"  // Define o estilo do texto na StatusBar para escuro
        backgroundColor="white"  // Define a cor de fundo da StatusBar para branco
      />
<Step1/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
