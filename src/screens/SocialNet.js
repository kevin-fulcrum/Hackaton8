import React from 'react'
import {Text, Image, View, StyleSheet, Dimensions, SafeAreaView} from 'react-native'
import {redesData} from '../Resource/data/redesData'
import Redes from '../components/Redes/Redes'
import Musica from '../components/Redes/Musica'
import {musicaData} from '../Resource/data/musicaData'

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    imagen: {
        width: 70,
        height: 70,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: '#bb1b75',
        marginTop: 40, 
        marginBottom: 30,
    },
    perfile:{
        flexDirection: 'row',
        marginLeft: 50,
        borderBottomWidth: 2,
        marginRight: 40,
        marginTop: 50,
    },
    textoperfile:{
        marginTop: 50,
        marginLeft: 20,
        fontWeight: 'bold',
    },
    textoView:{
        marginTop: 5,
        marginLeft: 20,
        color: '#C2C0C0',
    },
    edit:{
        width: 20,
        height: 20,
        marginTop: 50,
        marginLeft: 110,
    },
    title: {
        fontSize: 20,
        marginLeft: 40,
        marginTop: 10,
        marginBottom: 20,
        marginHorizontal: 20,
        fontWeight: 'bold',
    },
});
const SocialNet = () =>{
    //console.warn(redesData);
    return(
        <>
        <SafeAreaView style={styles.container}>
        <View style={styles.perfile}>
            <Image
              source={{
                uri:
                  'https://images.unsplash.com/photo-1604772659841-a1612db7000f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=420&q=80',
              }}
              style={styles.imagen}> 
            </Image>
            <View style={{flexDirection: 'column'}}>
            <Text style={styles.textoperfile}>Alisa Marconi</Text>
            <Text style={styles.textoView}>148 folowers</Text>
            </View>
            <Image
              source={{
                uri:
                  'https://img.icons8.com/ios/24/000000/edit--v1.png',
              }}
              style={styles.edit}> 
            </Image>
        </View>
        <View style={{flex: 0.3, marginTop: 60}}>
            <Text style={styles.title}>My social networks</Text>
            <Redes data={redesData} />
        </View>
        <View style={{flex: 0.3, marginTop: 0}}>
            <Text style={styles.title}>My favorite song</Text>
            <View>
              <Musica data={musicaData}></Musica>
            </View>
        </View>
        </SafeAreaView>
        </>
    )
};
export default SocialNet;