import { Button, FlatList, Modal, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import colors from '../../config/colors'
import CustomText from './CustomText'
import PickerItems from './PickerItems'

const CustomAppPicker = ({ name, color, placeholder, size, items, ...otherProps }) => {

    const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
    <TouchableOpacity onPress={ () => setModalVisible(true) }>
    <View style={styles.container}>
        <MaterialCommunityIcons color={color} size={size} name={name} style={styles.icon} placeholder={placeholder}/>
        <CustomText style={styles.text}>{placeholder}</CustomText>
        <MaterialCommunityIcons name="chevron-down" color="black" size={30} style={styles.chevron} />
    </View>
    </TouchableOpacity>
    <Modal visible={modalVisible} animationType="slide">
        <Button title="Close" onPress={() => setModalVisible(false)} />
        <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => <PickerItems label={item.label} onPress={() => console.log(item)}/> } 
        />
    </Modal>
    </>
  )
}

export default CustomAppPicker

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: colors.lightgray,
        borderRadius: 25,
        width: "100%",
        padding: 15,
        marginVertical: 10,
    },

    icon: {
        marginTop: 10,
        marginRight: 10,
    },

    text: {
        fontSize: 18,
        color: colors.black,
        marginTop: 10,
        marginBottom: 10,
        flex: 1,
    },

    chevron: {
        marginTop: 10,
        marginBottom: 10,
    }
})