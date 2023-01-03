import { StyleSheet, View } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const CustomIcon = ({ iconName, iconColor="#fff", size=40 , backgroundColor="#000" }) => {
  return (
    <View 
      style={{
        width: size, 
        height: size, 
        borderRadius: size / 2, 
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center'
        }}>
          
      <MaterialCommunityIcons name={iconName}  color={iconColor} size={size * 0.5} />

    </View>
  )
}

export default CustomIcon

const styles = StyleSheet.create({})