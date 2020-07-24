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
} from 'victory-native';
import {ScrollView} from 'react-native-gesture-handler';
import {set} from 'react-native-reanimated';
import axios from 'react-native-axios';

class MAnalyze_GraphScreen extends Component {
  constructor (props) {
    super (props);
    this.state = {
      tabledata: [],
      total: [],
    };
  }

  async componentDidMount () {
    let datas = await axios.get ('http://54.180.86.174/departments/costs');
    let total_list = [];
    let total_list1 = [];
    let dept_list = [];
    let costs_list = [];
    for (let i = 0; i < datas.data.length; i++) {
      if (datas.data[i].ret_name == 'ALL Restaurants') {
        costs_list.push (datas.data[i].dept_name, datas.data[i].costs / 10000);
        total_list.push (datas.data[i].dept_name, 80);
        total_list1.push (total_list);
        dept_list.push (costs_list);
        costs_list = [];
        total_list = [];
      }
    }

    this.setState ({tabledata: dept_list, total: total_list1});
    console.log (total_list1);
  }

  render () {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.head}>부서별 야식대 사용금액</Text>
        <ScrollView horizontal={true}>
          <VictoryChart width={450} height={300} theme={VictoryTheme.material}>
            <VictoryBar
              style={{
                data: {fill: 'red'},
                justifyContent: 'center',
              }}
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
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
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
    fontWeight: 'bold',
    color: '#7D756B',
  },
});

export default MAnalyze_GraphScreen;
