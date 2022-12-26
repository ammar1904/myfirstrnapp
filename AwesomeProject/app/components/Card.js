import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

import colors from '../config/colors';

function Card({title, subTitle, image}) {
    return (
        <View style={styles.cardContainer}>
            <Image style={styles.image}
                source={image}/>
            <View style={styles.listContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.white,
        borderRadius: 15,
        marginBottom: 20,
        overflow:"hidden"
    },

    listContainer: {
        padding:10,
    },

    image: {
        width: "100%",
        height: 200,
    },

    title: {
        marginBottom:10

    },

    subTitle: {
        color: colors.secondary
    }
})

export default Card;