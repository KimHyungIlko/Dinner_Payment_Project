import React, {Component} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import routes from '../../../routes';

class Confirm_ReqPayScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.center}>
        <Text>This is the 업주 확인 screen</Text>
        <Button
          title="Go to Home Screen"
          onPress={() => navigation.navigate('Home')}
        />
        <Button
          title="Go to 확인 창 Screen"
          // onPress={() => navigation.navigate(routes.Confirm_Req)}
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

export default Confirm_ReqPayScreen;
