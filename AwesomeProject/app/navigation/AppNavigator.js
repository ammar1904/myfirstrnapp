import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CustomListingScreen from '../practice/Screens/CustomListingScreen'
import CustomListingEditScreen from '../practice/Screens/CustomListingEditScreen'
import CustomAccountScreen from '../practice/Screens/CustomAccountScreen'

const Tab = createBottomTabNavigator()

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name='Listing' component={CustomListingScreen}/>
        <Tab.Screen name='ListingEdit' component={CustomListingEditScreen}/>
        <Tab.Screen name='Account' component={CustomAccountScreen}/>
    </Tab.Navigator>
)

export default AppNavigator

const styles = StyleSheet.create({})