import { Image, StyleSheet, TouchableHighlight, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import AppText from '../../ammar/Components/AppText'

export default function ListItem({image, IconComponent , title, subTitle, onPress}) {
  return (
    <TouchableHighlight
        underlayColor={colors.lightgray}
        onPress={onPress}
    >
    <View style={styles.container}>
        {IconComponent}
        {image && <Image style={styles.image} source={image}/> }
        <View style={styles.textContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
        </View>
    </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white
    },

    textContainer: {
        marginLeft: 10,
        justifyContent: "center",
    },

    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },

    title: {
        fontSize: 20,
        fontWeight: "400",
        marginBottom: 7
    },

    subTitle: {
        color: colors.medium
    }
})