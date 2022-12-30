import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../config/colors'

const CustomButton = ({ title , onPress, color="primary"}) => {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor:colors[color]}]} onPress={onPress}>
        <Text style={styles.text} >{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        width: "100%",
        padding: 15,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20
    },

    text: {
        fontSize: 20,
        color: colors.white,
    }

})