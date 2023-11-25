import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import faceIdImage from "../../assets/faceid.png"
import DarkBlueButton from './welcome/components/darkBlueButton';
import { useNavigation } from "@react-navigation/native";


export function FaceId() {
    const navigation = useNavigation();
    const redirectBiometry = () => {
        navigation.navigate("BiometryActivation");
      };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton}>
        {/* Coloque o ícone 'X' ou o que desejar para fechar */}
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
      <Text style={styles.title}>
       Ativar FaceID
      </Text>    
        <Text style={styles.text}>
        Face ID é um método conveniente e seguro de fazer login em sua conta
      </Text>
      <View style={styles.ImageView}>
      <Image
        source={faceIdImage}
        style={styles.image}
      />
        </View>
<DarkBlueButton text='Ativar'/>

        <Text onPress={redirectBiometry} style={styles.buttonText}>Talvez mais tarde</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    padding: 10,
  },
  closeButtonText: {
    fontSize: 30,
  },
  ImageView: {
justifyContent: 'center',
alignContent: 'center',
marginLeft: 10,  
},
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  text: {
    textAlign: 'center',
    marginBottom: 20,
    padding: 10,
    fontSize: 15,
    color: '#6A7187',
  },
  title:{
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  activateButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  maybeLaterButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#1355FF',
    textAlign: 'center',
    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

