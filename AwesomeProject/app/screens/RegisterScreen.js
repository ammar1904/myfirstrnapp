import { Image, StyleSheet } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import * as Yup from 'yup'
import AppFormField from '../components/AppFormField'
import SubmitButton from '../components/SubmitButton'
import AppForm from '../components/AppForm'
import colors from '../config/colors'



const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),  
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password")
})

const LoginScreen = () => {
  return (
    <Screen style={styles.container}> 
        {/* <Image
        style={styles.logo} 
        source={require('../assets/logored.png')}/> */}

        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={values => console.log(values)}
          validationSchema={validationSchema}
          >
            <AppFormField
            autoCapitalize="none"
            autoCorrect={false} 
            icon="name"
            keyboardType="default"
            name="name"
            placeholder="username"
            extContentType="name"
          />

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false} 
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="EmaiL"
            extContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none" 
            autoCorrent={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
           />
           <SubmitButton color="secondary" style={styles.register} title="Register" />
          
        </AppForm>

        
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
    },

    register: {
        backgroundColor: colors.secondary
    }
})