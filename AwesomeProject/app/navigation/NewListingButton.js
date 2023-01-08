import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const NewListingButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
        <MaterialCommunityIcons name='plus-circle' color={colors.white} size={30} />
    </View>
    </TouchableOpacity>
  )
}

export default NewListingButton

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderRadius: 40,
        borderWidth: 10,
        bottom: 24
        ,
        justifyContent: "center",
        width: 80,
        height: 80,
    }
})