import { View, Text,Image } from 'react-native'
import React from 'react'

const Call = () => {
  return (
    <View style={{backgroundColor:'#fff', flex:1}}>
     <Image
        source={{uri: 'https://lh3.googleusercontent.com/pw/ABLVV86YHhPKbJ34Qb7MHPgUIsWuPqbhbLYa-OVJ2ePlJeivoIHJnjF9iG_vvE7BZXXi0nqj0uxlW-Hoe5XiZkIFcw8ZICu32ynvq8tmtoOPUCjq2AT5c-CXhXkcGhB_U8rXNp0-zIFyMwaOionJ2lxGcF-mGQ=w522-h928-s-no-gm?authuser=0'}}
        style={{width: '100%', height: '100%'}}
      />
    </View>
  )
}

export default Call