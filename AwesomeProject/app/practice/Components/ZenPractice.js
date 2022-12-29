import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomScreen from './CustomScreen'
import CustomAppPicker from './CustomAppPicker'
import CustomTextInput from './CustomTextInput'

const ZenPractice = () => {

    const [isNew, setIsNew] = useState(false)

  return (
    <CustomScreen>
        {/* <Switch value={isNew} onValueChange={isNew => setIsNew(isNew)}/> */}
        <CustomAppPicker name="table-of-contents" color='black' size={30} placeholder='Categories'/>
        <CustomTextInput name="email" color='black' size={30} placeholder='email'/>
    </CustomScreen>
  )
}

export default ZenPractice

const styles = StyleSheet.create({})