import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'

import ItemProduct from '../../item/ItemProduct'

const loai = [
  { text: 'All' },
  { text: 'Cappuccino' },
  { text: 'Espresso' },
  { text: 'Americano' },
  { text: 'Macchiato' },
]

const product = [
  {
    name: 'Cappuccino',
    info: 'With Steamed Milk',
    image: require('../../../../assets/images/caffeeProduct.png'),
    price: 4.20,
    rating: 4.5,
    isRating: true,
  },
  {
    name: 'Espresso',
    info: 'With Foam',
    image: require('../../../../assets/images/espressoProduct.png'),
    price: 4.2,
    rating: 4.2,
    isRating: true,
  },
  {
    name: 'Espresso',
    info: 'With Foam',
    image: require('../../../../assets/images/caffeeProduct.png'),
    price: 4.2,
    rating: 4.2,
    isRating: true,
  },
];
const beans = [
  {
    name: 'Robusta Beans',
    info: 'Medium Roasted',
    image: require('../../../../assets/images/robustaBean.jpg'),
    price: 4.20,
    rating: 4.5,
    isRating: false,
  },
  {
    name: 'Cappuccino',
    info: 'With Steamed Milk',
    image: require('../../../../assets/images/robustaBean.jpg'),
    price: 4.2,
    rating: 0,
    isRating: false,
  },
  {
    name: 'Espresso',
    info: 'With Foam',
    image: require('../../../../assets/images/robustaBean.jpg'),
    price: 4.2,
    rating: 0,
    isRating: false,
  },
];

const Home = (props) => {
  const { navigation } = props;
  const [isSearch, setIsSearch] = useState(false);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(0);

  const find = (text) => {
    setSearch(text);
    if (text === '') {
      setIsSearch(false);
    } else {
      setIsSearch(true);
    }
  }

  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor={'#0C0F14'} />

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.btnMenu}
          onPress={() => navigation.navigate('Settings')}
        >
          <Image style={styles.imgHeader} source={require('../../../../assets/images/ic_menu.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnMenu}
          onPress={() => navigation.navigate('Personal')}
        >
          <Image style={styles.imgHeader} source={require('../../../../assets/images/ic_user.png')} />
        </TouchableOpacity>
      </View>



      <ScrollView showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.textHeader}>
          <Text style={styles.txtHeader}>Find the best {`\n`}coffee for you</Text>
        </View>

        <View style={styles.search}>
          {!isSearch &&
            <Image style={styles.imgSearch} source={require('../../../../assets/images/ic_search.png')} />}
          <TextInput
            style={styles.textInput}
            placeholder='Find Your Coffee...'
            placeholderTextColor={'#52555A'}
            onChangeText={find}
            value={search} />
        </View>
        <View style={styles.listLoai}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {loai.map((item, index) => (

              <TouchableOpacity
                key={index}
                style={styles.itemLoai}
                onPress={() => setSelected(index)}>

                <Text style={[styles.txtLoai, index === selected && styles.txtLoaiSeleted]}>
                  {item.text}
                </Text>

                {index == selected &&
                  <View style={styles.selectedLoai}></View>
                }
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.listCoffee}>
          <FlatList
            data={product}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <ItemProduct
                navigation={navigation}
                product={item}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <Text style={styles.textCoffeeBean}>Coffee beans</Text>

        <View style={styles.listCoffeeBean}>
          <FlatList
            data={beans}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <ItemProduct
              navigation={navigation}
              product={item}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  listCoffeeBean: {
    marginTop: 19,
  },
  textCoffeeBean: {
    marginTop: 23.32,
    color: '#fff',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
  },
  listCoffee: {
    marginTop: 22,
  },
  txtLoaiSeleted: {
    color: '#D17842',
    fontFamily: 'Poppins',
    fontSize: 14,
  },
  txtLoai: {
    color: '#52555A',
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: 'bold',
  },
  selectedLoai: {
    width: 8,
    height: 8,
    backgroundColor: '#D17842',
    borderRadius: 4,
  },
  itemLoai: {
    width: 'auto',
    marginHorizontal: 9,
    marginTop: 28,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listLoai: {

  },
  textInput: {
    marginStart: 19,
    color: '#52555A',
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
  imgSearch: {
    marginTop: 13,
    marginStart: 18,
    width: 18,
    height: 18,
  },
  search: {
    width: '100%',
    height: 45,
    backgroundColor: '#141921',
    borderRadius: 15,
    marginTop: 28,
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
    justifyContent: 'space-between',
  },
  Container: {
    backgroundColor: '#0C0F14',
    width: '100%',
    height: '100%',
    paddingHorizontal: 30,
    paddingVertical: 20,
  }
})