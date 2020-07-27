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
          <Text style={styles.title}>
            {this.props.route.params.name} {'\n'}
          </Text>
          <Text style={styles.staticTitle}>에서 결제 완료 되었습니다</Text>
          <View style={styles.confirmView}>
            <Text style={styles.confirmText}>내역 확인</Text>
          </View>
          <View style={styles.confirmBox}>
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
              <Text style={styles.staticText}>원이 결제되었습니다</Text>
            </View>
          </View>
          <View style={styles.columnButton}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.button}
              onPress={() => {
                this.sendInfo();
                navigation.navigate(routes.Emp);
              }}>
              <Text style={styles.buttonText}>결제 확인</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.button}
              onPress={() => navigation.navigate(routes.Req_Pay)}>
              <Text style={styles.buttonText}>결제 취소</Text>
            </TouchableOpacity>
          </View>
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
  columnButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 35,
    fontFamily: 'Jua-Regular',
    width: width,
    height: 50,
  },
  staticTitle: {
    fontSize: 25,
    fontFamily: 'Jua-Regular',
    width: width,
    borderColor: 'gray',
  },
  confirmBox: {
    backgroundColor: '#81776C',
    width: width,
    alignItems: 'flex-end',
  },
  confirmView: {
    alignItems: 'flex-start',
    width: width,
    marginTop: 25,
    backgroundColor: '#81776C',
  },
  confirmText: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 16,
    color: 'white',
    fontFamily: 'Jua-Regular',
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: 170,
  },
  textline: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#eee',
    fontSize: 17,
  },
  inputText: {
    marginTop: 15,
    marginLeft: 10,
    marginBottom: 5,
    fontFamily: 'Jua-Regular',
    fontSize: 25,
  },
  staticText: {
    marginTop: 15,
    marginLeft: 10,
    marginBottom: 5,
    fontFamily: 'Jua-Regular',
    justifyContent: 'flex-end',
    fontSize: 25,
  },
  checkText: {
    marginTop: 45,
    marginLeft: 10,
    fontFamily: 'Jua-Regular',
    fontSize: 25,
  },
  button: {
    marginTop: 30,
    marginRight: 10,
    justifyContent: 'center',
    elevation: 10,
    borderRadius: 10,
    backgroundColor: '#ECB03E',
    width: 120,
    height: 50,
  },
  buttonText: {
    fontFamily: 'Jua-Regular',
    color: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    fontSize: 17,
    paddingLeft: 30,
  },
});

export default Confirm_ReqPayScreen;
