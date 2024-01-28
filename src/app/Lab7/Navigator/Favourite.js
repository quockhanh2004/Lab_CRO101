import { View, Text, Image } from 'react-native'
import React from 'react'

const Favourite = () => {
  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <Image
        style={{width: '100%', height: '100%'}}
        source={{ uri: 'https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg' }}
      />
    </View>
  )
}

export default Favourite