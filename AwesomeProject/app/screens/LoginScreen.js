import { Image, StyleSheet } from 'react-native'
import React from 'react'
import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
import AppErrorMessage from '../components/AppErrorMessage'
import Screen from '../components/Screen'

import { Formik } from 'formik'
import * as Yup from 'yup'
import AppText from '../components/AppText'



const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password")
})

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
        <Image
        style={styles.logo} 
        source={require('../assets/logored.png')}/>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={values => console.log(values)}
          validationSchema={validationSchema}
          >
            {({handleChange, handleSubmit, errors}) => (
              <>
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false} 
                icon="email"
                keyboardType="email-address"
                onChangeText={handleChange("email")}
                placeholder="EmaiL"
                extContentType="emailAddress"/>
              <AppErrorMessage error={errors.email} />

              <AppTextInput
                autoCapitalize="none" 
                autoCorrent={false}
                icon="lock"
                onChangeText={handleChange("password")}
                placeholder="Password"
                secureTextEntry
                textContentType="password"
              />
              <AppErrorMessage error={errors.password}/>
              <AppButton title="Login" onPress={handleSubmit}/>
              </>
            )}
        </Formik>

        
    </Screen>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
      padding: 10
    },

    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    }
})