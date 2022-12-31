import { StyleSheet } from 'react-native'
import React from 'react'
import CustomScreen from '../Components/CustomScreen'
import CustomButton from '../Components/CustomButton'
import { Formik } from 'formik'
import * as Yup from 'yup'
import CustomFormField from '../Components/CustomFormField'

const validationSchema = Yup.object({
    userName: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

const CustomRegisterScreen = () => {

  return (
    <CustomScreen style={styles.conatainer}>
        <Formik
            initialValues={{userName: '' ,email: '', password: ''}}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
        >
            { ({ handleSubmit }) => (
                <>
                    <CustomFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="default"
                        name="userName"
                        iconName="account"
                        color="black"
                        size={24}
                        placeholder="name"
                    />
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
                    <CustomButton 
                        title="Register"
                        onPress={handleSubmit}
                    />
                </>
            ) }  
        </Formik>   
    </CustomScreen>
  )
}

export default CustomRegisterScreen

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