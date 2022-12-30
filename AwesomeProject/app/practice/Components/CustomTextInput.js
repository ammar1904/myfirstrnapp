import { StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import colors from '../../config/colors'

const CustomTextInput = ({ name, color, size, ...otherProps }) => {
  return (
    <View style={styles.container}>
        <MaterialCommunityIcons color={color} size={size} name={name} style={styles.icon} />
        <TextInput 
          style={styles.text}
          {...otherProps}
          />
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: colors.lightgray,
        borderRadius: 25,
        width: "100%",
        padding: 15,
        marginVertical: 10
    },

    icon: {
      marginTop: 10,
      marginRight: 10,
    },

    text: {
      fontSize: 18,
      color: colors.black,
      flex: 1,
    }
})