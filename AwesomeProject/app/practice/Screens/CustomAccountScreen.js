import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import CustomAccountComponent from '../Components/CustomAccountComponent'
import CustomListItems from '../Components/CustomListItems'

const CustomAccountScreen = () => {

    const menuItem = [
        {
            title: 'My listings',
            color: "primary"
        },
        {
            title: 'My Messages',
            color: "secondary"
        }
    ]

  return (
    <View style={styles.bg}>
    {/* // Account Deatils (image, name and email) */}
        <View>
            <CustomAccountComponent title="ammar khan" description="ammarkhan1904@gmail.com" image={require("../../assets/ammar.jpg")}/>
        </View>
    {/* // icon, my listing
    // icon, my messages
    //icon, logout */}

        <View style={styles.items}>
            <FlatList 
                data={menuItem}
                keyExtractor={menuItem => menuItem.title}
                renderItem={({ item }) => 
                    <CustomListItems 
                        title={item.title}
                        color={item.color}
                    />}
            />
        </View>

        <View style={styles.logout}>
            <CustomListItems title="Logout" color="yellow"/>
        </View>


    </View>
  )
}

export default CustomAccountScreen

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: colors.bgcolor
    },

    items: {
        padding: 20,
        marginTop: 30,
        backgroundColor: colors.white,
    },

    logout: {
        padding: 20,
        marginTop: 20,
        marginBottom: 50,
        backgroundColor: colors.white,
    }
})