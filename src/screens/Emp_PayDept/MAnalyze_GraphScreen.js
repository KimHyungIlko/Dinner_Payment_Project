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

const data = [
  {date: new Date(1982, 1, 8), price: 1250},
  {date: new Date(1987, 2, 7), price: 2570},
  {date: new Date(1993, 3, 1), price: 3450},
  {date: new Date(1997, 3, 5), price: 5150},
  {date: new Date(2001, 3, 7), price: 1320},
  {date: new Date(2005, 6, 1), price: 3050},
  {date: new Date(2011, 7, 1), price: 2700},
  {date: new Date(2015, 5, 1), price: 4700},
];

class MAnalyze_GraphScreen extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleZoom(domain) {
    this.setState({selectedDomain: domain});
  }

  handleBrush(domain) {
    this.setState({zoomDomain: domain});
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.head}>요금 사용 현황</Text>
        <View style={{height: 350}}>
          <ScrollView horizontal={true}>
            <VictoryChart
              width={550}
              height={300}
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
                  data: {stroke: 'tomato'},
                }}
                data={data}
                x="date"
                y="price"
              />
            </VictoryChart>
          </ScrollView>
        </View>

        <VictoryChart
          width={300}
          height={90}
          scale={{x: 'time'}}
          padding={{top: 0, left: 50, right: 50, bottom: 30}}
          containerComponent={
            <VictoryBrushContainer
              responsive={false}
              brushDimension="x"
              brushDomain={this.state.selectedDomain}
              onBrushDomainChange={this.handleBrush.bind(this)}
            />
          }>
          <VictoryAxis
            tickValues={[new Date(1985, 1, 1), new Date(2015, 1, 1)]}
            tickFormat={(x) => new Date(x).getFullYear()}
          />
          <VictoryLine
            style={{
              data: {stroke: 'tomato'},
            }}
            data={data}
            x="date"
            y="price"
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
