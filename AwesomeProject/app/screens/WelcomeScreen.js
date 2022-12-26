import React from 'react';
import { ImageBackground, Text ,StyleSheet, View, Image } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/welbgimg.jpeg")}>

                <View style={styles.logoContainer}>
                    <Image style={styles.logo}
                    source={require("../assets/logored.png")}/>
                    <Text style={styles.text}>Sell what you don't need</Text>
                </View>

                    <View style={styles.buttonLogin}/>
                    <View style={styles.buttonRegister}/>


        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background : {
        flex: 1,
        justifyContent:"flex-end",
        alignItems:"center"
    },
    logo: {
        width:100,
        height:100,
    },
    logoContainer:{
        alignItems:"center",
        position:"absolute",
        top:70
    },

    text: {
        fontSize:20
    },

    buttonLogin:{
        backgroundColor:"pink",
        width:"100%",
        height:80
    },
    buttonRegister:{
        backgroundColor:"dodgerblue",
        width:"100%",
        height:80
    } 
})

export default WelcomeScreen;