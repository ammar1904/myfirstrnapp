import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomScreen from './CustomScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

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
        <Link />
    </CustomScreen>
)

const TweetDetails = ()=> (
    <CustomScreen>
        <Text>TweetDetails</Text>
    </CustomScreen>
)

const Stack = createNativeStackNavigator()
const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Tweets" component={Tweets}/>
        <Stack.Screen name="TweetDetails" component={TweetDetails}/>
    </Stack.Navigator>
)

const ZenPractice2 = () => {
  return (
    <NavigationContainer>
        <StackNavigator />
    </NavigationContainer>
  )
}

export default ZenPractice2

const styles = StyleSheet.create({})