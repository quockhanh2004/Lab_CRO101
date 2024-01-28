import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <LinearGradient
        style={styles.drawerContentPart1}
        colors={['#026466', '#cfdc00']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <View>
          <Image source={{ uri: 'https://avatars.githubusercontent.com/u/68724035?v=4' }} style={styles.image} />
          <Text style={styles.gradientText}>Phạm Ngọc Quốc Khánh</Text>
          <Text style={styles.textgmail}>pnqkhanh2924@gmail.com</Text>
        </View>
      </LinearGradient>
      <View style={styles.drawerContentPart2}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContentPart1: {
    padding: 20,
    bottom: 10,
  },
  drawerContentPart2: {
    // Styles cho phần nội dung Drawer
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  gradientText: {
    color: '#bd081c',
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
  },
  textgmail: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
  },
  customItem: {
    color: '#000', // Màu chữ của các thành phần tùy chỉnh
    fontSize: 16,   // Kích thước chữ của các thành phần tùy chỉnh
    marginTop: 10,  // Khoảng cách từ trên xuống của các thành phần tùy chỉnh
  },
});

export default CustomDrawerContent;
