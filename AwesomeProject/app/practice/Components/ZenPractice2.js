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

const ZenPractice2 = () => {
  return (
    <NavigationContainer>
        <StackNavigator />
    </NavigationContainer>
  )
}

export default ZenPractice2

const styles = StyleSheet.create({})