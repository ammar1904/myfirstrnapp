import { StyleSheet, SafeAreaView,  View } from 'react-native'
import React from 'react'

const CustomScreen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.customScreen, style]}>
      <View style={[styles.view, style]}>
          {children}
      </View>

    </SafeAreaView>
  )
}

export default CustomScreen

const styles = StyleSheet.create({
    customScreen: {
        flex: 1
      },
  
      view: {
        flex: 1
      }
})