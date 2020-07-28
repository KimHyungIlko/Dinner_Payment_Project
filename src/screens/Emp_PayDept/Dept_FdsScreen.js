import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Dept_FdsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {datas: [], dept: this.props.route.params.name};
  }

  async getDepartmentEmpCostData() {
    try {
      let datas = await axios.get(
        `http://54.180.86.174/employees/costs?dept_name=${this.state.dept}`,
      );
      this.setState({datas: datas.data});
    } catch (error) {
      console.log('Dept_FdsScreen: ', error);
    }
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.center}>
        <Text>Dept_FdsScreen</Text>
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
});

export default Dept_FdsScreen;
