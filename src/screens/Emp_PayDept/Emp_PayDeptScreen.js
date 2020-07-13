import React, {Component} from 'react';
import {View, TouchableOpacity, Button, Text, StyleSheet} from 'react-native';
import routes from '../../../routes';
class Emp_PayDeptScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.center}>
        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(routes.Info_Pay)}>
          <Text style={styles.buttonText}>결제 정보</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(routes.Fds)}>
          <Text style={styles.buttonText}>야식대 FDS</Text>
        </TouchableOpacity>
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


export default Emp_PayDeptScreen;
