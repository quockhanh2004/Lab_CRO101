import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import Lab6bai1 from './Lab6bai1';
import Detail from './Detail';
// import Article from './Drawer/Article';
// import Chat from './Drawer/Chat';
// import Setting from './Drawer/Setting';
// import Help from './Drawer/Help';
// import CustomDrawerItem from './CustomDrawerItem';
// import CustomDrawerContent from './CustomDrawerContent';
const Drawer = createDrawerNavigator();

const Lab6b2 = () => {
  return ( 
      <Drawer.Navigator>
        <Drawer.Screen
          name="Detail"
          component={Lab6bai1}
        />
        {/* Các màn hình khác */}
      </Drawer.Navigator>
  );
}

export default Lab6b2

const styles = StyleSheet.create({})