import { StyleSheet, ScrollView, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState } from 'react'

const Personal = (props) => {

  const { navigation } = props;
  const [secureTextEntry, secure] = useState(true);
  const [ResecureTextEntry, setResecureTextEntry] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const showPassword = () => {
    secure(!secureTextEntry);
  }

  const showPasswordConfirm = () => {
    setResecureTextEntry(!ResecureTextEntry);
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.bar_navigation}>
          <TouchableOpacity style={styles.back_navigation} onPress={navigation.goBack}>
            <Image source={require('../../../../assets/images/ic_back.png')} />
          </TouchableOpacity>
          <Text style={styles.text_navigation}>Setting</Text>
        </View>
        <View style={styles.imgPersonal}>
          <Image source={require('../../../../assets/images/img_personal.png')} />
        </View>
        <View style={styles.infoContainer}>
          <View style={[styles.inputContainer, { marginTop: 31, }]}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="#828282"
              autoCapitalize="characters"
              autoCorrect={true}
              keyboardType="default"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#828282"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
            />
          </View>

          <View style={[styles.inputContainer, { marginTop: 16 }]}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#828282"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={secureTextEntry}
            />
            <TouchableOpacity
              style={styles.eyeImg}
              onPress={showPassword}>
              <Image
                source={require('../../../../assets/images/ic_eye.png')}
              />
            </TouchableOpacity>

          </View>
          <View style={[styles.inputContainer, { marginTop: 16 }]}>
            <TextInput
              style={styles.input}
              placeholder="Re-type password"
              placeholderTextColor="#828282"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={ResecureTextEntry}
            />
            <TouchableOpacity
              style={styles.eyeImg}
              onPress={showPasswordConfirm}>
              <Image
                source={require('../../../../assets/images/ic_eye.png')}
              />
            </TouchableOpacity>

          </View>

          <TouchableOpacity
            style={[styles.buttonContainer, { marginTop: 41 }]}
            onPress={null} >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default Personal

const styles = StyleSheet.create({
  eyeImg: {
    width: 30,
    height: 18,
    position: 'absolute',
    right: 17,
    top: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.50,
    // wordWrap: 'break-word',
  },
  buttonContainer: {
    width: '100%',
    height: 57,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 41,
    borderRadius: 20,
    backgroundColor: '#D17842',
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#252a32',
    fontFamily: 'Poppins',
    fontWeight: '700',
    paddingHorizontal: 17,
    paddingVertical: 11,
    backgroundColor: '#0C0F14',
    color: '#828282'

  },
  inputContainer: {
    width: '100%',
    marginTop: 16,
  },
  infoContainer: {
    marginTop: 73
  },
  imgPersonal: {
    width: '100%',
    height: 153,
    // position: 'absolute',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    top: 41,
  },
  text_navigation: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    fontStyle: 'normal',
    fontFamily: 'Poppins',
    alignItems: 'center',
  },
  back_navigation: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  bar_navigation: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0C0F14',
    paddingStart: 20,
    paddingTop: 21,
    paddingEnd: 20,
  }
})