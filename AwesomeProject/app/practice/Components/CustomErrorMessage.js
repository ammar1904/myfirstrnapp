import { StyleSheet } from 'react-native'
import React from 'react'
import CustomText from './CustomText'

const CustomErrorMessage = ({ error, visible }) => {
    if (!visible || !error) return null

  return (
    <CustomText style={styles.error}>{error}</CustomText>
  )
}

export default CustomErrorMessage

const styles = StyleSheet.create({
    error: {
        color: "red"
    }
})