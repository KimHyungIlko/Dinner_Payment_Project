import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import axios from 'react-native-axios';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

const {height, width} = Dimensions.get('window');

class Dept_FdsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {datas: [], dept: this.props.route.params.dept};
  }

  async componentDidMount() {
    try {
      let responsedata = await axios.get(
        `http://54.180.86.174/employees/costs?dept_name=${this.state.dept}`,
      );
      this.setState({datas: responsedata.data});
    } catch (error) {}
  }

  render() {
    //console.log('가져온 dept:', this.state.dept);
    const {navigation} = this.props;
    const {datas, dept} = this.state;
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.center}>
          <Text style={styles.title}>이상 감지 FDS</Text>
        </View>
        <View>
          <Text
            style={{
              marginLeft: width * 0.05,
              width: width * 0.9,
              fontSize: 22,
              color: '#81776C',
              fontFamily: 'Jua-Regular',
              paddingTop: height * 0.01,
              borderBottomColor: 'gray',
              borderBottomWidth: 0.5,
            }}>
            {dept} 야식대 사용 현황
          </Text>
          <ScrollView>
            {datas.map((data, index) => {
              return (
                <View key={index} style={styles.button}>
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
                        fontSize: 15,
                        fontFamily: 'Jua-Regular',
                        paddingTop: height * 0.003,
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
                      <Text style={styles.emp_info}>인원: {data.emp_num}</Text>
                      <Text style={styles.emp_info}>
                        사용 금액: {data.req_cost}
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
                </View>
              );
            })}
          </ScrollView>
        </View>
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
    paddingTop: height * 0.003,
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

export default Dept_FdsScreen;
