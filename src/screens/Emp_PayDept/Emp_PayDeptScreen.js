import React, {Component} from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import routes from '../../../routes';
class Emp_PayDeptScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(routes.Info_Pay)}>
            <Text style={styles.buttonText}>결제 정보</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.pointView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(routes.Fds)}>
            <Text style={styles.buttonText}>야식대 FDS</Text>
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
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  buttonText: {
    fontFamily: 'Jua-Regular',
    fontSize: 22,
    color: 'white',
    alignSelf: 'center',
  },
  logo: {
    width: 80,
    height: 25,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
export default Emp_PayDeptScreen;
