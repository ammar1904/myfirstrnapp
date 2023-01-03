import { StyleSheet,Image, Text, View } from 'react-native'
import React from 'react'
import colors from '../../config/colors'

const CustomAccountComponent = ({ title, description, image}) => {
  return (
    <View style={styles.contianer}>
        <Image style={styles.image} source={image}/>
        <View style={styles.textcontainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    </View>
  )
}

export default CustomAccountComponent

const styles = StyleSheet.create({
    contianer: {
        padding: 10,
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white
    },

    textcontainer: {
        marginLeft: 10,
        justifyContent: 'center'
    },

    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },

    title: {
        color: colors.black,
        fontSize: 24,
        fontWeight: "500",
        marginBottom: 5
    },

    description: {
        color: colors.grey,
        fontSize: 20,
        fontWeight: "500"
    }
})