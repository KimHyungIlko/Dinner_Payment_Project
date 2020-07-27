import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Dept_FdsScreen extends Component {
  render() {
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
