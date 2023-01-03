import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '../Components/CustomText'
import colors from '../../config/colors'

const CustomListingDetailsScreen = () => {
  return (
    <View >
        <Image style={styles.image} source={require('../../assets/redjacket.jpg')}/>

        <View style={styles.detailsContainer}>
            <CustomText style={styles.title}>Red jacket for sale</CustomText>
            <CustomText style={styles.subTitle}>$100</CustomText>
        </View>

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
        //marginBottom: 10,
    },

    subTitle: {
        color: colors.secondary,
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 10
    }


})