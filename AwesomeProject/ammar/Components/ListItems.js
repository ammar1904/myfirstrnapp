import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

const ListItems = ({image,title,listings}) => {
    return (
      
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View style={styles.textContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.listings}>{listings}</AppText>
            </View>
        </View>

       
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        padding:10
    },
    image:{
        width:60,
        height:60,
        borderRadius:30
    },
    textContainer:{
        padding:10
    },
    title:{
        fontSize:15
    },
    listings:{
        fontSize:15,
        color: colors.lightgray
    }

})

export default ListItems;
