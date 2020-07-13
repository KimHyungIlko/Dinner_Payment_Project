import React, {Component, useState} from 'react';
import {
  TextInput,
  ScrollView,
  View,
  Image,
  StyleSheet,
  Text,
} from 'react-native';
import {
  Card,
  Button,
  Dialog,
  Portal,
  Paragraph,
  Provider,
} from 'react-native-paper';
import routes from '../../../routes';

const Dialog_Confirm = ({changeVisible, navigation}) => {
  const [visible, setVisible] = useState(true);
  const hideDialog = (change) => {
    setVisible(false);
    changeVisible(navigation,change);
  };

  return (
    <Provider style={{width: '100%'}}>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          {/* <Dialog.Title>Alert</Dialog.Title> */}
          <Dialog.Content>
            <Paragraph>결제 요청을 하시겠습니까?</Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => hideDialog(true)}>확인</Button>
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
      people: 1,
      price: 0,
      visible: false,
      index:0,
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
  changeVisible = (navigation,change) => {
    this.setState({
      ...this.state,
      visible: false,
    });

    // navigate
    if(change==true){// data 전달할 때, 각각 전달하기 보단 obj 형태로
    navigation.navigate(routes.Confirm_ReqPay, {
      image: this.state.image,
      name: this.state.name,
      price: this.state.price,
      people: this.state.people,
    });
  }
  };

  render() {
    const {navigation} = this.props;
    const {visible} = this.state;

    console.log('req_pay');
    console.log('visible: ', visible);

    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={styles.container}>
          <Image style={styles.food} source={{uri: this.state.image}} />

          <View style={styles.textline}>
            <TextInput
              style={styles.textline}
              placeholder="인원을 입력하세요"
              onChangeText={(people) => this.setState({people})}
            />
            <Text style={styles.staticText}>명</Text>
          </View>
          <View style={styles.textline}>
            <TextInput
              style={styles.textline}
              placeholder="금액을 입력하세요"
              onChangeText={(price) => this.setState({price})}
            />
            <Text style={styles.staticText}>원</Text>
          </View>
          <Card style={styles.cardSpot}>
            <Card.Actions>
              <Button
                onPress={
                  () => this.handleConfirmBtn()
                  // navigation.navigate(routes.Confirm_ReqPay, {
                  //   image: this.state.image,
                  //   name: this.state.name,
                  //   price: this.state.price,
                  //   people: this.state.people,
                  // })
                }>
                확인
              </Button>
            </Card.Actions>
          </Card>
        </View>

        {visible && (
          <Dialog_Confirm
            changeVisible={this.changeVisible}
            navigation={navigation}
          />
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
  food: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9AA9FF',
    width: 230,
    height: 230,
    marginTop: 40,
    borderRadius: 90,
    borderWidth: 10,
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
  staticText: {
    flexDirection: 'row',
    marginTop: 45,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 25,
  },
  cardSpot: {
    marginTop: 50,
  },
});

export default Req_PayScreen;