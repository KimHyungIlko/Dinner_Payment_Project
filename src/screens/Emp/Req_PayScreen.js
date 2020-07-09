import React, {Component} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import routes from '../../../routes';

/* const Req_PayScreen = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>This is the 결제 요청 screen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go to 업주 확인 명세서 Screen"
        onPress={() => navigation.navigate(routes.Confirm_Req)}
      />
    </View>
  );
}; */

class Req_PayScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.center}>
        <Text>결제 요청 screen</Text>
        <Button
          title="Go to Home Screen"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          title="Go to 업주 확인 명세서 Screen"
          onPress={() => navigation.navigate(routes.Confirm_ReqPay)}
        />
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

export default Req_PayScreen;
