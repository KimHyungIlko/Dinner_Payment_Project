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
import axios from 'react-native-axios';
import routes from '../../../routes';
import {ScrollView} from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('window');

class Confirm_ReqPayScreen extends Component {
  async sendInfo() {
    console.log('진짜 post...');
    const {reqData} = this.props.route.params;
    console.log(reqData);

    await axios
      .post(`http://54.180.86.174/employees/${reqData.emp_id}/costs`, reqData, {
        headers: {
          'content-type': 'application/json',
        },
      })
      .then(function (response) {
        console.log('성공한 Data : ' + JSON.stringify(response));
      })
      .catch((error) => {
        console.log('실패한 Data' + error);
      });
  }

  render() {
    const {navigation} = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            style={styles.img}
            source={{uri: this.props.route.params.image}}
          />
          <Text style={styles.title}>{this.props.route.params.name}</Text>

          <View style={styles.textline}>
            <Text style={styles.inputText}>
              {this.props.route.params.people}
            </Text>
            <Text style={styles.staticText}>명</Text>
          </View>
          <View style={styles.textline}>
            <Text style={styles.inputText}>
              {this.props.route.params.price}
            </Text>
            <Text style={styles.staticText}>원</Text>
          </View>
          <View style={styles.textline}>
            <Text style={styles.staticText2}>최종 결제하시겠습니까?</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.button}
            onPress={() => {
              this.sendInfo();
              navigation.navigate(routes.Emp);
            }}>
            <Text style={styles.buttonText}>최종 결제 확인</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.button}
            onPress={() => navigation.navigate(routes.Req_Pay)}>
            <Text style={styles.buttonText}>최종 결제 취소</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
