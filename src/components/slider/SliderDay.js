import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions, TouchableOpacity} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height / 5.5,
    backgroundColor: 'white',
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
    fontSize: 40,
  },
});

const Day = ({item}) => {
    
  return (
    <View style={styles.container, {width: width/5}}>      
      <View style={styles.textView}>
          <TouchableOpacity onPress={()=>{  }}>
              <Text style={styles.itemPrice}>{item}</Text>
          </TouchableOpacity>        
      </View>
    </View>
  );
};

export default Day;