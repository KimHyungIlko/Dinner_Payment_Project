import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Button,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import routes from '../../../routes';
const {height, width} = Dimensions.get('window');
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
            onPress={() => navigation.navigate(routes.Analyze_Home)}>
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

    backgroundColor: 'transparent',
    backgroundColor: 'white',
  },
  pointView: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5D69A',
  },
  button: {
    marginTop: height * 0.15,
    alignSelf: 'center',
    elevation: 10,
    borderRadius: 10,
    padding: 30,
    borderColor: 'gray',
    backgroundColor: '#ECB03E',
    width: width * 0.5,
  },
  logo: {
    width: width * 0.2,
    height: height * 0.03,
    position: 'absolute',
    bottom: height * 0.01,
    right: width * 0.02,
  },
  buttonText: {
    fontFamily: 'Jua-Regular',
    fontSize: 25,
    color: 'white',
    alignSelf: 'center',
  },
});
export default EmpScreen;
