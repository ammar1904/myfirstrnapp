import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CustomAccountScreen from '../practice/Screens/CustomAccountScreen'
import CustomMessagesScreen from '../practice/Screens/CustomMessagesScreen'

const Stack = createNativeStackNavigator()

const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name='Account' component={CustomAccountScreen}/>
        <Stack.Screen name='Messages' component={CustomMessagesScreen}/>
    </Stack.Navigator>
)

export default AccountNavigator