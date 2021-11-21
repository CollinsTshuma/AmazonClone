import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'

const HomeScreen = () => {
    return (
        <View>
            <View style={styles.root}>
                <Image style={styles.image} source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg' }}/>
                <View style={styles.rightContainer}>
                    <Text style={styles.title} numberOfLines={3}>Logitech MX Master 3 Advanced Wireless Mouse for Mac - Bluetooth/USB</Text>
                    {/*Ratings */}
                    <Text style={styles.price}>from $13.59</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        flexDirection: 'row',
        margin: 10,
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff'
    },
    image:{
        width: 150,
        height: 150,
    },
    rightContainer: {
        padding: 10,
    },
    title: {},
    price: {},
})

export default HomeScreen
