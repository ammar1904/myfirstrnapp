import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'

const AppSwitch = () => {
 const [isNew, setIsNew] = useState(false)

  return (
    <View>
      <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue) } />
    </View>
  )
}

export default AppSwitch

const styles = StyleSheet.create({})