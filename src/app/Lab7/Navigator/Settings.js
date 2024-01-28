import { View, Text,Image } from 'react-native'
import React from 'react'

const Settings = () => {
  return (
    <View style={{backgroundColor:'#fff', flex:1}}>
    <Image
        source={{uri: 'https://lh3.googleusercontent.com/pw/ABLVV853rCvrmx6yO42BEpL598-Uj2GVH0TxD8tXtx00fFV41S_WCaeu5eaZG_6Iw__T3vV7YuzxzumFlqCkLu9f1qllGj-rOK1UpLskgwMWDoxv7ow04Ipk7UeGmFdkDtfL3pCo0lR0ZFGVrGahU0wserny=w1237-h928-s-no-gm?authuser=0'}}
        style={{width: '100%', height: '100%'}}
     />
   </View>
  )
}

export default Settings