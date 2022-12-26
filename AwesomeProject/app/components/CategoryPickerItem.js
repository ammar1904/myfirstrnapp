import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppIcon from './AppIcon'
import AppText from './AppText'

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
        <AppIcon backgroundColor={item.backgroundColor} name={item.AppIcon} size={80} />
        <AppText style={styles.label}>{item.label}</AppText>
    </View>
  )
}

export default CategoryPickerItem

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        paddingVertical: 15,
        alignItems: "center",
        width: "33%",
    },

    label: {
        marginTop: 5,
        textAlign: "center",
    }
})