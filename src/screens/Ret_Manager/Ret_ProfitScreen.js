import React, {Component} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import {Tab_Ret_Anl} from "../../navigations/TabNavigator";
class Ret_ProfitScreen extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab_Ret_Anl />
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

export default Ret_ProfitScreen;
