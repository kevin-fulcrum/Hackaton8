import moment from 'moment';
import React, {useState, useEffect} from 'react'
import { View,Text,  StyleSheet, FlatList, Animated, Dimensions } from 'react-native'

import DropDownPicker from 'react-native-dropdown-picker'

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'stretch',
        marginTop: 50
    },
    tittle:{
        fontSize: 30,
        marginLeft: 15,
        fontWeight: 'bold'
    },
    subtitle:{
        fontSize: 15,
        marginLeft: 15,
        marginVertical: width/40
    },
    container1:{
        flex: 1/5,
        justifyContent: 'center',
    },
    container2:{
        flex: 1/3,
        justifyContent: 'center',
        backgroundColor: 'skyblue',
    },
    container3:{
        flex: 1/3,
        justifyContent: 'center',
        backgroundColor: 'gray'
    }
})

const months = [
    {label: 'JAN', value: 'January', days: 31},
    {label: 'FEB', value: 'February', days: 28},
    {label: 'MAR', value: 'March', days: 31},
    {label: 'APR', value: 'April', days: 30},
    {label: 'MAY', value: 'May', days: 31},
    {label: 'JUN', value: 'June', days: 30}, 
    {label: 'JUL', value: 'July', days: 31},
    {label: 'AUG', value: 'August', days: 31},
    {label: 'SEP', value: 'September', days: 30}, 
    {label: 'OCT', value: 'October', days: 31},
    {label: 'NOV', value: 'November', days: 30},
    {label: 'DEC', value: 'December', days: 31},
]


const Appointment = () =>{

const scrollX = new Animated.Value(0);
const [state, setState] = useState({country: moment().format('MMMM')})
    return(
        <View style = {styles.container}>
            <View style = {styles.container1}>
                <Text style = {styles.tittle}>Appointment</Text>
            </View>  
            <View style = {styles.container2}>
                <Text style = {styles.subtitle}>PICK DATE</Text>
                <DropDownPicker
                    items={months}
                    defaultValue={state.country}
                    containerStyle={{height: 40, width: width/2, marginHorizontal: 15, marginBottom: 10}}
                    style={{backgroundColor: 'skyblue'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: 'skyblue'}}
                    onChangeItem={item => setState({
                        country: item.value
                    })}
                />
                <FlatList style = {{flexDirection: 'column', marginLeft:15}}
                data={months}
                keyExtractor={(item, index) => 'key' + index}
                horizontal
                scrollEnabled
                snapToAlignment="center"
                scrollEventThrottle={16}
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                renderItem={(item) => {
                    return <Text> {item.item.days} </Text>          
                  }}
                  onScroll={Animated.event([
                    {nativeEvent: {contentOffset: {x: scrollX}}},
                  ])}
                />
            </View>  
            <View style = {styles.container3}>
                <Text>Appointment</Text>
            </View>            
        </View>
    )
}

export default Appointment