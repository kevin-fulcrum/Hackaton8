import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width / 3,
    height: height / 10,
    backgroundColor: 'white',
    margin: 2,
    borderRadius: 10,
    marginLeft: 40,
    marginRight: -30,
  },
  textView: {
    position: 'absolute',
    bottom: 5,
    margin: 4,
    left: 8,
  },
  image: {
    width: width / 3,
    height: height / 10,
    borderRadius: 10,
  },
  logo: {
    width: width / 15,
    height: height / 30,
    position: 'absolute',
    bottom: 40,
    margin: 4,
    left: 8,
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
      <Image
        style={styles.logo}
        source={{
          uri: item.logo,
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
