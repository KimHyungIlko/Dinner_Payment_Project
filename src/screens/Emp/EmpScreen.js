import React, {Component} from 'react';
import {View, TouchableOpacity, Button, Text, StyleSheet} from 'react-native';
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
      <View style={styles.container}>
      <View />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(routes.Ret_List)}>
        <Text style={styles.buttonText}>음식점 보기</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(routes.Analyze_Home)}>
        <Text style={styles.buttonText}>금액 사용 현황</Text>
      </TouchableOpacity>

      <Text>Empscreenㄴㅇㅁㄹㅇ 입니다</Text>
    </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  button: {
    marginTop: 110,
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 10,
    padding: 30,
    borderColor: 'gray',
    backgroundColor: 'transparent',
    width: 200,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
  },
});


export default EmpScreen;
