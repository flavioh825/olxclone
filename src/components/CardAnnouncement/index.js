import React from 'react';
import { 
  Image, 
  View, 
  StyleSheet, 
  TouchableOpacity, 
  Text } from 'react-native';

const CardAnnouncement = (props) => {
  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.card} onPress={props.onClick}>
          <View style={styles.imageContent}>
            <Image source={{uri: props.image}} style={styles.image}/>
          </View>
          <View style={styles.textContent}>
            <Text style={styles.text}>{props.title}</Text>
            <Text style={[styles.text, {fontSize: 16, fontWeight: 'bold'}]}>R${props.price}</Text>
            <Text style={[styles.text, {fontSize: 12, color: '#b1b1b1'}]}>{props.date}</Text>
          </View>
      </TouchableOpacity>
    </View>
  );
}

export default CardAnnouncement;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '97%',
    height: 120,
    marginVertical: '1%',
    backgroundColor: '#fff',
    elevation: 1,
    borderRadius: 5,
    flexDirection: 'row',
  },
  imageContent: {
    backgroundColor: '#20b2aa',
    width: 125,
    height: '100%',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  image: {
    width: 125,
    height: 120,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  textContent: {
    padding: '2%',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  text: {
    fontFamily: 'NunitoSans_400Regular',
    fontSize: 14,
    color: '#3c3a34'
  }
})
