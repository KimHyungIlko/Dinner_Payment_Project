import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Table, TableWrapper, Row, Col} from 'react-native-table-component';

class Analyze_ListScreen extends Component {
  constructor (props) {
    super (props);
    this.state = {
      tableHead: ['음식점', '인원수', '사용금액', '날짜', '시간'],
      tableTitle: ['경영지원부', '그룹사사업본부', '은행사업본부', '디지털사업본부', '총 합계'],
      widthArr: [120, 120, 120, 120, 120],
    };
  }

  render () {
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < 5; i += 1) {
      const rowData = [];
      for (let j = 0; j < 6; j += 1) {
        rowData.push (`${i}${j}`);
      }
      tableData.push (rowData);
    }

    return (
      <View style={styles.container}>
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
                style={styles.wrapper}
              >
                <Col
                  data={state.tableTitle}
                  style={styles.title}
                  height={40}
                  width={120}
                  textStyle={styles.text}
                />
                <Table>
                  {tableData.map ((rowData, index) => (
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

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  header: {height: 50, backgroundColor: '#537791'},
  text: {textAlign: 'center', fontWeight: '100'},
  dataWrapper: {marginTop: -1},
  title: {flex: 1, backgroundColor: '#f6f8fa'},
  row: {height: 40, backgroundColor: '#E7E6E1'},
  wrapper: {flexDirection: 'row'},
});

export default Analyze_ListScreen;
