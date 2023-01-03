import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import CustomText from './CustomText'

const CustomListItems = ({ title , subTitle, image, IconComponent, onPress }) => {
  return (
    <TouchableHighlight underlayColor={colors.lightgray} onPress={onPress} >
      <View style={styles.container}>
        {IconComponent}
        {image && <Image style={styles.image} source={image}/>}

        <View style={styles.textContainer}>
          <CustomText style={styles.title}>{title}</CustomText>
          {subTitle && <CustomText style={styles.subTitle}>{subTitle}</CustomText>}
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default CustomListItems

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',

        padding: 20,
        backgroundColor: colors.white
    },

    image: {
      width: 70,
      height: 70,
      borderRadius: 35,
    },

    title: {
      fontSize: 20,
      fontWeight: "600"
    },

    subTitle: {
      color: colors.grey,
      fontSize: 16,
      marginVertical: 10
    },

    textContainer: {
      marginLeft: 10,
      justifyContent: "center"
    }
})