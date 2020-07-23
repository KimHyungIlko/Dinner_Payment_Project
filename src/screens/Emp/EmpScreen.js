import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Button,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
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
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(routes.Ret_List)}>
            <Text style={styles.buttonText}>야식대 등록</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.pointView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(routes.Ret_List)}>
            <Text style={styles.buttonText}>지출내역확인</Text>
          </TouchableOpacity>
          <Image style={styles.logo} source={require('./KB_logo.png')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    backgroundColor: 'white',
  },
  pointView: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5D69A',
  },
  button: {
    marginTop: 80,
    alignSelf: 'center',
    elevation: 10,
    borderRadius: 10,
    padding: 30,
    borderColor: 'gray',
    backgroundColor: '#ECB03E',
    width: 200,
  },
  logo: {
    width: 80,
    height: 25,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  buttonText: {
    fontFamily: 'DoHyeon-Regular',
    fontSize: 25,
    color: 'white',
    alignSelf: 'center',
  },
});

export default EmpScreen;
