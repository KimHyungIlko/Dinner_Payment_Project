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

const data = [
  {x: '경영지원부', y: 10},
  {x: '그룹사사업본부', y: 3},
  {x: '은행사업본부', y: 5},
  {x: '디지털사업본부', y: 4},
];

class MAnalyze_GraphScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>부서별 야식대 사용금액</Text>
        <VictoryChart
          width={400}
          height={300}
          theme={VictoryTheme.material}
          padding={{top: 30, left: 30, right: 50, bottom: 30}}>
          <VictoryBar
            style={{
              data: {stroke: '#c43a31'},
              parent: {border: '1px solid #ccc'},
            }}
            data={data}
          />
        </VictoryChart>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  head: {
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default MAnalyze_GraphScreen;
