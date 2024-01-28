import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import AxiosInstance from '../helper/AxiosInstance';

const Register = (props) => {
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

  const register = async () => {
    if (password === confirmPassword){
      try {
        const body = {
          email: email,
          password: password,
          name: name,
        }

        const response = await AxiosInstance().post('/users/register', body);
        console.log(response);
        if (response.status == true){
          Alert.alert('Đăng ký thành công');
          navigation.goBack();
        } else{
          Alert.alert('Đăng ký thất bại');
        }

      } catch (error) {
        console.log('Đăng ký lỗi' + error);
        Alert.alert('Đăng ký lỗi' + error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={styles.logoImage}
          source={require('../../../assets/images/logo.png')} />
      </View>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcome}>Welcome to Lungo!!</Text>
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.login}>Register to continue</Text>
      </View>
      <View style={[styles.inputContainer, { marginTop: 31, }]}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#828282"
          autoCapitalize="characters"
          autoCorrect={true}
          keyboardType="default"
          value={name}
          onChangeText={setName}
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
          value={email}
          onChangeText={setEmail}
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
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.eyeImg}
          onPress={showPassword}>
          <Image
            source={require('../../../assets/images/ic_eye.png')}
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
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          style={styles.eyeImg}
          onPress={showPasswordConfirm}>
          <Image
            source={require('../../../assets/images/ic_eye.png')}
          />
        </TouchableOpacity>

      </View>

      <TouchableOpacity
        style={[styles.buttonContainer, { marginTop: 41 }]}
        onPress={register} >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.sigInContainer}>
        <Text style={styles.signIn}>You have an account? Click </Text>
        <TouchableOpacity onPress={navigation.goBack}>
          <Text style={styles.signInText}>Sign in</Text>
        </TouchableOpacity>

      </View>
    </View >
  )
}

export default Register

const styles = StyleSheet.create({
  signInText: {
    color: '#D17842',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.50,
    justifyContent: 'center',
  },
  signIn: {
    width: 'auto',
    color: '#828282',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.50,
    justifyContent: 'center',
  },
  sigInContainer: {
    width: 'auto',
    height: 'auto',
    // marginTop: 31,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
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
  registerContainer: {
    marginTop: 16,
  },
  login: {
    color: '#828282',
    fontSize: 12,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 26,
    letterSpacing: 0.5,
  },
  welcomeContainer: {
    marginTop: 20,
  },
  welcome: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: 26,
    letterSpacing: 0.5,
  },
  logoImage: {
    width: 93,
    height: 78,
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0c0f14',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
  },
})