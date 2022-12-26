import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'


const ViewImageScreen = () => {
  return (
    <>
    <View style={styles.container}>
        <View style={styles.buttonContainer}>
            <View style={styles.createButton}/>    
            <View style={styles.deleteButton}/>    
        </View>
      <View style={styles.viewImageContainer}>
    <Image style={styles.viewImage} source={require("../Assets/welbgimg.jpeg")} />
    </View>
    </View>
    </>
  )
}

export default ViewImageScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:"black",
        flex:1
    },
    viewImageContainer:{
        flexDirection:'row',
    },
    viewImage:{
        width:"100%",
        height:400,
        top:"40%"
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    createButton:{
        backgroundColor:colors.secondary,
        height:40,
        width:40
    },
    deleteButton:{
        backgroundColor:colors.primary,
        height:40,
        width:40
    }
})