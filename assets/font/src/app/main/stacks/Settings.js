import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState, useContext } from 'react'
import { AppContext } from '../AppContext'
const Setting = (props) => {
  const { isLogin, setIsLogin } = useContext(AppContext)
  const { navigation } = props;
  const Personal_Deltails = () => {
    navigation.navigate('Personal');
  };

  const logout = () => {
    setIsLogin(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.bar_navigation}>
        <TouchableOpacity style={styles.back_navigation} onPress={navigation.goBack}>
          <Image source={require('../../../../assets/images/ic_back.png')} />
        </TouchableOpacity>
        <Text style={styles.text_navigation}>Setting</Text>
      </View>
    <View>
      <TouchableOpacity style={styles.item}>
        <Image source={require('../../../../assets/images/ic_history.png')} />
        <Text style={styles.textItem}>History</Text>
        <Image style={styles.arrow} source={require('../../../../assets/images/ic_arrow.png')} />
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={styles.item} onPress={Personal_Deltails}>
        <Image source={require('../../../../assets/images/ic_persional.png')} />
        <Text style={styles.textItem}>Personal Deltails</Text>
        <Image style={styles.arrow} source={require('../../../../assets/images/ic_arrow.png')} />
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={styles.item}>
        <Image source={require('../../../../assets/images/ic_address.png')} />
        <Text style={styles.textItem}>Address</Text>
        <Image style={styles.arrow} source={require('../../../../assets/images/ic_arrow.png')} />
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={styles.item}>
        <Image source={require('../../../../assets/images/ic_payment.png')} />
        <Text style={styles.textItem}>Payment Method</Text>
        <Image style={styles.arrow} source={require('../../../../assets/images/ic_arrow.png')} />
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={styles.item}>
        <Image source={require('../../../../assets/images/ic_about.png')} />
        <Text style={styles.textItem}>About</Text>
        <Image style={styles.arrow} source={require('../../../../assets/images/ic_arrow.png')} />
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={styles.item}>
        <Image source={require('../../../../assets/images/ic_help.png')} />
        <Text style={styles.textItem}>Help</Text>
        <Image style={styles.arrow} source={require('../../../../assets/images/ic_arrow.png')} />
      </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.item} onPress={logout}>
          <Image source={require('../../../../assets/images/ic_logout.png')} />
          <Text style={styles.textItem}>Logout</Text>
          <Image style={styles.arrow} source={require('../../../../assets/images/ic_arrow.png')} />
        </TouchableOpacity> 
      </View>
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
  arrow: {
    width: 9,
    height: 16,
    position: 'absolute',
    right: 30,
  },
  textItem: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    fontFamily: 'Poppins',
    alignItems: 'center',
    paddingStart: 37,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 48,
    backgroundColor: '#0C0F14',
    borderColor: '#252a32',
    fontFamily: 'Poppins',
    fontWeight: '700',
    paddingVertical: 11,
  },
  text_navigation: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    fontStyle: 'normal',
    fontFamily: 'Poppins',
    alignItems: 'center',
    lineHeight: 36,
  },
  back_navigation: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  bar_navigation: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0C0F14',
    paddingStart: 20,
    paddingTop: 21,
    paddingEnd: 20,
  }
})