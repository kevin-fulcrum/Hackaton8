import React from 'react'
import { View, StyleSheet } from 'react-native'
import Header from '../components/Header'
import SliderBody from '../components/slider/SliderBody'
import { carouselData } from '../resource/functions/data/datos'

const Index  = () => {
    return(
        <>
        <View style = {styles.container}>
            <Header />
            <SliderBody data = {carouselData} />
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});
export default Index