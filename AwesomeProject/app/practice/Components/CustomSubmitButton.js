import { StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'
import { useFormikContext } from 'formik'

const CustomSubmitButton = ({ title }) => {

    const { handleSubmit } = useFormikContext()
  return (
    <CustomButton 
        title={title}
        onPress={handleSubmit}
    />
  )
}

export default CustomSubmitButton

const styles = StyleSheet.create({})