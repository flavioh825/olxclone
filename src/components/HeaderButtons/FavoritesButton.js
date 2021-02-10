import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const FavoritesButton = () => {
  return(
    <TouchableOpacity onPress={() => {}} style={{marginHorizontal: 10}}>
      <MaterialIcons name="favorite-border" color="#fff" size={24} />
    </TouchableOpacity>
  );
}

export default FavoritesButton;