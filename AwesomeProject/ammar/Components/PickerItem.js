import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import App from '../../App'
import AppText from './AppText'

const PickerItem = ({label, onPress,}) => {
 
    return (
    
        <View style={StyleSheet.container}>
            <TouchableOpacity onPress={onPress}>
                    <AppText style={styles.text}>{label}</AppText>
            </TouchableOpacity>
        </View>

  )
}



const styles = StyleSheet.create({
    text:{
        padding:10 
    }
})

export default PickerItem