import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import CustomText from './CustomText'

const CustomListItems = ({ title , subTitle, image, IconComponent}) => {
  return (
    <>
    <View style={styles.container}>
      {IconComponent}
      <Image 
        style={styles.image}
        source={image}
      />
      <View style={styles.textContainer}>
        <CustomText style={styles.title}>{title}</CustomText>
        <CustomText style={styles.subTitle}>{subTitle}</CustomText>
      </View>
    </View>
    </>
  )
}

export default CustomListItems

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
        padding: 20
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