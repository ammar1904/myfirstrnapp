import React from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import Screen from './app/components/Screen';
import colors from './app/config/colors';
import { useState } from 'react';
import ListingDetailsScreen from './app/screens/ListDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewScreen from './app/screens/ViewScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

import AppTextInput from './app/components/AppTextInput';
import AppSwitch from './app/components/AppSwitch';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import AppIcon from './app/components/AppIcon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen';
import ListingEditingScreen from './app/screens/ListingEditingScreen';

const App = () => {

  const [firstName, setFirstName] = useState("");

  const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Cameras", value: 3 },
  ]

  const [category, setCategory] = useState(categories[0])

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      {/* <WelcomeScreen/> */}
      {/* <ViewScreen/> */}
      {/* <ListingDetailsScreen/> */}
      {/* <MessagesScreen/> */}
      {/* <Screen>
        <Text>{firstName}</Text>
        <TextInput
          placeholder='First Name' 
          style={{
            borderBottomWidth: 1,
            borderBottomColor: colors.lightgray
          }}
          onChangeText={(text) => setFirstName(text)}/>
      </Screen> */}
      {/* <AppTextInput placeholder="Username" /> */}
      {/* <AppSwitch /> */}
      {/* <AppPicker 
        selectedItem={category}
        onSelectItem={ (item) => setCategory(item)}   
        items={categories} placeholder={'Category'} />
      <AppTextInput placeholder={'Email'}/> */}
      {/* <LoginScreen /> */}
      {/* <Screen>
        <ListItem 
          title="My title" 
          subTitle="My subtitle"
          ImageComponent={<AppIcon />}/>
      </Screen> */}
      {/* <AccountScreen /> */}
      {/* <ListingScreen /> */}
      <ListingEditingScreen />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  SafeAreaView: {
    paddingTop: 100,
    flex: 1
  }
})

export default App

