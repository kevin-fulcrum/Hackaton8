import React from 'react'
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native'
import ButtonProfile from '../components/Button/ButtonProfile'

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    containerfull: {
        height: height / 2,
      },
      container1: {
        flex: 1.0,
        backgroundColor: '#fb6b6b',
        alignItems: 'center',
      },
      container2: {
        flex: 2,
        backgroundColor: '#f3e9e8',
      },
      container3: {
        flex: 0.06,
        backgroundColor: '#eec3c4',
      },
      container4: {
        flex: 0.30,
        backgroundColor: '#f3e9e8',
        borderTopWidth: 1,
        borderTopColor: '#eec3c4',
      },
      imagen: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 40, 
      },
      texto: {
        marginTop: 10,
        marginBottom: 10,
        color: '#f4f0ef',
        fontWeight: 'bold',
        fontSize: 15,
      },
      iconos:{
        width: 40,
        height: 40,
        borderRadius: 50,
        padding: 1,
        marginTop: 10,
        marginRight: 100,
        marginLeft: 20,
      },
      foter:{
        flexDirection: 'row',
      },
      textoicono:{
        marginRight: 90,
        marginLeft: 30,
      }
});

const Profile = () =>{
    return(
        <>
        <View style={[styles.containerfull, styles.container1]}>
            <Image
              source={{
                uri:
                  'https://images.unsplash.com/photo-1604772659841-a1612db7000f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=420&q=80',
              }}
              style={styles.imagen}> 
            </Image>
            <Text style={styles.texto}>Alisa</Text>
            <Text style={styles.texto}>22 want | 35 done</Text>
        </View>
        <View style={[styles.containerfull, styles.container3]}>
        </View>
        <View style={[styles.containerfull, styles.container2]}>
        <ButtonProfile label='Order'></ButtonProfile>
        <ButtonProfile label='Like'></ButtonProfile>
        <ButtonProfile label='Comment'></ButtonProfile>
        <ButtonProfile label='Downland'></ButtonProfile>
        <ButtonProfile label='Edit'></ButtonProfile>
        </View>
        <View style={[styles.containerfull, styles.container4]}>
            <View style={styles.foter}>
            <Image
              source={{
                uri:
                  'https://img.icons8.com/ios/50/000000/google-mobile.png',
              }}
              style={styles.iconos}> 
            </Image>
            <Image
              source={{
                uri:
                  'https://img.icons8.com/windows/50/000000/santa.png',
              }}
              style={styles.iconos}> 
            </Image>
            <Image
              source={{
                uri:
                  'https://img.icons8.com/ios/50/000000/guest-male.png',
              }}
              style={styles.iconos}> 
            </Image>
            </View>
            <View style={styles.foter}>
                <Text style={styles.textoicono}>TIPS</Text>
                <Text style={styles.textoicono}>HOME</Text>
                <Text style={styles.textoicono}>PROFILE</Text>
            </View>
        </View>
        </>
    )   
};

export default Profile;