import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const AnnouncementButton = () => {

  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <MaterialIcons name='camera-alt' color='#fff' size={24} />
        <Text style={styles.text}>Anunciar agora</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AnnouncementButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: Dimensions.get('window').height - 155,
    left: (Dimensions.get('window').width - 170) / 2,
  },
  button: {
    width: 170,
    height: 55,
    backgroundColor: 'rgb(247, 131, 35)',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: '8%',
    paddingHorizontal: '6%',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'NunitoSans_400Regular',
  }
})