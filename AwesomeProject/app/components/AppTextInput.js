import { StyleSheet, Text, TextInput, View, Platform } from 'react-native'
import React from 'react'
// import {MaterialCommunityIcons} from 'react-native-vector-icons'
import colors from '../config/colors'
import defaultStyles from "../config/styles"

const AppTextInput = ({ icon, ...otherProps}) => {
  return (
    <View style={styles.container}>
        {/* <MaterialCommunityIcons name={icon} /> */}
        <TextInput style={defaultStyles.text}  {...otherProps}/>
    </View>
  )
}

export default AppTextInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightgray,
        borderRadius: 25, 
        width: "100%",
        flexDirection: "row",
        padding: 15,
        marginVertical: 10
    }
})