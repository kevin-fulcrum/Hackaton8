import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height / 5.5,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  textView: {
    marginHorizontal: 10,
  },
  image: {
    height: height / 5.5,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  itemTitle: {
    color: '#212121',
    fontSize: 13,
    fontWeight: 'bold',
  },
  itemPrice: {
    color: '#212121',
    fontSize: 13,
    fontWeight: '300',
  },
});

const SliderItem = ({item, size}) => {
  const large = size === 'full' ? 1 : 2;
  console.warn(large)
  return (
    <View style={styles.container, {width: width/large}}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <View style={styles.textView}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </View>
  );
};

export default SliderItem;