import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '../Components/CustomText'
import colors from '../../config/colors'
import CustomListItems from '../Components/CustomListItems'

const CustomListingDetailsScreen = ({ route }) => {

    const Listing = route.params
  return (
    <View >
        <Image style={styles.image} source={Listing.image}/>

        <View style={styles.detailsContainer}>
            <CustomText style={styles.title}>{Listing.title}</CustomText>
            <CustomText style={styles.subTitle}>${Listing.price}</CustomText>
        </View>

        <CustomListItems 
            image={require('../../assets/ammar.jpg')}
            title="Ammar Khan"
            subTitle="5 listings"
        />

    </View>
  )
}

export default CustomListingDetailsScreen

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },  

    image: {
        width: "100%",
        height: 300,
    },

    title: {
        fontSize: 24,
        fontWeight: "600",
    },

    subTitle: {
        color: colors.secondary,
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 10
    }


})