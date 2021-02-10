import React, {useState, useEffect} from 'react';
import { 
  Dimensions, 
  ScrollView, 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  ActivityIndicator } from 'react-native';

import ImageSlider from '../../components/ImageSlider';
import CardHorizontalScroll from '../../components/CardHorizontalScroll';
import Product from '../../components/Product';
import ChatFloatingButton from '../../components/ChatFloatingButton';

const Detail = ({route, navigation}) => {

  const { id } = route.params;

  const [ hideText, setHideText ] = useState(true);
  const [ announcements, setAnnouncements ] = useState([]);
  const [ announcement, setAnnouncement ] = useState({});

  const getAnnouncements = async () => {
    try {
      let response = await fetch('http://[SEU_IP]:3000/anuncios');
      
      setAnnouncements(await response.json());
    } catch (error) {
      console.error(error);
    }
  }

  const getAnnouncement = async () => {
    try {
      let response = await fetch('http://[SEU_IP]:3000/anuncios/' + id);

      setAnnouncement(await response.json());
    } catch (error) {
      console.error(error);
    }
  }

  function showText(txt) {
    if(txt.length > 145 && hideText) {
      return txt.substring(0, 145) + '...';
    } 
    return txt;
  }

  useEffect(() => {
    getAnnouncement();
    getAnnouncements();
  }, []);

  return(
    <View style={styles.container}>
      {
        Object.keys(announcement).length !== 0 ? 
        <ScrollView style={{marginBottom: 40}} onPress={() => {}}>
          <ImageSlider images={announcement.images} />
          <View style={{width: '100%', height: '100%', paddingHorizontal: '3%', paddingVertical: '3%'}}>
            <Text style={[styles.text, {fontSize: 36}]}>R${announcement.price.split(',')[0]}</Text>
            <Text style={[styles.text, {fontSize: 22, marginVertical: '2%'}]}>{announcement.title}</Text>
            <Text style={[styles.text, {fontSize: 14, marginVertical: '2%', color: '#b1b1b1'}]}>{announcement.data}</Text>
            <View style={styles.line} />
            <Text style={[styles.text, {fontSize: 22, marginVertical: '3%', color: '#252525'}]}>Descrição</Text>
            
            <Text style={[styles.text, { fontSize: 16, marginVertical: '2%' }]}>
              { showText(announcement.description) }
            </Text>
            
            {
              (hideText)?
              <TouchableOpacity 
                onPress={() => {
                  setHideText(false);
                  showText(announcement.description);
                }}>
                <Text 
                  style={[styles.text, { color: 'rgb(144, 39, 176)', fontWeight: 'bold', fontSize: 16}]}
                >
                  Ver descrição completa
                </Text>
              </TouchableOpacity>
              : <></>
            }

            <View style={styles.line} />
            
            <Text style={[styles.text, {fontSize: 22, marginVertical: '3%', color: '#252525'}]}>Detalhes</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <View style={{ width: '50%', marginVertical: '2%' }}>
                <Text style={[styles.text, {fontSize: 16}]}>Tipo</Text>
              </View>
              <View style={{ width: '50%', marginVertical: '2%' }}>
                <Text style={[styles.text, {fontSize: 16}]}>PCs e computadores</Text>
              </View>
            </View>

            <View style={styles.line} />

            <View>
              <Text style={[styles.text, {fontSize: 22, marginVertical: '3%', color: '#252525'}]}>Anúncios relacionados</Text>
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

            <View style={styles.line} />

            <Text style={[styles.text, {fontSize: 22, marginVertical: '3%', color: '#252525'}]}>Localização</Text>
            <View style={{ flexDirection: 'row', marginVertical: '2%' }}>
              <View style={{width: '50%'}}>
                <Text style={[styles.text, {fontSize: 16}]}>CEP</Text>
              </View>
              <View style={{width: '50%'}}>
                <Text style={[styles.text, {fontSize: 16}]}>22354000</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', marginVertical: '2%' }}>
              <View style={{width: '50%'}}>
                <Text style={[styles.text, {fontSize: 16}]}>Município</Text>
              </View>
              <View style={{width: '50%'}}>
                <Text style={[styles.text, {fontSize: 16}]}>Rio de Janeiro</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', marginVertical: '2%' }}>
              <View style={{width: '50%'}}>
                <Text style={[styles.text, {fontSize: 16}]}>Bairro</Text>
              </View>
              <View style={{width: '50%'}}>
                <Text style={[styles.text, {fontSize: 16}]}>Barra da Tijuca</Text>
              </View>
            </View>

            <View style={[styles.line, {marginBottom: 100}]} />

          </View>

        </ScrollView>
        : <ActivityIndicator size="large" color="rgb(247, 131, 35)" />
      }

      <ChatFloatingButton />

      <View style={styles.footer}>
        <Text style={[styles.text, {color: '#696969'}]}>Flávio Henrique (anunciante)</Text>
      </View>
    </View>
  );
}

export default Detail;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff'
  },
  footer: {
    position: 'absolute',
    width: '100%',
    height: 40,
    backgroundColor: '#f5f5f5',
    borderTopWidth: 1,
    borderTopColor: '#d8d8d8',
    justifyContent: 'center',
    alignItems: 'center',
    top: Dimensions.get('window').height - 120
  },
  text: {
    fontFamily: 'NunitoSans_400Regular',
    color: '#696969',
  },
  line: {
    width: '100%',
    borderBottomWidth: 0.8,
    borderBottomColor: '#ddd',
    marginVertical: '3%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'NunitoSans_400Regular',
  }
});
