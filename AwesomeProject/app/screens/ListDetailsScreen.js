import { StyleSheet,Image, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import ListItem from '../components/ListItem'

export default function ListingDetailsScreen() {
  return (
    <View>
        <Image style={styles.image} source={require("../assets/welbgimg.jpeg")}/>
        <View style={styles.detailsContainer}>
            <Text style={styles.title}>Red jacket for sale</Text>
            <Text style={styles.price}>$100</Text>
        </View>
        <View style={styles.userContainer}>
            <ListItem
            title="Ammar Khan"
            subTitle="7 Listings"
            image={require("../assets/ammar.jpg")} 
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 10,
    },

    image: {
        width: "100%",
        height: 300
    },

    price: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.secondary,
        marginVertical: 7
    },

    title: {
        fontSize: 24,
        fontWeight: "500"      
    },

    userContainer: {
        marginVertical: 7
    }

})