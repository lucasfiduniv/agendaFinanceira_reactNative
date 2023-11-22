import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, useWindowDimensions } from 'react-native';
import { Header } from './components/header';
import phone from '../../../assets/imageStep2.png';
import { TextTitle } from './components/textTitle';
import { TextDescription } from './components/textDescription';
import DarkBlueButton from './components/darkBlueButton';
import { useNavigation } from '@react-navigation/native';

export function Step2() {
  const [currentPage, setCurrentPage] = useState(1);
  const navigation = useNavigation();
  const windowWidth = useWindowDimensions().width;

  const handleSliderChange = (value) => {
    setCurrentPage(value);
  };

  const renderStepIndicator = (step) => {
    const stepStyles = [styles.stepIndicator];

    if (step === currentPage) {
      stepStyles.push(styles.currentStep);
    }

    return <View style={stepStyles} key={step} />;
  };

  const redirectStep = () => {
    navigation.navigate('GetStarted');
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.containerImage}>
        <Image source={phone} style={styles.phone} />
      </View>

      <View style={styles.stepContainer}>
        {[0, 1, 2].map((step) => renderStepIndicator(step))}
      </View>
      <View>
        <TextTitle text="O Lugar Perfeito Para Gerenciar Suas Finanças" />
        <TextDescription text="Com o GestãoPessoal, você terá a facilidade de rastrear despesas, planejar orçamentos e atingir suas metas." />
      </View>
      <View style={styles.containerButton}>
        <DarkBlueButton onPress={redirectStep} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  phone: {
    height: '60%', // Usar % em vez de valores fixos
    width: '80%', // Usar % em vez de valores fixos
  },
  containerImage: {
    justifyContent: 'start',
    alignItems: 'center',
  },
  stepContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -150,
  },
  stepIndicator: {
    width: 10,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: '#A0A0A0',
  },
  currentStep: {
    width: 20,
    backgroundColor: '#1355FF',
  },
  containerButton: {
    paddingHorizontal: '10%', // Usar % em vez de valores fixos
    marginTop: 20,
  },
});
