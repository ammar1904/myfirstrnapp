import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import AppForm from '../Components/AppForm'
import colors from '../config/colors'
import * as Yup from 'yup';
import { Formik } from 'formik'
import {TouchableWithoutFeedback}  from 'react-native'
import SubmitButton from '../Components/SubmitButton'

const LoginScreen = () => {
    let validationScheme = Yup.object().shape({
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).label("Password")
    })
  return (
    <TouchableWithoutFeedback>
    <ImageBackground blurRadius={30} source={require('../Assets/welbgimg.jpeg')} style={styles.background}>

        <View style={styles.container}>
            <Image style={styles.logo} source={require('../Assets/logored.png')}  />
            <Formik 
                initialValues={{email: "" , password:""}}
                onSubmit={(values)=> console.log(values)}
                validationSchema={validationScheme}
            >
                {  ()=>(
                        <View style={styles.inputContainer}>
                        <AppForm style={styles.input}
                            icon={"email"}
                            placeholder={"Email"}
                            iconColor={colors.primary}
                            autoaCapitalize="words"
                            autoCorrect={false}
                            keyboardType="email-address"
                            name={"email"}
                        />
                         <AppForm style={styles.input}
                            icon={"lock"}
                            placeholder={"Password"}
                            iconColor={colors.primary}
                            autoaCapitalize="words"
                            autoCorrect={false}
                            keyboardType="email-address"
                            name={"password"}
                        />
                        <SubmitButton title={"Login"} buttonColor={"primary"} />
                        </View>
                )
                 }
                
            </Formik>
        </View>
    </ImageBackground >
    </TouchableWithoutFeedback>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    background: {
        backgroundColor:colors.white,
        flex:1,
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    container:{
        height:"100%",
        width:"100%",

    },
    logo:{
        width:80,
        height:80,
        alignSelf:"center",
        marginTop:80,
        marginBottom:50
        
    },
    button:{
        marginTop:20
    },
    input:{
        color:"black"
    }
    
})