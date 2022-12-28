import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomIcon from './CustomIcon'
import colors from '../../config/colors'

const CustomListItems = ({ title , color}) => {
  return (
    <View style={styles.container}>
        <CustomIcon color={color} size={50}/>
        <Text style={{paddingLeft: 10, fontSize: 17, color: colors.black}}>{title}</Text>
    </View>

  )
}

export default CustomListItems

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center'
    },


})