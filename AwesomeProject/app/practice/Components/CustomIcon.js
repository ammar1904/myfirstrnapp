import { StyleSheet, View } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const CustomIcon = ({ iconName, iconColor, size , color}) => {
  return (
    <View 
      style={{
        width: size, 
        height: size, 
        borderRadius: size/2, 
        backgroundColor: colors[color],
        justifyContent: 'center',
        alignItems: 'center'
        }}>
          
      <MaterialCommunityIcons name={iconName}  color={iconColor} size={size * 0.5} />

    </View>
  )
}

export default CustomIcon

const styles = StyleSheet.create({})