import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

class Info_PayScreen extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab_Mgr_Anl />
      </NavigationContainer>
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
