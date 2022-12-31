import { StyleSheet } from 'react-native'
import React from 'react'
import CustomScreen from '../Components/CustomScreen'
import * as Yup from 'yup'
import CustomFormField from '../Components/CustomFormField'
import CustomForm from '../Components/CustomForm'
import CustomSubmitButton from '../Components/CustomSubmitButton'

const validationSchema = Yup.object({
    title: Yup.string().required().min(10).label("Title"),
    price: Yup.string().required().min(5).label("Price"),
    category: Yup.string().required().nullable().label("Category"),
    description: Yup.string().optional().label("Description")
})

const CustomListingEditScreen = () => {

  return (
    <CustomScreen style={styles.conatainer}>
        <CustomForm
            initialValues={{title: '', price: '', category: '', description: ''}}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
        > 
            <CustomFormField
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                name="title"
                //iconName="account"
                //color="black"
                //size={24}
                placeholder="Title"
            />
            <CustomFormField
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="number-pad"
                name="price"
                //iconName="email"
                //color="black"
                //size={24}
                placeholder="Price"
            />
            <CustomFormField
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                name="category"
                iconName="chevron-down"
                color="black"
                size={24}
                placeholder="Category"
            />
            <CustomFormField
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="default"
                name="description"
                //iconName="chevron-down"
                //color="black"
                //size={24}
                placeholder="Description"
            />
            <CustomSubmitButton title="Post" />
        </CustomForm>   
    </CustomScreen>
  )
}

export default CustomListingEditScreen

const styles = StyleSheet.create({
    conatainer: {
        padding: 10,
    },

    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    }
})