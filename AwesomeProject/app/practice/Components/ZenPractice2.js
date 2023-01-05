import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomScreen from './CustomScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const Link = () => {

    const navigation = useNavigation()

    return(
        <Button 
            title='Click'
            onPress={() => navigation.navigate('TweetDetails')}
        />
)
}

const Tweets = ({ navigation }) => (
    <CustomScreen>
        <Text>Tweets</Text>
        {/* <Link /> */}
        <Button 
            title='View Tweet'
            onPress={() => navigation.navigate('TweetDetails', {id: 1})}
        />
    </CustomScreen>
)

const TweetDetails = ({ route })=> (
    <CustomScreen>
        <Text>TweetDetails{route.params.id}</Text>
    </CustomScreen>
)

const Stack = createNativeStackNavigator()
const StackNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "dodgerblue"},
            headerTintColor: "white",
        }}
    >
        <Stack.Screen
            name="Tweets"
            component={Tweets}
            // options={{
            //     headerStyle : { backgroundColor: "tomato"},
            //     headerTitleAlign: "center",
            // }}
            />
        <Stack.Screen
            name="TweetDetails"
            component={TweetDetails}
            options={{ title: 'Tweet Details'}}
            // options={ ({route}) => ({ title: route.params.id })} #This is not working, will need to ask Usama about is tomorrow.
            />
    </Stack.Navigator>
)

const Account = () => <CustomScreen><Text>Account</Text></CustomScreen>

const Tab = createBottomTabNavigator()
const TabNavigator = () => (
    <Tab.Navigator
        tabBarOptions={{
            activeBackgroundColor: "tomato",
            activeTintColor: "white",
            inactiveBackgroundColor: "#eee",
            inactiveTintColor: "black",
        }}
    >
        <Tab.Screen
            name= "Feed"
            component={Tweets}
            options={{
                tabBarIcon: ({ size, color })=> <MaterialCommunityIcons name="home" size={size} color={color} />
            }}    
        />
        <Tab.Screen
            name= "Account"
            component={Account}
            options={{
                tabBarIcon: ({ size, color })=> <MaterialCommunityIcons name="account" size={size} color={color} />
            }}
            />
    </Tab.Navigator>
)

const ZenPractice2 = () => {
  return (
    <NavigationContainer>
        {/* <StackNavigator /> */}
        <TabNavigator />
    </NavigationContainer>
  )
}

export default ZenPractice2

const styles = StyleSheet.create({})