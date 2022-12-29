import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomScreen from './CustomScreen'

const ZenPractice = () => {

    const [isNew, setIsNew] = useState(false)

  return (
    <CustomScreen>
        <Switch value={isNew} onValueChange={isNew => setIsNew(isNew)}/>
    </CustomScreen>
  )
}

export default ZenPractice

const styles = StyleSheet.create({})