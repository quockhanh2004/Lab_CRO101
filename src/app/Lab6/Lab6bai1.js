import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';


const Lab6bai1 = (props) => {
  const [selectedBranch, setSelectedBranch] = useState('');
  const [name, setName] = useState('');
  const [masv, setMasv] = useState('');
  const [lop, setLop] = useState('');
  const { navigation } = props;

  const onBranchChange = value => {
    setSelectedBranch(value);
  };
  const onSubmit = () => {
    if (
      name.trim() === '' ||
      masv.trim() === '' ||
      lop.trim() === '' ||
      selectedBranch === ''
    ) {
      alert('Vui lòng nhập đầy đủ thông tin');
      return;
    } else {
      navigation.navigate('Detail', { name, masv, lop, selectedBranch });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.thongtinsv}>
        <Text style={{ color: '#ce1126', fontSize: 16, fontWeight: 'bold' }}>
          Thông tin sinh viên
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Nhập tên</Text>
        <TextInput
          placeholder="Nhập họ tên"
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Nhập mã sinh viên</Text>
        <TextInput
          placeholder="Nhập mã sinh viên"
          style={styles.input}
          value={masv}
          onChangeText={text => setMasv(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Nhập lớp</Text>
        <TextInput
          placeholder="Nhập lớp"
          style={styles.input}
          value={lop}
          onChangeText={text => setLop(text)}
        />
      </View>
      <Text style={styles.text}>Chọn Ngành</Text>
      <View style={styles.inputlabel}>
        <Picker
          selectedValue={selectedBranch}
          onValueChange={onBranchChange}
          style={styles.picker}>
          <Picker.Item label="Chọn ngành" value="" style={styles.pickerLabel} />
          <Picker.Item label="Lập trình mobile" value="Lập trình mobile" />
          <Picker.Item label="Ứng dụng phần mềm" value="Ứng dụng phần mềm" />
          <Picker.Item label="Lập trình Web" value="Lập trình Web" />
          <Picker.Item
            label="Phát triển phần mềm"
            value="Phát triển phần mềm"
          />
          <Picker.Item label="Lập trình game" value="Lập trình game" />
        </Picker>
      </View>

      <View style={styles.buttoncontai}>
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.textbutton}>Submit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttoncontai}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Lab 6 bài 2')}>
          <Text style={styles.textbutton}>Lab 6 bài 2</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttoncontai}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Lab 7')}>
          <Text style={styles.textbutton}>Lab 7</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 5,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
  pickerLabel: {
    borderWidth: 1,
    borderColor: '#000',
  },
  inputlabel: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
  buttoncontai: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  button: {
    backgroundColor: '#0000FF',
    padding: 10,
    width: 320,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#FFFF00',
  },
  textbutton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  thongtinsv: {
    backgroundColor: '#c0c0c0',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#026466',
  },
  text: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 7,
  },
});

export default Lab6bai1;
