import { StyleSheet,TextInput, View } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons} from 'react-native-vector-icons'
import colors from '../../config/colors'

const CustomTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
        {/* <MaterialCommunityIcons name={icon}/> */}
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
        backgroundColor: colors.lightgray,
        borderRadius: 25,
        width: "100%",
        padding: 15,
        marginVertical: 10
    },

    text: {
      fontSize: 18,
      color: colors.black
    }


})