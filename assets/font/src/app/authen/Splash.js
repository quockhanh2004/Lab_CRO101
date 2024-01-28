import { StyleSheet, View, Image } from 'react-native'
import React from 'react'

const Splash = (props) => {
    const { navigation } = props;
    const firstPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            navigation.replace('Login');
        }, 2000);
    });

    // Chờ promise
    firstPromise.then(() => {
        console.log('Promise resolved');
    }).catch(error => {
        console.error('Error:', error);
    });
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/images/logo.png')} style={styles.img} />
        </View>
    );
}

export default Splash

const styles = StyleSheet.create({
    img: {
        width: 97,
        height: 77,
    },
    container: {
        width: 'auto',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0c0f14'
    },
})