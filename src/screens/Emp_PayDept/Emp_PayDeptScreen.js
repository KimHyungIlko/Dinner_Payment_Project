import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import axios from 'react-native-axios';
import {Button, Dialog, Paragraph, Portal, Provider} from 'react-native-paper';
import routes from '../../../routes';
class Emp_PayDeptScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      problems: {
        emp: [],
        dept: [],
      },
      openAlert: false,
    };
  }
  getProblemData_Dept_Emp = async () => {
    let obj = {
      emp: [],
      dept: [],
    };
    try {
      let response_dept = await axios.get(
        'http://54.180.86.174/problems/departments/costs',
      );
      obj.dept = response_dept.data;
    } catch (error) {
      console.log(error);
      obj.dept = [];
    }
    try {
      let response_emp = await axios.get(
        'http://54.180.86.174/problems/employees/costs',
      );
      obj.emp = response_emp.data;
    } catch (error) {
      console.log(error);
      obj.emp = [];
    }
    this.setState({
      ...this.state,
      problems: obj,
      openAlert: true,
    });
  };
  componentDidMount() {
    setInterval(() => {
      // console.log('호출!');
      this.getProblemData_Dept_Emp();
    }, 5000);
  }
  shouldComponentUpdate(nextProps, nextState) {
    // console.log('shouldComponentUpdate');
    // 이전 state와 값이 같으면 render 방지 (return값이 false이면 render x)
    // 이상 현상을 보인 데이터가 이전 state와 같고 && alert push를 이미 확인한 경우
    // => openAlert의 state값을 false로 만들어 alert가 중복해서 뜨지 않도록
    if (
      JSON.stringify(nextState.problems) ==
        JSON.stringify(this.state.problems) &&
      nextState.openAlert &&
      !this.state.openAlert
    ) {
      nextState.openAlert = false;
      return false;
    }
    return true;
  }
  handleCloseOpenAlert = () => {
    this.setState({openAlert: false});
  };
  render() {
    const {navigation} = this.props;
    return (
      <Provider>
        <Portal>
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
                onPress={() =>
                  navigation.navigate(routes.Fds, {
                    problemDatas: this.state.problems,
                  })
                }>
                <Text style={styles.buttonText}>야식대 FDS</Text>
              </TouchableOpacity>
              <Image
                style={styles.logo}
                source={require('../../../image/KB_logo.png')}
              />
            </View>
          </View>
          <Dialog
            visible={this.state.openAlert}
            onDismiss={this.handleCloseOpenAlert}>
            <Dialog.Title>FDS</Dialog.Title>
            <Dialog.Content>
              <Paragraph>부서/직원의 이상현상이 발견되었습니다</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button
                onPress={() => {
                  this.handleCloseOpenAlert();
                  navigation.navigate(routes.Fds, {
                    problemDatas: this.state.problems,
                  });
                }}>
                확인
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'column',
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
    fontSize: 25,
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
