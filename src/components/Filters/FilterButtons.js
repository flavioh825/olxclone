import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const Region = () => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => {}}>
      <Text style={styles.text}>DDD 21 - Rio...</Text>
    </TouchableOpacity>
  );
}

export const Category = () => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => {}}>
      <Text style={styles.text}>Categorias</Text>
    </TouchableOpacity>
  );
}

export const Filter = () => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => {}}>
      <Text style={styles.text}>Filtros</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
  },
  text: {
    fontSize: 16,
    color: '#6e0ad6',
    fontWeight: '600',
    fontFamily: 'NunitoSans_400Regular',
  }
});