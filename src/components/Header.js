import React from 'react'
import { Text, StyleSheet, Dimensions, View } from 'react-native'
import IconButton from './Button/IconButton'

const Header = () => {
    return(
        <>
        <View style = {styles.container}>
            <IconButton url='https://img.icons8.com/ios/50/000000/stripped-patterns.png' />            
            <Text style = {styles.text} > wish list </Text>
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
        marginLeft: 10,
    },
    text: {
        width: width/1.3,
        fontSize: 20,
        textAlign: 'center'
    }
})

export default Header 