import { StyleSheet, Text } from 'react-native'
import React from 'react'


const CustomText = ({ children }) => {
  return (
    <>
    <Text style={styles.text}>{children}</Text>
    </>
  )
}

export default CustomText

const styles = StyleSheet.create({
    text: {
        color: "#000000"
    }
})