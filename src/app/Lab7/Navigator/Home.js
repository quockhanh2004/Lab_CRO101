import React, { useState } from 'react';
import { View, useWindowDimensions, Image, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Favourite from './Favourite';
import Direct from './Direct';
import Popular from './Popular';

const Home = () => {
  const getIconForRoute = routeKey => {
    switch (routeKey) {
      case 'favourite':
        return require('../../../../assets/img/ic_heart.png');
      case 'direct':
        return require('../../../../assets/img/ic_live.png');
      case 'popular':
        return require('../../../../assets/img/ic_flame.png');
      default:
        return null;
    }
  };

  const renderScene = SceneMap({
    favourite: Favourite,
    direct: Direct,
    popular: Popular,
  });

  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'favourite', title: ' Yêu Thích', icon: getIconForRoute('favourite') },
    { key: 'direct', title: ' Trực tiếp', icon: getIconForRoute('direct') },
    { key: 'popular', title: ' Phổ biến', icon: getIconForRoute('popular') },
  ]);

  const renderIcon = (iconPath, props) => {
    return (
      <Image
        source={iconPath}
        style={{ width: 24, height: 24 }}
        onError={error => console.log(`Error loading image: ${error.nativeEvent.error}`)}
      />
    );
  };

  const renderLabel = props => {
    const { focused, color } = props;
    return focused ? (
      <Text style={{ color: color || '#ff6c22' }}>{props.route.title}</Text>
    ) : (
      <Text style={{ color: 'black' }}>{props.route.title}</Text>
    );
  };

  const screenOptions = {
    tabBarLabelPosition: 'beside-icon',
  };

  const renderTabBar = props => (
    <TabBar
      {...props}
      tabBarLabelPosition="beside-icon"
      indicatorStyle={{ backgroundColor: 'black' }}
      style={{ backgroundColor: '#6699FF' }}
      renderIcon={({ route, focused, color }) =>
        renderIcon(getIconForRoute(route.key), { focused, color })
      }
      renderLabel={renderLabel}
      tabStyle={{ flexDirection:'row'}}
    />
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width, height: layout.height }}
      renderTabBar={renderTabBar}
      screenOptions={screenOptions}
    />
  );
};

export default Home;