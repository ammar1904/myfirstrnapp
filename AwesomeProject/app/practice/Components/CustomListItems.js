import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../config/colors'

const CustomListItems = ({ title , IconComponent}) => {
  return (
    <>
    <View style={styles.container}>
      {IconComponent}
    </View>

    <View style={styles.textContainer}>
        <Text style={{paddingLeft: 10, fontSize: 17, color: colors.black}}>{title}</Text>
    </View>
    </>
  )
}

export default CustomListItems

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center'
    },

    textContainer: {
      marginLeft: 10,
      justifyContent: "center"
    }
})