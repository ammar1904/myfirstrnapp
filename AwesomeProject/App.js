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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import RegisterScreen from './app/screens/RegisterScreen';
import CustomButton from './app/practice/Components/CustomButton';
import CustomCard from './app/practice/Components/CustomCard';
import CustomAccountScreen from './app/practice/Screens/CustomAccountScreen';
import CustomListingScreen from './app/practice/Screens/CustomListingScreen';
import CustomScreen from './app/practice/Components/CustomScreen';
import CustomText from './app/practice/Components/CustomText';
import CustomTextInput from './app/practice/Components/CustomTextInput';
import ZenPractice from './app/practice/Components/ZenPractice';
import CustomLoginScreen from './app/practice/Screens/CustomLoginScreen';
import CustomRegisterScreen from './app/practice/Screens/CustomRegisterScreen';
import CustomListingEditScreen from './app/practice/Screens/CustomListingEditScreen';
import CustomMessagesScreen from './app/practice/Screens/CustomMessagesScreen';
import CustomWelcomeScreen from './app/practice/Screens/CustomWelcomeScreen';
import CustomViewScreen from './app/practice/Screens/CustomViewScreen';
import CustomEditScreen from './app/practice/Components/CustomEditScreen';
import CustomListingDetailsScreen from './app/practice/Screens/CustomListingDetailsScreen';

const App = () => {

  const [firstName, setFirstName] = useState('')

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      {/* <WelcomeScreen/> */}
      {/* <ViewScreen/> */}
      {/* <ListingDetailsScreen/> */}
      {/* <MessagesScreen/> */}
      {/* <AccountScreen /> */}
      {/* <ListingScreen /> */}
      {/* <ListingEditingScreen /> */}
      {/* <RegisterScreen /> */}

      {/* ################################################################ My Practice ###################################################################### */}
      {/* <CustomWelcomeScreen /> */}
      {/* <CustomViewScreen /> */}
      {/* <CustomListingDetailsScreen /> */}
      {/* <CustomAccountScreen /> */}
      {/* <CustomListingScreen /> */}
      <CustomMessagesScreen />
      {/* <CustomTextInput name="email" placeholder="Username" color="black" size={30} /> */}
      {/* <CustomLoginScreen /> */}
      {/* <CustomRegisterScreen /> */}
      {/* <CustomListingEditScreen /> */}
      {/* <CustomEditScreen /> */}
      {/* <ZenPractice /> */}

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: colors.bgcolor
  }
})

export default App

