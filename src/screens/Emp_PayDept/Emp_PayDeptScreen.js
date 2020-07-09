import React, {Component} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

class Emp_PayDeptScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.center}>
        <Text>총무부 메인 화면</Text>
        <Button
          title="결제 정보"
          // onPress={() => navigation.navigate('Home')}
        />

        <Button
          title="야식대 FDS"
          // onPress={() => navigation.navigate('Home')}
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

export default Emp_PayDeptScreen;
