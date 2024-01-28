import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';

const Payment = (props) => {
  const { navigation } = props;
  const { route } = props;
  const product = route.params?.data?.product;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent />
      <Image source={product?.image} style={styles.image} />

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.btnMenu}
          onPress={() => navigation.goBack()}
        >
          <Image style={styles.imgHeader} source={require('../../../../assets/images/ic_back.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnMenu}
          onPress={() => navigation.navigate('Personal')}
        >
          <Image style={styles.imgHeader} source={require('../../../../assets/images/ic_favorite_red.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.containerProduct}>
        <View style={styles.left}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{product?.name}</Text>
            <Text style={styles.location}>{product?.location}From Africa</Text>

            <View style={styles.ratingC}>
              <Image style={styles.imgRating} source={require('../../../../assets/images/ic_star.png')} />
              <Text style={styles.txtRating}>{product?.rating}</Text>
            </View>
          </View>
        </View>

        <View style={styles.right}>
          <View style={styles.buttonContainer}>
            <View style={styles.btn}>
              <Image style={styles.imgBtn} source={require('../../../../assets/images/ic_coffee.png')} />
              <Text style={styles.txtBtn}>Bean</Text>
            </View>

            <View style={[styles.btn, { marginStart: 20 }]}>
              <Image style={styles.imgBtn} source={require('../../../../assets/images/ic_location.png')} />
              <Text style={styles.txtBtn}>Africa</Text>
            </View>
          </View>

          <View style={styles.btnBottom}>
            <Text style={styles.txtBtnRight}>
              Medium Roasted
            </Text>
          </View>

        </View>
      </View>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  btnBottom: {
    backgroundColor: '#141921',
    width: 131,
    height: 44.6,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
  },
  txtRating: {
    color: '#fff',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    textAlign: 'center',
    marginStart: 5,
  },
  imgRating: {
    width: 22.29,
    height: 22.29,
  },
  ratingC: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 25.43,
  },
  rating_buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  txtBtn: {
    color: '#aeaeae',
    fontFamily: 'Poppins',
    fontSize: 10,
    fontWeight: '500',
    lineHeight: 20,
    textAlign: 'center',
  },
  imgBtn: {
    width: 24,
    height: 24,
  },
  btn: {
    backgroundColor: '#141921',
    padding: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    width: '100%',
    height: 'auto',
    marginTop: 10,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  right: {
    width: '40%',
    top: 0,
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // marginTop: 0,
  },
  location: {
    color: '#AEAEAE',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
  },
  name: {
    color: '#fff',
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 20,
  },
  nameContainer: {
    width: '100%',
    paddingTop: 31,
    display: 'flex',
    flexDirection: 'column',
  },
  left: {
    width: '60%',
    display: 'flex',
    flexDirection: 'row',
  },

  containerProduct: {
    width: '100%',
    height: 148,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    position: 'absolute',
    top: 373,
    paddingStart: 22.5,
    display: 'flex',
    flexDirection: 'row',
  },
  txtHeader: {
    fontSize: 28,
    fontFamily: 'Semibold',
    color: '#fff'
  },
  textHeader: {
    marginTop: 31,
  },
  imgHeader: {
    width: 30,
    height: 30,
    borderRadius: 10,
  },
  header: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    padding: 22,
    justifyContent: 'space-between',
    marginTop: 10,
  },
  container: {
    // flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#0C0F14',

  },
  image: {
    height: 521,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
