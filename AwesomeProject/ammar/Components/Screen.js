import { View, Text, StyleSheet, SafeAreaView, Platform } from 'react-native'
import React from 'react'

const Screen = ({children}) => {
  return (
    <SafeAreaView style={styles.screen}>
        {children}
    </SafeAreaView>
  )
}
    
    const styles = StyleSheet.create({
        screen:{
        }
    })

export default Screen