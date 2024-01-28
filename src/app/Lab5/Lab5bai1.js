import { View, Text, StyleSheet, Image, Button , ScrollView} from 'react-native';
import React from 'react';
// import { ScrollView } from 'react-native-gesture-handler';

const Lab5bai1 = (props) => {
  const { navigation } = props;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ color: 'black', fontSize: 20 }}>
          1. Giới thiệu về phố cổ Hội An
        </Text>
        <Text style={styles.fonttext}>
          Du lịch phố cổ Hội An là trải nghiệm thú vị và đáng nhớ với nhiều bạn
          trong và ngoài nước. Phố cổ Hội An là địa điểm du lịch nổi tiếng cách
          trung tâm thành phố Đà Nẵng khoảng 30km về phía Tây Nam. Không ồn ào,
          náo nhiệt, Hội An mang vẻ đẹp bình lặng và cổ kính. Sức hấp dẫn của đô
          thị hơn 400 năm tuổi xuất phát từ những kiến trúc cổ, những nhà mái
          ngói rêu phong, những con phố đèn lồng đầy màu sắc..
        </Text>
        {/* <Image
          source={require('../../../assets/img/lab5b1.jpg')}
          style={styles.iconlocation}
        /> */}
        <Text style={styles.fonttext2}>
          Ngoài ra, Hội An cũng nổi tiếng với những lễ hội truyền thống đặc sắc
          như: lễ hội thành hoàng làng, lễ tưởng niệm các tổ sư ngành nghề, lễ
          kỷ niệm các bậc thánh nhân tôn giáo,... và các trò chơi dân gian như
          hò khoan, hò giã gạo, bài chòi,...
        </Text>
        <Text style={styles.fonttext3}>
          Không chỉ được đắm mình trong vẻ đẹp bình dị của phố cổ, du lịch phố
          cổ Hội An bạn còn được khám phá sự giao thoa giữa các nền văn hóa
          phương Đông đến từ Nhật Bản, Trung Quốc và văn hóa Việt. Bởi Hội An
          vốn là thương cảng đông đúc và sầm uất nhất tồn tại dưới triều Nguyễn
          cách đây khoảng 200 năm, chính sự giao thương giữa Việt Nam và các
          nước khác (Nhật Bản, Trung Quốc,...) đã tạo nên một Hội An đa văn hóa,
          đa sắc màu tồn tại đến ngày nay...
        </Text>
        <Button onPress={() => navigation.navigate('Lab 5 bài 2')} title='Chuyển đến Lab 5 bài 2'/>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'black',
    padding: 20,
  },
  fonttext: {
    fontFamily: 'Amaranth-Bold',
    color: 'red',
    marginTop: 20,
    fontSize: 15,
  },
  iconlocation: {
    width: '100%',
    height: 300,
    marginTop: 20,
  },
  fonttext2: {
    fontFamily: 'Amaranth-Italic',
    marginTop: 20,
    fontSize: 15,
    color: 'green',
  },
  fonttext3: {
    fontFamily: 'Amaranth-Regular',
    marginTop: 20,
    fontSize: 15,
    color: 'blue',
    marginBottom: 20,
  },
});

export default Lab5bai1;
