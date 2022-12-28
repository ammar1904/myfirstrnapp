import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../config/colors'

const CustomIcon = ({ size , color}) => {
  return (
    <View style={[styles.icon, {width: size, height: size, borderRadius: size/2, backgroundColor: colors[color]}]} />
  )
}

export default CustomIcon

const styles = StyleSheet.create({
    icon: {
        backgroundColor: colors.primary
    }
})