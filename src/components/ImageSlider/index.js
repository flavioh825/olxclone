import React, { useRef, useState } from 'react';
import { ScrollView, View, Image, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const {width} = Dimensions.get('window');
const height = 280;

const ImageSlider = (props) => {
  const scrollRef = useRef(null);

  const [ position, setPosition ] = useState(0);
  const [ countImage, setCountImage ] = useState(0);
  const [ currentSwipe, setCurrentSwipe ] = useState(0);

  function goTo(arrow) {
    if(arrow === 'left') {
      scrollRef.current?.scrollTo({
        x: position - width,
        animated: true,
      })
      setPosition(position - width);
      setCountImage(countImage - 1);
    } else {
      scrollRef.current?.scrollTo({
        x: position + width,
        animated: true,
      })
      setPosition(position + width);
      setCountImage(countImage + 1);
    }
  }

  return(
    <View style={styles.container}>
      {
        (countImage === 0) ? <></> :
        <TouchableOpacity style={[styles.arrow, {right: width - 48}]} onPress={() => goTo('left')}>
          <MaterialIcons name="chevron-left" color="#fff" size={48} />
        </TouchableOpacity>
      }
      {
        (countImage === props.images.length - 1) ? <></> :
        <TouchableOpacity style={[styles.arrow, {left: width - 48}]} onPress={() => goTo('right')}>
          <MaterialIcons name="chevron-right" color="#fff" size={48} />
        </TouchableOpacity>
      }
      <View style={styles.status}>
        <Text style={styles.text}>{countImage + 1}/{props.images.length}</Text>
      </View>
      <ScrollView
        ref={ scrollRef }
        pagingEnabled 
        horizontal
        onMomentumScrollEnd={(e) => {
          let x = Math.trunc(e.nativeEvent.contentOffset.x);
          if(x > currentSwipe) {
            goTo('right');
            setCurrentSwipe(x);
          } else if(x < currentSwipe) {
            goTo('left');
            setCurrentSwipe(x);
          }
        }}
        showsHorizontalScrollIndicator={false} 
        style={{ width, height }}>
        <View style={styles.slider}>
          {  
            props.images.map((img, i) => {
              return <Image 
                      style={styles.image} 
                      key={img.id} 
                      source={{uri: img.url}}
                      resizeMode='contain'
                    />
            })
          }
        </View>
      </ScrollView>
    </View>
  );
}

export default ImageSlider;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    backgroundColor: '#000',
  },
  slider: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    width,
    height,
  },
  arrow: {
    position: 'absolute',
    top: (height - 48) / 2,
    zIndex: 100,
  },
  status: {
    position: 'absolute',
    backgroundColor: '#424242',
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
    top: height - 45,
    left: (width - 35) / 2,
    zIndex: 100,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  }
});
