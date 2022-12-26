import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { AppInput } from './AppInput'
import AppErrorMessage from './AppErrorMessage'
import { useFormikContext } from 'formik'

const AppForm = ({name, ...props}) => {
       const {handleChange, setFieldTouched, errors, touched} = useFormikContext() 
  
    return (
    <>
    <AppInput style={styles.input}
    onBlur={()=> setFieldTouched(name)}
    onChangeText={handleChange(name)}
    {...props}
    />
    <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default AppForm

const styles = StyleSheet.create({})