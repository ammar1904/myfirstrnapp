import { Button, FlatList, Modal, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import colors from '../../config/colors'
import CustomText from './CustomText'
import PickerItems from './PickerItems'

const CustomAppPicker = ({ name, color, placeholder, size, onSelectItem, items, selectedItem,  ...otherProps }) => {

    const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
    <TouchableOpacity onPress={ () => setModalVisible(true) }>
    <View style={styles.container}>
        <MaterialCommunityIcons color={color} size={size} name={name} style={styles.icon} placeholder={placeholder}/>
        <CustomText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</CustomText>
        <MaterialCommunityIcons name="chevron-down" color="black" size={30} style={styles.chevron} />
    </View>
    </TouchableOpacity>
    <Modal visible={modalVisible} animationType="slide">
        <Button title="Close" onPress={() => setModalVisible(false)} />
        <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => <PickerItems item={item} label={item.label} onPress={() => {
                setModalVisible(false)
                onSelectItem(item)
                }
            }
        />} 
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
        borderRadius: 30,
        width: "100%",
        alignItems:'center',
        justifyContent:'center',
        padding: 15,
        marginVertical: 10,
    },

    icon: {
        paddingRight:10
    },

    text: {
        fontSize: 18,
        color: colors.black,
        flex: 1,
    },
})