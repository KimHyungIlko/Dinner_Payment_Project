import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {Table, TableWrapper, Row, Col} from 'react-native-table-component';
import axios from 'react-native-axios';
import Divider from 'react-native-paper';
const {height, width} = Dimensions.get ('window');
let total_data = 0;
const PayCard = ({payInfo, navigation}) => {
  total_data = total_data + payInfo.req_cost;
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingTop: height * 0.01,
        paddingBottom: height * 0.01,
        paddingLeft: width * 0.02,
      }}
    >
      <ImageBackground
        style={styles.img_back}
        source={require ('../../../image/box.png')}
      >
        <Text
          style={{
            fontFamily: 'Jua-Regular',
            height: height * 0.05,
            marginLeft: width * 0.1,
            paddingTop: height * 0.01,
            fontSize: 20,
            color: 'gray',
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
            width: width * 0.8,
            alignContent: 'flex-start',
          }}
        >
          {payInfo.ret_name}
        </Text>
        <View style={styles.rows}>
          <View
            style={{
              justifyContent: 'flex-start',
              marginLeft: 30,
            }}
          >
            <Text style={styles.left_title}>사용 식대:</Text>
            <Text style={styles.left_title}>인원수 :</Text>
            <Text style={styles.left_title}>누적금액 :</Text>
          </View>
          <View
            style={{
              marginLeft: 10,
              position: 'absolute',
              right: 20,
            }}
          >
            <View style={styles.rows}>
              <Text style={styles.text}>{payInfo.req_cost}</Text>
              <Text style={styles.left_title}>원</Text>
            </View>
            <View style={styles.rows}>
              <Text style={styles.text}>{payInfo.emp_num}</Text>
              <Text style={styles.left_title}>명</Text>
            </View>
            <View style={styles.rows}>
              <Text style={styles.text}>{total_data}</Text>
              <Text style={styles.left_title}>원</Text>
            </View>
            <Text style={styles.timeTitle}>
              {payInfo.req_date} / {payInfo.req_time}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

class Analyze_ListScreen extends Component {
  constructor (props) {
    super (props);
    this.state = {datas: [], name: [], total: []};
  }

  async componentDidMount () {
    let datas = await axios.get ('http://54.180.86.174/employees/2017/costs');
    let costsum = 0;
    for (let i = 0; i < datas.data.length; i++) {
      costsum += datas.data[i].req_cost;
    }

    this.setState ({
      datas: datas.data,
      name: datas.data[0].emp_name,
      total: costsum,
    });
  }
  render () {
    const {datas, name, total} = this.state;
    const {navigation} = this.props;
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <Text style={styles.head}>{name}님의 야식대 사용 내역</Text>

        {datas.map (data => {
          return (
            <PayCard key={data.id} payInfo={data} navigation={navigation} />
          );
        })}
        <View style={styles.totalbox}>
          <Text style={styles.total}>{name}</Text>
          <Text style={{fontSize: 15}}>님의 이번달 야식대 사용 총 금액:</Text>
          <Text style={styles.total}>{total}원</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  head: {
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 5,
    fontFamily: 'Jua-Regular',
    color: 'white',
    borderBottomColor: '#D1D1D1',
    borderBottomWidth: 2,
    backgroundColor: '#F6AD08',
  },
  img_back: {
    height: height * 0.19,
    width: width * 0.95,
    elevation: 24,
  },
  left_title: {
    marginLeft: width * 0.02,
    height: height * 0.035,
    fontFamily: 'Jua-Regular',
    fontSize: 15,
    paddingTop: 5,
    color: '#686458',
  },
  timeTitle: {
    height: height * 0.035,
    fontFamily: 'Jua-Regular',
    fontSize: 15,
    paddingTop: 5,
    color: '#686458',
    alignItems: 'flex-end',
  },
  text: {
    fontFamily: 'Jua-Regular',
    height: height * 0.035,
    fontSize: 20,
    color: '#C83E3A',
    textAlign: 'right',
  },
  rows: {
    flexDirection: 'row',
  },
  totalbox: {
    paddingTop: height * 0.01,
    alignSelf: 'center',
    width: width * 0.95,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#EBEBEB',
    justifyContent: 'center',
  },
  total: {fontFamily: 'Jua-Regular', fontSize: 20},
});

export default Analyze_ListScreen;
