import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native'
import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import ListItemsSeperator from '../components/ListItemsSeperator'

const messages = [
    {
        id: 1,
        title: "Ammar",
        description: "Edge Runner",
        image: require("../assets/ammar.jpg")
    },
    {
        id: 2,
        title: "Aaqib",
        description: "Trust the process",
        image: require("../assets/aaqib.jpg")
    }
]

const MessagesScreen = () => {

    const [refreshing, setRefreshing] = useState(false)
  return (

    <Screen>
        <FlatList
        data={messages}
        keyExtractor={messages => messages.id.toString()}
        renderItem={({ item }) => 
            <ListItem 
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("message selected", item)}    
            />}
        ItemSeparatorComponent={ListItemsSeperator}
        refreshing={refreshing}
        onRefresh={() => {
            messages([
                {
                    id: 1,
                    title: "Ammar",
                    description: "Edge Runner",
                    image: require("../assets/ammar.jpg")
                },
            ])
        }}
        />
    </Screen>
    
  )
}

export default MessagesScreen

const styles = StyleSheet.create({})