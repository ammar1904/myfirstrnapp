import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import AppText from '../Components/AppText'
import colors from '../config/colors'
const Cards = ({title, subTitle , image}) => {
  return (
    
        <View style={styles.container}>
            <View style={styles.cardContainer}>
            <Image style={styles.image} source={image} />
            <View style={styles.textContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>

            </View>
        </View>
  
  )
}

export default Cards

const styles = StyleSheet.create({
    container : {
        backgroundColor: "#f8f4f4",
        padding:20,
        flex:1

    },
    cardContainer:{
        backgroundColor:"white",    
        borderRadius:20,
        marginVertical:20,
        overflow:"hidden",
        elevation:10

    },
    image:{
        width:"100%",
        height:200
    },
    textContainer:{
        padding:20,
        color: "black"
    },
    title:{
        fontWeight:'bold',
        paddingBottom:10
    },
    subTitle:{
        color:colors.secondary,
        paddingLeft:10

    }
})