import { View, Text,Image} from 'react-native'
import React from 'react'

const Chat = () => {
  return (
    <View style={{backgroundColor:'black', flex:1}}>
     <Image
        source={{uri: 'https://lh3.googleusercontent.com/pw/ABLVV85a1IF0l0B8sNkResnxFtm-b0z3JfCFlt2PKs4YJFgssv2iaUx5dqdNiHtk_vCb6OUSVOJ0lMQT0Bl-Pw6STNpyxEru2viiILX4BYUiCo0fXFjcPYQPBk_4jsVsBWd6689dzOmQVZATE808415vXDr7=w1237-h928-s-no-gm?authuser=0'}}
        style={{ width: '100%',}}
      />
    </View>
  )
}

export default Chat