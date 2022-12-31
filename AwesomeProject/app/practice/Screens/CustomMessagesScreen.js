import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native'
import CustomListItems from '../Components/CustomListItems'
import CustomScreen from '../Components/CustomScreen'
//import ListItemsSeperator from '../components/ListItemsSeperator'

const messages = [
    {
        id: 1,
        title: "Ammar",
        description: "Edge Runner",
        image: require("../../assets/ammar.jpg")
    },
    {
        id: 2,
        title: "Aaqib",
        description: "Trust the process",
        image: require("../../assets/aaqib.jpg")
    }
]

const CustomMessagesScreen = () => {

    const [refreshing, setRefreshing] = useState(false)
  return (

    <CustomScreen>
        <FlatList
        data={messages}
        keyExtractor={messages => messages.id.toString()}
        renderItem={({ item }) => 
            <CustomListItems 
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("message selected", item)}    
            />}
        //ItemSeparatorComponent={ListItemsSeperator}
        refreshing={refreshing}
        onRefresh={() => {
            messages([
                {
                    id: 1,
                    title: "Ammar",
                    description: "Edge Runner",
                    image: require("../../assets/ammar.jpg")
                },
            ])
        }}
        />
    </CustomScreen>
    
  )
}

export default CustomMessagesScreen

const styles = StyleSheet.create({})