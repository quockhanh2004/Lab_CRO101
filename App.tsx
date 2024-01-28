import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Bai1_2 from './src/app/Lab4/Bai1_2';
import Bai3 from './src/app/Lab4/Bai3';
import Lab5bai1 from './src/app/Lab5/Lab5bai1';
import Lab5bai2 from './src/app/Lab5/Lab5bai2';
import Lab5bai3 from './src/app/Lab5/Lab5bai3';

import Lab6bai1 from './src/app/Lab6/Lab6bai1';
import Detail from './src/app/Lab6/Detail';
import Lab6bai2 from './src/app/Lab6/Lab6bai2';

import Lab7 from './src/app/Lab7/Lab7';

import Lab8bai1 from './src/app/Lab8/Lab8bai1';
import SuaThongTin from './src/app/Lab8/SuaThongTin';
import ThongTin from './src/app/Lab8/ThongTin';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Lab 8 bài 1'>
        {/* <Stack.Screen name="Bài 1 2" component={Bai1_2} />
        <Stack.Screen name="Bài 3" component={Bai3} /> */}
        <Stack.Screen name="Lab 5 bài 1" component={Lab5bai1} />
        <Stack.Screen name="Lab 5 bài 2" component={Lab5bai2} />
        <Stack.Screen name="Lab 5 bài 3" component={Lab5bai3} />
        <Stack.Screen name="Lab 6 bài 1" component={Lab6bai1} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Lab 6 bài 2" component={Lab6bai2} options={{ headerShown: false }}/> 
        <Stack.Screen name="Lab 7" component={Lab7} />
        <Stack.Screen name="Lab 8 bài 1" component={Lab8bai1}options={{headerShown: false}} />
        <Stack.Screen name="Sửa thông tin" component={SuaThongTin} options={{headerShown: false}} />
        <Stack.Screen name="Thông tin" component={ThongTin} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
