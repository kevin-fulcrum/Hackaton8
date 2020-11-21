import React from 'react'
import {View, StyleSheet, Dimensions, FlatList, Animated, Text} from 'react-native'
import SliderItem from './SliderItem'

const {height, width} = Dimensions.get('window')
const styles = StyleSheet.create({
    dot: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
})

const SliderBody = ({data}) => {
    const scrollX = new Animated.Value(0);
    //console.warn(data)
    if (data && data.length) {
        return(
            <View style = {{flex: 1}}>
                <FlatList 
                data={data}
                keyExtractor={(item, index) => 'key' + index}
                vertical
                scrollEnabled
                snapToAlignment="center"
                scrollEventThrottle={16}
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                renderItem={(item) => {
                    return <SliderItem size={item.size} item={item.item} />          
                  }}
                  onScroll={Animated.event([
                    {nativeEvent: {contentOffset: {x: scrollX}}},
                  ])}
                />
            </View>
        )
    }
    return null;
};

export default SliderBody