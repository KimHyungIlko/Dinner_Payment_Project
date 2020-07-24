import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Table, TableWrapper, Row, Col} from 'react-native-table-component';
import axios from 'react-native-axios';
class Analyze_ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['음식점', '인원수', '사용금액', '날짜', '시간'],
      widthArr: [120, 120, 120, 120, 120],
      name: [],
      tabledata: [],
    };
  }
  async componentDidMount() {
    let datas = await axios.get('http://54.180.86.174/employees/2017/costs');
    let rowdata_list = [];
    let totaldata_list = [];
    for (let i = 0; i < datas.data.length; i++) {
      rowdata_list.push(
        datas.data[i].ret_name,
        datas.data[i].emp_num,
        datas.data[i].req_cost,
        datas.data[i].req_date,
        datas.data[i].req_time,
      );
      totaldata_list.push(rowdata_list);
      rowdata_list = [];
    }
    console.log('totaldata_list: ', datas.data[0].emp_name);
    this.setState({tabledata: totaldata_list, name: datas.data[0].emp_name});
  }
  render() {
    const state = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.head}>{state.name} 야식대 사용금액</Text>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row
                data={state.tableHead}
                widthArr={state.widthArr}
                style={styles.header}
                textStyle={styles.text}
              />
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <TableWrapper
                borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}
                style={styles.wrapper}>
                <Table>
                  {state.tabledata.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[
                        styles.row,
                        index % 2 && {backgroundColor: '#F7F6E7'},
                      ]}
                      textStyle={styles.text}
                    />
                  ))}
                </Table>
              </TableWrapper>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  head: {
    textAlign: 'left',
    textAlignVertical: 'bottom',
    flex: 1,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#7D756B',
  },
  header: {height: 50, backgroundColor: '#ECB03E'},
  text: {textAlign: 'center', fontWeight: '100'},
  dataWrapper: {marginTop: -1},
  row: {height: 40, backgroundColor: '#F5D69A'},
  wrapper: {flexDirection: 'row'},
});

export default Analyze_ListScreen;
