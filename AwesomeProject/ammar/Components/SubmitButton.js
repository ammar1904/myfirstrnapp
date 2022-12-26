import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik'
import AppButton from './AppButton'

const SubmitButton = ({title,buttonColor}) => {
 
 const {handleSubmit} = useFormikContext()
    return (
    
    
    <AppButton style={styles.button}
        title={"Login"}  
         color={buttonColor}
        onPress={handleSubmit}
                           
                           
    />
  )
}

export default SubmitButton

const styles = StyleSheet.create({})