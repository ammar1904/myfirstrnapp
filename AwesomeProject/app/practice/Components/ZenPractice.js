import { StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomScreen from './CustomScreen'
import CustomAppPicker from './CustomAppPicker'
import CustomTextInput from './CustomTextInput'
import CustomIcon from './CustomIcon'
import colors from '../../config/colors'
import CustomListItems from './CustomListItems'

const ZenPractice = () => {

    const [isNew, setIsNew] = useState(false)
    const [ category, setCategory] = useState()
    const categories = [
        {
            label: 'Furniture',
            value: 1,
        },
        {
            label: 'Clothing',
            value: 2,
        },
        {
            label: 'Cameras',
            value: 3,
        },
    ]

  return (
    <CustomScreen>
        <Switch value={isNew} onValueChange={isNew => setIsNew(isNew)}/>
        <CustomAppPicker 
            name="table-of-contents" 
            color='black' size={30} 
            placeholder='Categories' 
            items={categories} 
            selectedItem={category} 
            onSelectItem={(item) => setCategory(item)} 
        />
        <CustomTextInput name="email" color='black' size={30} placeholder='email'/>
        <CustomIcon iconName="email" iconColor="black" size={50} backgroundColor={colors.primary}/>
        <CustomListItems
            title="My Title"
            //subTitle="My SubTitle"
            IconComponent={ <CustomIcon iconName="email" size={70} backgroundColor={colors.secondary}/> }
        />
    </CustomScreen>
  )
}

export default ZenPractice

const styles = StyleSheet.create({})