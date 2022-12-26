import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import { AppInput } from '../Components/AppInput';
import AppText from '../Components/AppText';
import ListItems from '../Components/ListItems';
import colors from '../config/colors';


const MessagesScreen = () => {
    
    const messages = [
        {
            id : 1,
            title: "Usama Shaikh",
            discription:"Allah is the Greatest.",
            image : require("../Assets/shaikh.jpg")
        },
        
        {
            id : 2,
            title: "Aaqib",
            discription:"Talk is cheap show me the code",
            image : require("../Assets/aaqib.jpg")
        },
        
        {
            id : 3,
            title: "Abdul Basit",
            discription:"Hustle never Stops",
            image : require("../Assets/pappi.jpg")
        },
        {
            id : 4,
            title: "Ammar",
            discription:"Keeps on Grinding..",
            image : require("../Assets/ammar.jpg")
        },
        
        
    ]
    
    return (
        <View style={styles.messages}>
        <AppInput placeholder={"Search"} icon={"magnify"} />
        <AppText style={styles.title}>Messages</AppText>
       <FlatList 
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem = { ({item}) => <ListItems
                image={item.image}
                title={item.title}
                listings={item.discription}
                />
            }
            ItemSeparatorComponent={()=><View style={{width:"100%", height:1, backgroundColor:colors.lightgray}} />}
       />
       </View>
    );
}

    const styles = StyleSheet.create({
        messages:{
          backgroundColor: colors.white,
          flex:1
        },
        title:{
          padding:20,
          fontWeight:"600"
        }
      })


export default MessagesScreen;
