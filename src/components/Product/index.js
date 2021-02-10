import React from 'react';
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const Product = (props) => {

  function showDescription(text) {
    if(text.length > 19) {
      return text.substring(0, 19) + '...'; 
    }

    return text
  }

  return (
    <TouchableOpacity style={{marginRight: 15 }} onPress={props.onClick}>
      <View>
        <Image source={{uri: props.image}} style={styles.image}/>
        <View>
          <Text style={styles.text}>
            {showDescription(props.title)}
          </Text>
          <Text style={[styles.text, {color: '#252525'}]}>
            R$ {props.price.split(',')[0]}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Product;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '3%'
  },
  image: {
    width: 142,
    height: 142,
    borderRadius: 5
  },
  text: {
    fontFamily: 'NunitoSans_400Regular',
    color: '#3c3a34',
    fontSize: 14,
  }
})