import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import {Table, TableWrapper, Row, Col} from 'react-native-table-component';
import axios from 'react-native-axios';
const {height, width} = Dimensions.get('window');
class MAnalyze_ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: [''],
      tableTitle: [],
      costs: [],
      widthArr: [120, 120, 120, 120, 120, 120, 120],
    };
  }

  async componentDidMount() {
    let datas = await axios.get('http://54.180.86.174/departments/costs');
    let datas2 = await axios.get('http://54.180.86.174/restaurants/profits');

    let tablehead_list = [],
      tabletitle_list = [],
      rowdata = [],
      tableData = [];
    tablehead_list.push(' ');
    for (let i = 0; i < datas.data.length; i++) {
      if (datas.data[i].dept_name == 'ALL Departments') {
        tabletitle_list.push('총 합계');
      } else {
        tabletitle_list.push(datas.data[i].dept_name);
      }
      if (datas.data[i].ret_name == 'ALL Restaurants') {
        tablehead_list.push('총 합계');
      } else {
        tablehead_list.push(datas.data[i].ret_name);
      }

      rowdata.push(
        datas.data[i].costs.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
      );
      if (
        datas.data[i].ret_name == 'ALL Restaurants' &&
        i != datas.data.length - 1
      ) {
        tableData.push(rowdata);
        rowdata = [];
      }
    }
    //중복제거
    tabletitle_list = [...new Set(tabletitle_list)];
    tablehead_list = [...new Set(tablehead_list)];

    ////////////////////////////////
    let ret_costs = [];
    for (let i = 0; i < datas2.data.length; i++) {
      ret_costs.push(
        datas2.data[i].profit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
      );
    }

    ret_costs.push(datas.data[datas.data.length - 1].costs);
    tableData.push(ret_costs);

    this.setState({
      tableTitle: tabletitle_list,
      tableHead: tablehead_list,
      costs: tableData,
    });
  }

  render() {
    const state = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.head}>부서별 야식대 사용금액</Text>
        <Text>단위: (원)</Text>
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
            <ScrollView>
              <TableWrapper
                borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}
                style={styles.wrapper}>
                <Col
                  data={state.tableTitle}
                  style={styles.title}
                  height={40}
                  width={120}
                  textStyle={styles.text}
                />
                <Table>
                  {state.costs.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={[120, 120, 120, 120, 120, 120]}
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
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  head: {
    textAlign: 'left',
    fontFamily: 'Jua-Regular',
    textAlignVertical: 'bottom',
    paddingBottom: 20,
    flex: 1,
    fontSize: 35,
    color: '#7D756B',
  },
  header: {height: 50, backgroundColor: '#ECB03E'},
  text: {textAlign: 'center', fontWeight: '100'},
  title: {flex: 1, backgroundColor: '#AFAAAB'},
  row: {height: 40, backgroundColor: '#F5D69A'},
  wrapper: {flexDirection: 'row'},
});

export default MAnalyze_ListScreen;
