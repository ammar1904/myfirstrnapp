import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'

const CustomIcon = () => {
  return (
    <View style={styles.icon} />
  )
}

export default CustomIcon

const styles = StyleSheet.create({
    icon: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: colors.primary
    }
})