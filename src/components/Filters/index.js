import React from 'react';
import { View, StyleSheet, Dimensions} from 'react-native';

import { Region, Category, Filter } from './FilterButtons';

const Filters = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContent}>
        <Region />
      </View>
      <View style={[styles.buttonContent, styles.centralButtonContent]}>
        <Category />
      </View>
      <View style={styles.buttonContent}>
        <Filter />
      </View>
    </View>
  );
}

export default Filters;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 5,
  },
  buttonContent: { 
    borderBottomWidth: 0.5,
    borderBottomColor: '#b1b1b1',
    width: Dimensions.get('window').width / 3
  },
  centralButtonContent: {
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderLeftColor: '#b1b1b1',
    borderRightColor: '#b1b1b1',
  }
})