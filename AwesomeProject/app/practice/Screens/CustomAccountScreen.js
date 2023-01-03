import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import CustomAccountComponent from '../Components/CustomAccountComponent'
import CustomListItems from '../Components/CustomListItems'
import CustomScreen from '../Components/CustomScreen'
import CustomIcon from '../Components/CustomIcon'

const CustomAccountScreen = () => {

    const menuItem = [
        {
            title: 'My listings',
            icon: {
                name: "format-list-bulleted",
                backgroundColor: "primary"
            }
        },
        {
            title: 'My Messages',
            icon: {
                name: "email",
                backgroundColor: "secondary"
            }
        },
    ]

  return (
    <CustomScreen>
        <View style={styles.container}>
            <CustomAccountComponent title="ammar khan" description="ammarkhan1904@gmail.com" image={require("../../assets/ammar.jpg")}/>
        </View>


        {/* <View  style={styles.container}>
            <FlatList 
                data={menuItem}
                keyExtractor={menuItem => menuItem.title}
                renderItem={({ item }) => 
                    <CustomListItems 
                        title={item.title}
                        IconComponent={
                            <CustomIcon 
                                iconName={item.icon.name}
                                color={item.icon.backgroundColor}
                            />
                        }                        
                    />}
            />
        </View> */}

        {/* <View style={styles.logout}>
            <CustomListItems title="Logout" color="yellow"/>
        </View> */}


    </CustomScreen>
  )
}

export default CustomAccountScreen

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },

    // items: {
    //     padding: 20,
    //     marginTop: 30,
    //     backgroundColor: colors.white,
    // },

    logout: {
        padding: 20,
        marginTop: 20,
        marginBottom: 50,
        backgroundColor: colors.white,
    }
})