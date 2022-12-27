import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomIcon from './CustomIcon'
import colors from '../config/colors'
import CustomAccountComponent from './CustomAccountComponent'

const CustomAccountScreen = () => {
  return (
    <View style={styles.view}>
    {/* // Account Deatils (image, name and email) */}
    <View>
        <CustomAccountComponent title="ammar khan" description="ammarkhan1904@gmail.com" image={require("../assets/ammar.jpg")}/>
    </View>

    {/* <CustomIcon /> */}

    {/* // icon, my listing
    // icon, my messages
    //icon, logout */}


    </View>
  )
}

export default CustomAccountScreen

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: colors.bgcolor
    }
})