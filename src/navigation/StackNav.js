import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Detail from '../pages/Detail';
import MenuButton from '../components/HeaderButtons/MenuButton';
import SearchButton from '../components/HeaderButtons/SearchButton';
import FavoritesButton from '../components/HeaderButtons/FavoritesButton';

const Stack = createStackNavigator();

function NavStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home"
        component={Home}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#6e0ad6',
          },
          headerTintColor: '#fff',
          headerLeft: () => <MenuButton />,
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
              <SearchButton />
              <FavoritesButton />
            </View>
          )
        }}
      />
      <Stack.Screen 
        name="Detail"
        component={Detail}
        options={{
          title: 'Anúncio',
          headerStyle: {
            backgroundColor: '#6e0ad6',
          },
          headerTintColor: '#fff',
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
              <SearchButton />
              <FavoritesButton />
            </View>
          )
        }}
      />
    </Stack.Navigator>
  );
}

export default NavStack;