import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CustomListingEditScreen from '../practice/Screens/CustomListingEditScreen'
import CustomAccountScreen from '../practice/Screens/CustomAccountScreen'
import FeedNavigation from './FeedNavigation'

const Tab = createBottomTabNavigator()

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name='Feed' component={FeedNavigation} options={{ headerShown: false}}/>
        <Tab.Screen name='ListingEdit' component={CustomListingEditScreen}/>
        <Tab.Screen name='Account' component={CustomAccountScreen}/>
    </Tab.Navigator>
)

export default AppNavigator

const styles = StyleSheet.create({})