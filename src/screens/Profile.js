import React, {useState} from 'react'
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native'
import ButtonProfile from '../components/Button/ButtonProfile'
import ImagePicker from 'react-native-image-picker';

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
        flex: 0.40,
        backgroundColor: '#f3e9e8',
        borderTopWidth: 1,
        borderTopColor: '#eec3c4',
      },
      imagen: {
        marginTop: 10,
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: '#dba8a8',
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
        marginLeft: 10,
      },
      foter:{
        flexDirection: 'row',
      },
      textoicono:{
        marginRight: 90,
        marginLeft: 15,
      }
});



const Profile = () =>{

  const [state, setState]=useState({resourcePath:{}});
    
  const select = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        { 
          name: 'customOptionKey', 
          title: 'Choose file from Custom Option' 
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
  

  ImagePicker.showImagePicker(options, res => {
    console.log('Response = ', res);

    if (res.didCancel) {
      console.log('User cancelled image picker');
    } else if (res.error) {
      console.log('ImagePicker Error: ', res.error);
    } else if (res.customButton) {
      console.log('User tapped custom button: ', res.customButton);
      alert(res.customButton);
    } else {
      let source = res;
      setState({
        resourcePath: source,
      });
    }
  });
  }
  return(
        <>
       
        <View style={[styles.containerfull, styles.container1]}>
              <TouchableOpacity onPress={e=>{select()}}>
                <Image
              source={{
                uri: 'data:image/jpeg;base64,' + state.resourcePath.data,
              }}
              style={styles.imagen}> 
              </Image>
              </TouchableOpacity>
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