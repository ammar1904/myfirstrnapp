import React , {useState} from 'react'
import { TextInput, Text, FlatList, View , StyleSheet, TouchableOpacity, Modal, Button} from 'react-native'
import colors from '../config/colors'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import AppText from './AppText'
import PickerItem from './PickerItem'
import Screen from './Screen'
import AppButton from "./AppButton"

export const AppPicker = ({icon, placeholder, items , onSelectItem, selectedItem}) => {
    
    const [modalVisibility , setmodalVisibility] =  useState(false);
    
    return (
        <View style={styles.container}>
       
        <TouchableOpacity onPress={()=> setmodalVisibility(!modalVisibility)}>
            <View style={styles.picker}>
            <MaterialCommunityIcons size={25} name={icon} color={colors.black}/>
            <AppText style={styles.text}>{selectedItem ?  selectedItem.title : placeholder }</AppText>
            <MaterialCommunityIcons style={{paddingRight:10}} size={20} name={"arrow-down"} color={colors.black}/>
            </View>
        </TouchableOpacity>
       
          <View style={styles.modal}>
            <Modal visible={modalVisibility} >
                <AppButton onPress={()=> setmodalVisibility(!modalVisibility) } title={"Go Back"} color={"grey"}  />
                <FlatList 
                    data={items}
                    keyExtractor={items => items.id.toString()}
                    renderItem={({item}) =>
                        <PickerItem
                        label={item.title}
                        onPress={() => {
                            setmodalVisibility(!modalVisibility)
                            onSelectItem(item)
                        }
                            
                        }
                        
                        />    
                }
                />
            </Modal>
            </View>
            
     </View>
  )

    
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.white,
        flex:1
    },
    picker:{
        alignItems:"center",
        flexDirection:"row",
        width:"100%",
        height:45,
        backgroundColor:colors.lightgray,
        borderRadius:30,
        paddingLeft:20,
        marginTop:10
    },
    text:{
        paddingLeft:10,
        flex:1
    },
    modal:{
        paddingTop:100
    }
    
   
})
