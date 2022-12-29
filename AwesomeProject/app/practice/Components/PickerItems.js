import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomText from './CustomText'

const PickerItems = ( {label, onPress} ) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <CustomText style={styles.text}>{label}</CustomText>
    </TouchableOpacity>
  )
}

export default PickerItems

const styles = StyleSheet.create({
    text: {
        padding: 20,
    }
})