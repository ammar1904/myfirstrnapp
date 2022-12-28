import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomCard from '../Components/CustomCard'

const CustomListingScreen = () => {
  return (
    <>
    <View>
        <CustomCard 
            image={require('../../assets/jacket.jpeg')}
            title="Jackets in good condition for sale!"
            subTitle="$100"
            />
    </View>

    <View>
        <CustomCard 
            image={require('../../assets/aaqib.jpg')}
            title="Umrah package for sale"
            subTitle="$2000"
        />
    </View>
    </>
  )
}

export default CustomListingScreen

const styles = StyleSheet.create({})