import { FlatList, StyleSheet } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import Card from '../components/Card'
import colors from '../config/colors'

const ListingScreen = () => {

    const listings = [
        {
            id: 1,
            title: "Jackets For Sale",
            price: 100,
            image: require("../assets/jacket.jpeg")
        },
        {
            id: 2,
            title: "Sexy Shaikh in great condition for sale",
            price: 1000,
            image: require("../assets/shaikh.jpg")
        }
    ]
  return (
    <Screen style={styles.screen}>
        <FlatList 
            data={listings}
            keyExtractor={listing => listing.id.toString()}
            renderItem={({ item }) => 
                <Card 
                    title={item.title}
                    subTitle={"$" + item.price}
                    image={item.image}/>
            }
            />

    </Screen>
  )
}

export default ListingScreen

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.lightpink
    }
})