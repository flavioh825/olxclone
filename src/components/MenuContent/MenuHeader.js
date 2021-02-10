import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const MenuHeader = () => {
  return(
    <View style={styles.header}>
      <View style={styles.userIcon}>
        <Feather name="user" size={30} color="#fff" />
      </View>
      <View>
        <Text 
          style={
            [
              styles.headerText, 
              { 
                fontSize: 15, 
                fontWeight: 'bold', 
                letterSpacing: 0.7 
              }
            ]
          }>Acesse sua conta agora!</Text>
        <Text style={styles.headerText}>Clique aqui</Text>
      </View>
    </View>
  );
}

export default MenuHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6e0ad6',
    width: '100%',
    height: 110,
    flexDirection: 'row',
    paddingTop: 50,
  },
  headerText: { 
    color: '#fff', 
    fontSize: 14,
    fontFamily: 'NunitoSans_400Regular',
  },
  userIcon: { 
    marginHorizontal: '8%', 
    marginTop: 3 
  },
});