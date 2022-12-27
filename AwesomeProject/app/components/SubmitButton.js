import { StyleSheet } from 'react-native'
import React from 'react'
import AppButton from './AppButton'
import { useFormikContext } from 'formik'

const SubmitButton = ({ title, style, color }) => {

    const { handleSubmit } = useFormikContext()
  return (
    <AppButton color={color} style={style} title={title} onPress={handleSubmit} />
  )
}

export default SubmitButton

const styles = StyleSheet.create({})