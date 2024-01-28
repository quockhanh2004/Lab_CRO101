import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';

const Lab5bai3 = ({navigation}) => {
  const [liked, setLiked] = React.useState(false);
  const [image, setimage] = useState(require('../../../assets/img/ic_heart.png'));
  const handleGetStartedPress = () => {
    navigation.navigate('Lab 6 bài 2');
  };
  const backVe = () => {
    navigation.goBack();
  };
  const doianhheart = () => {
    if (liked) {
      Alert.alert('Thông báo', 'Đã thích ảnh');
      setLiked(false);
      setimage(require('../../../assets/img/ic_heart.png'));
    } else {
      Alert.alert('Thông báo', 'Đã bỏ thích ảnh');
      setLiked(true);
      setimage(require('../../../assets/img/ic_no-heart.png'));
    }
  };
  const tripInfo =
    'Hội An – nơi mà cuộc sống cứ bình lặng như thế. Hội An – nơi mà dường như dòng chảy vô tình của hời gian chẳng thể nào vùi lấp đi cái không khí cổ xưa. Những mái ngói cũ phủ đầy rêu phong, những con đường ngập trong sắc đỏ của đèn lồng, những phi được chạm trổ tinh vi, tất cả tất cả như đưa ta của vài trăm năm trước.';

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0)" />
      <ImageBackground
        style={styles.image}
        source={{uri: 'https://kienviet.net/wp-content/uploads/2020/12/Picture1.png'}}
        resizeMode="cover">
        <View style={styles.header}>
          <View style={styles.iconcontai}>
            <TouchableOpacity onPress={backVe}>
              <Image
                source={require('../../../assets/img/ic_back.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <Image
              source={require('../../../assets/img/ic_menu.png')}
              style={styles.icon}
            />
          </View>
          <View style={styles.textcontai}>
            <Text style={styles.textphoco}>PHỐ CỖ HỘI AN</Text>
            <Text style={{color: '#fff', fontSize: 20, marginBottom: 25}}>
              {' '}
              <Image
                source={require('../../../assets/img/ic_star.png')}
                style={styles.star}
              />{' '}
              5.0
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.details}>
        <View style={styles.contaidetails}>
          <View style={styles.contaitongdetails}>
            <Image
              source={require('../../../assets/img/ic_location.png')}
              style={styles.iconlocation}
            />
            <Text style={styles.textlocation}> Quảng Nam</Text>
          </View>
          <TouchableOpacity style={styles.contaiheart} onPress={doianhheart}>
            <Image source={image} style={styles.iconheart} />
          </TouchableOpacity>
        </View>
        <View style={styles.contaidetailsthongtin}>
          <Text numberOfLines={6} ellipsizeMode="tail" style={styles.tripInfo}>
            {tripInfo}
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.footertextcontai}>
          <Text style={styles.footertext}>
            $100/<Text style={{fontSize: 13}}>Ngày</Text>
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={handleGetStartedPress}>
            <Text style={{fontWeight: 'bold', color: 'blue'}}>Đặt ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconheart:{
    width: 30,
    height: 30,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    flex: 7,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: 'white',
  },

  iconcontai: {
    marginTop: 30,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  details: {
    flex: 3,
    backgroundColor: 'white',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    bottom: '10%',
  },
  contaitongdetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tripInfo: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'normal',
  },
  contaiheart: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 30,
    borderColor: 'white',
    bottom: 45,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  textcontai: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    top: '70%',
  },
  star: {
    width: 20,
    height: 20,
    tintColor: 'yellow',
  },
  textphoco: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  contaidetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },

  iconlocation: {
    width: 35,
    height: 35,
  },
  textlocation: {
    fontSize: 18,
    color: 'blue',
    fontWeight: 'bold',
  },
  contaidetailsthongtin: {
    flexDirection: 'column',
    paddingStart: 20,
    paddingEnd: 20,
  },
  textthongtin: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  footer: {
    height: 90,
    backgroundColor: 'blue',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footertextcontai: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    padding: 20,
  },
  footertext: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 13,
    color: 'black',
    fontWeight: 'normal',
  },
});

export default Lab5bai3;
