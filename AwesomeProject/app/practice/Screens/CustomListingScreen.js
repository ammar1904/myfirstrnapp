import { FlatList, StyleSheet } from 'react-native'
import React from 'react'
import CustomScreen from '../Components/CustomScreen'
import CustomCard from '../Components/CustomCard'
import colors from '../../config/colors'



const CustomListingScreen = () => {

    const listings = [
        {
            id: 1,
            title: "Jackets For Sale",
            price: 100,
            image: require("../../assets/jacket.jpeg")
        },
        {
            id: 2,
            title: "Umrah Package for sale",
            price: 2000,
            image: require("../../assets/aaqib.jpg")
        }
    ]
  return (
    <>

    
    <CustomScreen style={styles.screen}>
        <FlatList 
            data={listings}
            keyExtractor={listing => listing.id.toString()}
            renderItem={({ item }) => 
            <CustomCard 
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}/>
          }
          />

    </CustomScreen>
    </>
  )
}

export default CustomListingScreen

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.lightpink
    }
})