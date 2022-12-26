import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import colors from '../config/colors'
import AppIcon from '../components/AppIcon'
import ListItemsSeperator from '../components/ListItemsSeperator'

const AccountScreen = () => {

    const menuItem = [
        {
            title: "My listings",
            icon: {
                name: "",
                backgroundColor: colors.primary
            }
        },
        {
            title: "My Messages",
            icon: {
                name: "",
                backgroundColor: colors.secondary
            }
        }
    ]

  return (
    <Screen style={styles.screen}>
        <View style={styles.container}>
        <ListItem 
            title="Ammar"
            subTitle="ammarkhan1904@gmail.com"
            image={require("../assets/ammar.jpg")}>
        </ListItem>
        </View>
        <View style={styles.container}>
            <FlatList 
                data={menuItem}
                keyExtractor={menuItem => menuItem.title}
                ItemSeperatorComponent={ListItemsSeperator}
                renderItem={({ item }) => 
                <ListItem 
                title={item.title}
                IconComponent={
                    <AppIcon 
                    name={item.icon.name} 
                    backgroundColor={item.icon.backgroundColor}/>
                }/>}
                />
        </View>
        <ListItem 
            title="Logout"
            IconComponent={
                <AppIcon 
                    name="logout"
                    backgroundColor='#ffe66d'/>
            }/>
    </Screen>
  )
}

export default AccountScreen

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },

    screen: {
        backgroundColor: colors.lightpink
    }

})