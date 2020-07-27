import React, {Component} from 'react';
import {
  View,
  Button,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import routes from '../../../routes';

const {height, width} = Dimensions.get('window');

class Confirm_ReqPayScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={{uri: this.props.route.params.image}}
        />
        <Text style={styles.title}>{this.props.route.params.name}</Text>

        <View style={styles.textline}>
          <Text style={styles.inputText}>{this.props.route.params.people}</Text>
          <Text style={styles.staticText}>명</Text>
        </View>
        <View style={styles.textline}>
          <Text style={styles.inputText}>{this.props.route.params.price}</Text>
          <Text style={styles.staticText}>원</Text>
        </View>
        <View style={styles.textline}>
          <Text style={styles.staticText2}>최종 결제하시겠습니까?</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => navigation.navigate(routes.Analyze_Home)}>
          <Text style={styles.buttonText}>최종 결제 확인</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={() => navigation.navigate(routes.Req_Pay)}>
          <Text style={styles.buttonText}>최종 결제 취소</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    width: width,
    backgroundColor: '#ECB03E',
    color: 'white',
    elevation: 10,
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: 230,
  },
  textline: {
    height: 40,
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#eee',
    borderBottomWidth: 0.5,
    fontSize: 17,
  },
  inputText: {marginTop: 45, marginLeft: 10, fontWeight: 'bold', fontSize: 24},
  staticText: {
    marginTop: 45,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 25,
  },
  button: {
    marginTop: 30,
    justifyContent: 'center',
    elevation: 10,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 0.5,
    backgroundColor: '#ECB03E',
    width: 140,
    height: 50,
  },
  buttonText: {
    alignContent: 'center',
    justifyContent: 'center',
    paddingLeft: 25,
  },
});

export default Confirm_ReqPayScreen;
