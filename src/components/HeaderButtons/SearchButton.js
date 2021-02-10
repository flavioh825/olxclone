import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SearchButton = () => {
  return(
    <TouchableOpacity onPress={() => {}} style={{marginHorizontal: 10}}>
      <MaterialIcons name="search" color="#fff" size={24} />
    </TouchableOpacity>
  );
}

export default SearchButton;