import React, {Component, useState} from 'react';
import {
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Image,
  ImageBackground,
} from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import routes from '../../../routes';
import {
  Card,
  Button,
  Dialog,
  Portal,
  Paragraph,
  Provider,
} from 'react-native-paper';
const {height, width} = Dimensions.get('window');
const Dialog_Confirm = ({changeVisible, navigation}) => {
  const [visible, setVisible] = useState(true);

  const hideDialog = (change) => {
    setVisible(false);
    changeVisible(navigation, change);
  };

  return (
    <Provider style={{width: '100%', height: '100%'}}>
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

class Req_PayScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.route.params.name,
      image: this.props.route.params.image,
      people: 1,
      price: 0,
      visible: false,
      index: 0,
      pos: this.props.route.params.pos,
      info: this.props.route.params.info,
    };
  }

  static defaultProps = {
    draggableRange: {top: height * 0.7, bottom: 100},
  };

  _draggedValue = new Animated.Value(height * 0.4);

  // 확인 버튼 클릭 시 -> 다이얼로그가 보이도록
  handleConfirmBtn = () => {
    this.setState({
      ...this.state,
      visible: true,
    });
  };

  // 다이얼로그 컴포넌트에서 최종 확인을 누르면
  changeVisible = (navigation, change) => {
    this.setState({
      ...this.state,
      visible: false,
    });

    // navigate
    if (change == true) {
      // data 전달할 때, 각각 전달하기 보단 obj 형태로
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

    const {top, bottom} = this.props.draggableRange;
    const textTranslateY = this._draggedValue.interpolate({
      inputRange: [bottom, top * 0.7],
      outputRange: [0, 3],
      extrapolate: 'clamp',
    });

    const textTranslateX = this._draggedValue.interpolate({
      inputRange: [bottom, top * 0.7],
      outputRange: [0, -50],
      extrapolate: 'clamp',
    });

    const textScale = this._draggedValue.interpolate({
      inputRange: [bottom, top * 0.7],
      outputRange: [1, 0.7],
      extrapolate: 'clamp',
    });

    console.log('입력: ', this.state.people);
    return (
      <View style={styles.container}>
        <View
          style={{
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <ImageBackground
            style={{justifyContent: 'center', height: 400, width: width}}
            source={{uri: this.state.image}}></ImageBackground>
        </View>

        <SlidingUpPanel
          //ref={(c) => (this._panel = c)}
          draggableRange={this.props.draggableRange}
          animatedValue={this._draggedValue}
          height={height * 0.7}
          friction={0.7}
          backdropOpacity={0}>
          <View style={styles.panel}>
            <View style={styles.panelHeader}>
              <Animated.View
                style={{
                  transform: [
                    {translateY: textTranslateY},
                    {translateX: textTranslateX},
                    {scale: textScale},
                  ],
                }}>
                <Text style={styles.textHeader}>결제하기</Text>
              </Animated.View>
            </View>
            <View style={styles.container}>
              <Text style={styles.name}>{this.state.name}</Text>
              <View style={styles.infobox}>
                <Text style={styles.text}>소개 - </Text>
                <Text style={styles.info}>{this.state.info}</Text>
              </View>
              <View style={styles.infobox}>
                <Text style={styles.text}>위치 - </Text>
                <Text style={styles.info}>{this.state.pos}</Text>
              </View>

              <View style={styles.input}>
                <TextInput
                  style={styles.inputline}
                  placeholder="인원을 입력하세요"
                  onChangeText={(people) => this.setState({people})}
                  value={this.state.people}
                />
                <Text style={styles.staticText}>명</Text>
              </View>
              <View style={styles.input}>
                <TextInput
                  style={styles.inputline}
                  placeholder="금액을 입력하세요"
                  onChangeText={(price) => this.setState({price})}
                  value={this.state.price}
                />
                <Text style={styles.staticText}>원</Text>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.handleConfirmBtn()}>
                <Text style={styles.buttonText}>확인</Text>
              </TouchableOpacity>
            </View>
            {visible && (
              <Dialog_Confirm
                changeVisible={this.changeVisible}
                navigation={navigation}
              />
            )}
          </View>
        </SlidingUpPanel>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  panel: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'relative',
  },
  panelHeader: {
    height: 80,
    backgroundColor: '#ECB03E',
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  textHeader: {
    fontSize: 28,
    color: '#FFF',
  },
  name: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    fontSize: 28,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: '#7D756B',
  },
  text: {
    paddingTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
  info: {
    paddingTop: 34,
    fontSize: 16,
  },
  infobox: {
    width: width * 0.85,
    paddingLeft: 10,
    flexDirection: 'row',
    paddingLeft: 10,
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 40,
  },
  inputline: {
    fontSize: 24,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  staticText: {
    fontSize: 33,
    paddingTop: 7,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  button: {
    padding: 5,
    marginTop: 30,
    height: 40,
    width: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: 10,
    borderRadius: 10,
    borderColor: 'gray',
    backgroundColor: '#ECB03E',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
export default Req_PayScreen;
