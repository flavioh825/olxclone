import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Image 
} from 'react-native';
import { Feather, Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

import MenuHeader from './MenuHeader';
import MenuItem from './MenuItem';

const MenuContent = (props) => {
  return (
    <View {...props} style={styles.container}>
      <MenuHeader />
      <ScrollView style={styles.content}>
        <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
          <Image style={styles.image} source={require('../../assets/logo.png')} />
          <Text style={styles.itemText}>Anúncios</Text>
        </TouchableOpacity>
        <MenuItem text="Inserir Anúncio" onClick={() => {}}>
          <Feather name="edit-2" size={24} color="#3c3a34" />
        </MenuItem>
        <MenuItem text="Notificações" onClick={() => {}}>
          <Ionicons name="notifications-outline" size={24} color="#3c3a34" />
        </MenuItem>
        <MenuItem text="Chat" onClick={() => {}}>
          <Ionicons name="md-chatbubble-outline" size={24} color="#3c3a34" />
        </MenuItem>
        <MenuItem text="Favoritos" onClick={() => {}}>
          <MaterialIcons name="favorite-border" size={24} color="#3c3a34" />
        </MenuItem>
        <MenuItem text="Minha Conta" onClick={() => {}}>
          <Feather name="user" size={24} color="#3c3a34" />
        </MenuItem>
        <View style={styles.line} />
          <MenuItem text="Pagamentos" onClick={() => {}}>
            <FontAwesome name="usd" size={20} color="#3c3a34" />
          </MenuItem>
        <View style={styles.line} />
        <MenuItem text="Central de Ajuda" onClick={() => {}} />
        <MenuItem text="Sobre o OLX" onClick={() => {}} />
        <MenuItem text="Dicas de Segurança" onClick={() => {}} />
        <MenuItem text="Termos de Uso" onClick={() => {}} />
        <MenuItem text="Avalie na Google Play" onClick={() => {}} />
        <MenuItem text="Curta no Facebook" onClick={() => {}} />
      </ScrollView>
    </View>
  )
}

export default MenuContent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  menuItem: {
    flexDirection: 'row',
    width: '100%', 
    height: 40, 
    marginHorizontal: '2%', 
    alignItems: 'center',
  },
  image: {
    width: 27,
    height: 14,
    marginHorizontal: '3%',
    marginVertical: '3%',
    alignItems: 'center',
  },
  itemText: {
    marginHorizontal: '9%',
    marginVertical: '2%',
    fontSize: 15,
    color: 'rgb(247, 131, 35)',
  },
  content: {
    paddingTop: 10,
  },
  line: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginVertical: '2%',
    alignSelf: 'center',
  }
})