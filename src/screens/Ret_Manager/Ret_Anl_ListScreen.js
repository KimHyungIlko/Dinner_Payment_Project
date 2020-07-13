import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Ret_Anl_ListScreen extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text>Ret_Anl_ListScreen</Text>
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

export default Ret_Anl_ListScreen;
