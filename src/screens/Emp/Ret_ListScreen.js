import React, {Component} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import routes from '../../../routes';

class Ret_ListScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.center}>
        <Text>야식대 리스트 (card 형태로)</Text>
        <Button
          title="Go to 결제 요청 Screen"
          onPress={() => navigation.navigate(routes.Req_Pay)}
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

export default Ret_ListScreen;
