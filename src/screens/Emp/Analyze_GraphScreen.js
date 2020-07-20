import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

class Analyze_GraphScreen extends Component {
  render() {
    //graph data
    const datas = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'], //x축 데이타셋
      datasets: [
        //y축 데이타셋
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
          ],
        },
      ],
    };
    //graph 모양 결정
    const chartConfig = {
      backgroundColor: '#e26a00',
      backgroundGradientFrom: 'gray',
      backgroundGradientTo: 'white',
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, //선색
      labelColor: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, //라벨색
      style: {
        borderRadius: 16,
      },
      propsForDots: {
        r: '6', //포인트 반지름
        strokeWidth: '2', //포인트 태두리크기
        stroke: '#ffa726', //포인트 태두리색
      },
    };
    //전체 그래프의 radius값과 마진값 결정
    const graphstyle = {
      marginVertical: 8,
      borderRadius: 16,
    };
    return (
      <View style={styles.center}>
        <Text style={styles.head}>나의 야식대 사용 현황</Text>
        <LineChart
          data={datas}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={chartConfig}
          line
          style={graphstyle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  head: {
    color: 'red',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Analyze_GraphScreen;
