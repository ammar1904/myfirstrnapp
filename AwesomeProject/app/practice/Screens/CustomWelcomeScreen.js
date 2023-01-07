import React from 'react';
import { ImageBackground, StyleSheet, View, Image } from 'react-native';
import CustomButton from '../Components/CustomButton';
import CustomText from '../Components/CustomText';

function CustomWelcomeScreen({ navigation }) {
    return (
        <ImageBackground
            blurRadius={5}
            style={styles.background}
            source={require("../../assets/welbgimg.jpeg")}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo}
                    source={require("../../assets/logored.png")}/>
                    <CustomText style={styles.text}>Sell what you don't need</CustomText>
                </View>
                <CustomButton title="Login" color="primary" onPress={() => navigation.navigate("Login")}/>
                <CustomButton title="Register" color="secondary" onPress={() => navigation.navigate("Register")}/>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background : {
        flex: 1,
        justifyContent:"flex-end",
        alignItems:"center",
        padding: 15
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
        fontSize:20,
        marginVertical: 20
    },
})

export default CustomWelcomeScreen;