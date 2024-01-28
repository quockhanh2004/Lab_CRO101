import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ToastAndroid, Alert } from 'react-native'
import React, { useState, useContext } from 'react'
import { AppContext } from '../main/AppContext';
import AxiosInstance from '../helper/AxiosInstance';


const Login = (props) => {
    const { isLogin, setIsLogin } = useContext(AppContext)
    const [secureTextEntry, secure] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bugEmail, setBugEmail] = useState('');
    const [bugPassword, setBugPassword] = useState('');
    const [canLogIn, setCanLogin] = useState(false);
    const { navigation } = props;

    const changeEmail = (email) => {
        setEmail(email);
        if (email !== '') {
            setBugEmail('');

        } else {
            setBugEmail('Please input Email');
            setCanLogin(false);
        }
    };

    const changePassword = (password) => {
        setPassword(password);
        if (password !== '') {
            setBugPassword('');
        } else {
            setBugPassword('Please input Password');
            setCanLogin(false);
        }
    };

    const login = async () => {
        changeEmail(email);
        changePassword(password);

        if (email !== '' && password !== '') {
            setCanLogin(true);
            ToastAndroid.showWithGravityAndOffset(
                'Logging in...',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50,
            );

            try {
                const body = {
                    email: email,
                    password: password,
                }

                const response = await AxiosInstance().post('/users/login', body);
                console.log(response);
                if (response = true) {
                    setIsLogin(true);
                } else {
                    Alert.alert('Tài khoản hoặc mật khẩu sai');
                }


            } catch (error) {
                Alert.alert('Tài khoản hoặc mật khẩu sai');
            }
        }
    };

    const register = () => {
        navigation.navigate('Register');
    };

    const resetPassword = () => {
        navigation.navigate('ResetPass');
    };

    const toggleSecureTextEntry = () => {
        secure(!secureTextEntry);
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
            <View style={styles.loginContainer}>
                <Text style={styles.login}>Login to continue</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, bugEmail !== '' && styles.inputBug]}
                    placeholder="Email"
                    placeholderTextColor="#828282"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={changeEmail}
                />
                {bugEmail !== '' &&
                    <Text style={styles.textBug}>
                        {bugEmail}
                    </Text>}
            </View>
            <View style={[styles.inputContainer, { marginTop: 15 }]}>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#828282"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={secureTextEntry}
                    value={password}
                    onChangeText={changePassword}
                />
                <TouchableOpacity
                    style={styles.eyeImg}
                    onPress={toggleSecureTextEntry}>
                    <Image
                        source={require('../../../assets/images/ic_eye.png')}
                    />
                </TouchableOpacity>
                {bugPassword !== '' && <Text style={styles.textBug}>
                    {bugPassword}
                </Text>}
            </View>

            <TouchableOpacity
                style={[styles.buttonContainer, { marginTop: 41 }]}
                onPress={login} >
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.buttonContainerLoginGG, { marginTop: 9 }]}
                onPress={null} >
                <Image
                    source={require('../../../assets/images/ic_google.png')}
                    style={styles.imgButtonGG} />

                <Text style={styles.buttonTextGG}>Sign in with Google</Text>
            </TouchableOpacity>

            <View style={styles.registerContainer}>
                <Text style={styles.register}>Don't have an account? Click </Text>
                <TouchableOpacity onPress={register}>
                    <Text style={styles.registerText}>Register</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.forgotPasswordContainer} >
                <Text style={styles.forgotPassword}>Forgot Password? Click </Text>
                <TouchableOpacity onPress={resetPassword}>
                    <Text style={styles.forgotPasswordText}>Reset</Text>
                </TouchableOpacity>
            </View>

        </View >
    )
}

export default Login;

const styles = StyleSheet.create({
    forgotPasswordText: {
        color: '#D17842',
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 26,
        letterSpacing: 0.50,
        justifyContent: 'center',
    },
    forgotPassword: {
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
    forgotPasswordContainer: {
        width: 'auto',
        height: 'auto',
        marginTop: 16,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    registerText: {
        color: '#D17842',
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 26,
        letterSpacing: 0.50,
        justifyContent: 'center',
    },
    register: {
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
    registerContainer: {
        width: 'auto',
        height: 'auto',
        marginTop: 31,
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
    buttonTextGG: {
        color: '#121212',
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 26,
        letterSpacing: 0.50,
        marginTop: 16,
        justifyContent: 'center',
    },
    imgButtonGG: {
        width: 15,
        height: 15,
        marginLeft: 25,
        marginTop: 19,
        position: 'absolute'
    },
    buttonContainerLoginGG: {
        width: '100%',
        display: 'flex',
        height: 57,
        backgroundColor: 'white',
        borderRadius: 20,
        border: '1px black solid',
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
        marginTop: 16,
        borderRadius: 20,
        backgroundColor: '#D17842',
    },
    textBug: {
        color: '#FB7181',
        fontFamily: 'Poppins',
        fontWeight: '700',
        marginStart: 6,
        marginTop: 3,
    },
    inputBug: {
        borderColor: '#FB7181',
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
        marginTop: 31,
    },
    loginContainer: {
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