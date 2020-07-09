import React, {Component} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import routes from '../../../routes';

/* const EmpScreen = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>This is the Emp screen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go to 야식대 리스트 Screen"
        onPress={() => navigation.navigate(routes.Ret_List)}
      />
    </View>
  );
}; */

class EmpScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.center}>
        <Text>직원 메인 화면</Text>
        {/* <Button
          title="Go to Home Screen"
          onPress={() => navigation.navigate('Home')}
        /> */}
        <Button
          title="야식대 리스트"
          onPress={() => navigation.navigate(routes.Ret_List)}
        />

        <Button
          title="지출 내역 조회"
          // onPress={() => navigation.navigate(routes.Ret_List)}
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

export default EmpScreen;
