import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import CustomListingEditScreen from '../practice/Screens/CustomListingEditScreen'
import FeedNavigation from './FeedNavigation'
import AccountNavigator from './AccountNavigator'
import NewListingButton from './NewListingButton'
import routes from './routes'

const Tab = createBottomTabNavigator()

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen 
            name='Feed' 
            component={FeedNavigation} 
            options={{ 
                headerShown: false,
                tabBarIcon: ({ color, size }) => 
                    <MaterialCommunityIcons name='home' color={color} size={size}/>
            }} />
        <Tab.Screen 
            name='ListingEdit' 
            component={CustomListingEditScreen} 
            options={( { navigation } ) => ({
                tabBarButton: () => <NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT) }/>,
                tabBarIcon: ({ color, size }) => 
                    <MaterialCommunityIcons name='plus-circle' color={color} size={size}/>
            })}/>
        <Tab.Screen 
            name='Account' 
            component={AccountNavigator} 
            options={{ 
                headerShown: false,
                tabBarIcon: ({ color, size }) => 
                    <MaterialCommunityIcons name='account' color={color} size={size}/>
            }}/>
    </Tab.Navigator>
)

export default AppNavigator

const styles = StyleSheet.create({})