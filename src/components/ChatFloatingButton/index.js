import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ChatFloatingButton = () => {

  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <MaterialIcons name='chat-bubble-outline' color='#fff' size={24} />
        <Text style={styles.text}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ChatFloatingButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: Dimensions.get('window').height - 190,
    left: (Dimensions.get('window').width - 300) / 2,
  },
  button: {
    width: 300,
    height: 55,
    backgroundColor: 'rgb(247, 131, 35)',
    borderRadius: 30,
    flexDirection: 'row',
    paddingVertical: '5%',
    paddingHorizontal: '6%',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'NunitoSans_400Regular',
  }
})