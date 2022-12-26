import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import colors from '../config/colors'

export default function ViewScreen() {
  return (
    <View style={styles.ViewContainer}>
        <View style={styles.closeIcon}/>
        <View style={styles.deleteIcon}/>
        <Image  style={styles.image} source={require("../assets/welbgimg.jpeg")} />
    </View>
  )
}

const styles = StyleSheet.create({
    closeIcon: {
        backgroundColor: colors.primary,
        width:50,
        height:50,
        position:"absolute",
        top:50,
        left:30,
    },

    deleteIcon: {
        backgroundColor: colors.secondary,
        width:50,
        height:50,
        position:"absolute",
        top:50,
        right:30,
    },

    ViewContainer: {
        flex:1,
        backgroundColor: colors.black,
        alignItems:"center",
        justifyContent:"center"
    },

    image: {
        width: "100%",
        height: 300,
    }
})