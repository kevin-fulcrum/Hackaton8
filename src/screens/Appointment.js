import moment from 'moment';
import React, {useState} from 'react'
import { View,Text,  StyleSheet, FlatList, Animated, Dimensions } from 'react-native'
import Day from '../components/slider/SliderDay'

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
        justifyContent: 'center'
    },
    container3:{
        flex: 1/3,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    picktime:{
        flexDirection: 'column',
        marginVertical: 80,
        borderLeftWidth: 4,
        borderRightWidth: 4, 
        marginRight: 60, 
        borderLeftColor: '#060606'
    },
    textTime:{
        marginRight: 20,
        marginTop: 100,
        fontWeight: 'bold',
        marginLeft: -40,
        fontSize: 20
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

const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
const hours = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,'00']
const minutes = ['00', 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59]

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
                    style={{backgroundColor: '#FCF7F7'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#FCF7F7'}}
                    onChangeItem={item => setState({
                        country: item.value
                    })}
                />
                <FlatList style = {{flexDirection: 'row', marginLeft:15}}
                data={days}
                keyExtractor={(item, index) => 'key' + index}
                horizontal
                scrollEnabled
                snapToAlignment="center"
                scrollEventThrottle={16}
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                renderItem={(item) => {
                    return <Day item={item.item} />          
                  }}
                  onScroll={Animated.event([
                    {nativeEvent: {contentOffset: {x: scrollX}}},
                  ], {useNativeDriver: false})}
                />
            </View>  
            <View style = {styles.container3}>
                <Text style = {styles.subtitle}>PICK TIME</Text>
                <FlatList style = {styles.picktime}
                data={hours}
                keyExtractor={(item, index) => 'key' + index}
                vertical
                scrollEnabled
                snapToAlignment="center"
                scrollEventThrottle={16}
                decelerationRate="fast"
                showsVerticalScrollIndicator={false}
                renderItem={(item) => {
                    return <Day item={item.item} />          
                  }}
                  onScroll={Animated.event([
                    {nativeEvent: {contentOffset: {x: scrollX}}},
                  ], {useNativeDriver: false})}
                />
                
                <Text style={styles.textTime}>Hr</Text>
                <FlatList style = {styles.picktime}
                data={minutes}
                keyExtractor={(item, index) => 'key' + index}
                vertical
                scrollEnabled
                snapToAlignment="center"
                scrollEventThrottle={16}
                decelerationRate="fast"
                showsVerticalScrollIndicator={false}
                renderItem={(item) => {
                    return <Day item={item.item} />          
                  }}
                  onScroll={Animated.event([
                    {nativeEvent: {contentOffset: {x: scrollX}}},
                  ], {useNativeDriver: false})}
                />
                <Text style={styles.textTime}>Min</Text>
            </View>            
        </View>
    )
}

export default Appointment