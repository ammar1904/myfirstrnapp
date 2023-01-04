import { StyleSheet } from 'react-native'
import React from 'react'
import CustomTextInput from './CustomTextInput'
import CustomErrorMessage from './CustomErrorMessage'
import { useFormikContext } from 'formik'


const CustomFormField = ({ name, width, ...otherProps }) => {

    const { handleChange, setFieldTouched, touched, errors } = useFormikContext() 

  return (
    <>
    <CustomTextInput 
        width={width}
        onChangeText={handleChange(name)}
        onBlur={()=> setFieldTouched(name)}
        {...otherProps}
    />
    <CustomErrorMessage error={errors[name]} visible={touched[name]}/>
    </>
  )
}

export default CustomFormField

const styles = StyleSheet.create({})