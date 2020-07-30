import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {
  VictoryBar,
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryZoomContainer,
  VictoryBrushContainer,
} from 'victory-native';
import {ScrollView} from 'react-native-gesture-handler';
import axios from 'react-native-axios';
const {height, width} = Dimensions.get('window');
class Analyze_GraphScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: [],
      name: [],
      deptname: [],
    };
  }

  handleZoom(domain) {
    this.setState({selectedDomain: domain});
  }

  handleBrush(domain) {
    this.setState({zoomDomain: domain});
  }

  async componentDidMount() {
    let datas = await axios.get('http://54.180.86.174/employees/2017/costs');
    let row_list = [];
    let total_list = [];
    let dept_name;
    for (let i = 0; i < datas.data.length; i++) {
      let date = datas.data[i].req_date.split('-');
      row_list.push(date[2], datas.data[i].req_cost * 0.0001);
      total_list.push(row_list);
      row_list = [];
    }
    this.setState({
      total: total_list,
      name: datas.data[0].emp_name,
      deptname: datas.data[0].dept_name,
    });
  }

  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.head}>
          {state.deptname} {state.name}
        </Text>
        <Text style={styles.subTitle}>월별 개인 사용 현황</Text>
        <View style={{height: 350}}>
          <ScrollView horizontal={true}>
            <VictoryChart
              style={{
                width: 'fit-contents',
                height: 'fit-contents',
              }}
              padding={{top: 0, left: 60, right: 50, bottom: 50}}
              scale={{x: 'time'}}
              containerComponent={
                <VictoryZoomContainer
                  responsive={false}
                  zoomDimension="x"
                  zoomDomain={this.state.zoomDomain}
                  onZoomDomainChange={this.handleZoom.bind(this)}
                />
              }>
              <VictoryLine
                style={{
                  data: {stroke: '#C83E3A'},
                }}
                data={state.total}
                x={0}
                y={1}
              />
              <VictoryAxis
                label="이번 달 사용 일자"
                style={{
                  axisLabel: {padding: 30},
                }}
              />
              <VictoryAxis
                dependentAxis
                label="사용금액 (만원)"
                style={{
                  axisLabel: {padding: 40},
                }}
              />
            </VictoryChart>
          </ScrollView>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <VictoryChart
            width={250}
            height={90}
            style={styles.bottomGraph}
            scale={{x: 'time'}}
            padding={{top: 0, left: 0, right: 0, bottom: 30}}
            containerComponent={
              <VictoryBrushContainer
                responsive={false}
                brushDimension="x"
                brushDomain={this.state.selectedDomain}
                onBrushDomainChange={this.handleBrush.bind(this)}
              />
            }>
            <VictoryAxis />
            <VictoryLine
              style={{
                data: {stroke: 'tomato'},
              }}
              data={state.total}
              x={0}
              y={1}
            />
          </VictoryChart>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: 'white',
    paddingTop: 30,
  },
  head: {
    textAlign: 'left',
    textAlignVertical: 'bottom',
    paddingBottom: 10,
    paddingLeft: '4%',
    fontSize: 30,
    fontFamily: 'Jua-Regular',
    color: '#7D756B',
  },
  subTitle: {
    textAlign: 'left',
    textAlignVertical: 'bottom',
    paddingTop: 8,
    paddingBottom: 8,
    marginBottom: 25,
    paddingLeft: '4%',
    fontSize: 20,
    fontFamily: 'Jua-Regular',
    backgroundColor: '#F6AD08',
    color: 'black',
  },
  bottomGraph: {},
});

export default Analyze_GraphScreen;
