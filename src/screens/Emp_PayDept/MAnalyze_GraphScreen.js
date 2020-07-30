import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {
  VictoryBar,
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryZoomContainer,
  VictoryBrushContainer,
  VictoryTheme,
  VictoryPie,
} from 'victory-native';
import {ScrollView} from 'react-native-gesture-handler';
import {set} from 'react-native-reanimated';
import axios from 'react-native-axios';
import {List, Divider} from 'react-native-paper';
import {Picker} from '@react-native-community/picker';
// 해당 부서에서 결제한 직원들의 리스트 목록 컴포넌트
const {height, width} = Dimensions.get('window');
const EmployeesList = ({selectedDept, empCostList}) => {
  return (
    <List.Section>
      <List.Subheader>{selectedDept}</List.Subheader>
      <Divider />
      {empCostList.map((item) => {
        return (
          <List.Item
            key={item.id}
            title={item.emp_name + ' (외 ' + (item.emp_num - 1) + '명)'}
            description={item.dept_name}
            // left={(props) => <List.Icon {...props} icon="folder" />}
            right={() => (
              <View style={{justifyContent: 'center'}}>
                <Text style={styles.text}>
                  {item.req_cost
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원 ({item.ret_name})
                </Text>
                <Text style={styles.text}>
                  {item.req_date} / {item.req_time}
                </Text>
              </View>
            )}
          />
        );
      })}
    </List.Section>
  );
};
class MAnalyze_GraphScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabledata: [],
      total: [],
      departmentList: [],
      department: '경영지원부', // select box 선택된 값
      empCostList: [],
    };
  }
  getDepartmentCostData = async () => {
    try {
      let datas = await axios.get(
        'http://54.180.86.174/departments/costs?total=true',
      );
      let total_list = [];
      let total_list1 = [];
      let dept_list = [];
      let costs_list = [];
      for (let i = 0; i < datas.data.length; i++) {
        dept_list.push(datas.data[i].dept_name, datas.data[i].costs * 0.0001);
        total_list.push(
          datas.data[i].dept_name,
          datas.data[i].assignCosts * 0.0001,
        );
        total_list1.push(total_list);
        costs_list.push(dept_list);
        dept_list = [];
        total_list = [];
      }
      this.setState({...this.state, departmentList: datas.data});
      this.setState({tabledata: costs_list, total: total_list1});
    } catch (error) {}
  };
  componentDidMount() {
    this.getDepartmentCostData();
  }
  getDepartmentEmpCostData = async (itemValue) => {
    try {
      let datas = await axios.get(
        `http://54.180.86.174/employees/costs?dept_name=${itemValue}`,
      );
      this.setState({...this.state, empCostList: datas.data});
    } catch (error) {
      console.log('MAnalyze_GraphScreen: ', error);
    }
  };
  // select box에서 부서 선택 시
  handleChangeValue = (itemValue) => {
    this.setState({...this.state, department: itemValue});
    this.getDepartmentEmpCostData(itemValue);
  };
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          {/* 막대 그래프 */}
          <View>
            <Text style={styles.head}>부서별 야식대 사용금액</Text>
            <Picker
              selectedValue={this.state.department}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => {
                this.handleChangeValue(itemValue);
              }}>
              {this.state.departmentList.map((item) => {
                return (
                  <Picker.Item
                    key={item.dept_id}
                    label={item.dept_name}
                    value={item.dept_name}
                  />
                );
              })}
            </Picker>
          </View>
          <VictoryChart theme={VictoryTheme.material} style={styles.chart}>
            <VictoryBar
              style={{data: {fill: '#AFAAAB'}}}
              //alignment="start"
              data={state.total}
              x={0}
              y={1}
            />
            <VictoryBar
              style={{
                data: {fill: '#ECB03E'},
                justifyContent: 'center',
              }}
              //alignment="start"
              data={state.tabledata}
              x={0}
              y={1}
            />
            <VictoryAxis
              label="부서"
              style={{
                axisLabel: {padding: 30},
              }}
            />
            <VictoryAxis
              dependentAxis
              label="사용금액 (만원)"
              style={{
                axisLabel: {padding: 30},
              }}
            />
          </VictoryChart>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: width * 0.03,
                backgroundColor: '#ECB03E',
              }}></View>
            <Text style={{textAlign: 'center', paddingRight: width * 0.2}}>
              사용 금액
            </Text>
            <View
              style={{
                width: width * 0.03,
                backgroundColor: '#AFAAAB',
              }}></View>
            <Text style={{textAlign: 'center'}}>남은 금액</Text>
          </View>
          {/* 부서내 직원들 결제 리스트 */}
          <View style={styles.list}>
            <EmployeesList
              selectedDept={this.state.department}
              empCostList={this.state.empCostList}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  head: {
    textAlign: 'left',
    textAlignVertical: 'bottom',
    flex: 1,
    fontSize: 30,
    paddingTop: '5%',
    paddingLeft: '3%',
    fontFamily: 'Jua-Regular',
    color: '#7D756B',
  },
  chart: {
    width: 'fit-contents',
    height: 'fit-contents',
  },
  picker: {
    height: height * 0.035,
    width: '100%',
    alignSelf: 'flex-start',
    marginLeft: '1%',
  },

  text: {
    textAlign: 'right',
  },
});
export default MAnalyze_GraphScreen;
