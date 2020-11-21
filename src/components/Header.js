import React from 'react'
import { Text, StyleSheet, Dimensions, View } from 'react-native'
import IconButton from './Button/IconButton'

const Header = () => {
    return(
        <>
        <View style = {styles.container}>        
            <View style = {{ flexDirection: 'column', marginRight: -20 }}>
                <Text style = {styles.text} > Feed </Text>
                <Text style = {{ fontSize: 12, marginLeft: 5 }}>10 updates</Text>
                <View style = {{ flexDirection: 'row', marginTop: 20, marginLeft: 5, marginBottom: 10}}>
                    <IconButton url='https://img.icons8.com/ios/50/000000/pain-point.png' />
                    <Text style = {{marginLeft: 15, width: width/1.25}}>Latest</Text>
                    <IconButton url='https://img.icons8.com/ios-filled/50/000000/four-squares.png' />
                </View> 
            </View>
            <IconButton url='https://img.icons8.com/ios/50/000000/search--v1.png' />             
        </View>        
        </>
    )
}
const {width} = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 60,
        marginBottom: 20,
        marginLeft: 10,
        width: width-20,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
    },
    text: {
        width: width/2,
        fontSize: 20,
    }
})

export default Header 