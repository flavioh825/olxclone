import React, {useState} from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';

import DrawerNav from './src/navigation/DrawerNav';
import { useFonts, NunitoSans_400Regular } from '@expo-google-fonts/nunito-sans';

export default function App() {

  let [ fontsLoaded ] = useFonts({
    NunitoSans_400Regular,
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <NavigationContainer>
        <StatusBar backgroundColor="rgba(52, 52, 52, 0.5)" translucent={true} barStyle="light-content"/>
        <DrawerNav />
      </NavigationContainer>
    </>
  );
}
