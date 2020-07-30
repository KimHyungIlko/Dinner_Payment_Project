import React, {Component} from 'react';
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
  View,
  Text,
  Image,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Card, Paragraph, Title} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import routes from '../../../routes';
import axios from 'react-native-axios';
const {height, width} = Dimensions.get('window');
// 식당 리스트
const RetCard = ({retInfo, navigation}) => {
  let info, pos;
  const information = (retInfo) => {
    if (retInfo.name == '오스테리아샘킴') {
      pos = ['서울 마포구 양화로3길 55'];
      info = ['샘킴 쉐프가 총괄하고 있는 오픈 키친의 이탈리안 레스토랑.'];
    } else if (retInfo.name == '쿠이신보') {
      pos = ['서울특별시 마포구 서교동 양화로8길 38'];
      info = ['백종원의 3대 천왕에 출연한 야끼도리 맛집'];
    } else if (retInfo.name == '이치류') {
      pos = ['서울특별시 마포구 서교동 395-124'];
      info = ['국내최초로 정통 삿포로식 양고기 숯불구이 징기스칸'];
    } else if (retInfo.name == '오레노라멘') {
      pos = ['101호, 14 독막로6길 마포구 서울특별시'];
      info =
        '[진한 닭 육수가 매력적인 토리파이탄과 깔끔하면서도 깊은 맛을 자랑하는 쇼유 라멘이 대표메뉴인 라멘집]';
    } else {
      pos = ['서울특별시 마포구 서교동 동교로12길 41'];
      info = [
        '살시챠라자냐와 새우쵸리조오일생면파스타가 대표메뉴인 이탈리안 식당',
      ];
    }
    navigation.navigate(routes.Req_Pay, {
      image: retInfo.ret_img,
      name: retInfo.name,
      pos: pos,
      info: info,
      id: retInfo.id,
    });
  };
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.5}
      onPress={() => information(retInfo)}>
      <ImageBackground
        style={styles.img_back}
        imageStyle={{borderRadius: 10, borderColor: 'gray', borderWidth: 0.5}}
        source={{uri: retInfo.ret_img}}>
        <Text style={styles.text}>{retInfo.name}</Text>
        <Text style={styles.text2}>
          매출:{' '}
          {retInfo.profit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

class Ret_ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {datas: []};
  }

  async componentDidMount() {
    let datas = await axios.get('http://54.180.86.174/restaurants');
    this.setState({datas: datas.data});
  }
  render() {
    const {datas} = this.state;
    const {navigation} = this.props;
    return (
      <View style={{backgroundColor: 'white'}}>
        <ScrollView>
          {datas.map((data, index) => {
            return (
              <RetCard key={data.id} retInfo={data} navigation={navigation} />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: height * 0.01,
    marginBottom: height * 0.005,
    alignSelf: 'center',
    height: height * 0.25,
    width: width * 0.9,
    elevation: 3,
    borderRadius: 10,
  },
  img_back: {flex: 1, justifyContent: 'flex-end'},
  text: {
    marginLeft: width * 0.02,
    fontSize: 20,
    color: 'white',
    fontFamily: 'Jua-Regular',
    paddingTop: height * 0.003,
    justifyContent: 'flex-end',
  },
  text2: {
    marginLeft: width * 0.02,
    fontSize: 15,
    color: 'white',
    justifyContent: 'flex-end',
    fontFamily: 'Jua-Regular',
    paddingTop: height * 0.003,
  },
});

export default Ret_ListScreen;
