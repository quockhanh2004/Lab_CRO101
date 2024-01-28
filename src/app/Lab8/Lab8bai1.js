import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, Text, Image, StyleSheet, TouchableOpacity, Alert, RefreshControl } from 'react-native';
import AxiosInstance from './AxiosInstance';


const Lab8bai1 = (props) => {
    const { navigation } = props;
    const [data, setData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const [cameFromScreen, setCameFromScreen] = useState(null);

    const onRefresh = () => {
        fetchData();
    };
    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = useCallback(async () => {
        setRefreshing(true);
        try {
            const response = await AxiosInstance().get('/users');
            setData(response);
            setRefreshing(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });


    const unixTime = (unixTime) => {
        const date = new Date(unixTime * 1000); // Đổi giây thành mili giây
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();

        return `${day}-${month}-${year}`;
    }

    const remove = useCallback(async (item) => {
        console.log(item);
        try {
            const response = await AxiosInstance().delete(`/users/${item.id}`);
            if (response !== 'Not found') {
                fetchData();
                Alert.alert('Xóa thành công');

            }
        }
        catch (error) {
            console.error(error);
        }
    });

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('Thông tin', { navigation: navigation, user: item })}>
            <View style={styles.itemContainer}>

                <View style={styles.top}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.birthDay}>{unixTime(item.birthDay)}</Text>
                </View>
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.edit} onPress={() => navigation.navigate('Sửa thông tin', { user: item, navigation: navigation })}>
                        <Text style={styles.editText}>Sửa thông tin</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.delete} onPress={() => remove(item)}>
                        <Text style={styles.deleteText}>Xóa</Text>
                    </TouchableOpacity>
                </View>
            </View >
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnAddContainer} onPress={() => navigation.navigate('Sửa thông tin', { navigation: navigation, user: null })}>
                <Text style={styles.btnAdd}>Thêm tài khoản</Text>
            </TouchableOpacity>
            <FlatList style={styles.listContainer}
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    delete: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginStart: 20,
    },
    edit: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    bottom: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'start',
        marginTop: 10,
        marginStart: 10,
    },
    birthDay: {
        color: 'gray',
        fontSize: 14,
    },
    name: {
        color: 'black',
        fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: 'bold',
    },
    top: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemContainer: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 10,
        marginVertical: 10,
        borderRadius: 10,
    },
    listContainer: {
        width: '100%',
        height: 'auto',
    },
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
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
    }
});

export default Lab8bai1;
