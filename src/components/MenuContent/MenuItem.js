import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MenuItem = (props) => {
  return(
    <TouchableOpacity style={styles.menuItem} onPress={props.onClick}>
      {
        (props.children) ?
          <View style={styles.menuIcon}>
            {props.children}
          </View> :
        null
      }
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
}

export default MenuItem;

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row', 
    width: '100%', 
    height: 30, 
    marginVertical: '2%',
    marginHorizontal: '2%',
    alignItems: 'center',
  },
  menuIcon: {
    width: 42,
    justifyContent: 'center',
    alignItems:'center',
    marginRight: '5%'
  },
  buttonText: {
    marginHorizontal: '5%',
    marginVertical: '2%',
    fontSize: 15,
    color: '#3c3a34',
    fontFamily: 'NunitoSans_400Regular',
  },
});