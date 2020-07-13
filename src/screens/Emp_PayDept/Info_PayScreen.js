import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Info_PayScreen extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text>Info_PayScreen</Text>
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

export default Info_PayScreen;
