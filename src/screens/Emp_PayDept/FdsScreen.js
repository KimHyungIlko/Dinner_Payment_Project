import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from 'react-native';
import axios from 'react-native-axios';
import routes from '../../../routes';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('window');

class Graphscreen extends Component {
  render() {
    const dept_datas = this.props.dept_datas;
    const emp_datas = this.props.emp_datas;
    // console.log('emp: ', emp_datas);
    return (
      <View style={{flex: 1}}>
        <View>
          <Text
            style={{
              marginLeft: width * 0.05,
              width: width * 0.9,
              fontSize: 22,
              color: '#81776C',
              fontWeight: 'bold',
              borderBottomColor: 'gray',
              borderBottomWidth: 0.5,
            }}>
            부서별 FDS
          </Text>
          {dept_datas[0] == null ? (
            <ScrollView
              style={{
                height: height * 0.35,
                alignContent: 'center',
              }}>
              <View style={{paddingTop: height * 0.15}}>
                <Text
                  style={{
                    fontSize: 22,
                    color: '#81776C',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  조회된 내역이 없습니다.
                </Text>
              </View>
            </ScrollView>
          ) : (
            <ScrollView
              style={{
                height: height * 0.35,
                alignContent: 'center',
              }}>
              {dept_datas.map((data, index) => {
                return (
                  <View key={index}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => navigation.navigate(routes.Analyze_Home)}>
                      <Text>{data.dept_name}</Text>
                      <Text>부서 인원: {data.totalEmpNum}</Text>
                      <Text>할당 금액 :{data.assignCosts}</Text>
                      <Text>사용 금액: {data.costs}</Text>
                      <Text>차액: {data.costs - data.assignCosts}</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </ScrollView>
          )}
        </View>
        <View style={{flex: 1}}>
          <Text
            style={{
              marginLeft: width * 0.05,
              width: width * 0.9,
              fontSize: 22,
              color: '#81776C',
              fontWeight: 'bold',
              borderBottomColor: 'gray',
              borderBottomWidth: 0.5,
            }}>
            개인 FDS
          </Text>
          {emp_datas[0] == null ? (
            <ScrollView
              style={{
                height: height * 0.5,
                alignContent: 'center',
              }}>
              <View style={{paddingTop: height * 0.15}}>
                <Text
                  style={{
                    fontSize: 22,
                    color: '#81776C',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  조회된 내역이 없습니다.
                </Text>
              </View>
            </ScrollView>
          ) : (
            <ScrollView
              style={{
                height: height * 0.5,
                alignContent: 'center',
              }}>
              <View>
                {emp_datas.map((data, index) => {
                  return (
                    <View key={index} style={{flexDirection: 'column'}}>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                          navigation.navigate(routes.Analyze_Home)
                        }>
                        <Text>{data.emp_name}</Text>
                        <Text>{data.dept_name}</Text>
                        <Text>{data.ret_name}</Text>
                        <Text>{data.emp_num}</Text>
                        <Text>{data.req_date}</Text>
                        <Text>{data.cost}</Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          )}
        </View>
      </View>
    );
  }
}

class FdsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {dept: [], emp: []};
  }

  async componentDidMount() {
    try {
      let dept_datas = await axios.get(
        'http://54.180.86.174/problems/departments/costs',
      );
      this.setState({dept: dept_datas.data});
      //console.log('들온 데이터: ', datas.data);
    } catch (err) {
      this.setState({datas: []});
    }

    try {
      let emp_datas = await axios.get(
        'http://54.180.86.174/problems/employees/costs',
      );
      this.setState({emp: emp_datas.data});
      // console.log('emp 들온 데이터: ', emp_datas.data);
    } catch (err) {
      this.setState({emp: []});
    }
  }
  render() {
    const {dept, emp} = this.state;
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.center}>
          <Text style={styles.title}>이상 감지 FDS</Text>
        </View>
        {/* <ScrollView> */}
        <Graphscreen dept_datas={dept} emp_datas={emp} />
        {/* </ScrollView> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    backgroundColor: '#FAD47E',
    height: height * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    elevation: 10,
  },
  title: {
    fontSize: 30,
    color: '#81776C',
    fontWeight: 'bold',
  },
  button: {
    marginLeft: width * 0.05,
    width: width * 0.9,
    marginTop: 3,
    marginBottom: 3,
    height: height * 0.14,
    borderWidth: 1,
    borderColor: '#81776C',
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 10,
  },
});

export default FdsScreen;
