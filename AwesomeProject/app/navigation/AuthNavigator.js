import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CustomWelcomeScreen from '../practice/Screens/CustomWelcomeScreen'
import CustomLoginScreen from '../practice/Screens/CustomLoginScreen'
import CustomRegisterScreen from '../practice/Screens/CustomRegisterScreen'


const Stack = createNativeStackNavigator()

const AuthNavigator = () => (
    
    <Stack.Navigator>
        <Stack.Screen name='Welcome' component={CustomWelcomeScreen} options={{ headerShown: false}}/>
        <Stack.Screen name='Login' component={CustomLoginScreen}/>
        <Stack.Screen name='Register' component={CustomRegisterScreen}/>
    </Stack.Navigator>
    
)

export default AuthNavigator

const styles = StyleSheet.create({})