import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import CustomListingEditScreen from '../practice/Screens/CustomListingEditScreen'
import FeedNavigation from './FeedNavigation'
import AccountNavigator from './AccountNavigator'

const Tab = createBottomTabNavigator()

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name='Feed' component={FeedNavigation} options={{ headerShown: false}}/>
        <Tab.Screen name='ListingEdit' component={CustomListingEditScreen}/>
        <Tab.Screen name='Account' component={AccountNavigator} options={{ headerShown: false}}/>
    </Tab.Navigator>
)

export default AppNavigator

const styles = StyleSheet.create({})