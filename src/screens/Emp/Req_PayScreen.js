import React, {Component, useState} from 'react';
import {
  TextInput,
  ScrollView,
  View,
  Image,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Text,
  Dimensions,
} from 'react-native';
import {Button, Dialog, Portal, Paragraph, Provider} from 'react-native-paper';
import routes from '../../../routes';

const {height, width} = Dimensions.get('window');
const Dialog_Confirm = ({
  changeVisible,
  navigation,
  name,
  image,
  price,
  people,
  id,
}) => {
  const [visible, setVisible] = useState(true);
  const hideDialog = (change) => {
    setVisible(false);
    changeVisible(navigation, change, id, name, image, price, people);
  };
  return (
    <Provider style={{width: '100%', height: '100%'}}>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Content>
            <Paragraph>결제 요청을 하시겠습니까?</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={() => {
                hideDialog(true);
              }}>
              확인
            </Button>
            <Button onPress={() => hideDialog(false)}>취소</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Provider>
  );
};
class Req_PayScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.route.params.name,
      image: this.props.route.params.image,
      id: this.props.route.params.id,
      people: 1,
      price: 0,
      visible: false,
      index: 0,
      pos: this.props.route.params.pos,
      info: this.props.route.params.info,
    };
  }
  // 확인 버튼 클릭 시 -> 다이얼로그가 보이도록
  handleConfirmBtn = () => {
    this.setState({
      ...this.state,
      visible: true,
    });
  };
  // 다이얼로그 컴포넌트에서 최종 확인을 누르면
  changeVisible = (navigation, change, id, name, image, people, price) => {
    this.setState({
      ...this.state,
      visible: false,
    });
    // navigate
    if (change == true) {
      const reqData = {
        emp_id: 2017,
        emp_name: '길혜영',
        dept_id: 4,
        dept_name: '디지털사업본부',
        ret_id: Number(this.props.route.params.id),
        ret_name: name,
        ret_img: image,
        req_cost: Number(price),
        emp_num: Number(people),
      };
      console.log('next page id : ' + this.props.route.params.id);
      // data 전달할 때, 각각 전달하기 보단 obj 형태로
      navigation.navigate(routes.Confirm_ReqPay, {
        image: this.state.image,
        name: this.state.name,
        price: this.state.price,
        people: this.state.people,
        reqData: reqData,
      });
    }
  };
  render() {
    const {navigation} = this.props;
    const {visible} = this.state;
    console.log('req_pay');
    console.log('visible: ', visible);
    return (
      <ScrollView>
        <View style={{flex: 1}}>
          <Image style={styles.img} source={{uri: this.state.image}} />
          <Text style={styles.title}>
            {this.state.name} {'\n'}
          </Text>
          <View style={styles.infobox}>
            <Text style={styles.text}>소개 : </Text>
            <Text style={styles.info}>{this.state.info}</Text>
          </View>
          <View style={styles.infobox}>
            <Text style={styles.text}>위치 : </Text>
            <Text style={styles.info}>{this.state.pos}</Text>
          </View>
          <View style={styles.inputbox}>
            <TextInput
              style={styles.input}
              placeholder="인원을 입력하세요"
              onChangeText={(people) => this.setState({people})}
            />
            <Text style={styles.staticText}>명</Text>
          </View>
          <View style={styles.inputbox}>
            <TextInput
              style={styles.input}
              placeholder="금액을 입력하세요"
              onChangeText={(price) => this.setState({price})}
            />
            <Text style={styles.staticText}>원</Text>
          </View>
          <Button style={styles.button} onPress={() => this.handleConfirmBtn()}>
            <Text style={styles.confirm}>확인</Text>
          </Button>
          {visible && (
            <Dialog_Confirm
              changeVisible={this.changeVisible}
              navigation={navigation}
              name={this.state.name}
              image={this.state.image}
              price={this.state.price}
              people={this.state.people}
            />
          )}
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  img: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height * 0.3,
  },
  title: {
    paddingTop: height * 0.015,
    paddingLeft: width * 0.02,
    fontSize: 35,
    fontFamily: 'Jua-Regular',
    width: width,
    height: height * 0.08,
  },
  infobox: {
    paddingTop: height * 0.02,
    paddingLeft: width * 0.02,
    backgroundColor: '#81776C',
    height: height * 0.1,
  },
  text: {
    fontFamily: 'Jua-Regular',
    fontSize: 20,
    color: 'white',
  },
  info: {
    fontSize: 16,
    color: 'white',
  },
  inputbox: {
    paddingTop: height * 0.04,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    fontSize: 18,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  staticText: {
    fontSize: 33,
    paddingTop: height * 0.01,
    fontFamily: 'Jua-Regular',
    paddingLeft: 5,
  },
  button: {
    marginTop: 30,
    height: height * 0.05,
    width: width * 0.2,
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: 10,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 0.5,
    backgroundColor: '#ECB03E',
  },
  confirm: {
    color: 'white',
    fontFamily: 'Jua-Regular',
    fontSize: 20,
  },
});
export default Req_PayScreen;
