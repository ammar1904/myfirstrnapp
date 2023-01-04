import { StyleSheet } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik'
import CustomErrorMessage from './CustomErrorMessage'
import CustomAppPicker from './CustomAppPicker'

const CustomFormPicker = ( { items, name, placeholder, width } ) => {

    const { errors, setFieldValue, touched, values } = useFormikContext()
  return (

    <>
        <CustomAppPicker
            width={width}
            items={items}
            onSelectItem={(item) => setFieldValue(name, item)}
            placeholder={placeholder}
            selectedItem={values[name]}
        />
        <CustomErrorMessage error={errors[name]} visible={touched}/>
    </>
  )
}

export default CustomFormPicker

const styles = StyleSheet.create({})