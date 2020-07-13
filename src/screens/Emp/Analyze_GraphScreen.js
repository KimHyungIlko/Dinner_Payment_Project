import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Analyze_GraphScreen extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text>Analyze_GraphScreen</Text>
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

export default Analyze_GraphScreen;
