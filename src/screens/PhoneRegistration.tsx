import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CountryPicker from 'react-native-country-picker-modal';
import DarkBlueButton from './welcome/components/darkBlueButton';
import { Ionicons } from '@expo/vector-icons';

export function PhoneRegistration() {
    const navigation = useNavigation();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
  
    const handleContinue = () => {
      navigation.navigate('VerificationCode');
    };
  
    const redirectToLogin = () => {
      navigation.navigate('redirectLogin');
    };
  
    const onSelectCountry = (country) => {
      setSelectedCountry(country);
      setModalVisible(false);
    };
  
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={redirectToLogin}>
          <Ionicons name="arrow-back" size={34} color="#000" />
        </TouchableOpacity>
  
        <Text style={styles.welcomeText}>Qual é o seu número de telefone?</Text>
        <Text style={styles.descriptionText}>
          Digite o número do seu celular para que possamos enviar uma mensagem de texto com um código de autenticação
        </Text>
  
        <View style={styles.inputContainer}>
          <Text style={styles.placeHolder}>Número de Telefone</Text>
          <View style={styles.phoneInputContainer}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <View style={styles.dropdownInnerContainer}>
                {selectedCountry && (
                  <Image source={{ uri: selectedCountry.flag }} style={styles.flagIcon} />
                )}
                {selectedCountry && (
                  <Text style={styles.countryCode}>{selectedCountry.callingCode}</Text>
                )}
              </View>
            </TouchableOpacity>
  
            <View style={styles.divider} />
  
            <TextInput
              placeholder="8908 97"
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
              style={styles.input}
              keyboardType="phone-pad"
            />
          </View>
        </View>
  
        <DarkBlueButton onPress={handleContinue} text="Continue" />
  
        {/* Country Picker Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <CountryPicker
            withFlag
            withFilter
            withCallingCode
            onSelect={onSelectCountry}
            onClose={() => setModalVisible(false)}
            containerButtonStyle={styles.modalCloseButton}
            visible={modalVisible}
          />
        </Modal>
      </View>
    );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 30,
    zIndex: 1,
  },
  welcomeText: {
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 20,
  },
  descriptionText: {
    fontSize: 18,
    marginVertical: 10,
  },
  inputContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  placeHolder: {
    fontSize: 18,
    fontWeight: '700',
    color: '#6A7187',
    marginBottom: 5,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C1C4CD',
    borderRadius: 8,
    padding: 14,
  },
  countryDropdown: {
    marginRight: 10,
  },
  dropdownInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
    borderRadius: 12,
  },
  divider: {
    height: '80%',
    width: 1,
    backgroundColor: '#C1C4CD',
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalCloseButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
});
