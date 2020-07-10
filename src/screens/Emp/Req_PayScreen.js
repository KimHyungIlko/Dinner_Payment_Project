import React, {Component} from 'react';
import {TextInput, ScrollView, View, Image, StyleSheet, Text,} from 'react-native';
import {Card, Button, Dialog, Portal} from 'react-native-paper';
import routes from '../../../routes';

/* const Req_PayScreen = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>This is the 결제 요청 screen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Go to 업주 확인 명세서 Screen"
        onPress={() => navigation.navigate(routes.Confirm_Req)}
      />
    </View>
  );
}; */


class Req_PayScreen extends Component {
  constructor(props){
    super(props);
    this.state={
        name: this.props.route.params.name,
        image: this.props.route.params.image,
        people: 1,
        price: 0,
    }
}

  render() {
    console.log('props: ', );
    const {navigation} = this.props;
    
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Image style={styles.food} source={{uri: this.state.image}} />

        <View style={styles.textline}>
          <TextInput
            style={styles.textline}
            placeholder="인원을 입력하세요"
            onChangeText={people => this.setState({people})}
          />
          <Text style={styles.staticText}>명</Text>
        </View>
        <View style={styles.textline}>
          <TextInput
            style={styles.textline}
            placeholder="금액을 입력하세요"
            onChangeText={price => this.setState({price})}
          />
          <Text style={styles.staticText}>원</Text>
        </View>
        <Card style={styles.cardSpot}>
          <Card.Actions>
          <Button onPress={() => navigation.navigate(routes.Confirm_ReqPay,
            {image:this.state.image,
              name:this.state.name,
              price:this.state.price,
              people:this.state.people})}>확인</Button>
            <Button>취소</Button>
          </Card.Actions>
        </Card>
      </View>
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
