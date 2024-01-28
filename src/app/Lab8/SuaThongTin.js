import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import AxiosInstance from './AxiosInstance';
// import { navigation } from '@react-navigation/native';

const SuaThongTin = ({ route }) => {
    const { user } = route.params;
    const { navigation } = route.params;
    const [name, setName] = useState('');
    const [birthDay, setBirthDay] = useState('');
    const [linkAnh, setLinkAnh] = useState('');
    const [buttonTitle, setButtonTitle] = useState('Thêm tài khoản');
    const [title, setTitle] = useState('Tạo mới tài khoản');

    useEffect(() => {
        if (user != null) {
            setTitle(`Chỉnh sửa tài khoản ${user?.name}`);
            setButtonTitle('Cập nhật thông tin');
            setName(user?.name);
            setBirthDay(unixTimeToDate(user?.birthDay));
            setLinkAnh(user?.url_avatar);
            console.log(user);
        } else {
            // console.log('User is undefined or null');
        }
    }, []);

    const handleSubmit = async () => {
        if (name != '' && dateToUnixTime(birthDay) != 0 && linkAnh != '' && birthDay != 0) {
            if (buttonTitle == 'Thêm tài khoản') {
                try {
                    const response = await AxiosInstance().post(`/users`, {
                        name: name,
                        birthDay: dateToUnixTime(birthDay),
                        url_avatar: linkAnh,
                    });
                    console.log(response);
                    if (response !== 'Not found') {
                        navigation.reset({ routes: [{ name: 'Lab 8 bài 1' }] });
                    }
                } catch (error) {
                    console.error(error);
                }
            } else {
                try {
                    const response = await AxiosInstance().put(`/users/${user?.id}`, {
                        name: name,
                        birthDay: dateToUnixTime(birthDay),
                        url_avatar: linkAnh,
                    });
                    console.log(response);
                    if (response !== 'Not found') {
                        navigation.reset({ routes: [{ name: 'Lab 8 bài 1' }] });
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        } else {
            alert('Vui lòng nhập đúng định dạng');
        }

    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nhập tên"
                    placeholderTextColor={'black'}
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nhập ngày tháng năm sinh (dd-mm-yyyy)"
                    placeholderTextColor={'black'}
                    value={birthDay}
                    keyboardType='number-pad'
                    onChangeText={(text) => setBirthDay(text)}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Dán đường dẫn ảnh đại diện"
                    placeholderTextColor={'black'}
                    value={linkAnh}
                    keyboardType='url'
                    onChangeText={(text) => setLinkAnh(text)}
                />
            </View>
            <TouchableOpacity style={styles.btnAddContainer} onPress={handleSubmit}>
                <Text style={styles.btnAdd}>{buttonTitle}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SuaThongTin

const unixTimeToDate = (unixTime) => {
    const date = new Date(unixTime * 1000); // Đổi giây thành mili giây
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    if (!isNaN(date)) {
        console.log(date);
        return `${day}-${month}-${year}`;
    } else {
        console.log('not a number');
        return '';
    }

}

const dateToUnixTime = (dateString) => {
    try {
        const [day, month, year] = dateString.split('-').map(Number);
        if (year >= 1970 && month >= 1 && month <= 12 && day >= 1 && day <= 31) {

            const convertedDate = new Date(year, month - 1, day);
            const unixTime = convertedDate.getTime() / 1000;
            return unixTime;
        } else {
            return 0;
        }
    } catch (error) {
        Alert('Vui lòng nhập đúng định dạng (dd-mm-yyy');
        return 0;
    }


}

// console.log(dateToUnixTime('28-1-2024'))


const styles = StyleSheet.create({
    btnAdd: {
        color: 'black'
    },
    btnAddContainer: {
        width: '100%',
        backgroundColor: 'orange',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
    },
    input: {
        width: '100%',
        color: 'black',
        fontWeight: 'bold',
    },
    inputContainer: {
        borderColor: 'black',
        borderWidth: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        paddingStart: 10,
        alignContent: 'center',
        fontWeight: 'bold',
        borderRadius: 10,
        marginBottom: 10,
    },
    title: {
        color: 'orange',
        fontFamily: 'Poppins',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    container: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 30,
        paddingVertical: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
})