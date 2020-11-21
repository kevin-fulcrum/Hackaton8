import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width / 2.5,
    height: height / 10,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  textView: {
    position: 'absolute',
    bottom: 25,
    margin: 10,
    left: 7,
  },
  image: {
    width: width / 2.5,
    height: height / 12,
    borderRadius: 10,
  },
  itemTitle: {
    color: 'white',
    fontSize: 16,
    shadowColor: '#000000',
    shadowOffset: {width: 0.8, height: 0.8},
    textAlign: 'center',
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 2,
    fontWeight: 'bold',
    elevation: 5,
  },
  itemSubTitle:{
    color: 'white',
    fontSize: 8,
    shadowColor: '#000000',
    shadowOffset: {width: 0.8, height: 0.8},
    textAlign: 'center',
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  }
});

const RedesItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: item.image,
        }}
      />
      <View style={styles.textView}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemSubTitle}>{item.description}</Text>
      </View>
    </View>
  );
};

export default RedesItem;
