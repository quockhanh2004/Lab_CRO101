import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ThongTin = ({ route }) => {
    const { navigation } = route.params;
    const { user } = route.params;
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{ uri: user.url_avatar }} />
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.birthDay}>{unixTimeToDate(user.birthDay)}</Text>
            <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                <Text style={styles.backText}>Trở lại</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ThongTin
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
const styles = StyleSheet.create({
    backText: {
        color: 'black',
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: 'bold',
    },
    back: {
        width: '100%',
        backgroundColor: 'orange',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
    },
    birthDay: {
        color: 'gray',
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    name: {
        color: 'orange',
        fontFamily: 'Poppins',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    img: {
        width: 200,
        height: 200,
        borderRadius: 100,
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