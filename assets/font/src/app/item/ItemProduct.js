import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState, useContext } from 'react';

const ItemProduct = (props) => {
    const { navigation } = props;
    const { product } = props;
    // const product = route.params?.data?.product;
    return (
        <View style={[styles.Container, { backgroundColor: '#000' }]}>
            <TouchableOpacity onPress={() => { navigation.navigate('Payment', { data: { product } }) }}>
                <LinearGradient
                    colors={['#252A32', 'rgba(38, 43, 51, 0)']}
                    style={styles.linearGradient}>
                    <View style={styles.top}>
                        <Image style={styles.image} source={product?.image} />
                        {product?.isRating && <View style={styles.danhGia}>
                            <Image source={require('../../../assets/images/ic_star.png')} />
                            <Text style={styles.diemDanhGia}>{product?.rating}</Text>
                        </View>}
                    </View>
                    <View style={styles.bottom}>
                        <Text style={styles.name}>{product?.name}</Text>
                        <Text style={styles.info}>{product?.info}</Text>
                        <View style={styles.priceContainer}>

                            <Text style={styles.price}>
                                <Text style={{ color: '#D17842' }}>$ </Text>
                                {product?.price}
                            </Text>

                            <TouchableOpacity style={styles.btnAdd} onPress={() => navigation.navigate('Payment')}>
                                <Image source={require('../../../assets/images/btn_add.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
};

export default ItemProduct;

const styles = StyleSheet.create({
    btnAdd: {

    },
    price: {
        color: '#fff',
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: '600',
        fontStyle: 'normal',
        lineHeight: 20,
    },
    priceContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6.3,
        justifyContent: 'space-between',
        paddingEnd: 12,
    },
    info: {
        color: '#fff',
        fontFamily: 'Poppins',
        fontSize: 9,
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: 20,
    },
    name: {
        color: '#fff',
        fontFamily: 'Poppins',
        fontSize: 13,
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: 20,
    },
    bottom: {
        display: 'flex',
        flexDirection: 'column',
        paddingStart: 12,
    },
    linearGradient: {
        width: 149,
        height: 245,
        borderRadius: 23,
        paddingTop: 0,
    },
    diemDanhGia: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '700',
        fontStyle: 'normal',
        fontFamily: 'Poppins',
        alignItems: 'center',
        marginStart: 4,
    },
    danhGia: {
        position: 'absolute',
        right: 0,
        top: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.60)',
        borderTopEndRadius: 19,
        borderBottomStartRadius: 26,
        paddingEnd: 11,
        paddingStart: 12,
        paddingVertical: 2,
    },
    image: {
        width: 126,
        height: 126,
        borderRadius: 16,
    },
    Container: {
        width: 149,
        height: 245,
        marginEnd: 22,
        borderRadius: 23,
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    top: {
        // position: 'relative',
        alignItems: 'center',
        margin: 12,
    },
});
