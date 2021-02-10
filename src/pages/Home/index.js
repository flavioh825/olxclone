import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Filters from '../../components/Filters';
import CardHorizontalScroll from '../../components/CardHorizontalScroll';
import Product from '../../components/Product';
import CardAnnouncement from '../../components/CardAnnouncement';
import AnnouncementButton from '../../components/AnnouncementButton';

const Home = () => {

  const navigation = useNavigation();

  const [ announcements, setAnnouncements ] = useState([]);

  const getAnnouncements = async () => {
    try {
      let response = await fetch('http://[SEU_IP]:3000/anuncios');
      
      setAnnouncements(await response.json());
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getAnnouncements();
  }, []);

  return (
    <View style={styles.container}>
      <Filters />
      <ScrollView>
        <View style={{
          width: '100%',
          paddingLeft: '5%',
          backgroundColor: '#fff',
        }}>
          <Text style={styles.text}>Selecionamos para você!</Text>
          <CardHorizontalScroll>
            {
              announcements.map(val => {
                return <Product 
                        key={val.id} 
                        title={val.title} 
                        price={val.price} 
                        image={val.images[0].url} 
                        onClick={() => navigation.navigate('Detail', { id: val.id })} />
              })
            }
          </CardHorizontalScroll>
        </View>
        
        <Text style={styles.title}>Mais anúncios</Text>
        
        {
          announcements.map(val => {
            return <CardAnnouncement 
                    image={val.images[0].url}
                    key={val.id} 
                    title={val.title} 
                    price={val.price}
                    date={val.data}
                    onClick={() => navigation.navigate('Detail', { id: val.id })} />
          })
        }
      </ScrollView>

      <AnnouncementButton />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
  title: {
    fontSize: 16,
    marginHorizontal: '5%',
    marginVertical: '3%',
    fontFamily: 'NunitoSans_400Regular',
  },
  text: {
    fontFamily: 'NunitoSans_400Regular',
    fontSize: 16,
    color: '#252525',
    marginVertical: '4%',
  }
})