import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import colors from '../../config/colors'

const CustomTextInput = ({ iconName, color, size, width= "100%", ...otherProps }) => {
  return (
    <View style={[styles.container, { width }]}>
        <MaterialCommunityIcons color={colors[color]} size={size} name={iconName} style={styles.icon} />
        <TextInput
          placeholderTextColor={colors.black} 
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
        borderRadius: 30,
        height:60,
        paddingLeft: 15,
        alignItems:'center',
        justifyContent:'center',
        marginVertical: 10
    },

    icon: {
      paddingRight:10
    },

    text: {
      fontSize: 18,
      color: colors.black,
      flex: 1,
    }
})