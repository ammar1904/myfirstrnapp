import { Image, StyleSheet } from 'react-native'
import React from 'react'
import CustomScreen from '../Components/CustomScreen'
import CustomTextInput from '../Components/CustomTextInput'
import CustomButton from '../Components/CustomButton'
import { Formik } from 'formik'

const CustomLoginScreen = () => {

  return (
    <CustomScreen style={styles.conatainer}>
        <Image 
            style={styles.logo}
            source={require('../../assets/logored.png')}
        />
        <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={(values) => console.log(values)}
        >
            { ({handleChange, handleSubmit}) => (
                <>
                    <CustomTextInput 
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        onChangeText={handleChange("email")}
                        name="email"
                        color="black"
                        size={24}
                        placeholder="Email Address"
                    />
                    <CustomTextInput 
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="default"
                        onChangeText={handleChange("password")}
                        name="lock"
                        color="black"
                        size={24}
                        placeholder="Password"
                        secureTextEntry
                    />
                    <CustomButton 
                        title="login"
                        onPress={handleSubmit}
                    />
                </>
            ) }  
        </Formik>   
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