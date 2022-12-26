import { ImageBackground , View, Text ,Image, StyleSheet, Button} from 'react-native'
import React from 'react'

import AppButton from '../Components/AppButton'
import LoginScreen from './LoginScreen'

const WelcomeScreen = () => {
  return (
        
      
      <ImageBackground blurRadius={10} source={require('../Assets/welbgimg.jpeg')} style={styles.bgImage}>
          <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../Assets/logored.png")}  />
          <Text style={styles.texts}>Sell What You Don't Need</Text>
          </View>
            <View style={styles.buttonContainer}>
            <AppButton title={"Login"} color={"primary"} onPress={()=> console.log("Login")}/>
            <AppButton title={"Register"} color={"secondary"} onPress={()=> console.log("Register")} />

            </View>
            
            
     </ImageBackground>
  )
}

const styles = StyleSheet.create({
    bgImage: {
        flex : 1,
        justifyContent:"flex-end",
        alignItems:"center",
    },
    logoContainer:{
        position:'absolute',
        top:40,
        alignItems: "center"
    },
    logo:{
        position:'absolute',
        height:100,
        width:100,
  
    },
    texts:{
        top:100,
        fontWeight:'bold',
        position:'absolute',
        color:"black",
        fontSize:20,
        paddingVertical:10
    },
    buttonContainer:{
        width:"100%",
        padding:20
    }

})
export default WelcomeScreen