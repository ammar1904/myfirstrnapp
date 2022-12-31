import { StyleSheet } from 'react-native'
import React from 'react'
import { Formik } from 'formik'

const CustomForm = ({ initialValues, onSubmit, validationSchema, childern }) => {

  return (
    <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
    >
        { () => (
            <>
            {childern}
            </>
        )}
    </Formik>
  )
}

export default CustomForm

const styles = StyleSheet.create({})