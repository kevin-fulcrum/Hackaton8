import React, {useState} from 'react'
import { View,Text,StyleSheet, Dimensions, Image } from 'react-native'

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    bordeMusica: {
    backgroundColor: '#dcebfa',
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 10,
    width: width / 1.2,
    height: height / 10,
    marginBottom: 10,
    },
    texto: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 25,
    marginTop: 10,
    },
    textoSegundo:{
    fontSize: 16,
    marginLeft: 25,
    marginTop: 0,
    },
    logo: {
    width: width / 10,
    height: height / 20,
    position: 'absolute',
    top: 15,
    bottom: 40,
    margin: 5,
    left: 290,
    },   
    logoFondo: {
    width: width / 7,
    height: height / 10,
    position: 'absolute',
    top: -5,
    bottom: 40,
    margin: 5,
    left: 280,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    }
  });


const Musica = ({data}) =>{
    return(
        <>
        {data.map((i)=>(
        <View key={i.id} style={styles.bordeMusica}>
            <Text style={styles.texto}>{i.title}</Text>
            <Text style={styles.textoSegundo}>{i.description}</Text>
            <Image
            style={styles.logoFondo}
            source={{
            uri: i.image,
            }}
            />
            <Image
            style={styles.logo}
            source={{
            uri: i.logo,
            }}
            />
        </View>
        ))}
        </>
    )
};
export default Musica;