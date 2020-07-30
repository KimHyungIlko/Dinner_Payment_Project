import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import axios from 'react-native-axios';
import routes from '../../../routes';
import {ScrollView} from 'react-native-gesture-handler';

const {height, width} = Dimensions.get('window');

class Confirm_ReqPayScreen extends Component {
  async sendInfo() {
    const {reqData} = this.props.route.params;

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
                {this.props.route.params.price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
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
    paddingTop: height * 0.05,
    height: height * 0.5,
  },
  title: {
    paddingTop: height * 0.03,
    paddingLeft: width * 0.02,
    fontSize: 35,
    fontFamily: 'Jua-Regular',
    width: width,
    height: height * 0.08,
  },
  staticTitle: {
    paddingTop: height * 0.03,
    paddingLeft: width * 0.02,
    fontSize: 27,
    fontFamily: 'Jua-Regular',
    width: width,
    borderColor: 'gray',
  },
  confirmBox: {
    backgroundColor: '#81776C',
    width: width,
    alignItems: 'flex-end',
    paddingRight: width * 0.02,
  },
  confirmView: {
    alignItems: 'flex-start',
    width: width,
    height: height * 0.08,
    marginTop: height * 0.025,
    backgroundColor: '#81776C',
  },
  confirmText: {
    marginLeft: width * 0.02,
    marginTop: height * 0.01,
    fontSize: 23,
    color: 'white',
    fontFamily: 'Jua-Regular',
  },
  img: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height * 0.3,
  },
  textline: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#eee',
    fontSize: 17,
  },
  inputText: {
    marginTop: height * 0.01,
    marginLeft: width * 0.02,
    marginBottom: height * 0.005,
    fontFamily: 'Jua-Regular',
    fontSize: 25,
  },
  staticText: {
    marginTop: height * 0.015,
    marginLeft: width * 0.02,
    marginBottom: height * 0.005,
    fontFamily: 'Jua-Regular',
    justifyContent: 'flex-end',
    fontSize: 25,
  },
  checkText: {
    marginTop: height * 0.04,
    marginLeft: width * 0.02,
    fontFamily: 'Jua-Regular',
    fontSize: 25,
  },
  button: {
    marginLeft: width * 0.02,
    marginTop: height * 0.04,
    marginRight: width * 0.02,
    justifyContent: 'center',
    elevation: 10,
    borderRadius: 10,
    backgroundColor: '#ECB03E',
    width: width * 0.3,
    height: height * 0.07,
  },
  buttonText: {
    fontFamily: 'Jua-Regular',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 17,
  },
});

export default Confirm_ReqPayScreen;
