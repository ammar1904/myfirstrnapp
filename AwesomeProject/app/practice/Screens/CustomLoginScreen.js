import { Image, StyleSheet } from 'react-native'
import React from 'react'
import CustomScreen from '../Components/CustomScreen'
import CustomTextInput from '../Components/CustomTextInput'
import CustomButton from '../Components/CustomButton'
import { Formik } from 'formik'
import * as Yup from 'yup'
import CustomText from '../Components/CustomText'
import CustomErrorMessage from '../Components/CustomErrorMessage'

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
        <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
        >
            { ({handleChange, handleSubmit, errors }) => (
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
                    <CustomErrorMessage error={errors.email}/>
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
                    <CustomErrorMessage error={errors.password}/>
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