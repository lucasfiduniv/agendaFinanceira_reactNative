import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header } from './header';

export function Step1() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
