import { Image, StyleSheet } from 'react-native'
import React from 'react'
import CustomScreen from '../Components/CustomScreen'
import * as Yup from 'yup'
import CustomFormField from '../Components/CustomFormField'
import CustomSubmitButton from '../Components/CustomSubmitButton'
import CustomForm from '../Components/CustomForm'

const validationSchema = Yup.object({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

const CustomLoginScreen = () => {

  return (
    <CustomScreen style={styles.conatainer}>
        <Image 
            style={styles.logo}
            source={require('../../assets/logored.png')}
        />
        <CustomForm
            initialValues={{email: '', password: ''}}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
        >
            <CustomFormField
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                name="email"
                iconName="email"
                color="black"
                size={24}
                placeholder="Email Address"
            />
            <CustomFormField
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                name="password"
                iconName="lock"
                color="black"
                size={24}
                placeholder="Password"
                secureTextEntry
            />
            <CustomSubmitButton title="Login"/> 
        </CustomForm>   
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