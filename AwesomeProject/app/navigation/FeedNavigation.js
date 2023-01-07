import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CustomListingScreen from '../practice/Screens/CustomListingScreen'
import CustomListingDetailsScreen from '../practice/Screens/CustomListingDetailsScreen'

const Stack = createNativeStackNavigator()

const FeedNavigation = () => (
    <Stack.Navigator>
        <Stack.Screen name='Listings' component={CustomListingScreen}/>
        <Stack.Screen name='ListingDetails' component={CustomListingDetailsScreen}/>
    </Stack.Navigator>
)

export default FeedNavigation