import { FlatList, StyleSheet } from 'react-native'
import React from 'react'
import CustomScreen from '../Components/CustomScreen'
import CustomCard from '../Components/CustomCard'
import colors from '../../config/colors'
import routes from '../../navigation/routes'



const CustomListingScreen = ({ navigation }) => {

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
        },
        {
            id: 3,
            title: "NFT for sale",
            price: 300,
            image: require("../../assets/ammar.jpg")
        },
        {
            id: 4,
            title: "Healthy Puppiii for sale",
            price: 20000,
            image: require("../../assets/pappi.jpg")
        },
        {
            id: 5,
            title: "Sexy shaikh in good condition for sale",
            price: 2000,
            image: require("../../assets/shaikh.jpg")
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
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            />
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