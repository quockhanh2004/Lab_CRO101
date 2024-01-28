import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {View, Text, Image} from 'react-native';
import Home from './Navigator/Home';
import Call from './Navigator/Call';
import Article from './Navigator/Article';
import Setting from './Navigator/Settings';

const homeIconPath = require('../../../assets/img/ic_home.png');
const articleIconPath = require('../../../assets/img/ic_article.png');
const callIconPath = require('../../../assets/img/ic_search.png');
const settings = require('../../../assets/img/ic_setting.png');
const size = 16;

const renderIcon = (iconPath, props) => (
  <Image
    source={iconPath}
    style={{tintColor: 'black', width: size, height: size}}
    onError={error =>
      console.log(`Lỗi ảnh: ${error.nativeEvent.error}`)
    }
  />
);

const renderLabel = props => {
  const { focused, color } = props;
  return focused ? (
    <Text style={{ color: color || '#ff6c22' } }>{props.children}</Text>
  ) : (
    <Text style={{ color: 'black' }}>{props.children}</Text>
  );
};

const ICON_MENU = {
  Home: homeIconPath,
  Article: articleIconPath,
  Call: callIconPath,
  Settings: settings,
};

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarLabelPosition: 'beside-icon',
};

const Lab7 = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#ff6c22', 
        inactiveTintColor: 'black',
        headerShown: false,
        tabBarLabelStyle: {
          flexDirection: 'row',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: props => renderIcon(ICON_MENU.Home, props),
          tabBarLabel: props => renderLabel(props),
          
        }}
      />
      <Tab.Screen
        name="Article"
        component={Article}
        options={{
          headerShown: false,
          tabBarIcon: props => renderIcon(ICON_MENU.Article, props),
          tabBarLabel: props => renderLabel(props),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Call}
        options={{
          headerShown: false,
          tabBarIcon: props => renderIcon(ICON_MENU.Call, props),
          tabBarLabel: props => renderLabel(props),
  
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{
          headerShown: false,
          tabBarIcon: props => renderIcon(ICON_MENU.Settings, props),
          tabBarLabel: props => renderLabel(props),
        }}
      />
    </Tab.Navigator>
  );
};

export default Lab7;