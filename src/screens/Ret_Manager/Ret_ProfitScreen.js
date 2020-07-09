import React, {Component} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import routes from '../../../routes';

class Ret_ProfitScreen extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text>This is the 해당 식당 매출 현황 screen</Text>
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

export default Ret_ProfitScreen;
