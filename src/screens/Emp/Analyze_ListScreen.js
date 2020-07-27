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
import Icon from 'react-native-vector-icons/Ionicons';
const {height, width} = Dimensions.get('window');
let total_data = 0;
const PayCard = ({payInfo, navigation}) => {
  //console.log('retcard: ', retInfo.ret_img);

  total_data = total_data + payInfo.req_cost;
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 10,
        paddingLeft: 8,
      }}>
      <View
        style={{
          backgroundColor: '#D1D1D1',
          height: 45,
          width: 45,
          borderRadius: 30,
        }}>
        <Icon
          name="restaurant-outline"
          size={30}
          style={{paddingLeft: 8, paddingTop: 7, color: 'black'}}
        />
      </View>
      <ImageBackground
        style={styles.img_back}
        source={require('../../../image/box.png')}>
        <Text
          style={{
            fontWeight: 'bold',
            height: 40,
            marginLeft: 30,
            paddingTop: 10,
            fontSize: 20,
            color: 'gray',
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
            width: width * 0.7,
            alignContent: 'flex-start',
          }}>
          {payInfo.ret_name}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              justifyContent: 'center',
              marginLeft: 30,
              flexDirection: 'column',
            }}>
            <Text style={styles.left_title}>사용 식대:</Text>
            <Text style={styles.left_title}>인원수 :</Text>
            <Text style={styles.left_title}>누적금액 :</Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              marginLeft: 10,
            }}>
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
          </View>

          <View style={{flexDirection: 'column', marginLeft: 10}}>
            <Text style={{marginTop: 15, textAlign: 'center'}}>
              날짜: {payInfo.req_date}
            </Text>
            <Text style={{marginTop: 15, textAlign: 'center'}}>
              시간: {payInfo.req_time}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

class Analyze_ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {datas: [], name: []};
  }

  async componentDidMount() {
    let datas = await axios.get('http://54.180.86.174/employees/2017/costs');

    console.log('데이터: ', datas.data.emp_name);

    this.setState({
      datas: datas.data,
      name: datas.data[0].emp_name,
    });
    console.log('데이터', this.state.datas);
  }
  render() {
    const {datas, name, total} = this.state;
    const {navigation} = this.props;
    return (
      <SafeAreaView styles={{flex: 1, backgroundColor: 'white'}}>
        <Text style={styles.head}>{name}님의 야식대 사용 내역</Text>
        <ScrollView style={{backgroundColor: 'white'}}>
          {datas.map((data) => {
            return (
              <PayCard key={data.id} payInfo={data} navigation={navigation} />
            );
          })}
        </ScrollView>
        <View>
          <Text>
            {name}님의 이번달 야식대 사용 총 금액: {total}
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  head: {
    textAlign: 'center',
    fontSize: 30,
    // fontWeight: 'bold',
    color: 'white',
    borderBottomColor: '#D1D1D1',
    borderBottomWidth: 2,
    backgroundColor: '#F6AD08',
  },
  img_back: {
    height: 150,
    width: width * 0.8,
    elevation: 24,
  },
  left_title: {
    height: 30,
    fontSize: 15,
    paddingTop: 5,
    color: '#686458',
    textAlign: 'right',
  },
  text: {
    height: 30,
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'right',
  },
  rows: {
    flexDirection: 'row',
  },
});

export default Analyze_ListScreen;
