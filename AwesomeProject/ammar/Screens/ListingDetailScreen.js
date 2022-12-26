import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import AppText from '../Components/AppText';
import ListItems from '../Components/ListItems';
import colors from '../config/colors';

const ListingDetailScreen = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../Assets/jacket.jpeg')}/>
            <View style={styles.textContainer}>
                <AppText style={styles.title} >Denim Jacket</AppText>
                <AppText style={styles.subTitle}>90$</AppText>    
            </View>

            <ListItems
                image={require("../Assets/shaikh.jpg")}
                title={"Usama Shaikh"}
                listings={"5 Listings"}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.white,
        flex:1
    },
    image:{
        width:"100%",
        height:200
    },
    textContainer:{
        padding:20
    },
    title:{
        fontSize:20,
        fontWeight:'600'
    },
    subTitle:{
        paddingTop:5,
        paddingLeft:10,
        color: colors.secondary
    }
})

export default ListingDetailScreen;
