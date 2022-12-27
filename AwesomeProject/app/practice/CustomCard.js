import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'

const CustomCard = ({ title, subTitle }) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/jacket.jpeg")}/>
        <Text style={styles.title} >{title}</Text>
        <Text style={styles.subTitle }>{subTitle}</Text>
    </View>
  )
}

export default CustomCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 20,
        margin: 20,
        overflow: "hidden"
    },

    image: {
        width: "100%",
        height: 200,
    },

    title: {
        color: colors.black,
        padding: 10
    }, 

    subTitle: {
        color: colors.secondary,
        padding
    },

})