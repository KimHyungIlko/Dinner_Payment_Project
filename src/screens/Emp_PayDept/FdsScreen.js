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

class FDSList extends Component {
  render() {
    const dept_datas = this.props.dept_datas;
    const emp_datas = this.props.emp_datas;
    const navigation = this.props.navigation;
    //console.log('asdffdassafdsafdafsdsafdfsdaasd:', navigation);
    return (
      <View style={{flex: 1}}>
        <View>
          <Text
            style={{
              marginTop: height * 0.01,
              marginLeft: width * 0.05,
              width: width * 0.9,
              fontSize: 22,
              color: '#81776C',
              borderBottomColor: 'gray',
              borderBottomWidth: 0.5,
              fontFamily: 'Jua-Regular',
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
                      onPress={() =>
                        navigation.navigate(routes.Dept_Fds, {
                          dept: data.dept_name,
                        })
                      }>
                      <View
                        style={{
                          backgroundColor: '#81776C',
                          borderTopRightRadius: 8,
                          borderTopLeftRadius: 8,
                        }}>
                        <Text
                          style={{
                            fontSize: 15,
                            fontFamily: 'Jua-Regular',
                            paddingTop: height * 0.003,
                            paddingLeft: width * 0.02,
                            borderBottomColor: '#81776C',
                            borderBottomWidth: 1,
                            color: 'white',
                          }}>
                          {data.dept_name}
                        </Text>
                      </View>

                      <Text style={styles.info}>
                        부서 인원: {data.totalEmpNum} 명
                      </Text>
                      <Text style={styles.info}>
                        할당 금액 :
                        {data.assignCosts
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                        원
                      </Text>
                      <Text style={styles.info}>
                        사용 금액:{' '}
                        {data.costs
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                        원
                      </Text>
                      <Text style={styles.info}>
                        차액:{' '}
                        {data.costs -
                          data.assignCosts
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                        원
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </ScrollView>
          )}
          {/* ////////////////////////////// */}
        </View>
        <View style={{flex: 1}}>
          <Text
            style={{
              marginLeft: width * 0.05,
              width: width * 0.9,
              fontSize: 22,
              color: '#81776C',
              fontFamily: 'Jua-Regular',
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
                    fontFamily: 'Jua-Regular',
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
                          navigation.navigate(routes.Emp_Fds, {
                            empid: data.emp_id,
                          })
                        }>
                        <View
                          style={{
                            backgroundColor: '#81776C',
                            borderTopRightRadius: 8,
                            borderTopLeftRadius: 8,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                          }}>
                          <Text
                            style={{
                              paddingTop: height * 0.003,
                              fontSize: 15,
                              fontFamily: 'Jua-Regular',
                              paddingLeft: width * 0.02,
                              color: 'white',
                            }}>
                            {data.emp_name}
                          </Text>
                          <Text
                            style={{
                              fontSize: 15,
                              color: 'white',
                              paddingRight: width * 0.02,
                              fontFamily: 'Jua-Regular',
                              paddingTop: height * 0.003,
                            }}>
                            {data.dept_name}
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row', flex: 1}}>
                          <View style={{flex: 1}}>
                            <Text style={styles.emp_info}>
                              가게명: {data.ret_name}
                            </Text>
                            <Text style={styles.emp_info}>
                              인원: {data.emp_num} 명
                            </Text>
                            <Text style={styles.emp_info}>
                              사용 금액:{' '}
                              {data.cost
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                              원
                            </Text>
                          </View>
                          <View
                            style={{
                              paddingRight: width * 0.01,
                              justifyContent: 'flex-end',
                            }}>
                            <Text>{data.req_date}</Text>
                          </View>
                        </View>
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
    const {navigation} = this.props;
    const {dept, emp} = this.state;

    console.log('emsadsadasp: ', navigation);
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.center}>
          <Text style={styles.title}>이상 감지 FDS</Text>
        </View>
        {/* <ScrollView> */}
        <FDSList dept_datas={dept} emp_datas={emp} navigation={navigation} />
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
    fontFamily: 'Jua-Regular',
  },
  button: {
    marginLeft: width * 0.05,
    width: width * 0.9,
    marginTop: 10,
    marginBottom: 3,
    height: height * 0.14,
    borderWidth: 1,
    borderColor: '#81776C',
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 10,
  },
  info: {
    fontSize: 13,
    paddingLeft: width * 0.02,
    // textAlign: 'right',
  },
  emp_info: {
    paddingTop: height * 0.005,
    fontSize: 15,
    paddingLeft: width * 0.02,
  },
});

export {FdsScreen, FDSList};
