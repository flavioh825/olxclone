import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const MenuButton = () => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer()) } 
      style={{marginHorizontal: 10}}
    >
      <MaterialIcons name='menu' color='#fff' size={24} />
    </TouchableOpacity>
  );
}

export default MenuButton;