import React from 'react'
import { TouchableOpacity, StyleSheet, Image, Text } from 'react-native'

const IconButton = ({url}) => {
    return(
        <>
            <TouchableOpacity>
                <Image source = {{ uri: url }} style={ styles.image } ></Image>
            </TouchableOpacity>   
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 20,
        height: 20,
    },
})

export default IconButton 