import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

const CardHorizontalScroll = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {props.children}
      </ScrollView>
    </View>
  );
}

export default CardHorizontalScroll;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 195,
  },
});