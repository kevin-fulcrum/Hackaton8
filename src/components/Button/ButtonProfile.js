import React from 'react'
import {Text, Dimensions, View, Image, StyleSheet} from 'react-native'

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  imagen: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginTop: 10, 
    marginBottom: 5,
  },
  imagen2: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginTop: 10, 
    marginBottom: 5,
    marginLeft: 260,
  },
  texto:{
    fontSize: 20,
    padding: 2,
    marginTop: 10
  },
});
const ButtonProfile = ({label}) =>{
return(
    <View style={{flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#eec3c4'}}>
        <Image
        source={{
            uri:
                'https://img.icons8.com/ios/50/000000/mobile-package-tracking--v1.png',
                }}
            style={styles.imagen}>
        </Image>         
        <Text style={styles.texto}>{label}</Text>
        {/*<Image
        source={{
            uri:
                'https://img.icons8.com/ios/50/000000/forward--v1.png',
                }}
            style={styles.imagen2}>
            </Image>*/}  
    </View>
)
};

export default ButtonProfile;