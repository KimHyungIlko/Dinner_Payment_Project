import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Emp_FdsScreen extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text>Emp_FdsScreen</Text>
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

export default Emp_FdsScreen;
