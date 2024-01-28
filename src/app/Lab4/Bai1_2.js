import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Linking, TextInput, ScrollView, RefreshControl, StatusBar, Button } from 'react-native';

const data = [
    {
        name: 'Phạm Ngọc Quốc Khánh',
        phone: '0382914192',
        position: 'Developer',
        photo: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/180870360_1106226636522037_1312934149752936232_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeHYjiDM18iyMFg8GYL-Mo6-lyBpydK7_4eXIGnJ0rv_h9mIniVX9p_CHxHM-gXbicGpEJTga3L-PHPgQQZF1K4_&_nc_ohc=HSFPwjEBS6kAX9KtpBT&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfCMXapVn05L5K7aHC5AfKr4vED7ewmBA4W106pWZY0h5Q&oe=65CFDBE3',
    },
    {
        name: 'Trần Ngọc Tú',
        phone: '0339944717',
        position: 'Developer',
        photo: 'https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/387730613_1740454526373018_1544210941264870505_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFxsr6dl4A9EcTBj-EQV1jQADxeq-o_2HoAPF6r6j_YetMhwAqgYwqkZgkfcUQppcJv_1n_bTLZPHXS1A1ORK7N&_nc_ohc=Su6lQQc05u0AX_ca0C2&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfB_Iq6GyOKBfW9qLQaFMp_9b8MZHmO-0XTE7Ek-60ykDw&oe=65AD27E9',
    },
    {
        name: 'Trần Công Chính',
        phone: '00000000',
        position: 'Developer',
        photo: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg',
    },
    {
        name: 'Lương Hữu Nhất',
        phone: '0123456789',
        position: 'Developer',
        photo: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg',
    },
    {
        name: 'Nguyễn Minh Nhựt',
        phone: '0911486922',
        position: 'Developer',
        photo: 'https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg',
    },
];

const Bai1_2 = (props) => {
    const { navigation } = props;
    const [refreshing, setRefreshing] = useState(false);
    const [barStyle, setBarStyle] = useState('light-content');
    const [danhBa, setDanhBa] = useState([...data]);

    const onRefresh = () => {
        // danhBa.clear();
        setRefreshing(true);
        setTimeout(() => {
            setDanhBa([...data]);
            setStatusBarColor('#ff6600');
            setRefreshing(false);
        }, 500);
    };

    const setStatusBarColor = (color) => {
        StatusBar.setBackgroundColor(color);
        // StatusBar.setBarStyle('light-content');
    };

    const handleCallPress = (phoneNumber) => {
        // const formattedPhoneNumber = phoneNumber.replace(/\s/g, '');
        Linking.openURL(`tel:${phoneNumber}`)
            .catch((error) => {
                console.error('Error initiating call:', error);
            });
    };

    const ContactItem = ({ contact }) => (
        <View style={styles.listItem}>
            <View style={styles.containerClass}>
                <Image source={{ uri: contact.photo }} style={styles.avatar} />
                <View style={styles.bodyItem}>
                    <Text style={styles.name}>{contact.name}</Text>
                    <Text style={styles.name}>{contact.position}</Text>
                </View>
                <TouchableOpacity style={styles.btnCall} onPress={() => handleCallPress(contact.phone)}>
                    <Text style={styles.callText}>Call</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View >
            <StatusBar
                barStyle={barStyle}
                translucent
                // backgroundColor={'transparent'}
            />
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    data={danhBa}
                    renderItem={({ item }) => <ContactItem contact={item} />}
                    keyExtractor={(item) => item.phone}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            tintColor="#ff0000"
                        />
                    }
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Bài 3')}>
                <Text style={styles.textcontainer}>
                    <Text style={styles.textgegister} >Chuyển đến bài 3</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Bai1_2;

const styles = {
    button: {
        margin: 30,
        width: 'auto',
        height: 50,
        backgroundColor: '#3498db',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        width: '100%',
        height: '80%',
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EEEEEE',
        padding: 10,
        width: '100%',
    },
    containerClass: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 15,
    },
    textFont: {
        marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'blue',
        fontSize: 20,
        fontWeight: 'bold',
        borderRadius: 10,
    },
    listItem: {
        padding: 10,
        backgroundColor: '#EEEEEE',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    bodyItem: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'gray',
    },
    btnCall: {
        padding: 10,
        backgroundColor: '#3498db',
        borderRadius: 5,
    },
    callText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    containerSearch: {
        width: '100%',
        padding: 20,
        marginTop: 0,
    },
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 51,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        backgroundColor: 'white',
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
        tintColor: 'gray',
    },
    microphoneIcon: {
        width: 20,
        height: 20,
        marginLeft: 10,
        tintColor: 'gray',
    },
    search: {
        flex: 1,
    },
};