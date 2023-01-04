import { Button, FlatList, Modal, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import colors from '../../config/colors'
import CustomText from './CustomText'
import PickerItems from './PickerItems'

const CustomAppPicker = ({ name, color, placeholder, size, onSelectItem, items, selectedItem, width="100%" }) => {

    const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
    <TouchableOpacity onPress={ () => setModalVisible(true) }>
    <View style={[styles.container, { width }]}>
        <MaterialCommunityIcons color={color} size={size} name={name} style={styles.icon} placeholder={placeholder}/>
        { selectedItem ? (<CustomText style={styles.text}>{selectedItem.label}</CustomText>)
                        : (<CustomText style={styles.placeholder}>{placeholder}</CustomText>) }
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
        padding: 15,
        marginVertical: 10,
    },

    icon: {
        paddingRight:10
    },

    placeholder: {
        fontSize: 18,
        color: colors.black,
        flex: 1
    },

    text: {
        fontSize: 18,
        color: colors.black,
        flex: 1,
    },
})