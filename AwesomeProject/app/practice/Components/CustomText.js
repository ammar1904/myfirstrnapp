import { StyleSheet, Text } from 'react-native'
import React from 'react'


const CustomText = ({ children, style, ...otherProps }) => {
  return (
    <>
    <Text style={[styles.text, style]} {...otherProps}>{children}</Text>
    </>
  )
}

export default CustomText

const styles = StyleSheet.create({
    text: {
        color: "black"
    }
})