import { StyleSheet } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import CustomListItems from '../Components/CustomListItems'
import CustomScreen from '../Components/CustomScreen'
import CustomListItemsSeperator from '../Components/CustomListItemsSeperator'

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
  return (
    <CustomScreen>
        <FlatList
            data={messages}
            keyExtractor={messages => messages.id.toString()}
            renderItem={({ item }) => ( 
                <CustomListItems 
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log("message selected", item)}    
                />
            )}    
            ItemSeparatorComponent={CustomListItemsSeperator}  
        />
    </CustomScreen>  
  )
}

export default CustomMessagesScreen

const styles = StyleSheet.create({})