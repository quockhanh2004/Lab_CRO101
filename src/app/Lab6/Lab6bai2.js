import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import CustomDrawerContent from './CustomDrawerContent';
import Lab6bai1 from './Lab6bai1';
import Detail from './Detail';
import Article from './Drawer/Article';
import Chat from './Drawer/Chat';
import Setting from './Drawer/Setting';
import Help from './Drawer/Help';

const Drawer = createDrawerNavigator();

function Lab6bai2(props) {
  const { navigation } = props;console.log('bug');
  return (
    <NavigationContainer independent>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="Home"
          component={Lab6bai1}
          options={{
            drawerLabel: 'Home',
            drawerIcon: ({ size, color }) => (
              <Image
                source={require('../../../assets/img/ic_home.png')}
                style={{ width: size, height: size }}
              />
            ),
            drawerActiveBackgroundColor: 'light-blue',
            drawerContentStyle: {
              backgroundColor: '#fff',
              color: '#FFA500',
            },
          }}
        />
        
        <Drawer.Screen
          name="Article"
          component={Article}
          options={{
            drawerLabel: 'Article',
            drawerIcon: ({ size, color }) => (
              <Image
                source={require('../../../assets/img/ic_article.png')}
                style={{ width: size, height: size }}
              />
            ),
            drawerActiveBackgroundColor: 'light-blue',
            drawerContentStyle: {
              backgroundColor: '#fff',
              color: '#FFA500',
            },
          }}
        />
        <Drawer.Screen
          name="Chat"
          component={Chat}
          options={{
            drawerLabel: 'Chat',
            drawerIcon: ({ size, color }) => (
              <Image
                source={require('../../../assets/img/ic_chat.png')}
                style={{ width: size, height: size }}
              />
            ),
            drawerActiveBackgroundColor: 'light-blue',
            drawerContentStyle: {
              backgroundColor: '#fff',
              color: '#FFA500',
            },
          }}
        />
        <Drawer.Screen
          name="Setting"
          component={Setting}
          options={{
            drawerLabel: 'Setting',
            drawerIcon: ({ size, color }) => (
              <Image
                source={require('../../../assets/img/ic_setting.png')}
                style={{ width: size, height: size }}
              />
            ),
            drawerActiveBackgroundColor: 'light-blue',
            drawerContentStyle: {
              backgroundColor: '#fff',
              color: '#FFA500',
            },
          }}
        />
        <Drawer.Screen
          name="Help"
          component={Help}
          options={{
            drawerLabel: 'Help',
            drawerIcon: ({ size, color }) => (
              <Image
                source={require('../../../assets/img/ic_help.png')}
                style={{ width: size, height: size }}
              />
            ),
            drawerActiveBackgroundColor: 'light-blue',
            drawerContentStyle: {
              backgroundColor: '#fff',
              color: '#FFA500',
            },
          }}
        />
        <Drawer.Screen
          name="Detail"
          component={Detail }
          initialParams={{ name: 'Phạm Ngọc Quốc Khánh', masv: 'PS34197', lop: 'MD18306', selectedBranch: 'IT' }}
          options={{
            drawerLabel: 'Detail',
            drawerIcon: ({ size, color }) => (
              <Image
                source={require('../../../assets/img/ic_help.png')}
                style={{ width: size, height: size }}
              />
            ),
            drawerActiveBackgroundColor: 'light-blue',
            drawerContentStyle: {
              backgroundColor: '#fff',
              color: '#FFA500',
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerContentPart1: {
    padding: 20,
    bottom: 10,
  },
  drawerContentPart2: {},
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
});

export default Lab6bai2;
