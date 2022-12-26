import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AppIcon = ({ name, size= 40, backgroundColor= "#000", iconColor="#fff"}) => {
  return (
    <View style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: 'center',
        alignItems: "center"
    }}>
    </View>
  )
}

export default AppIcon

const styles = StyleSheet.create({})