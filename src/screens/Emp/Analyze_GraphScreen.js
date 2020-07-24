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

class Analyze_GraphScreen extends Component {
  constructor (props) {
    super (props);
    this.state = {
      total: [],
    };
  }

  handleZoom (domain) {
    this.setState ({selectedDomain: domain});
  }

  handleBrush (domain) {
    this.setState ({zoomDomain: domain});
  }

  async componentDidMount () {
    let datas = await axios.get ('http://54.180.86.174/employees/2017/costs');
    //console.log('길혜영 정보', datas.data);
    let row_list = [];
    let total_list = [];
    for (let i = 0; i < datas.data.length; i++) {
      let date = datas.data[i].req_date.split ('-');
      row_list.push (date[2], datas.data[i].req_cost * 0.0001);
      total_list.push (row_list);
      row_list = [];
    }
    this.setState ({total: total_list});
    console.log ('total: ', this.state.total);
  }

  render () {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.head}>요금 사용 현황</Text>
        <View style={{height: 350}}>
          <ScrollView horizontal={true}>
            <VictoryChart
              width={550}
              height={300}
              padding={{top: 20, left: 60, right: 50, bottom: 30}}
              scale={{x: 'time'}}
              containerComponent={
                <VictoryZoomContainer
                  responsive={false}
                  zoomDimension="x"
                  zoomDomain={this.state.zoomDomain}
                  onZoomDomainChange={this.handleZoom.bind (this)}
                />
              }
            >
              <VictoryLine
                style={{
                  data: {stroke: 'tomato'},
                }}
                data={state.total}
                x={0}
                y={1}
              />
              <VictoryAxis
                label="이번 달 사용0 일자"
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
        <View style={styles.bot_graph}>
          <VictoryChart
            width={300}
            height={90}
            scale={{x: 'time'}}
            padding={{top: 0, left: 50, right: 0, bottom: 30}}
            containerComponent={
              <VictoryBrushContainer
                responsive={false}
                brushDimension="x"
                brushDomain={this.state.selectedDomain}
                onBrushDomainChange={this.handleBrush.bind (this)}
              />
            }
          >
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
  bot_graph: {
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default Analyze_GraphScreen;
