import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import colors from '../../config/colors'

const CustomCard = ({ title, subTitle, image, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.container}>
        <Image style={styles.image} source={image}/>
        <View style={styles.textContainer}>
            <Text style={styles.title} >{title}</Text>
            <Text style={styles.subTitle }>{subTitle}</Text>
        </View>
    </View>
    </TouchableWithoutFeedback>
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

    textContainer: {
        padding: 10,
    },

    title: {
        color: colors.black,
    }, 

    subTitle: {
        color: colors.secondary
    },

})