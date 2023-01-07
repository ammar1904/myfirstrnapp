import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native'

import colors from './app/config/colors';

import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';

const App = () => {

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <NavigationContainer>
        {/* <AuthNavigator /> */}
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: colors.bgcolor
  }
})

export default App

