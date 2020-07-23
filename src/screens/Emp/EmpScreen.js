import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Button,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import routes from '../../../routes';

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
          <Image
            style={styles.logo}
            source={require('../../../image/KB_logo.png')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'column',
    backgroundColor: 'transparent',
    backgroundColor: 'white',
  },
  pointView: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5D69A',
    // marginTop: 50,
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
    fontFamily: 'Jua-Regular',
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
});
export default EmpScreen;
