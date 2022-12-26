import React from 'react'
import { TextInput, View , StyleSheet} from 'react-native'
import colors from '../config/colors'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export const AppInput = (props) => {
    const {icon, placeholder , style , iconColor } = props
  return (
        <View style={[styles.container , style ]}>
            <MaterialCommunityIcons color={iconColor} size={30} name={icon} />
            <TextInput 
                {...props}
                style={styles.text}
                placeholder={placeholder}
                placeholderTextColor={colors.black}

                
            />
        </View>
  )

    
}
const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        flexDirection:"row",
        width:"100%",
        height:50,
        backgroundColor:colors.white,
        borderRadius:30,
        paddingLeft:20,
        marginTop:25,
        
    },
    text:{
        color:colors.black,
        flex:1
    }
})
