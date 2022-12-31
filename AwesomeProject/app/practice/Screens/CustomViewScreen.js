import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import colors from '../../config/colors'
import CustomScreen from '../Components/CustomScreen'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const CustomViewScreen = () => {
  return (
    <CustomScreen>

    <View style={styles.ViewContainer}>
        <View style={styles.closeIcon}>
            <MaterialCommunityIcons name="close" color="black" size={30} style={styles.chevron} />
        </View>
        <View style={styles.deleteIcon}>
            <MaterialCommunityIcons name="information-outline" color="black" size={30} style={styles.chevron} />
        </View>
        <Image style={styles.image} source={require("../../assets/welbgimg.jpeg")} />
    </View>
    </CustomScreen>
  )
}

export default CustomViewScreen

const styles = StyleSheet.create({
    closeIcon: {
        //backgroundColor: colors.primary,
        width:50,
        height:50,
        position:"absolute",
        top:50,
        left:30,
    },

    deleteIcon: {
        //backgroundColor: colors.secondary,
        width:50,
        height:50,
        position:"absolute",
        top:50,
        right:30,
    },

    ViewContainer: {
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },

    image: {
        width: "100%",
        height: 300,
    }
})