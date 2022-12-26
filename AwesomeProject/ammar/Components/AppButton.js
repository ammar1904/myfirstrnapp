import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../config/colors'

function AppButton ({title, color , onPress }) {
  return (
    <TouchableOpacity style={[styles.button , {backgroundColor : colors[color]}]} onPress={onPress} >
   
        <Text style={styles.text}>{title}</Text>
   
    </TouchableOpacity>
  ); 
}

export default AppButton

const styles = StyleSheet.create({
    button:{
       
        width:"100%",
        justifyContent:'center',
        alignItems:'center',
        padding:15,
        borderRadius:40,
        backgroundColor:colors.primary,
        marginTop:20
    },
    text:{
        color:colors.white,
        fontSize:18,
        fontWeight:'bold',
    }
})