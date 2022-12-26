import { StyleSheet, Text, TextInput, View, Platform, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native'
import React, { useState } from 'react'
// import {MaterialCommunityIcons} from 'react-native-vector-icons'
import colors from '../config/colors'
import AppText from './AppText'
import Screen from './Screen'
import PickerItem from './PickerItem'

const AppPicker = ({ icon, items, onSelectItem, selectedItem, placeholder, ...otherProps}) => {

    const [modalVisible, setModalVisible] = useState(false)
  return (
    <>
    <TouchableWithoutFeedback onPress={() => setModalVisible(true)} >
        <View style={styles.container}>
            {/* <MaterialCommunityIcons name={icon} /> */}
            <AppText>{selectedItem ? selectedItem.label : placeholder}</AppText>
        </View>
    </TouchableWithoutFeedback>
    <Modal visible={modalVisible} animationType={'slide'}>
        <Screen>
            <Button title='Close' onPress={() => setModalVisible(false)}/>
            <FlatList 
                data={items}
                keyExtractor={ item => item.value.toString()}
                renderItem={({ item }) => 
                <PickerItem
                    label={item.label}
                    onPress={() => {
                        setModalVisible(false)
                        onSelectItem(item)
                    }}
                />}/>
        </Screen>

    </Modal>
    </>
  )
}

export default AppPicker

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightgray,
        borderRadius: 25, 
        width: "100%",
        flexDirection: "row",
        padding: 15,
        marginVertical: 10
    }
})