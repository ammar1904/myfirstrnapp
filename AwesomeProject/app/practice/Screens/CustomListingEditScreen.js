import { StyleSheet } from 'react-native'
import React from 'react'
import CustomScreen from '../Components/CustomScreen'
import * as Yup from 'yup'
import CustomFormField from '../Components/CustomFormField'
import CustomForm from '../Components/CustomForm'
import CustomSubmitButton from '../Components/CustomSubmitButton'
import CustomFormPicker from '../Components/CustomFormPicker'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().label("Description")
})

const categories = [
    { label: "Furniture", value: 1},
    { label: "Clothing", value: 2},
    { label: "Cameras", value: 3}, 
] 

const CustomListingEditScreen = () => {

  return (
    <CustomScreen style={styles.conatainer}>
        <CustomForm
            initialValues={{title: '', price: '', category: null, description: ''}}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
        > 
            <CustomFormField
                maxLength={255}
                name="title"
                placeholder="Title"
            />
            <CustomFormField
                keyboardType="numeric"
                maxLength={8}
                name="price" 
                placeholder="Price"
                width={120}
            />
            <CustomFormPicker 
                items={categories}
                name="category"
                placeholder="Category"
                width="50%"   
            />
            <CustomFormField
                maxLength={255}
                multiline
                name="description"
                numberOfLines={3}  
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