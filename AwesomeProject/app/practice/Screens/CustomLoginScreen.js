import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomScreen from '../Components/CustomScreen'
import CustomTextInput from '../Components/CustomTextInput'
import CustomButton from '../Components/CustomButton'
import colors from '../../config/colors'

const CustomLoginScreen = () => {
    
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

  return (
    <CustomScreen style={styles.conatainer}>
        <Image 
            style={styles.logo}
            source={require('../../assets/logored.png')}
        />
        <CustomTextInput 
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
            name="email"
            color="black"
            size={24}
            placeholder="Email Address"
        />
        <CustomTextInput 
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            onChangeText={(text) => setPassword(text)}
            name="lock"
            color="black"
            size={24}
            placeholder="Password"
            secureTextEntry

        />
        <CustomButton 
            title="login"
            onPress={() => console.log(email, password)}
        />
    </CustomScreen>
  )
}

export default CustomLoginScreen

const styles = StyleSheet.create({
    conatainer: {
        padding: 10,
    },

    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    }
})